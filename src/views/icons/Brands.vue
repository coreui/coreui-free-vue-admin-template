<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Brands</strong>
        </CCardHeader>
        <CCardBody>
          <!-- TODO: icons, brands and flags href-s to documentation -->
          <Example href="">
            <CRow class="text-center">
                <template v-for="(brand, brandName) in brands" :key="brandName">
                    <CCol
                    class="mb-5"
                    col="3"
                    sm="2"
                    >
                    <CIcon size="lg" :content="brand"/>
                    <div>{{toKebabCase(brandName)}}</div>
                    </CCol>
                </template>
            </CRow>
          </Example>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { brandSet as brands } from '@coreui/icons'
export default {
  name: "Brands",
  data: function(){
      return {
          brands: brands
      }
  },
  methods: {
    toKebabCase (str) {
      return str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
    }
  },
};
</script>