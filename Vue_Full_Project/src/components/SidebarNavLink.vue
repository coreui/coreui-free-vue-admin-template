<template>
  <div v-if="linkExternal">
    <a :href="url" :class="classList">
      <i :class="icon"></i> {{name}}
      <b-badge v-if="badge && badge.text" :variant="badge.variant">{{badge.text}}</b-badge>
    </a>
  </div>
  <div v-else>
    <router-link :to="url" :class="classList">
      <i :class="icon"></i> {{name}}
      <b-badge v-if="badge && badge.text" :variant="badge.variant">{{badge.text}}</b-badge>
    </router-link>
  </div>
</template>

<script>
  import isExternal from 'is-url-external'

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
      }
    },
    computed: {
      classList () {
        return [
          'nav-link',
          this.linkVariant
        ]
      },
      linkVariant () {
        return this.variant ? `nav-link-${this.variant}` : ''
      },
      linkExternal () {
        return isExternal(this.url)
      }
    }
  }
</script>
