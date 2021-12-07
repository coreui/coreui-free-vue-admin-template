<template>
  <CCallout color="info" class="bg-white">
    {{
      content
        ? content
        : `A Vue ${name} component ${
            plural ? 'have' : 'has'
          } been created as a native Vue.js version
      of Bootstrap ${name}. ${name} ${
            plural ? 'are' : 'is'
          } delivered with some new features,
      variants, and unique design that matches CoreUI Design System requirements.`
    }}
    <br />
    <br />
    For more information please visit our official
    <CLink :href="url" target="_blank">
      documentation of CoreUI Components Library for Vue.js
    </CLink>
    .
  </CCallout>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'DocsCallout',
  props: {
    content: {
      type: String,
      default: undefined,
      required: false,
    },
    href: {
      type: String,
      default: undefined,
      required: false,
    },
    name: {
      type: String,
      default: undefined,
      required: false,
    },
    plural: Boolean,
  },
  setup(props) {
    const store = useStore()
    const url = `https://coreui.io/vue/docs/${store.getters.coreuiLibraryShortVersion}/${props.href}`

    return {
      url,
    }
  },
}
</script>
