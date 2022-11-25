<template>
  <div class="example">
    <CNav variant="tabs">
      <CNavItem>
        <CNavLink href="#" active>
          <CIcon icon="cil-media-play" class="me-2" />
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink :href="url" target="_blank">
          <CIcon icon="cil-code" class="me-2" />
          Code
        </CNavLink>
      </CNavItem>
    </CNav>
    <CTabContent class="rounded-bottom">
      <CTabPane class="p-3 preview" visible>
        <slot></slot>
      </CTabPane>
    </CTabContent>
  </div>
</template>

<script>
export default {
  name: 'DocsExample',
  props: {
    href: {
      type: String,
      default: undefined,
      required: false,
    },
  },
  setup(props) {
    const url = `https://coreui.io/vue/docs/${props.href}`

    return {
      url,
    }
  },
}
</script>
