<template functional>
  <CRow>
    <template v-if="!props.noCharts">
      <CCol md="3" sm="6">
        <CWidgetSocial
          variant="facebook"
          rightHeader="89k"
          rightFooter="friends"
          leftHeader="459"
          leftFooter="feeds"
        >
          <CSimpleLineChart
            chartId="facebook"
            :data="[65, 59, 84, 84, 51, 55, 40]"
            label="Friends"
            :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
            style="height:100px"
            color="rgba(255,255,255,.1)"
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
          <CSimpleLineChart
            chartId="twitter"
            :data="[1, 13, 9, 17, 34, 41, 38]"
            label="Followers"
            :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
            style="height:100px"
            color="rgba(255,255,255,.1)"
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
          <CSimpleLineChart
            chartId="linkedIn"
            :data="[78, 81, 80, 45, 34, 12, 40]"
            label="Contracts"
            :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
            style="height:100px"
            color="rgba(255,255,255,.1)"
          />
        </CWidgetSocial>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetSocial
          variant="google-plus"
          rightHeader="894"
          rightFooter="followers"
          leftHeader="92"
          leftFooter="circles"
        >
          <CSimpleLineChart
            chartId="google-plus"
            :data="[35, 23, 56, 22, 97, 23, 64]"
            label="Followers"
            :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
            style="height:100px"
            color="rgba(255,255,255,.1)"
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
        />
      </CCol>
      <CCol md="3" sm="6">
        <CWidgetSocial
          variant="twitter"
          rightHeader="973k"
          rightFooter="followers"
          leftHeader="1.792"
          leftFooter="tweets"
        />
      </CCol>
      <CCol md="3" sm="6">
        <CWidgetSocial
          variant="linkedin"
          rightHeader="500+"
          rightFooter="contracts"
          leftHeader="292"
          leftFooter="feeds"
        />
      </CCol>
      <CCol md="3" sm="6">
        <CWidgetSocial
          variant="warning"
          iconClasses="fa fa-battery-1"
          rightHeader="0:57"
          rightFooter="time"
          leftHeader="17"
          leftFooter="percentage"
        />
      </CCol>
    </template>
  </CRow>
</template>

<script>
export default {
  name: 'WidgetsSocial',
  props: {
    noCharts: Boolean
  }
}
</script>
