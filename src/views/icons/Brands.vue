<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-basket"/>Brand icons
      </CCardHeader>
      <CCardBody>
        <CRow class="text-center">
          <template v-for="(brand, brandName) in $options.brands">
            <CCol
              class="mb-5"
              col="3"
              sm="2"
              :key="brandName"
            >
              <CIcon :height="42" :content="brand"/>
              <div>{{toKebabCase(brandName)}}</div>
            </CCol>
          </template>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { brandSet as brands } from '@coreui/icons'
export default {
  name: 'Brands',
  brands,
  methods: {
    toKebabCase (str) {
      return str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
    }
  }
}
</script>
