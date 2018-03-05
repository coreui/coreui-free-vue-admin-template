<template>
  <SidebarNavItem :classes="classList.navItem">
    <a :class="classList.navLink" :href="url"><i :class="classList.icon"></i> {{name}}</a>
  </SidebarNavItem>
</template>

<script>
  import SidebarNavItem from './SidebarNavItem'
  import SidebarNavLink from './SidebarNavLink'
  export default {
    name: 'sidebar-nav-label',
    components: {
      SidebarNavItem,
      SidebarNavLink
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: '#'
      },
      icon: {
        type: String,
        default: 'fa fa-circle'
      },
      classes: {
        type: String,
        default: ''
      },
      label: {
        type: Object,
        required: true,
        default: () => {}
      }
    },
    computed: {
      classList () {
        const classes = {
          navItem: ['hidden-cn', ...this.getClasses(this.classes)].join(' '),
          navLink: 'nav-label',
          icon: [
            this.icon ? this.icon : 'fa fa-circle',
            this.label.variant ? `text-${this.label.variant}` : '',
            this.label.class ? this.label.class : ''
          ].join(' ')
        }
        return classes
      }
    },
    methods: {
      getClasses (classes) {
        return classes ? classes.split(' ') : []
      }
    }
  }
</script>
