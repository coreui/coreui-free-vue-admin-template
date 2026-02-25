<!--
/**
 * App Component
 *
 * Root application component that sets up theme management and routing.
 * Handles theme initialization from multiple sources with priority order.
 *
 * Features:
 * - Client-side routing with Vue Router
 * - Theme detection from URL parameters and Pinia store
 * - Theme persistence via CoreUI useColorModes
 * - Automatic theme initialization on mount
 *
 * Theme priority:
 * 1. URL parameter (?theme=dark)
 * 2. Previously set theme (localStorage via useColorModes)
 * 3. Pinia stored theme
 *
 * @component
 * @example
 * // Standard usage in main.js
 * import App from './App.vue'
 * createApp(App).mount('#app')
 */
-->
<script setup>
import { onBeforeMount } from 'vue'
import { useColorModes } from '@coreui/vue'

import { useThemeStore } from '@/stores/theme.js'

/**
 * CoreUI color mode management
 * Provides theme persistence and detection
 */
const { isColorModeSet, setColorMode } = useColorModes(
  'coreui-free-vue-admin-template-theme',
)

/**
 * Pinia theme store
 * Stores theme preference in global state
 */
const currentTheme = useThemeStore()

/**
 * Initialize theme before component mounts
 *
 * Priority order:
 * 1. Check URL query parameter (?theme=light|dark|auto)
 * 2. Check if theme already set (localStorage)
 * 3. Fall back to Pinia store theme
 */
onBeforeMount(() => {
  const urlParams = new URLSearchParams(window.location.href.split('?')[1])
  let theme = urlParams.get('theme')

  // Validate theme parameter (alphanumeric only)
  if (theme !== null && theme.match(/^[A-Za-z0-9\s]+/)) {
    theme = theme.match(/^[A-Za-z0-9\s]+/)[0]
  }

  // Priority 1: URL parameter
  if (theme) {
    setColorMode(theme)
    return
  }

  // Priority 2: Previously set theme
  if (isColorModeSet()) {
    return
  }

  // Priority 3: Pinia store theme
  setColorMode(currentTheme.theme)
})
</script>

<template>
  <router-view />
</template>

<style lang="scss">
// Import Main styles for this application
@use 'styles/style';
// We use those styles to show code examples, you should remove them in your application.
@use 'styles/examples';
</style>
