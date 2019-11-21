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
            color="success"
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
          <CIcon name="cil-settings" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="info"
        >
          <CIcon name="cil-laptop" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="warning"
        >
          <CIcon name="cil-moon" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="danger"
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
          color="primary"
          :icon-padding="false"
        >
          <CIcon name="cil-settings" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="info"
          :icon-padding="false"
        >
          <CIcon name="cil-laptop" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="warning"
          :icon-padding="false"
        >
          <CIcon name="cil-moon" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="danger"
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
          color="primary"
          :icon-padding="false"
        >
          <CIcon name="cil-settings" class="mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="info"
          :icon-padding="false"
        >
          <CIcon name="cil-laptop" class="mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          color="warning"
          :icon-padding="false"
        >
          <CIcon name="cil-moon" class="mx-5 " width="24"/>
          <template #footer>
            <CCardFooter class="card-footer px-3 py-2">
              <CLink
                class="font-weight-bold font-xs btn-block text-muted"
                href="https://coreui.io/"
              >
                View more
                <CIcon name="cil-arrowRight" class="float-right" width="16"/>
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
          color="info"
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
          color="warning"
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
        color="info"
      >
        <CIcon name="cil-people" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="385"
        text="New Clients"
        color="success"
      >
        <CIcon name="cil-userFollow" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="1238"
        text="Products sold"
        color="warning"
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
        color="danger"
      >
        <CIcon name="cil-speedometer" height="36"/>
      </CWidgetProgressIcon>
    </CCardGroup>
    <CCardGroup class="mb-4">
      <CWidgetProgressIcon
        header="87.500"
        text="Visitors"
        color="info"
        inverse
      >
        <CIcon name="cil-people" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="385"
        text="New Clients"
        color="success"
        inverse
      >
        <CIcon name="cil-userFollow" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="1238"
        text="Products sold"
        color="warning"
        inverse
      >
        <CIcon name="cil-basket" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="28%"
        text="Returning Visitors"
        color="primary"
        inverse
      >
        <CIcon name="cil-chartPie" height="36"/>
      </CWidgetProgressIcon>
      <CWidgetProgressIcon
        header="5:34:11"
        text="Avg. Time"
        color="danger"
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
          color="info"
        >
          <CIcon name="cil-people" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="385"
          text="New Clients"
          color="success"
        >
          <CIcon name="cil-userFollow" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="1238"
          text="Products sold"
          color="warning"
        >
          <CIcon name="cil-basket" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="28%"
          text="Returning Visitors"
          color="primary"
        >
          <CIcon name="cil-chartPie" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="5:34:11"
          text="Avg. Time"
          color="danger"
        >
          <CIcon name="cil-speedometer" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="972"
          text="comments"
          color="info"
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
          color="info"
          inverse
        >
          <CIcon name="cil-people" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="385"
          text="New Clients"
          color="success"
          inverse
        >
          <CIcon name="cil-userFollow" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="1238"
          text="Products sold"
          color="warning"
          inverse
        >
          <CIcon name="cil-basket" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="28%"
          text="Returning Visitors"
          color="primary"
          inverse
        >
          <CIcon name="cil-chartPie" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="5:34:11"
          text="Avg. Time"
          color="danger"
          inverse
        >
          <CIcon name="cil-speedometer" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="972"
          text="comments"
          color="info"
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
