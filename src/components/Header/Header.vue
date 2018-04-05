<template>
  <header
    :class="classList">
    <slot>Header</slot>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      return [
        'app-header',
        'navbar'
      ]
    }
  },
  mounted: function () {
    this.isFixed(this.fixed)
  },
  methods: {
    isFixed (fixed) {
      fixed ? document.body.classList.add('header-fixed') : document.body.classList.remove('header-fixed')
      return fixed
    }
  }
}
</script>
