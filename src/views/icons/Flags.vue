<template>
  <div>
    <CCard>
      <CCardHeader>
        <i class="cui-globe"></i> Flags
      </CCardHeader>
      <CCardBody>
        <CRow class="c-text-center">
          <CCol class="c-mb-5" col="12">
            <!-- For using the flags inline with text add the classes
            <code>.flag-icon</code> and <code>.flag-icon-xx</code>
            (where xx is the ISO 3166-1-alpha-2 code of a country) to an empty
            span. If you want to have a squared version flag then add the class
            flag-icon-squared as well. -->
          </CCol>
          <template v-for="(flag, key) in displayedFlags">
            <CCol
              class="c-mb-5"
              col="3"
              sm="2"
              :key="key"
            >
              <CIcon :height="42" :content="$options.iconSet[flag]"/>
              <div>{{flag}}</div>
            </CCol>
          </template>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import { iconSet } from '@coreui/icons/flags'
export default {
  name: 'flags',
  iconSet,
  computed: {
    displayedFlags () {
      return Object.keys(this.$options.iconSet).filter(icon => !icon.includes('Q'))
    }
  }
}
</script>
