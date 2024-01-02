<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>CoreUI Icons - Flag</CCardHeader>
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
import { flagSet } from '@coreui/icons'
export default {
  name: 'CoreUIIcons',
  setup() {
    const toKebabCase = (str) =>
      str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
    const icons = flagSet

    return {
      icons,
      toKebabCase,
    }
  },
}
</script>
