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
    <CRow>
      <CCol sm="6" lg="3">
        <CWidget06 header="9.823" text="Members online">
          <template #dropdown>
            <CDropdown
              class="float-right"
              variant="transparent p-0"
              placement="bottom-end"
            >
              <template #buttonContent>
                <i class="icon-settings"></i>
              </template>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdown>
          </template>
          <CSimplePointedChart class='px-3' :data='[65, 59, 84, 84, 51, 55, 40]'
                         :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                         style='height:70px' label='Members' pointHoverColor='primary'/>
        </CWidget06>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidget06
          variant="info"
          header="9.823"
          text="Members online"
        >
          <template #dropdown>
            <CDropdown
              class="float-right"
              variant="transparent p-0"
             right no-caret>
              <i slot="buttonContent"
                 class="icon-location-pin"
              ></i>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdown>
          </template>

          <CSimplePointedChart class="px-3"
                               :data="[1, 18, 9, 17, 34, 22, 11]"
                               :labels="['January', 'February', 'March', 'April',  'May', 'June', 'July']"
                               style="height:70px"
                               label="Members"
                               :options="{elements: {line: {tension: 0.00001}}}"
                               pointHoverColor="info"
          />
        </CWidget06>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidget06 variant="warning" header="9.823" text="Members online">
          <template slot='dropdown'>
            <CDropdown class="float-right" variant="transparent p-0" right>
              <template slot="buttonContent">
                <i class="icon-settings"></i>
              </template>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdown>
          </template>
          <CSimpleLineChart chartId="CWidget06_3" :data='[78, 81, 80, 45, 34, 12, 40]'
                         :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                         style='height:70px' color ='rgba(255,255,255,.2)' label='Members'
                         :options="{elements: {line: {borderWidth: 2.5}}}" pointHoverColor='warning'/>
        </CWidget06>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidget06 variant="danger" header="9.823" text="Members online">
          <template slot="dropdown">
            <CDropdown class="float-right" variant="transparent p-0" right>
              <template slot="buttonContent">
                <i class="icon-settings"></i>
              </template>
              <CDropdownItem>Action</CDropdownItem>
              <CDropdownItem>Another action</CDropdownItem>
              <CDropdownItem>Something else here...</CDropdownItem>
              <CDropdownItem disabled>Disabled action</CDropdownItem>
            </CDropdown>
          </template>
          <CSimpleBarChart chartId="CWidget06_4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                        label='Members' color='rgb(250, 152, 152)' style='height:70px' />
        </CWidget06>
      </CCol>
    </CRow>
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
export default {
  name: 'Widgets',
  components: {
    Widgets04
  }
}
</script>
