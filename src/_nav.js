/**
 * _nav.js - Sidebar Navigation Configuration
 *
 * This file defines the structure and content of the sidebar navigation menu.
 * The navigation is rendered by AppSidebar component using CoreUI nav components.
 *
 * Navigation item types:
 * - CNavItem: Single navigation link
 * - CNavGroup: Expandable group of navigation items
 * - CNavTitle: Section title/divider
 *
 * Each item can have:
 * - component: CoreUI component type ('CNavItem', 'CNavGroup', 'CNavTitle')
 * - name: Display text
 * - to: Vue Router path (for CNavItem)
 * - icon: CoreUI icon name (from @coreui/icons)
 * - badge: Optional badge with color and text
 * - items: Array of child items (for CNavGroup)
 * - href: External link URL
 * - external: Boolean for external links
 *
 * @type {Array<Object>}
 */
export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'UI Elements',
  },
  {
    component: 'CNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie',
  },
  {
    component: 'CNavGroup',
    name: 'Components',
    to: '/components',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'Accordion',
        to: '/components/accordion',
      },
      {
        component: 'CNavItem',
        name: 'Alerts',
        to: '/components/alerts',
      },
      {
        component: 'CNavItem',
        name: 'Badge',
        to: '/components/badge',
      },
      {
        component: 'CNavItem',
        name: 'Breadcrumb',
        to: '/components/breadcrumb',
      },
      {
        component: 'CNavItem',
        name: 'Buttons',
        to: '/components/buttons',
      },
      {
        component: 'CNavItem',
        name: 'Buttons Group',
        to: '/components/button-group',
      },
      {
        component: 'CNavItem',
        name: 'Calendar',
        href: 'https://coreui.io/vue/docs/components/calendar.html',
        external: true,
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: 'CNavItem',
        name: 'Cards',
        to: '/components/cards',
      },
      {
        component: 'CNavItem',
        name: 'Carousel',
        to: '/components/carousel',
      },
      {
        component: 'CNavItem',
        name: 'Chip',
        to: '/components/chip',
      },
      {
        component: 'CNavItem',
        name: 'Chip Set',
        to: '/components/chip-set',
      },
      {
        component: 'CNavItem',
        name: 'Collapse',
        to: '/components/collapse',
      },
      {
        component: 'CNavItem',
        name: 'Dropdowns',
        to: '/components/dropdowns',
      },
      {
        component: 'CNavItem',
        name: 'List group',
        to: '/components/list-group',
      },
      {
        component: 'CNavItem',
        name: 'Loading Buttons',
        href: 'https://coreui.io/vue/docs/components/loading-button.html',
        external: true,
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: 'CNavItem',
        name: 'Modals',
        to: '/components/modals',
      },
      {
        component: 'CNavItem',
        name: 'Navs & Tabs',
        to: '/components/navs-tabs',
      },
      {
        component: 'CNavItem',
        name: 'Pagination',
        to: '/components/pagination',
      },
      {
        component: 'CNavItem',
        name: 'Placeholders',
        to: '/components/placeholders',
      },
      {
        component: 'CNavItem',
        name: 'Popovers',
        to: '/components/popovers',
      },
      {
        component: 'CNavItem',
        name: 'Progress',
        to: '/components/progress',
      },
      {
        component: 'CNavItem',
        name: 'Search Button',
        to: '/components/search-button',
      },
      {
        component: 'CNavItem',
        name: 'Smart Pagination',
        href: 'https://coreui.io/vue/docs/components/smart-pagination.html',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: 'CNavItem',
        name: 'Smart Table',
        external: true,
        href: 'https://coreui.io/vue/docs/components/smart-table.html',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: 'CNavItem',
        name: 'Spinners',
        to: '/components/spinners',
      },
      {
        component: 'CNavItem',
        name: 'Tables',
        to: '/components/tables',
      },
      {
        component: 'CNavItem',
        name: 'Tabs',
        to: '/components/tabs',
      },
      {
        component: 'CNavItem',
        name: 'Toasts',
        to: '/components/toasts',
      },
      {
        component: 'CNavItem',
        name: 'Tooltips',
        to: '/components/tooltips',
      },
      {
        component: 'CNavItem',
        name: 'Virtual Scroller',
        href: 'https://coreui.io/vue/docs/components/virtual-scroller.html',
        external: true,
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Forms',
    to: '/forms',
    icon: 'cil-notes',
    items: [
      {
        component: 'CNavItem',
        name: 'Autocomplete',
        href: 'https://coreui.io/vue/docs/forms/autocomplete.html',
        external: true,
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: 'CNavItem',
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: 'CNavItem',
        name: 'Chip Input',
        to: '/forms/chip-input',
      },
      {
        component: 'CNavItem',
        name: 'Date Picker',
        href: 'https://coreui.io/vue/docs/forms/date-picker.html',
        external: true,
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: 'CNavItem',
        name: 'Date Range Picker',
        href: 'https://coreui.io/vue/docs/forms/date-range-picker.html',
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: 'CNavItem',
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: 'CNavItem',
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: 'CNavItem',
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: 'CNavItem',
        name: 'Password Input',
        href: 'https://coreui.io/vue/docs/forms/password-input.html',
        external: true,
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: 'CNavItem',
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: 'CNavItem',
        name: 'Range Slider',
        href: 'https://coreui.io/vue/docs/forms/range-slider.html',
        external: true,
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: 'CNavItem',
        name: 'Rating',
        href: 'https://coreui.io/vue/docs/forms/rating.html',
        external: true,
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: 'CNavItem',
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: 'CNavItem',
        name: 'Stepper',
        href: 'https://coreui.io/vue/docs/forms/stepper.html',
        external: true,
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: 'CNavItem',
        name: 'Time Picker',
        href: 'https://coreui.io/vue/docs/forms/time-picker.html',
        external: true,
        badge: {
          color: 'danger',
          text: 'PRO',
        },
      },
      {
        component: 'CNavItem',
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: 'CNavItem',
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Icons',
    to: '/icons',
    icon: 'cil-star',
    items: [
      {
        component: 'CNavItem',
        name: 'CoreUI Icons',
        to: '/icons/coreui-icons',
        badge: {
          color: 'info',
          text: 'NEW',
        },
      },
      {
        component: 'CNavItem',
        name: 'Brands',
        to: '/icons/brands',
      },
      {
        component: 'CNavItem',
        name: 'Flags',
        to: '/icons/flags',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'primary',
      text: 'NEW',
      shape: 'pill',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Extras',
  },
  {
    component: 'CNavGroup',
    name: 'Authentication',
    icon: 'cil-lock-locked',
    items: [
      {
        component: 'CNavItem',
        name: 'Login',
        to: '/authentication/login',
      },
      {
        component: 'CNavItem',
        name: 'Register',
        to: '/authentication/register',
      },
      {
        component: 'CNavItem',
        name: 'Check Email',
        to: '/authentication/check-email',
      },
      {
        component: 'CNavGroup',
        name: 'Forgot password',
        items: [
          {
            component: 'CNavItem',
            name: 'Reset Password',
            to: '/authentication/reset-password',
          },
          {
            component: 'CNavItem',
            name: 'Change Password',
            to: '/authentication/change-password',
          },
          {
            component: 'CNavItem',
            name: 'Password Changed',
            to: '/authentication/password-changed',
          },
        ],
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Error pages',
    icon: 'cil-bug',
    items: [
      {
        component: 'CNavItem',
        name: 'Error 404',
        to: '/error-pages/404',
      },
      {
        component: 'CNavItem',
        name: 'Error 500',
        to: '/error-pages/500',
      },
    ],
  },
]
