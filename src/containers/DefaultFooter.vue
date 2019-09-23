<template>
      <TheFooter>
        <div>
          <!--footer-->
          <a href="https://coreui.io">CoreUI</a>
          <span class="ml-1">&copy; 2018 creativeLabs.</span>
        </div>
        <div class="ml-auto">
          <span class="mr-1">Powered by</span>
          <a href="https://coreui.io">CoreUI for Vue</a>
        </div>
      </TheFooter>
</template>
<script>
import { Footer as TheFooter } from '@coreui/vue'
export default {
  name: 'DefaultFooter',
  components: {
    TheFooter
  },
}
</script>
