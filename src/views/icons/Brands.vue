<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="globe-alt"/>Font Awesome brand icons
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
              <div>{{brandName}}</div>
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
  brands
}
</script>
