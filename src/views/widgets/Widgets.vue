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
            variant="success"
            :value="25"
            class="c-progress-xs c-my-3 c-mb-0"
          />
          <template #header>
            <div class="c-card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/3.0/components/ButtonComponents" 
                class="card-header-action c-position-absolute"
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
          variant="info"
          :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="$98.111,00"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          variant="warning"
          :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="2 TB"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          variant="danger"
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
          variant="success"
          inverse :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="12.124"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          variant="info"
          inverse
          :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="$98.111,00"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          variant="warning"
          inverse
          :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="2 TB"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          variant="danger"
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
          variant="primary"
        >
          <CIcon name="settings" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="info"
        >
          <CIcon name="laptop" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="warning"
        >
          <CIcon name="moon" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="danger"
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
          variant="primary"
          no-icon-padding
        >
          <CIcon name="settings" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="info"
          no-icon-padding
        >
          <CIcon name="laptop" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="warning"
          no-icon-padding
        >
          <CIcon name="moon" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="danger"
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
          variant="primary"
          no-icon-padding
        >
          <CIcon name="settings" class="c-mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="info"
          no-icon-padding
        >
          <CIcon name="laptop" class="c-mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="warning"
          no-icon-padding
        >
          <CIcon name="moon" class="c-mx-5 " width="24"/>
          <template #footer>
            <CCardFooter class="c-card-footer c-px-3 c-py-2">
              <CLink
                class="c-font-weight-bold c-font-xs c-btn-block c-text-muted"
                href="https://coreui.io/"
              >
                View more
                <CIcon name="arrowRight" class="c-float-right" width="16"/>
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
          variant="primary"
          no-icon-padding
          link="#"
        >
          <CIcon name="settings" class="c-mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="info"
          no-icon-padding
          link="#"
        >
          <CIcon name="laptop" class="c-mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="warning"
          no-icon-padding
          link="#"
        >
          <CIcon name="moon" class="c-mx-5" width="24"/>
        </CWidgetIcon>
      </CCol>
    </CRow> -->
    <WidgetsBrand noCharts/>
    <WidgetsBrand/>
    <CCardGroup class="c-mb-4">
      <CWidgetProgressIcon
        header="87.500"
        text="Visitors"
        variant="info"
      >
        <CIcon name="people" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="385"
        text="New Clients"
        variant="success"
      >
        <CIcon name="userFollow" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="1238"
        text="Products sold"
        variant="warning"
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
        variant="danger"
      >
        <CIcon name="speedometer" height="36"/>
      </CWidgetProgressIcon>
    </CCardGroup>
    <CCardGroup class="c-mb-4">
      <CWidgetProgressIcon
        header="87.500"
        text="Visitors"
        variant="info"
        inverse
      >
        <CIcon name="people" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="385"
        text="New Clients"
        variant="success"
        inverse
      >
        <CIcon name="userFollow" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="1238"
        text="Products sold"
        variant="warning"
        inverse
      >
        <CIcon name="basketLoaded" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="28%"
        text="Returning Visitors"
        variant="primary"
        inverse
      >
        <CIcon name="chartPie" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="5:34:11"
        text="Avg. Time"
        variant="danger"
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
          variant="info"
        >
          <CIcon name="people" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="385"
          text="New Clients"
          variant="success"
        >
          <CIcon name="userFollow" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="1238"
          text="Products sold"
          variant="warning"
        >
          <CIcon name="basketLoaded" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="28%"
          text="Returning Visitors"
          variant="primary"
        >
          <CIcon name="chartPie" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="5:34:11"
          text="Avg. Time"
          variant="danger"
        >
          <CIcon name="speedometer" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="972"
          text="comments"
          variant="info"
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
          variant="info"
          inverse
        >
          <CIcon name="people" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="385"
          text="New Clients"
          variant="success"
          inverse
        >
          <CIcon name="userFollow" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="1238"
          text="Products sold"
          variant="warning"
          inverse
        >
          <CIcon name="basketLoaded" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="28%"
          text="Returning Visitors"
          variant="primary"
          inverse
        >
          <CIcon name="chartPie" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="5:34:11"
          text="Avg. Time"
          variant="danger"
          inverse
        >
          <CIcon name="speedometer" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="972"
          text="comments"
          variant="info"
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
          variant="primary"
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
          variant="success"
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
          variant="danger"
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
          variant="warning"
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
