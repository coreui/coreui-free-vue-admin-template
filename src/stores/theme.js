import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('light')
  const visualTheme = ref(localStorage.getItem('coreui-visual-theme') || 'liquid')

  const toggleTheme = (_theme) => {
    theme.value = _theme
  }

  const setVisualTheme = (_visualTheme) => {
    visualTheme.value = _visualTheme
    localStorage.setItem('coreui-visual-theme', _visualTheme)
  }

  return { theme, toggleTheme, visualTheme, setVisualTheme }
})
