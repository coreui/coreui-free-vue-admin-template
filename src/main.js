/**
 * Application Entry Point
 *
 * Initializes the Vue 3 application with all necessary plugins, components,
 * and global providers. Sets up Pinia for state management, Vue Router for
 * navigation, and CoreUI Vue components.
 *
 * Configuration:
 * - Vue 3 with Composition API
 * - Pinia for state management
 * - Vue Router for client-side routing
 * - CoreUI Vue component library
 * - Global icon system with CoreUI Icons
 * - Documentation helper components
 *
 * @module main
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsComponents from '@/components/DocsComponents'
import DocsExample from '@/components/DocsExample'
import DocsIcons from '@/components/DocsIcons'

/**
 * Create and configure the Vue application instance
 */
const app = createApp(App)

/**
 * Register Pinia for state management
 * Provides reactive stores throughout the application
 */
app.use(createPinia())

/**
 * Register Vue Router for client-side navigation
 * Enables hash-based routing with lazy-loaded components
 */
app.use(router)

/**
 * Register CoreUI Vue component library
 * Provides Bootstrap 5-based UI components
 */
app.use(CoreuiVue)

/**
 * Provide CoreUI icon set globally
 * Makes icons available via inject() in all components
 */
app.provide('icons', icons)

/**
 * Register global components
 * These components are available in all templates without importing
 */
app.component('CIcon', CIcon)
app.component('DocsComponents', DocsComponents)
app.component('DocsExample', DocsExample)
app.component('DocsIcons', DocsIcons)

/**
 * Mount the application to the DOM
 * Connects Vue app to the #app element in index.html
 */
app.mount('#app')
