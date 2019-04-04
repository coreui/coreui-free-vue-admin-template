<template>
  <div class="animated fadeIn">
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
            class="progress-xs my-3 mb-0"
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
        <CWidgetProgress header="$98.111,00" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="warning" :value="25"/>
      </CCol>
      <CCol sm="6" lg="3">
          <CWidgetProgress header="2 TB" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                    variant="danger" :value="25"/>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetProgress header="89.9%" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="success" inverse :value="25"/>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress header="12.124" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="info" inverse :value="25"/>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress header="$98.111,00" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="warning" inverse :value="25"/>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetProgress header="2 TB" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="danger" inverse :value="25"/>
      </CCol>
    </CRow>
    <CRow>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          addIconClasses="fa fa-cogs bg-primary"
        />
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          addIconClasses="fa fa-laptop bg-info"
          text="Income"
        />
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          addIconClasses="fa fa-moon-o bg-warning"
          text="Income"
        />
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          addIconClasses="fa fa-bell bg-danger"
          text="Income"
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          addIconClasses="fa fa-cogs bg-primary"
          text="Income"
          link="#"
        />
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          addIconClasses="fa fa-laptop bg-info"
          text="Income"
          link="#"
        />
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          addIconClasses="fa fa-moon-o bg-warning bg-primary"
          text="Income" link="#"
        />
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          addIconClasses="fa fa-bell bg-danger"
          text="Income"
          link="#"
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          addIconClasses="fa fa-cogs bg-primary"
          noPadding
        />
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          addIconClasses="fa fa-laptop bg-info"
          noPadding
        />
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          addIconClasses="fa fa-moon-o bg-warning bg-primary"
          noPadding
        />
      </CCol>
      <CCol col="12" sm="6" lg="3">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          addIconClasses="fa fa-bell bg-danger"
          noPadding
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          addIconClasses="fa fa-cogs bg-primary px-5"
          noPadding
        />
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          addIconClasses="fa fa-laptop bg-info px-5"
          noPadding
        />
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          addIconClasses="fa fa-moon-o bg-warning bg-primary px-5"
          noPadding
        />
      </CCol>
    </CRow>
    <CRow>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          addIconClasses="fa fa-cogs bg-primary px-5"
          noPadding
          link="#"
        />
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          addIconClasses="fa fa-laptop bg-info px-5"
          noPadding
          link="#"
        />
      </CCol>
      <CCol col="12" sm="6" lg="4">
        <CWidgetIcon
          header="$1.999,50"
          text="Income"
          addIconClasses="fa fa-moon-o bg-warning bg-primary px-5"
          noPadding
          link="#"
        />
      </CCol>
    </CRow>
    <WidgetsSocial noCharts/>
    <WidgetsSocial/>
    <CCardGroup class="mb-4">
      <CWidgetProgressIcon iconClasses="icon-people" header="87.500" text="Visitors" variant="info"/>
      <CWidgetProgressIcon iconClasses="icon-user-follow" header="385" text="New Clients" variant="success"/>
      <CWidgetProgressIcon iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning"/>
      <CWidgetProgressIcon iconClasses="icon-pie-chart" header="28%" text="Returning Visitors"/>
      <CWidgetProgressIcon iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="danger"/>
    </CCardGroup>
    <CCardGroup class="mb-4">
      <CWidgetProgressIcon iconClasses="icon-people" header="87.500" text="Visitors" variant="info" inverse/>
      <CWidgetProgressIcon iconClasses="icon-user-follow" header="385" text="New Clients" variant="success" inverse/>
      <CWidgetProgressIcon iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning" inverse/>
      <CWidgetProgressIcon iconClasses="icon-pie-chart" header="28%" variant="primary" text="Returning Visitors" inverse/>
      <CWidgetProgressIcon iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="danger" inverse/>
    </CCardGroup>
    <CRow>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon iconClasses="icon-people" header="87.500" text="visitors" variant="info"/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon iconClasses="icon-user-follow" header="385" text="New Clients" variant="success"/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning"/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon iconClasses="icon-pie-chart" header="28%" text="Returning Visitors"/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" >
          <CProgress variant="danger" :value="25" class="progress-xs my-3 mb-0"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon iconClasses="icon-speech" header="972" text="Comments" variant="info"/>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon iconClasses="icon-people" header="87.500" text="visitors" variant="info" inverse/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon iconClasses="icon-user-follow" header="385" text="New Clients" variant="success" inverse/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning" inverse/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon iconClasses="icon-pie-chart" header="28%" text="Returning Visitors" variant="primary" inverse/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="danger" inverse/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon iconClasses="icon-speech" header="972" text="Comments" variant="info" inverse/>
      </CCol>
    </CRow>
    <WidgetsDropdown/>
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetSmallText rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <CSimpleLineChart style="height:40px" chartId="CWidgetSmallText_line1" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <CSimpleBarChart style="height:40px"
                           :data="[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]"
                           label="Sales"
          />
        </CWidgetSmallText>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetSmallText variant='success' rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <CSimpleLineChart style="height:40px" chartId="CWidgetSmallText_line2" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <CSimpleBarChart style="height:40px" chartId="CWidgetSmallText_bar2" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
        </CWidgetSmallText>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetSmallText variant='danger' rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <CSimpleLineChart style="height:40px" chartId="CWidgetSmallText_line3" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <CSimpleBarChart style="height:40px" chartId="CWidgetSmallText_bar3" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
        </CWidgetSmallText>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetSmallText variant='warning' rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <CSimpleLineChart style="height:40px" chartId="CWidgetSmallText_line4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <CSimpleBarChart style="height:40px" chartId="CWidgetSmallText_bar4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
        </CWidgetSmallText>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="4" lg="2">
        <CWidgetSimple header='title' text='1,123'>
          <CSimpleLineChart style="height:40px" chartId="CWidgetSimple_1" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                       label='Sales' borderColor='danger'/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple header='title' text='1,123'>
          <CSimpleLineChart style="height:40px" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                       label='Sales' borderColor='primary'/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple header='title' text='1,123'>
                       <CSimpleLineChart style="height:40px"
                                        :data="[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]"
                                        label="Sales"
                                        borderColor="success"
                       />
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple  header='title' text='1,123'>
          <CSimpleBarChart style="height:40px" chartId="CWidgetSimple_4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                      label='Sales' color='danger'/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple  header='title' text='1,123'>
          <CSimpleBarChart style="height:40px" chartId="CWidgetSimple_5" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                      label='Sales' color='primary'/>
        </CWidgetSimple>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidgetSimple  header='title' text='1,123'>
          <CSimpleBarChart style="height:40px"  :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                      label='Sales' color='success'/>
        </CWidgetSimple>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import WidgetsSocial from './WidgetsSocial'
import WidgetsDropdown from './WidgetsDropdown'

export default {
  name: 'Widgets',
  components: {
    WidgetsSocial,
    WidgetsDropdown
  }
}
</script>
