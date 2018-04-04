<template>
  <div class="sidebar">
    <slot>Sidebar</slot>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  mounted: function () {
    this.isFixed()
  },
  methods: {
    isFixed () {
      this.fixed ? document.body.classList.add('sidebar-fixed') : document.body.classList.remove('sidebar-fixed')
      return this.fixed
    }
  }
}
</script>
