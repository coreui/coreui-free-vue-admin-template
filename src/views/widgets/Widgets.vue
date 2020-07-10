<template>
  <div>
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetProgress footer="Lorem ipsum dolor sit amet enim.">
          <div class="h4 m-0">89.9%</div>
          <div class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/widgets" 
              class="card-header-action position-absolute"
              style="right:5px; top:5px"
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
          <div>Lorem ipsum...</div>
          <CProgress
            color="gradient-success"
            :value="25"
            class="progress-xs my-3 mb-0"
          />
        </CWidgetProgress>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="12.124"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          color="gradient-info"
          :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="$98.111,00"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          color="gradient-warning"
          :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="2 TB"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          color="gradient-danger"
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
          color="gradient-success"
          inverse :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="12.124"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          color="gradient-info"
          inverse
          :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="$98.111,00"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          color="gradient-warning"
          inverse
          :value="25"
        />
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="2 TB"
          text="Lorem ipsum..."
          footer="Lorem ipsum dolor sit amet enim."
          color="gradient-danger"
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
          color="gradient-primary"
        >
          <CIcon name="cil-settings" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="gradient-info"
        >
          <CIcon name="cil-laptop" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="gradient-warning"
        >
          <CIcon name="cil-moon" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="gradient-danger"
        >
          <CIcon name="cil-bell" width="24"/>
        </CWidgetIcon>
      </CCol>
    </CRow>
    <CRow>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="gradient-primary"
          :icon-padding="false"
        >
          <CIcon name="cil-settings" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="gradient-info"
          :icon-padding="false"
        >
          <CIcon name="cil-laptop" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="gradient-warning"
          :icon-padding="false"
        >
          <CIcon name="cil-moon" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="gradient-danger"
          :icon-padding="false"
        >
          <CIcon name="cil-bell" width="24"/>
        </CWidgetIcon>
      </CCol>
    </CRow>
    <CRow>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="gradient-primary"
          :icon-padding="false"
        >
          <CIcon name="cil-settings" class="mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="gradient-info"
          :icon-padding="false"
        >
          <CIcon name="cil-laptop" class="mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="gradient-warning"
          :icon-padding="false"
        >
          <CIcon name="cil-moon" class="mx-5 " width="24"/>
          <template #footer>
            <CCardFooter class="px-3 py-2">
              <CLink
                class="font-weight-bold font-xs text-muted d-flex justify-content-between"
                href="https://coreui.io/"
                target="_blank"
              >
                View more
                <CIcon name="cil-arrow-right" width="16"/>
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
          color="gradient-primary"
          :icon-padding="false"
          link="#"
        >
          <CIcon name="cil-settings" class="mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="gradient-info"
          :icon-padding="false"
          link="#"
        >
          <CIcon name="cil-laptop" class="mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="gradient-warning"
          :icon-padding="false"
          link="#"
        >
          <CIcon name="cil-moon" class="mx-5" width="24"/>
        </CWidgetIcon>
      </CCol>
    </CRow> -->
    <WidgetsBrand noCharts/>
    <WidgetsBrand/>
    <CCardGroup class="mb-4">
      <CWidgetProgressIcon
        header="87.500"
        text="Visitors"
        color="gradient-info"
      >
        <CIcon name="cil-people" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="385"
        text="New Clients"
        color="gradient-success"
      >
        <CIcon name="cil-userFollow" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="1238"
        text="Products sold"
        color="gradient-warning"
      >
        <CIcon name="cil-basket" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="28%"
        text="Returning Visitors"
      >
        <CIcon name="cil-chartPie" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="5:34:11"
        text="Avg. Time"
        color="gradient-danger"
      >
        <CIcon name="cil-speedometer" height="36"/>
      </CWidgetProgressIcon>
    </CCardGroup>
    <CCardGroup class="mb-4">
      <CWidgetProgressIcon
        header="87.500"
        text="Visitors"
        color="gradient-info"
        inverse
      >
        <CIcon name="cil-people" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="385"
        text="New Clients"
        color="gradient-success"
        inverse
      >
        <CIcon name="cil-userFollow" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="1238"
        text="Products sold"
        color="gradient-warning"
        inverse
      >
        <CIcon name="cil-basket" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="28%"
        text="Returning Visitors"
        color="gradient-primary"
        inverse
      >
        <CIcon name="cil-chartPie" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="5:34:11"
        text="Avg. Time"
        color="gradient-danger"
        inverse
      >
        <CIcon name="cil-speedometer" height="36"/>
      </CWidgetProgressIcon>
    </CCardGroup>
    <CRow>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="87.500"
          text="Visitors"
          color="gradient-info"
        >
          <CIcon name="cil-people" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="385"
          text="New Clients"
          color="gradient-success"
        >
          <CIcon name="cil-userFollow" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="1238"
          text="Products sold"
          color="gradient-warning"
        >
          <CIcon name="cil-basket" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="28%"
          text="Returning Visitors"
          color="gradient-primary"
        >
          <CIcon name="cil-chartPie" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="5:34:11"
          text="Avg. Time"
          color="gradient-danger"
        >
          <CIcon name="cil-speedometer" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="972"
          text="comments"
          color="gradient-info"
        >
          <CIcon name="cil-speech" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="87.500"
          text="Visitors"
          color="gradient-info"
          inverse
        >
          <CIcon name="cil-people" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="385"
          text="New Clients"
          color="gradient-success"
          inverse
        >
          <CIcon name="cil-userFollow" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="1238"
          text="Products sold"
          color="gradient-warning"
          inverse
        >
          <CIcon name="cil-basket" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="28%"
          text="Returning Visitors"
          color="gradient-primary"
          inverse
        >
          <CIcon name="cil-chartPie" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="5:34:11"
          text="Avg. Time"
          color="gradient-danger"
          inverse
        >
          <CIcon name="cil-speedometer" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="972"
          text="comments"
          color="gradient-info"
          inverse
        >
          <CIcon name="cil-speech" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
    </CRow>
    <WidgetsDropdown/>
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
