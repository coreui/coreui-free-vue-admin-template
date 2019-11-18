<template>
  <CRow>
    <template v-if="!noCharts">
      <CCol md="3" sm="6">
        <CWidgetBrand
          color="facebook"
          right-header="89k"
          right-footer="friends"
          left-header="459"
          left-footer="feeds"
        >
          <CIcon
            name="cib-facebook"
            height="52"
            class="my-4"
          />
          <CChartLineSimple
            class="c-chart-brand"
            background-color="rgba(255,255,255,.1)"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            label="Friends"
            labels="months"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          color="twitter"
          right-header="973k"
          right-footer="followers"
          left-header="1.792"
          left-footer="tweets"
        >
          <CIcon
            name="cib-twitter"
            height="52"
            class="my-4"
          />
          <CChartLineSimple
            class="c-chart-brand"
            background-color="rgba(255,255,255,.1)"
            :data-points="[1, 13, 9, 17, 34, 41, 38]"
            label="Followers"
            labels="months"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          color="linkedin"
          right-header="500+"
          right-footer="contracts"
          left-header="292"
          left-footer="feeds"
        >
          <CIcon
            name="cib-linkedin"
            height="52"
            class="my-4"
          />
          <CChartLineSimple
            class="c-chart-brand"
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
          color="warning"
        >
          <CIcon
            name="cil-calendar"
            height="52"
            class="my-4"
          />
          <CChartLineSimple
            class="c-chart-brand"
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
          color="facebook"
          right-header="89k"
          right-footer="friends"
          left-header="459"
          left-footer="feeds"
        >
          <CIcon
            name="cib-facebook"
            height="56"
            class="my-4"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          color="twitter"
          right-header="973k"
          right-footer="followers"
          left-header="1.792"
          left-footer="tweets"
        >
          <CIcon
            name="cib-twitter"
            height="56"
            class="my-4"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          color="linkedin"
          right-header="500+"
          right-footer="contracts"
          left-header="292"
          left-footer="feeds"
        >
          <CIcon
            name="cib-linkedin"
            height="56"
            class="my-4"
          />
        </CWidgetBrand>
       </CCol>
      <CCol md="3" sm="6">
        <CWidgetBrand
          right-header="12"
          right-footer="events"
          left-header="4"
          left-footer="meetings"
          color="warning"
        >
          <CIcon
            name="cil-calendar"
            height="56"
            class="my-4"
          />
        </CWidgetBrand>
      </CCol>
    </template>
  </CRow>
</template>

<script>
import { CChartLineSimple } from '../charts/index.js'

export default {
  name: 'WidgetsBrand',
  components: {
    CChartLineSimple
  },
  props: {
    noCharts: Boolean
  }
}
</script>

<style scoped>
.c-chart-brand {
  position: absolute;
  width: 100%;
  height: 100px;
}
</style>
