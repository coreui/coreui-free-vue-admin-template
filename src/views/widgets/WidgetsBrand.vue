<template>
  <CRow>
    <template v-if="!noCharts">
      <CCol md="3" sm="6">
        <CWidgetBrand
          variant="facebook"
          right-header="89k"
          right-footer="friends"
          left-header="459"
          left-footer="feeds"
        >
          <CIcon
            name="socialFacebook"
            height="56"
            class="c-my-4"
          />
          <CChartLineSimple
            style="height:100px"
            class="c-position-absolute"
            background-color="rgba(255,255,255,.1)"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            label="Friends"
            labels="months"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          variant="twitter"
          right-header="973k"
          right-footer="followers"
          left-header="1.792"
          left-footer="tweets"
        >
          <CIcon
            name="socialTwitter"
            height="56"
            class="c-my-4"
          />
          <CChartLineSimple
            style="height:100px"
            class="c-position-absolute"
            background-color="rgba(255,255,255,.1)"
            :data-points="[1, 13, 9, 17, 34, 41, 38]"
            label="Followers"
            labels="months"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          variant="linkedin"
          right-header="500+"
          right-footer="contracts"
          left-header="292"
          left-footer="feeds"
        >
          <CIcon
            name="socialLinkedin"
            height="56"
            class="c-my-4"
          />
          <CChartLineSimple
            style="height:100px"
            class="c-position-absolute"
            background-color="rgba(255,255,255,.1)"
            :data-points="[78, 81, 80, 45, 34, 12, 40]"
            label="Contracts"
            labels="months"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          right-header="12"
          right-footer="events"
          left-header="4"
          left-footer="meetings"
          variant="warning"
        >
          <CIcon
            name="calendar"
            height="56"
            class="c-my-4"
          />
          <CChartLineSimple
            style="height:100px"
            class="c-position-absolute"
            background-color="rgba(255,255,255,.1)"
            :data-points="[35, 23, 56, 22, 97, 23, 64]"
            label="Followers"
            labels="months"
          />
        </CWidgetBrand>
      </CCol>
    </template>
    <template v-else>
      <CCol md="3" sm="6">
        <CWidgetBrand
          variant="facebook"
          right-header="89k"
          right-footer="friends"
          left-header="459"
          left-footer="feeds"
        >
          <CIcon
            name="socialFacebook"
            height="56"
            class="c-my-4"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          variant="twitter"
          right-header="973k"
          right-footer="followers"
          left-header="1.792"
          left-footer="tweets"
        >
          <CIcon
            name="socialTwitter"
            height="56"
            class="c-my-4"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          variant="linkedin"
          right-header="500+"
          right-footer="contracts"
          left-header="292"
          left-footer="feeds"
        >
          <CIcon
            name="socialLinkedin"
            height="56"
            class="c-my-4"
          />
        </CWidgetBrand>
       </CCol>
      <CCol md="3" sm="6">
        <CWidgetBrand
          right-header="12"
          right-footer="events"
          left-header="4"
          left-footer="meetings"
          variant="warning"
        >
          <CIcon
            name="calendar"
            height="56"
            class="c-my-4"
          />
        </CWidgetBrand>
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
