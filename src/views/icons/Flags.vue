<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-globe-alt"/> Flags
      </CCardHeader>
      <CCardBody>
        <CRow class="text-center">
          <CCol class="mb-5" col="12">
            <!-- For using the flags inline with text add the classes
            <code>.flag-icon</code> and <code>.flag-icon-xx</code>
            (where xx is the ISO 3166-1-alpha-2 code of a country) to an empty
            span. If you want to have a squared version flag then add the class
            flag-icon-squared as well. -->
          </CCol>
          <template v-for="(flag, flagName) in displayedFlags">
            <CCol
              class="mb-5"
              col="3"
              sm="2"
              :key="flagName"
            >
              <CIcon :height="42" :content="flag"/>
              <div>{{toKebabCase(flagName)}}</div>
            </CCol>
          </template>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { flagSet } from '@coreui/icons'
export default {
  name: 'Flags',
  flagSet,
  computed: {
    displayedFlags () {
      return this.$options.flagSet
    }
  },
  methods: {
    toKebabCase (str) {
      return str.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
    }
  }
}
</script>
