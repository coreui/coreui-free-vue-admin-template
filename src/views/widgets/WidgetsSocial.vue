<template>
  <CRow>
    <template v-if="!noCharts">
      <CCol md="3" sm="6">
        <CWidgetSocial
          variant="facebook"
          rightHeader="89k"
          rightFooter="friends"
          leftHeader="459"
          leftFooter="feeds"
        >
          <CIcon
            name="socialFacebook"
            height="32"
            class="c-position-absolute"
          />
          <CChartLineSimple
            style="height:100px"
            backgroundColor="rgba(255,255,255,.1)"
            :dataPoints="[65, 59, 84, 84, 51, 55, 40]"
            label="Friends"
            labels="months"
          />
        </CWidgetSocial>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetSocial
          variant="twitter"
          rightHeader="973k"
          rightFooter="followers"
          leftHeader="1.792"
          leftFooter="tweets"
        >
          <CIcon
            name="socialTwitter"
            height="32"
            class="c-position-absolute"
          />
          <CChartLineSimple
            style="height:100px"
            backgroundColor="rgba(255,255,255,.1)"
            :dataPoints="[1, 13, 9, 17, 34, 41, 38]"
            label="Followers"
            labels="months"
          />
        </CWidgetSocial>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetSocial
          variant="linkedin"
          rightHeader="500+"
          rightFooter="contracts"
          leftHeader="292"
          leftFooter="feeds"
        >
          <CIcon
            name="socialLinkedin"
            height="32"
            class="c-position-absolute"
          />
          <CChartLineSimple
            style="height:100px"
            backgroundColor="rgba(255,255,255,.1)"
            :dataPoints="[78, 81, 80, 45, 34, 12, 40]"
            label="Contracts"
            labels="months"
          />
        </CWidgetSocial>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetSocial
          rightHeader="12"
          rightFooter="events"
          leftHeader="4"
          leftFooter="meetings"
          variant="warning"
        >
          <CIcon
            name="calendar"
            height="32"
            class="c-position-absolute"
          />
          <CChartLineSimple
            style="height:100px"
            backgroundColor="rgba(255,255,255,.1)"
            :dataPoints="[35, 23, 56, 22, 97, 23, 64]"
            label="Followers"
            labels="months"
          />
        </CWidgetSocial>
      </CCol>
    </template>
    <template v-else>
      <CCol md="3" sm="6">
        <CWidgetSocial
          variant="facebook"
          rightHeader="89k"
          rightFooter="friends"
          leftHeader="459"
          leftFooter="feeds"
        >
          <CIcon
            name="socialFacebook"
            height="32"
            class="c-position-absolute"
          />
        </CWidgetSocial>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetSocial
          variant="twitter"
          rightHeader="973k"
          rightFooter="followers"
          leftHeader="1.792"
          leftFooter="tweets"
        >
          <CIcon
            name="socialTwitter"
            height="32"
            class="c-position-absolute"
          />
        </CWidgetSocial>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetSocial
          variant="linkedin"
          rightHeader="500+"
          rightFooter="contracts"
          leftHeader="292"
          leftFooter="feeds"
        >
          <CIcon
            name="socialLinkedin"
            height="32"
            class="c-position-absolute"
          />
        </CWidgetSocial>
       </CCol>
      <CCol md="3" sm="6">
        <CWidgetSocial
          rightHeader="12"
          rightFooter="events"
          leftHeader="4"
          leftFooter="meetings"
          variant="warning"
        >
          <CIcon
            name="calendar"
            height="32"
            class="c-position-absolute"
          />
        </CWidgetSocial>
      </CCol>
    </template>
  </CRow>
</template>

<script>
import { CChartLineSimple } from '../charts/index.js'

export default {
  name: 'WidgetsSocial',
  components: {
    CChartLineSimple
  },
  props: {
    noCharts: Boolean
  }
}
</script>
