<script setup>
import { freeSet } from '@coreui/icons'

const toKebabCase = (str) => str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
const icons = freeSet
</script>

<template>
  <DocsIcons />
  <CCard>
    <CCardHeader>CoreUI Icons Free</CCardHeader>
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
</template>
