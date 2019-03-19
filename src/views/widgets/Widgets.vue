<template>
  <div class="animated fadeIn">
    <CRow>
      <CCol sm="6" lg="3">
        <CWidget01 header="89.9%" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim.">
          <CProgress variant="success" :value="25" class="progress-xs my-3 mb-0"/>
        </CWidget01>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidget01 header="12.124" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="info" :value="25"/>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidget01 header="$98.111,00" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="warning" :value="25"/>
      </CCol>
      <CCol sm="6" lg="3">
          <CWidget01 header="2 TB" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                    variant="danger" :value="25"/>
      </CCol>
    </CRow><!--/.row-->
    <CRow>
      <CCol sm="6" lg="3">
        <CWidget01 header="89.9%" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="success" inverse :value="25"/>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidget01 header="12.124" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="info" inverse :value="25"/>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidget01 header="$98.111,00" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="warning" inverse :value="25"/>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidget01 header="2 TB" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="danger" inverse :value="25"/>
      </CCol>
    </CRow><!--/.row-->
    <CRow>
      <CCol cols="12" sm="6" lg="3">
        <CWidget02 header="$1.999,50" iconClasses="fa fa-cogs bg-primary" text="Income"/>
      </CCol>
      <CCol cols="12" sm="6" lg="3">
        <CWidget02 header="$1.999,50" iconClasses="fa fa-laptop bg-info" text="Income"/>
      </CCol>
      <CCol cols="12" sm="6" lg="3">
        <CWidget02 header="$1.999,50" iconClasses="fa fa-moon-o bg-warning bg-primary" text="Income"/>
      </CCol>
      <CCol cols="12" sm="6" lg="3">
        <CWidget02 header="$1.999,50" iconClasses="fa fa-bell bg-danger" text="Income"/>
      </CCol>
    </CRow><!--/.row-->
    <CRow>
      <CCol cols="12" sm="6" lg="3">
        <CWidget02 header="$1.999,50" iconClasses="fa fa-cogs bg-primary" text="Income" link="#"/>
      </CCol>
      <CCol cols="12" sm="6" lg="3">
        <CWidget02 header="$1.999,50" iconClasses="fa fa-laptop bg-info" text="Income" link="#"/>
      </CCol>
      <CCol cols="12" sm="6" lg="3">
        <CWidget02 header="$1.999,50" iconClasses="fa fa-moon-o bg-warning bg-primary" text="Income" link="#"/>
      </CCol>
      <CCol cols="12" sm="6" lg="3">
        <CWidget02 header="$1.999,50" iconClasses="fa fa-bell bg-danger" text="Income" link="#"/>
      </CCol>
    </CRow><!--/.row-->
    <CRow>
      <CCol cols="12" sm="6" lg="3">
        <CWidget03 header="$1.999,50" text="Income" iconClasses="fa fa-cogs bg-primary"/>
      </CCol>
      <CCol cols="12" sm="6" lg="3">
        <CWidget03 header="$1.999,50" text="Income" iconClasses="fa fa-laptop bg-info"/>
      </CCol>
      <CCol cols="12" sm="6" lg="3">
        <CWidget03 header="$1.999,50" text="Income" iconClasses="fa fa-moon-o bg-warning bg-primary"/>
      </CCol>
      <CCol cols="12" sm="6" lg="3">
        <CWidget03 header="$1.999,50" text="Income" iconClasses="fa fa-bell bg-danger"/>
      </CCol>
    </CRow><!--/.row-->
    <CRow>
      <CCol cols="12" sm="6" lg="4">
        <CWidget03 header="$1.999,50" text="Income" iconClasses="fa fa-cogs bg-primary px-5"/>
      </CCol>
      <CCol cols="12" sm="6" lg="4">
        <CWidget03 header="$1.999,50" text="Income" iconClasses="fa fa-laptop bg-info px-5"/>
      </CCol>
      <CCol cols="12" sm="6" lg="4">
        <CWidget03 header="$1.999,50" text="Income" iconClasses="fa fa-moon-o bg-warning bg-primary px-5"/>
      </CCol>

    </CRow><!--/.row-->
    <Widgets04 noCharts/>
    <Widgets04/>
    <CCardGroup class="mb-4">
      <CWidget05 iconClasses="icon-people" header="87.500" text="Visitors" variant="info"/>
      <CWidget05 iconClasses="icon-user-follow" header="385" text="New Clients" variant="success"/>
      <CWidget05 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning"/>
      <CWidget05 iconClasses="icon-pie-chart" header="28%" text="Returning Visitors"/>
      <CWidget05 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="danger"/>
    </CCardGroup>
    <CCardGroup class="mb-4">
      <CWidget05 iconClasses="icon-people" header="87.500" text="Visitors" variant="info" inverse/>
      <CWidget05 iconClasses="icon-user-follow" header="385" text="New Clients" variant="success" inverse/>
      <CWidget05 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning" inverse/>
      <CWidget05 iconClasses="icon-pie-chart" header="28%" variant="primary" text="Returning Visitors" inverse/>
      <CWidget05 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="danger" inverse/>
    </CCardGroup>
    <CRow>
      <CCol sm="6" md="2">
        <CWidget05 iconClasses="icon-people" header="87.500" text="visitors" variant="info"/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidget05 iconClasses="icon-user-follow" header="385" text="New Clients" variant="success"/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidget05 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning"/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidget05 iconClasses="icon-pie-chart" header="28%" text="Returning Visitors"/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidget05 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" >
          <CProgress variant="danger" :value="25" class="progress-xs my-3 mb-0"/>
        </CWidget05>
      </CCol>
      <CCol sm="6" md="2">
        <CWidget05 iconClasses="icon-speech" header="972" text="Comments" variant="info"/>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="6" md="2">
        <CWidget05 iconClasses="icon-people" header="87.500" text="visitors" variant="info" inverse/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidget05 iconClasses="icon-user-follow" header="385" text="New Clients" variant="success" inverse/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidget05 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning" inverse/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidget05 iconClasses="icon-pie-chart" header="28%" text="Returning Visitors" variant="primary" inverse/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidget05 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="danger" inverse/>
      </CCol>
      <CCol sm="6" md="2">
        <CWidget05 iconClasses="icon-speech" header="972" text="Comments" variant="info" inverse/>
      </CCol>
    </CRow>
    <Widgets06/>
    <CRow>
      <CCol sm="6" lg="3">
        <CWidget07 rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <CSimpleLineChart style="height:40px" chartId="CWidget07_line1" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <CSimpleBarChart style="height:40px"
                           :data="[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]"
                           label="Sales"
          />
        </CWidget07>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidget07 variant='success' rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <CSimpleLineChart style="height:40px" chartId="CWidget07_line2" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <CSimpleBarChart style="height:40px" chartId="CWidget07_bar2" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
        </CWidget07>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidget07 variant='danger' rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <CSimpleLineChart style="height:40px" chartId="CWidget07_line3" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <CSimpleBarChart style="height:40px" chartId="CWidget07_bar3" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
        </CWidget07>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidget07 variant='warning' rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <CSimpleLineChart style="height:40px" chartId="CWidget07_line4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <CSimpleBarChart style="height:40px" chartId="CWidget07_bar4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
        </CWidget07>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="4" lg="2">
        <CWidget08 header='title' text='1,123'>
          <CSimpleLineChart style="height:40px" chartId="CWidget08_1" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                       label='Sales' borderColor='danger'/>
        </CWidget08>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidget08 header='title' text='1,123'>
          <CSimpleLineChart style="height:40px" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                       label='Sales' borderColor='primary'/>
        </CWidget08>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidget08 header='title' text='1,123'>
                       <CSimpleLineChart style="height:40px"
                                        :data="[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]"
                                        label="Sales"
                                        borderColor="success"
                       />
        </CWidget08>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidget08  header='title' text='1,123'>
          <CSimpleBarChart style="height:40px" chartId="CWidget08_4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                      label='Sales' color='danger'/>
        </CWidget08>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidget08  header='title' text='1,123'>
          <CSimpleBarChart style="height:40px" chartId="CWidget08_5" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                      label='Sales' color='primary'/>
        </CWidget08>
      </CCol>
      <CCol sm="4" lg="2">
        <CWidget08  header='title' text='1,123'>
          <CSimpleBarChart style="height:40px"  :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                      label='Sales' color='success'/>
        </CWidget08>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import Widgets04 from './Widgets04'
import Widgets06 from './Widgets06'

export default {
  name: 'Widgets',
  components: {
    Widgets04,
    Widgets06
  }
}
</script>
