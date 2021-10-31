<template>
  <CRow>
    <CCol>
      <DocsCallout
        name="CoreUI Brand Icons"
        href="components/icon"
        content="CoreUI Brand Icons. CoreUI Icons package is delivered with more than 1500 icons in multiple formats SVG, PNG, and Webfonts. CoreUI Icons are beautifully crafted symbols for common actions and items. You can use them in your digital products for web or mobile app."
      />
      <CCard>
        <CCardHeader>CoreUI Icons - Brand</CCardHeader>
        <CCardBody>
          <CRow class="text-center">
            <template v-for="(icon, iconName) in icons" :key="iconName">
              <CCol class="mb-5" :xs="3" :sm="2">
                <CIcon :content="icon" size="xxl" />
                <div>{{ toKebabCase(iconName) }}</div>
              </CCol>
            </template>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { brandSet } from '@coreui/icons'
export default {
  name: 'CoreUIIcons',
  setup() {
    const toKebabCase = (str) =>
      str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
    const icons = brandSet

    return {
      icons,
      toKebabCase,
    }
  },
}
</script>
