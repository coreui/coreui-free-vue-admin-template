<template>
  <div class="example">
    <CNav variant="tabs">
      <CNavItem>
        <CNavLink href="#" active>
          <CIcon icon="cil-media-play" class="me-2" />
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink :href="href" target="_blank">
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
import packageJson from "../../package.json";
export default {
  name: "Example",
  props: {
    href: {
      type: String,
      default: undefined,
      required: false,
    },
  },
  setup(props) {
    const href = `https://coreui.io/vue/docs/${packageJson.config.coreui_library_short_version}/${props.href}`;

    return {
      href,
    };
  },
};
</script>
