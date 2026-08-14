<script setup>
defineProps({
  href: String,
})
</script>

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
