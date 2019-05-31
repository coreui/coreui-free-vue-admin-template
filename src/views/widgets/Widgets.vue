<template>
  <div class="c-animated c-fadeIn">
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
          link="#"
        >
          <CIcon name="settings" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="info"
          link="#"
        >
          <CIcon name="laptop" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="warning"
          link="#"
        >
          <CIcon name="moon" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="danger"
          link="#"
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
          noPadding
        >
          <CIcon name="settings" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="info"
          noPadding
        >
          <CIcon name="laptop" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="warning"
          noPadding
        >
          <CIcon name="moon" width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="danger"
          noPadding
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
          noPadding
        >
          <CIcon name="settings" class="c-mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="info"
          noPadding
        >
          <CIcon name="laptop" class="c-mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="warning"
          noPadding
        >
          <CIcon name="moon" class="c-mx-5 " width="24"/>
        </CWidgetIcon>
      </CCol>
    </CRow>
    <CRow>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          variant="primary"
          noPadding
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
          noPadding
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
          noPadding
          link="#"
        >
          <CIcon name="moon" class="c-mx-5" width="24"/>
        </CWidgetIcon>
      </CCol>
    </CRow>
    <WidgetsSocial noCharts/>
    <WidgetsSocial/>
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
        <CIcon name="chart" height="36"/>
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
        <CIcon name="chart" height="36"/>
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
          <CIcon name="chart" height="36"/>
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
          <CIcon name="chart" height="36"/>
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
        <CWidgetSmallText
          rightHeader="SALE"
          rightFooter="Today 6:43 AM"
          leftHeader="$1.890,65"
          leftFooter="+432,50 (15,78%)"
        >
          <CChartLineSimple style="height:40px"/>
          <CChartBarSimple style="height:40px"/>
        </CWidgetSmallText>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetSmallText
          variant="success"
          rightHeader="SALE"
          rightFooter="Today 6:43 AM"
          leftHeader="$1.890,65"
          leftFooter="+432,50 (15,78%)"
        >
          <CChartLineSimple style="height:40px"/>
          <CChartBarSimple style="height:40px"/>
        </CWidgetSmallText>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetSmallText
          variant="danger"
          rightHeader="SALE"
          rightFooter="Today 6:43 AM"
          leftHeader="$1.890,65"
          leftFooter="+432,50 (15,78%)"
        >
          <CChartLineSimple style="height:40px"/>
          <CChartBarSimple style="height:40px"/>
        </CWidgetSmallText>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetSmallText
          variant="warning"
          rightHeader="SALE"
          rightFooter="Today 6:43 AM"
          leftHeader="$1.890,65"
          leftFooter="+432,50 (15,78%)"
        >
          <CChartLineSimple style="height:40px"/>
          <CChartBarSimple style="height:40px"/>
        </CWidgetSmallText>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="4" lg="2">
        <CWidgetSimple header="title" text="1,123">
          <CChartLineSimple style="height:40px" borderColor="danger"/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple header="title" text="1,123">
          <CChartLineSimple style="height:40px" borderColor="primary"/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple header="title" text="1,123">
          <CChartLineSimple style="height:40px" borderColor="success"/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple  header="title" text="1,123">
          <CChartBarSimple style="height:40px" backgroundColor="danger"/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple  header="title" text="1,123">
          <CChartBarSimple style="height:40px" backgroundColor="primary"/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple  header="title" text="1,123">
          <CChartBarSimple style="height:40px" backgroundColor="success"/>
        </CWidgetSimple>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import WidgetsSocial from './WidgetsSocial'
import WidgetsDropdown from './WidgetsDropdown'
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'

export default {
  name: 'Widgets',
  components: {
    CChartLineSimple,
    CChartBarSimple,
    WidgetsSocial,
    WidgetsDropdown
  }
}
</script>
