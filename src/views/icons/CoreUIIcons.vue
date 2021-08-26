<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue CoreUI Icons</strong>
        </CCardHeader>
        <CCardBody>
          <Example href="">
            <CRow class="text-center">
                <template v-for="(icon, iconName) in freeSet" :key="iconName">
                    <CCol
                    class="mb-5"
                    col="3"
                    sm="2"
                    >
                        <CIcon :content="icon" size="lg"/>
                        <div>{{toKebabCase(iconName)}}</div>
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
import { freeSet } from '@coreui/icons'
export default {
  name: "CoreUIIcons",
  data: function(){
      return {
          freeSet: freeSet
      }
  },
  methods: {
    toKebabCase (str) {
      return str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
    }
  },
};
</script>