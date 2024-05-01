import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('light')

  const toggleTheme = (_theme) => {
    theme.value = _theme
  }

  return { theme, toggleTheme }
})
