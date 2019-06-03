<template>
  <CRow>
    <template v-if="!noCharts">
      <CCol md="3" sm="6">
        <CWidgetSocial
          variant="facebook"
          right-header="89k"
          right-footer="friends"
          left-header="459"
          left-footer="feeds"
        >
          <CIcon
            name="socialFacebook"
            height="32"
            class="c-position-absolute"
          />
          <CChartLineSimple
            style="height:100px"
            background-color="rgba(255,255,255,.1)"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            label="Friends"
            labels="months"
          />
        </CWidgetSocial>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetSocial
          variant="twitter"
          right-header="973k"
          right-footer="followers"
          left-header="1.792"
          left-footer="tweets"
        >
          <CIcon
            name="socialTwitter"
            height="32"
            class="c-position-absolute"
          />
          <CChartLineSimple
            style="height:100px"
            background-color="rgba(255,255,255,.1)"
            :data-points="[1, 13, 9, 17, 34, 41, 38]"
            label="Followers"
            labels="months"
          />
        </CWidgetSocial>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetSocial
          variant="linkedin"
          right-header="500+"
          right-footer="contracts"
          left-header="292"
          left-footer="feeds"
        >
          <CIcon
            name="socialLinkedin"
            height="32"
            class="c-position-absolute"
          />
          <CChartLineSimple
            style="height:100px"
            background-color="rgba(255,255,255,.1)"
            :data-points="[78, 81, 80, 45, 34, 12, 40]"
            label="Contracts"
            labels="months"
          />
        </CWidgetSocial>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetSocial
          right-header="12"
          right-footer="events"
          left-header="4"
          left-footer="meetings"
          variant="warning"
        >
          <CIcon
            name="calendar"
            height="32"
            class="c-position-absolute"
          />
          <CChartLineSimple
            style="height:100px"
            background-color="rgba(255,255,255,.1)"
            :data-points="[35, 23, 56, 22, 97, 23, 64]"
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
          right-header="89k"
          right-footer="friends"
          left-header="459"
          left-footer="feeds"
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
          right-header="973k"
          right-footer="followers"
          left-header="1.792"
          left-footer="tweets"
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
          right-header="500+"
          right-footer="contracts"
          left-header="292"
          left-footer="feeds"
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
          right-header="12"
          right-footer="events"
          left-header="4"
          left-footer="meetings"
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
