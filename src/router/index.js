/**
 * router/index.js - Vue Router Configuration
 *
 * This file configures the application routing using Vue Router 5.
 * It defines all routes and navigation structure for the SPA.
 *
 * Routing Features:
 * - Hash-based routing (createWebHashHistory) for static hosting compatibility
 * - Lazy loading for all route components (code splitting)
 * - Nested routes for layout-based navigation
 * - Automatic scroll to top on navigation
 *
 * Route Structure:
 * - Protected routes: Wrapped in DefaultLayout with sidebar and header
 * - Public routes: Login, Register, 404, 500 pages without layout
 *
 * Adding New Routes:
 * 1. Import component (use dynamic import for code splitting)
 * 2. Add route object to appropriate section
 * 3. Update _nav.js for sidebar navigation (if needed)
 *
 * @see https://router.vuejs.org/
 */

import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

/**
 * Application routes configuration
 * @type {Array<Object>}
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '@/views/dashboard/Dashboard.vue'
          ),
      },
      {
        path: '/components',
        name: 'Components',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/components/accordion',
        children: [
          {
            path: '/components/accordion',
            name: 'Accordion',
            component: () => import('@/views/components/Accordion.vue'),
          },
          {
            path: '/components/alerts',
            name: 'Alerts',
            component: () => import('@/views/components/Alerts.vue'),
          },
          {
            path: '/components/badge',
            name: 'Badge',
            component: () => import('@/views/components/Badge.vue'),
          },
          {
            path: '/components/breadcrumb',
            name: 'Breadcrumb',
            component: () => import('@/views/components/Breadcrumb.vue'),
          },
          {
            path: '/components/buttons',
            name: 'Buttons',
            component: () => import('@/views/components/Buttons.vue'),
          },
          {
            path: '/components/button-group',
            name: 'Button Group',
            component: () => import('@/views/components/ButtonGroup.vue'),
          },
          {
            path: '/components/cards',
            name: 'Cards',
            component: () => import('@/views/components/Cards.vue'),
          },
          {
            path: '/components/carousel',
            name: 'Carousel',
            component: () => import('@/views/components/Carousel.vue'),
          },
          {
            path: '/components/chip',
            name: 'Chip',
            component: () => import('@/views/components/Chip.vue'),
          },
          {
            path: '/components/collapse',
            name: 'Collapse',
            component: () => import('@/views/components/Collapse.vue'),
          },
          {
            path: '/components/dropdowns',
            name: 'Dropdowns',
            component: () => import('@/views/components/Dropdowns.vue'),
          },
          {
            path: '/components/list-group',
            name: 'List group',
            component: () => import('@/views/components/ListGroup.vue'),
          },
          {
            path: '/components/modals',
            name: 'Modals',
            component: () => import('@/views/components/Modals.vue'),
          },
          {
            path: '/components/navs-tabs',
            name: 'Navs & Tabs',
            component: () => import('@/views/components/NavsTabs.vue'),
          },
          {
            path: '/components/pagination',
            name: 'Pagination',
            component: () => import('@/views/components/Pagination.vue'),
          },
          {
            path: '/components/placeholders',
            name: 'Placeholders',
            component: () => import('@/views/components/Placeholders.vue'),
          },
          {
            path: '/components/popovers',
            name: 'Popovers',
            component: () => import('@/views/components/Popovers.vue'),
          },
          {
            path: '/components/progress',
            name: 'Progress',
            component: () => import('@/views/components/Progress.vue'),
          },
          {
            path: '/components/spinners',
            name: 'Spinners',
            component: () => import('@/views/components/Spinners.vue'),
          },
          {
            path: '/components/tables',
            name: 'Tables',
            component: () => import('@/views/components/Tables.vue'),
          },
          {
            path: '/components/tabs',
            name: 'Tabs',
            component: () => import('@/views/components/Tabs.vue'),
          },
          {
            path: '/components/toasts',
            name: 'Toasts',
            component: () => import('@/views/components/Toasts.vue'),
          },
          {
            path: '/components/tooltips',
            name: 'Tooltips',
            component: () => import('@/views/components/Tooltips.vue'),
          },
        ],
      },
      {
        path: '/forms',
        name: 'Forms',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/forms/form-control',
        children: [
          {
            path: '/forms/form-control',
            name: 'Form Control',
            component: () => import('@/views/forms/FormControl.vue'),
          },
          {
            path: '/forms/select',
            name: 'Select',
            component: () => import('@/views/forms/Select.vue'),
          },
          {
            path: '/forms/checks-radios',
            name: 'Checks & Radios',
            component: () => import('@/views/forms/ChecksRadios.vue'),
          },
          {
            path: '/forms/chip-input',
            name: 'Chip Input',
            component: () => import('@/views/forms/ChipInput.vue'),
          },
          {
            path: '/forms/range',
            name: 'Range',
            component: () => import('@/views/forms/Range.vue'),
          },
          {
            path: '/forms/input-group',
            name: 'Input Group',
            component: () => import('@/views/forms/InputGroup.vue'),
          },
          {
            path: '/forms/floating-labels',
            name: 'Floating Labels',
            component: () => import('@/views/forms/FloatingLabels.vue'),
          },
          {
            path: '/forms/layout',
            name: 'Layout',
            component: () => import('@/views/forms/Layout.vue'),
          },
          {
            path: '/forms/validation',
            name: 'Validation',
            component: () => import('@/views/forms/Validation.vue'),
          },
        ],
      },
      {
        path: '/charts',
        name: 'Charts',
        component: () => import('@/views/charts/Charts.vue'),
      },
      {
        path: '/icons',
        name: 'Icons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/icons/coreui-icons',
        children: [
          {
            path: '/icons/coreui-icons',
            name: 'CoreUI Icons',
            component: () => import('@/views/icons/CoreUIIcons.vue'),
          },
          {
            path: '/icons/brands',
            name: 'Brands',
            component: () => import('@/views/icons/Brands.vue'),
          },
          {
            path: '/icons/flags',
            name: 'Flags',
            component: () => import('@/views/icons/Flags.vue'),
          },
        ],
      },
      {
        path: '/widgets',
        name: 'Widgets',
        component: () => import('@/views/widgets/Widgets.vue'),
      },
    ],
  },
  {
    path: '/authentication',
    redirect: '/authentication/login',
    name: 'Authentication',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/authentication/Login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/authentication/Register.vue'),
      },
      {
        path: 'check-email',
        name: 'Check Email',
        component: () => import('@/views/authentication/CheckEmail.vue'),
      },
      {
        path: 'reset-password',
        name: 'Reset Password',
        component: () => import('@/views/authentication/ResetPassword.vue'),
      },
      {
        path: 'change-password',
        name: 'Change Password',
        component: () => import('@/views/authentication/ChangePassword.vue'),
      },
      {
        path: 'password-changed',
        name: 'Password Changed',
        component: () => import('@/views/authentication/PasswordChanged.vue'),
      },
    ],
  },
  {
    path: '/error-pages',
    redirect: '/error-pages/404',
    name: 'Error pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/error-pages/Page404.vue'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/error-pages/Page500.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
