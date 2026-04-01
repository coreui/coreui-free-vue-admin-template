/**
 * main.js - Application Entry Point
 *
 * This file initializes the Vue 3 application and configures:
 * - Pinia for state management
 * - Vue Router for client-side routing
 * - CoreUI Vue component library
 * - Global icon system
 * - Documentation helper components
 *
 * The application uses:
 * - Vue 3 Composition API
 * - Vite for building and development
 * - CoreUI Vue components
 * - Hash-based routing for static hosting compatibility
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// CoreUI Vue components and icons
import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'

// Documentation components (remove in production if not needed)
import DocsComponents from '@/components/DocsComponents'
import DocsExample from '@/components/DocsExample'
import DocsIcons from '@/components/DocsIcons'

// Create Vue application instance
const app = createApp(App)

// Install plugins
app.use(createPinia()) // State management
app.use(router) // Router for SPA navigation
app.use(CoreuiVue) // CoreUI component library

// Provide icons globally
app.provide('icons', icons)

// Register global components
app.component('CIcon', CIcon)
app.component('DocsComponents', DocsComponents)
app.component('DocsExample', DocsExample)
app.component('DocsIcons', DocsIcons)

// Mount application to DOM
app.mount('#app')
