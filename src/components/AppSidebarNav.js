import { defineComponent, h, onMounted, ref, resolveComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { CBadge, CSidebarNav, CNavItem, CNavGroup, CNavTitle } from '@coreui/vue'
import nav from '@/_nav.js'

import simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'

import { getCurrentUser } from 'aws-amplify/auth';

const normalizePath = (path) =>
  decodeURI(path)
    .replace(/#.*$/, '')
    .replace(/(index)?\.(html)$/, '')

const isActiveLink = (route, link) => {
  if (link === undefined) {
    return false
  }

  if (route.hash === link) {
    return true
  }

  const currentPath = normalizePath(route.path)
  const targetPath = normalizePath(link)

  return currentPath === targetPath
}

const isActiveItem = (route, item) => {
  if (isActiveLink(route, item.to)) {
    return true
  }

  if (item.items) {
    return item.items.some((child) => isActiveItem(route, child))
  }

  return false
}

const AppSidebarNav = defineComponent({
  name: 'AppSidebarNav',
  components: {
    CNavItem,
    CNavGroup,
    CNavTitle,
  },
  setup() {
    const route = useRoute();
    const firstRender = ref(true);
    const currentUser = ref(null);

    onMounted(async () => {
      firstRender.value = false;
      try {
        const { username } = await getCurrentUser();
        currentUser.value = username;
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    });

    const renderItem = (item) => {
      if (!item.can_access || item.can_access.includes(currentUser.value)) {
        if (item.items) {
          return h(
            CNavGroup,
            {
              as: 'div',
              compact: true,
              ...(firstRender.value && {
                visible: item.items.some((child) => isActiveItem(route, child)),
              }),
            },
            {
              togglerContent: () => [
                h(resolveComponent('CIcon'), {
                  customClassName: 'nav-icon',
                  name: item.icon,
                }),
                item.name,
              ],
              default: () => item.items.map((child) => renderItem(child)),
            }
          );
        }

        return item.to
          ? h(
              RouterLink,
              {
                to: item.to,
                custom: true,
              },
              {
                default: (props) =>
                  h(
                    resolveComponent(item.component),
                    {
                      active: props.isActive,
                      as: 'div',
                      href: props.href,
                      onClick: () => props.navigate(),
                    },
                    {
                      default: () => [
                        item.icon
                          ? h(resolveComponent('CIcon'), {
                              customClassName: 'nav-icon',
                              name: item.icon,
                            })
                          : h('span', { class: 'nav-icon' }, h('span', { class: 'nav-icon-bullet' })),
                        item.name,
                        item.badge &&
                          h(
                            CBadge,
                            {
                              class: 'ms-auto',
                              color: item.badge.color,
                            },
                            {
                              default: () => item.badge.text,
                            }
                          ),
                      ],
                    }
                  ),
              }
            )
          : h(
              resolveComponent(item.component),
              {
                as: 'div',
              },
              {
                default: () => item.name,
              }
            );
      }
      // If the current user is not 'khairikz' and the item is not accessible, return null to hide the item
      return null;
    };

    return () =>
      h(
        CSidebarNav,
        {
          as: simplebar,
        },
        {
          default: () => nav.map((item) => renderItem(item)),
        }
      );
  },
});

export { AppSidebarNav }