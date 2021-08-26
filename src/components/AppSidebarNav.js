import { defineComponent, h, resolveComponent } from 'vue'
import { RouterLink } from 'vue-router'

import { CSidebarNav, CNavItem, CNavGroup, CNavTitle } from '@coreui/vue'
import nav from '@/_nav.js'

const AppSidebarNav = defineComponent({
  name: 'AppSidebarNav',
  components: {
    CNavItem,
    CNavGroup,
    CNavTitle,
  },
  setup() {
    const renderItem = (item) => {
      if (item.children) {
        return h(
          RouterLink,
          {
            to: item.route,
            custom: true,
          },
          {
            default: (props) =>
              h(
                resolveComponent('CNavGroup'),
                {
                  visible: props.isActive,
                },
                {
                  togglerContent: () => [
                    h(resolveComponent('CIcon'), {
                      customClassName: 'nav-icon',
                      name: item.icon,
                    }),
                    item.name,
                  ],
                  default: () =>
                    item.children.map((child) => renderItem(child)),
                },
              ),
          },
        )
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
                  resolveComponent(item._name),
                  {
                    active: props.isActive,
                    href: props.href,
                    onClick: () => props.navigate(),
                  },
                  {
                    default: () => [
                      item.icon &&
                        h(resolveComponent('CIcon'), {
                          customClassName: 'nav-icon',
                          name: item.icon,
                        }),
                      item.name,
                      item.badge &&
                        h(
                          resolveComponent('CBadge'),
                          {
                            class: 'ms-auto',
                            color: item.badge.color,
                          },
                          {
                            default: () => item.badge.text,
                          }
                        ),
                    ],
                  },
                ),
            },
          )
        : h(
            resolveComponent(item._name),
            {},
            {
              default: () => item.name,
            },
          )
    }

    return () =>
      h(
        CSidebarNav,
        {},
        {
          default: () => nav.map((item) => renderItem(item)),
        },
      )
  },
})
export { AppSidebarNav }
