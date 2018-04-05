<template>
  <footer :class="classList">
    <slot>
      <div>
        <a href="https://coreui.io">CoreUI</a>
        <span>&copy; 2018 creativeLabs.</span>
      </div>
      <div class="ml-auto">
        <span>Powered by</span>
        <a href="https://coreui.io">CoreUI for Vue</a>
      </div>
    </slot>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  mounted: function () {
    this.isFixed()
  },
  computed: {
    classList () {
      return [
        'app-footer'
      ]
    }
  },
  methods: {
    isFixed () {
      this.fixed ? document.body.classList.add('footer-fixed') : document.body.classList.remove('footer-fixed')
    }
  }
}
</script>
