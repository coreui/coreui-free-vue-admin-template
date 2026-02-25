/**
 * AppSidebarNav Component
 *
 * Functional component that renders the sidebar navigation menu
 * from the _nav.js configuration. Supports nested navigation groups,
 * external links, badges, and active state tracking.
 *
 * Features:
 * - Recursive rendering of nested nav items
 * - Active state detection based on current route
 * - Support for internal and external links
 * - Icon and badge rendering
 * - Custom scrollbar with simplebar
 * - Auto-expand groups containing active items
 *
 * @module components/AppSidebarNav
 */

import { defineComponent, h, onMounted, ref, resolveComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { cilExternalLink } from '@coreui/icons'
import { CBadge, CSidebarNav, CNavItem, CNavGroup, CNavTitle } from '@coreui/vue'
import nav from '@/_nav.js'

import simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'

/**
 * Normalizes URL path by removing hash and file extensions
 *
 * @param {string} path - URL path to normalize
 * @returns {string} Normalized path
 *
 * @example
 * normalizePath('/dashboard#section') // '/dashboard'
 * normalizePath('/index.html') // '/'
 */
const normalizePath = (path) =>
  decodeURI(path)
    .replace(/#.*$/, '')
    .replace(/(index)?\.(html)$/, '')

/**
 * Checks if a link matches the current route
 *
 * @param {import('vue-router').RouteLocationNormalizedLoaded} route - Current route object
 * @param {string} link - Link path to compare
 * @returns {boolean} True if link is active
 */
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

/**
 * Recursively checks if a nav item or its children are active
 *
 * Used to auto-expand nav groups containing the active page.
 *
 * @param {import('vue-router').RouteLocationNormalizedLoaded} route - Current route object
 * @param {Object} item - Navigation item from _nav.js
 * @returns {boolean} True if item or any child is active
 */
const isActiveItem = (route, item) => {
  if (isActiveLink(route, item.to)) {
    return true
  }

  if (item.items) {
    return item.items.some((child) => isActiveItem(route, child))
  }

  return false
}

/**
 * Sidebar navigation component
 *
 * Renders navigation menu from _nav.js configuration with support for:
 * - Nested navigation groups (CNavGroup)
 * - Single navigation items (CNavItem)
 * - Section titles (CNavTitle)
 * - Internal routing and external links
 * - Icons and badges
 * - Active state tracking
 * - Auto-expand for active items on first render
 *
 * @component
 * @returns {import('vue').VNode} Rendered sidebar navigation
 *
 * @example
 * // In AppSidebar.vue
 * <AppSidebarNav />
 */
const AppSidebarNav = defineComponent({
  name: 'AppSidebarNav',
  components: {
    CNavItem,
    CNavGroup,
    CNavTitle,
  },
  setup() {
    const route = useRoute()
    const firstRender = ref(true)

    onMounted(() => {
      firstRender.value = false
    })

    /**
     * Recursively renders a navigation item and its children
     *
     * Handles three types of navigation items:
     * 1. Groups (CNavGroup) - Collapsible items with children
     * 2. External links - Links to external URLs
     * 3. Internal links - Vue Router links
     *
     * @param {Object} item - Navigation item configuration
     * @returns {import('vue').VNode} Rendered navigation item
     */
    const renderItem = (item) => {
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
          },
        )
      }

      if (item.href) {
        return h(
          resolveComponent(item.component),
          {
            href: item.href,
            target: '_blank',
            rel: 'noopener noreferrer',
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
              item.external && h(resolveComponent('CIcon'), {
                class: 'ms-2',
                name: 'cil-external-link',
                size: 'sm'
              }),
              item.badge &&
                h(
                  CBadge,
                  {
                    class: 'ms-auto',
                    color: item.badge.color,
                    size: 'sm',
                  },
                  {
                    default: () => item.badge.text,
                  },
                ),
            ],
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
                            size: 'sm',
                          },
                          {
                            default: () => item.badge.text,
                          },
                        ),
                    ],
                  },
                ),
            },
          )
        : h(
            resolveComponent(item.component),
            {
              as: 'div',
            },
            {
              default: () => item.name,
            },
          )
    }

    return () =>
      h(
        CSidebarNav,
        {
          as: simplebar,
        },
        {
          default: () => nav.map((item) => renderItem(item)),
        },
      )
  },
})

export { AppSidebarNav }
