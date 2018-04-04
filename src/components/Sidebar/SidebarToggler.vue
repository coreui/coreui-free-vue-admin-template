<template>
  <button
    :display="display"
    :mobile="mobile"
    :class="classList"
    type="button"
    @click="sidebarToggle">
    <span class="navbar-toggler-icon" />
  </button>
</template>

<script>
  import { sidebarCssClasses, validBreakpoints, checkBreakpoint } from '../../shared/classes'
  import toggleClasses from '../../shared/toggle-classes'

  export default {
    name: 'SidebarToggler',
    props: {
      mobile: {
        type: Boolean,
        default: false
      },
      display: {
        type: String,
        default: 'lg'
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
      this.toggle()
    },
    methods: {
      toggle () {
        const [display, mobile] = [this.display, this.mobile]
        let cssClass = sidebarCssClasses[0]
        if (!mobile && display && checkBreakpoint(display, validBreakpoints)) {
          cssClass = `sidebar-${display}-show`
        }
        toggleClasses(cssClass, sidebarCssClasses)
      },
      sidebarToggle (e) {
        e.preventDefault()
        this.toggle()
      }
    }
  }
</script>
