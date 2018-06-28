<template>
  <table class="w-100">
    <tbody>
    <tr>
      <td class="text-muted">HEX:</td>
      <td class="font-weight-bold">{{this.hexColor}}</td>
    </tr>
    <tr>
      <td class="text-muted">RGB:</td>
      <td class="font-weight-bold">{{this.bgColor}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'
export default {
  name: 'ColorView',
  data: function () {
    return {
      bgColor: 'rgb(255, 255, 255)'
    }
  },
  computed: {
    hexColor () {
      return rgbToHex(this.bgColor)
    }
  },
  methods: {
    setColor () {
      const elem = this.$parent.$el.children[0]
      const color = window.getComputedStyle(elem).getPropertyValue('background-color')
      this.bgColor = color || this.bgColor
    }
  },
  mounted () {
    this.setColor()
  }
}
</script>

