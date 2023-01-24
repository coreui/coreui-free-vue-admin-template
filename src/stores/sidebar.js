import { defineStore } from 'pinia'
import { ref } from 'vue'

const useSidebarStore = defineStore('SidebarStore', () => {
  const sidebarVisible = ref('')
  const sidebarUnfoldable = ref(false)

  function toggleSidebar() {
    sidebarVisible.value = !sidebarVisible.value
  }

  function toggleUnfoldable() {
    sidebarUnfoldable.value = !sidebarUnfoldable.value
  }

  function updateSidebarVisible(value) {
    sidebarVisible.value = value
  }

  return {
    sidebarVisible,
    sidebarUnfoldable,
    toggleSidebar,
    toggleUnfoldable,
    updateSidebarVisible,
  }
})

export default useSidebarStore
