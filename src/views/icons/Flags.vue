<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Flags</strong>
        </CCardHeader>
        <CCardBody>
            <Example href="">
                <CRow class="text-center">
                        <!-- For using the flags inline with text add the classes
                        <code>.flag-icon</code> and <code>.flag-icon-xx</code>
                        (where xx is the ISO 3166-1-alpha-2 code of a country) to an empty
                        span. If you want to have a squared version flag then add the class
                        flag-icon-squared as well. -->
                    <template v-for="(flag, flagName) in flagSet" :key="flagName"> 
                        <CCol
                        class="mb-5"
                        col="3"
                        sm="2"
                        >
                        <CIcon size="lg" :content="flag"/>
                        <div>{{toKebabCase(flagName)}}</div>
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
import { flagSet } from '@coreui/icons'
export default {
  name: "Flags",
  data: function(){
      return {
          flagSet: flagSet
      }
  },
  methods: {
    toKebabCase (str) {
      return str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
    }
  },
};
</script>