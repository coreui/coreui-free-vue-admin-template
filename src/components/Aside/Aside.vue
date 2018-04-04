<template>
  <aside class="aside-menu">
    <slot>Aside</slot>
  </aside>
</template>

<script>
  // import { asideMenuCssClasses, validBreakpoints, checkBreakpoint } from '../../shared/classes'

  export default {
    name: 'AppAside',
    props: {
      fixed: {
        type: Boolean,
        default: false
      },
      display: {
        type: String,
        default: ''
      },
      offCanvas: {
        type: Boolean,
        default: true
      }
    },
    mounted: function () {
      this.isFixed(this.fixed)
      this.isOffCanvas(this.offCanvas)
      // this.displayBreakpoint(this.display)
    },
    methods: {
      isFixed (fixed) {
        fixed ? document.body.classList.add('aside-menu-fixed') : document.body.classList.remove('aside-menu-fixed')
        return fixed
      },
      isOffCanvas (offCanvas) {
        offCanvas ? document.body.classList.add('aside-menu-off-canvas') : document.body.classList.remove('aside-menu-off-canvas')
      }
      // displayBreakpoint (display) {
      //   let cssClass = asideMenuCssClasses[0]
      //   if (display && checkBreakpoint(display, validBreakpoints)) {
      //     cssClass = `aside-menu-${display}-show`
      //   }
      //   document.body.classList.add(cssClass)
      // }
    }
  }
</script>
