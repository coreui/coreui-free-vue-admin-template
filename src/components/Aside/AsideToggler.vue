<template>
  <button
    :display="display"
    :mobile="mobile"
    :class="classList"
    type="button"
    @click="asideToggle">
    <span class="navbar-toggler-icon" />
  </button>
</template>

<script>
  import { asideMenuCssClasses, validBreakpoints, checkBreakpoint } from '../../shared/classes'
  import toggleClasses from '../../shared/toggle-classes'

  export default {
    name: 'AsideToggler',
    props: {
      mobile: {
        type: Boolean,
        default: false
      },
      display: {
        type: String,
        default: ''
      }
    },
    computed: {
      classList () {
        return [
          'navbar-toggler'
          // 'd-none',
          // 'd-lg-inline-block'
        ]
      }
    },
    mounted: function () {
      // this.toggle()
    },
    methods: {
      toggle () {
        const [display, mobile] = [this.display, this.mobile]
        let cssClass = asideMenuCssClasses[0]
        if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
          cssClass = `aside-menu-${display}-show`
        }
        toggleClasses(cssClass, asideMenuCssClasses)
      },
      asideToggle (e) {
        e.preventDefault()
        this.toggle()
      }
    }
  }
</script>
