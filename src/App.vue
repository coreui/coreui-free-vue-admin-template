<template>
  <router-view />
</template>
<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useColorModes } from '@coreui/vue'

export default {
  setup() {
    const { isColorModeSet, setColorMode } = useColorModes(
      'coreui-free-vue-admin-template-theme',
    )
    const store = useStore()

    onBeforeMount(() => {
      const urlParams = new URLSearchParams(window.location.href.split('?')[1])
      if (urlParams.get('theme')) {
        setColorMode(urlParams.get('theme'))
        return
      }

      if (isColorModeSet()) {
        return
      }

      setColorMode(store.state.theme)
    })
  },
}
</script>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';
</style>
