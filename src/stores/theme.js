/**
 * Theme Store
 *
 * Pinia store managing application theme preferences.
 * Handles theme mode switching between light, dark, and auto modes.
 *
 * @module stores/theme
 */

import { ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * Theme state management store
 *
 * Manages the current theme mode for the application.
 * Works in conjunction with CoreUI's useColorModes composable.
 *
 * @function useThemeStore
 * @returns {Object} Store instance with state and actions
 * @property {import('vue').Ref<string>} theme - Current theme mode
 * @property {Function} toggleTheme - Set theme mode
 *
 * @example
 * // In a Vue component
 * import { useThemeStore } from '@/stores/theme'
 *
 * const themeStore = useThemeStore()
 * console.log(themeStore.theme) // 'light'
 *
 * @example
 * // Change theme
 * themeStore.toggleTheme('dark')
 * themeStore.toggleTheme('light')
 * themeStore.toggleTheme('auto')
 */
export const useThemeStore = defineStore('theme', () => {
  /**
   * Current theme mode
   * @type {import('vue').Ref<string>}
   * @default 'light'
   *
   * Possible values:
   * - 'light': Light theme
   * - 'dark': Dark theme
   * - 'auto': System preference
   */
  const theme = ref('light')

  /**
   * Sets the theme mode
   *
   * @param {string} _theme - Theme mode to set ('light', 'dark', or 'auto')
   * @returns {void}
   *
   * @example
   * toggleTheme('dark')
   * toggleTheme('light')
   * toggleTheme('auto')
   */
  const toggleTheme = (_theme) => {
    theme.value = _theme
  }

  return { theme, toggleTheme }
})
