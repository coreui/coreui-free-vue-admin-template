<template>
  <CCol xl="2" md="4" sm="6" xs="12" class="c-mb-4">
    <div
      :class="['c-theme-color c-w-75 c-rounded c-mb-3', color]"
      :style="{ paddingTop: '75%' }"
    ></div>
    <slot></slot>
    <ColorView/>
  </CCol>
</template>

<script>
import ColorView from './ColorView'
export default {
  name: 'ColorTheme',
  components: { ColorView },
  props: {
    color: {
      type: String,
      default: 'c-bg-secondary'
    }
  }
}
</script>
