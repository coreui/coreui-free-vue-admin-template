<template>
  <TheFooter>
    <div>
      <!--footer-->
      <a :href="title_url">{{title}}</a>
      <span class="ml-1">{{copyrigth_text}}</span>
    </div>
    <div class="ml-auto">
      <span class="mr-1">Powered by</span>
      <a :href="power_by_url">{{power_by_text}}</a>
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
  props: {
        title: String,
        title_url: String,
        copyrigth_text: Function,
        power_by_text: Function,
        power_by_url: String,
  },
}
</script>
