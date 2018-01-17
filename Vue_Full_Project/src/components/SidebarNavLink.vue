<template>
  <div v-if="isExternalLink">
    <a :href="url" :class="classList">
      <i :class="icon"></i> {{name}}
      <b-badge v-if="badge && badge.text" :variant="badge.variant">{{badge.text}}</b-badge>
    </a>
  </div>
  <div v-else>
    <router-link :to="url" :class="classList">
      <span @click="hideMobile">
        <i :class="icon"></i> {{name}}
        <b-badge v-if="badge && badge.text" :variant="badge.variant">{{badge.text}}</b-badge>
      </span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'sidebar-nav-link',
    props: {
      name: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      badge: {
        type: Object,
        default: () => {}
      },
      variant: {
        type: String,
        default: ''
      },
      classes: {
        type: String,
        default: ''
      }
    },
    computed: {
      classList () {
        return [
          'nav-link',
          this.linkVariant,
          ...this.itemClasses
        ]
      },
      linkVariant () {
        return this.variant ? `nav-link-${this.variant}` : ''
      },
      itemClasses () {
        return this.classes ? this.classes.split(' ') : []
      },
      isExternalLink () {
        if (this.url.substring(0, 4) === 'http') {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      hideMobile () {
        if (document.body.classList.contains('sidebar-mobile-show')) {
          document.body.classList.toggle('sidebar-mobile-show')
        }
      }
    }
  }
</script>
