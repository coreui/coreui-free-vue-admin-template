<template>
  <div>
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="89.9%"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
        >
          <CProgress
            color="success"
            :value="25"
            class="progress-xs my-3 mb-0"
          />
          <template #header>
            <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/3.0/components/ButtonComponents" 
                class="card-header-action position-absolute"
                style="right:10px; top:10px"
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small class="text-muted">docs</small>
              </a>
            </div>
          </template>
        </CWidgetProgress>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="12.124"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          color="info"
          :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="$98.111,00"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          color="warning"
          :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="2 TB"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          color="danger"
          :value="25"
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="89.9%"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          color="success"
          inverse :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="12.124"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          color="info"
          inverse
          :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="$98.111,00"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          color="warning"
          inverse
          :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="2 TB"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          color="danger"
          inverse
          :value="25"
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="primary"
        >
          <CIcon name="settings" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="info"
        >
          <CIcon name="laptop" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="warning"
        >
          <CIcon name="moon" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="danger"
        >
          <CIcon name="bell" width="24"/>
        </CWidgetIcon>
      </CCol>
    </CRow>
    <CRow>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="primary"
          no-icon-padding
        >
          <CIcon name="settings" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="info"
          no-icon-padding
        >
          <CIcon name="laptop" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="warning"
          no-icon-padding
        >
          <CIcon name="moon" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="danger"
          no-icon-padding
        >
          <CIcon name="bell" width="24"/>
        </CWidgetIcon>
      </CCol>
    </CRow>
    <CRow>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="primary"
          no-icon-padding
        >
          <CIcon name="settings" class="mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="info"
          no-icon-padding
        >
          <CIcon name="laptop" class="mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="warning"
          no-icon-padding
        >
          <CIcon name="moon" class="mx-5 " width="24"/>
          <template #footer>
            <CCardFooter class="card-footer px-3 py-2">
              <CLink
                class="font-weight-bold font-xs btn-block text-muted"
                href="https://coreui.io/"
              >
                View more
                <CIcon name="arrowRight" class="float-right" width="16"/>
              </CLink>
            </CCardFooter>
          </template>
        </CWidgetIcon>
      </CCol>
    </CRow>
    <!-- <CRow>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="primary"
          no-icon-padding
          link="#"
        >
          <CIcon name="settings" class="mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="info"
          no-icon-padding
          link="#"
        >
          <CIcon name="laptop" class="mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="warning"
          no-icon-padding
          link="#"
        >
          <CIcon name="moon" class="mx-5" width="24"/>
        </CWidgetIcon>
      </CCol>
    </CRow> -->
    <WidgetsBrand noCharts/>
    <WidgetsBrand/>
    <CCardGroup class="mb-4">
      <CWidgetProgressIcon
        header="87.500"
        text="Visitors"
        color="info"
      >
        <CIcon name="people" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="385"
        text="New Clients"
        color="success"
      >
        <CIcon name="userFollow" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="1238"
        text="Products sold"
        color="warning"
      >
        <CIcon name="basketLoaded" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="28%"
        text="Returning Visitors"
      >
        <CIcon name="chartPie" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="5:34:11"
        text="Avg. Time"
        color="danger"
      >
        <CIcon name="speedometer" height="36"/>
      </CWidgetProgressIcon>
    </CCardGroup>
    <CCardGroup class="mb-4">
      <CWidgetProgressIcon
        header="87.500"
        text="Visitors"
        color="info"
        inverse
      >
        <CIcon name="people" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="385"
        text="New Clients"
        color="success"
        inverse
      >
        <CIcon name="userFollow" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="1238"
        text="Products sold"
        color="warning"
        inverse
      >
        <CIcon name="basketLoaded" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="28%"
        text="Returning Visitors"
        color="primary"
        inverse
      >
        <CIcon name="chartPie" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="5:34:11"
        text="Avg. Time"
        color="danger"
        inverse
      >
        <CIcon name="speedometer" height="36"/>
      </CWidgetProgressIcon>
    </CCardGroup>
    <CRow>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="87.500"
          text="Visitors"
          color="info"
        >
          <CIcon name="people" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="385"
          text="New Clients"
          color="success"
        >
          <CIcon name="userFollow" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="1238"
          text="Products sold"
          color="warning"
        >
          <CIcon name="basketLoaded" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="28%"
          text="Returning Visitors"
          color="primary"
        >
          <CIcon name="chartPie" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="5:34:11"
          text="Avg. Time"
          color="danger"
        >
          <CIcon name="speedometer" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="972"
          text="comments"
          color="info"
        >
          <CIcon name="speech" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="87.500"
          text="Visitors"
          color="info"
          inverse
        >
          <CIcon name="people" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="385"
          text="New Clients"
          color="success"
          inverse
        >
          <CIcon name="userFollow" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="1238"
          text="Products sold"
          color="warning"
          inverse
        >
          <CIcon name="basketLoaded" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="28%"
          text="Returning Visitors"
          color="primary"
          inverse
        >
          <CIcon name="chartPie" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="5:34:11"
          text="Avg. Time"
          color="danger"
          inverse
        >
          <CIcon name="speedometer" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="972"
          text="comments"
          color="info"
          inverse
        >
          <CIcon name="speech" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
    </CRow>
    <WidgetsDropdown/>
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetHeaderDetails
          color="primary"
          right-header="SALE"
          right-footer="Today 6:43 AM"
          left-header="$1.890,65"
          left-footer="+432,50 (15,78%)"
        >
          <CChartLineSimple style="height:40px"/>
          <CChartBarSimple style="height:40px"/>
        </CWidgetHeaderDetails>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetHeaderDetails
          color="success"
          right-header="SALE"
          right-footer="Today 6:43 AM"
          left-header="$1.890,65"
          left-footer="+432,50 (15,78%)"
        >
          <CChartLineSimple style="height:40px"/>
          <CChartBarSimple style="height:40px"/>
        </CWidgetHeaderDetails>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetHeaderDetails
          color="danger"
          right-header="SALE"
          right-footer="Today 6:43 AM"
          left-header="$1.890,65"
          left-footer="+432,50 (15,78%)"
        >
          <CChartLineSimple style="height:40px"/>
          <CChartBarSimple style="height:40px"/>
        </CWidgetHeaderDetails>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetHeaderDetails
          color="warning"
          right-header="SALE"
          right-footer="Today 6:43 AM"
          left-header="$1.890,65"
          left-footer="+432,50 (15,78%)"
        >
          <CChartLineSimple style="height:40px"/>
          <CChartBarSimple style="height:40px"/>
        </CWidgetHeaderDetails>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="4" lg="2">
        <CWidgetSimple header="title" text="1,123">
          <CChartLineSimple style="height:40px" border-color="danger"/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple header="title" text="1,123">
          <CChartLineSimple style="height:40px" border-color="primary"/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple header="title" text="1,123">
          <CChartLineSimple style="height:40px" border-color="success"/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple header="title" text="1,123">
          <CChartBarSimple style="height:40px" background-color="danger"/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple header="title" text="1,123">
          <CChartBarSimple style="height:40px" background-color="primary"/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple header="title" text="1,123">
          <CChartBarSimple style="height:40px" background-color="success"/>
        </CWidgetSimple>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import WidgetsBrand from './WidgetsBrand'
import WidgetsDropdown from './WidgetsDropdown'
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'

export default {
  name: 'Widgets',
  components: {
    CChartLineSimple,
    CChartBarSimple,
    WidgetsBrand,
    WidgetsDropdown
  }
}
</script>
