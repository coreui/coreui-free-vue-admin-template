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
    computed: {
      classList () {
        return [
          'app-footer'
        ]
      }
    }
  }
</script>
