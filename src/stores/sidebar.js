/**
 * Sidebar Store
 *
 * Pinia store managing sidebar visibility and unfoldable state.
 * Controls the collapsible sidebar navigation component.
 *
 * @module stores/sidebar
 */

import { ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * Sidebar state management store
 *
 * Manages two aspects of sidebar behavior:
 * - Visibility: Whether sidebar is shown or hidden
 * - Unfoldable: Whether sidebar remains expanded on hover
 *
 * @function useSidebarStore
 * @returns {Object} Store instance with state and actions
 * @property {import('vue').Ref<boolean|undefined>} visible - Sidebar visibility state
 * @property {import('vue').Ref<boolean>} unfoldable - Sidebar unfoldable state
 * @property {Function} toggleVisible - Toggle sidebar visibility
 * @property {Function} toggleUnfoldable - Toggle sidebar unfoldable mode
 *
 * @example
 * // In a Vue component
 * import { useSidebarStore } from '@/stores/sidebar'
 *
 * const sidebar = useSidebarStore()
 * sidebar.toggleVisible() // Hide/show sidebar
 * sidebar.toggleUnfoldable() // Toggle unfoldable mode
 *
 * @example
 * // Set explicit visibility
 * sidebar.toggleVisible(true) // Show sidebar
 * sidebar.toggleVisible(false) // Hide sidebar
 */
export const useSidebarStore = defineStore('sidebar', () => {
  /**
   * Controls sidebar visibility
   * @type {import('vue').Ref<boolean|undefined>}
   */
  const visible = ref(undefined)

  /**
   * Controls whether sidebar remains expanded on hover
   * @type {import('vue').Ref<boolean>}
   */
  const unfoldable = ref(false)

  /**
   * Toggles sidebar visibility state
   *
   * @param {boolean|undefined} value - Optional explicit value to set
   * @returns {void}
   *
   * @example
   * toggleVisible() // Toggle current state
   * toggleVisible(true) // Explicitly show
   * toggleVisible(false) // Explicitly hide
   */
  const toggleVisible = (value) => {
    visible.value = value !== undefined ? value : !visible.value
  }

  /**
   * Toggles sidebar unfoldable mode
   *
   * When unfoldable is true, sidebar stays expanded on hover.
   * When false, sidebar collapses when not hovered.
   *
   * @returns {void}
   */
  const toggleUnfoldable = () => {
    unfoldable.value = !unfoldable.value
  }

  return { visible, unfoldable, toggleVisible, toggleUnfoldable }
})
