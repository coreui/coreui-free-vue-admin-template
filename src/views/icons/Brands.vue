<template>
  <div>
    <CCard>
      <CCardHeader>
        <i class="cui-globe"></i>Font Awesome brand icons
      </CCardHeader>
      <CCardBody>
        <CRow class="c-text-center">
          <template v-for="(brand, brandName) in $options.brands">
            <CCol
              class="c-mb-5"
              col="3"
              sm="2"
              :key="brandName"
            >
              <CIcon :height="42" :content="$options.brands[brandName]"/>
              <div>{{brandName}}</div>
            </CCol>
          </template>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { iconSet as brands } from '@coreui/icons/brands'
export default {
  name: 'Brands',
  brands
}
</script>
