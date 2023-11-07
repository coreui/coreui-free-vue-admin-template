<template>
  <div class="example">
    <CNav variant="underline-border">
      <CNavItem>
        <CNavLink href="#" active>
          <CIcon icon="cil-media-play" class="me-2" />
          Preview
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink :href="url" target="_blank">
          <CIcon icon="cil-code" class="me-2" />
          Code
        </CNavLink>
      </CNavItem>
    </CNav>
    <CTabContent :class="['rounded-bottom', addClass]">
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
    href: String,
    tabContentClass: String,
  },
  setup(props) {
    const url = `https://coreui.io/vue/docs/${props.href}`
    const addClass = props.tabContentClass
 
    return {
      addClass,
      url,
    }
  },
}
</script>
