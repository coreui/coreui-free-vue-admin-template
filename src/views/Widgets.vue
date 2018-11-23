<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" lg="3">
        <c-widget01 header="89.9%" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim.">
          <CProgress variant="success" :value="25" class="progress-xs my-3 mb-0"/>
        </c-widget01>
      </b-col>
      <b-col sm="6" lg="3">
        <c-widget01 header="12.124" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="info" :value="25"/>
      </b-col>
      <b-col sm="6" lg="3">
        <c-widget01 header="$98.111,00" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="warning" :value="25"/>
      </b-col>
      <b-col sm="6" lg="3">
          <c-widget01 header="2 TB" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                    variant="danger" :value="25"/>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col sm="6" lg="3">
        <c-widget01 header="89.9%" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="success" inverse :value="25"/>
      </b-col>
      <b-col sm="6" lg="3">
        <c-widget01 header="12.124" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="info" inverse :value="25"/>
      </b-col>
      <b-col sm="6" lg="3">
        <c-widget01 header="$98.111,00" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="warning" inverse :value="25"/>
      </b-col>
      <b-col sm="6" lg="3">
        <c-widget01 header="2 TB" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="danger" inverse :value="25"/>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col cols="12" sm="6" lg="3">
        <c-widget02 header="$1.999,50" iconClasses="fa fa-cogs bg-primary" text="Income"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <c-widget02 header="$1.999,50" iconClasses="fa fa-laptop bg-info" text="Income"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <c-widget02 header="$1.999,50" iconClasses="fa fa-moon-o bg-warning bg-primary" text="Income"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <c-widget02 header="$1.999,50" iconClasses="fa fa-bell bg-danger" text="Income"/>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col cols="12" sm="6" lg="3">
        <c-widget02 header="$1.999,50" iconClasses="fa fa-cogs bg-primary" text="Income" link="#"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <c-widget02 header="$1.999,50" iconClasses="fa fa-laptop bg-info" text="Income" link="#"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <c-widget02 header="$1.999,50" iconClasses="fa fa-moon-o bg-warning bg-primary" text="Income" link="#"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <c-widget02 header="$1.999,50" iconClasses="fa fa-bell bg-danger" text="Income" link="#"/>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col cols="12" sm="6" lg="3">
        <c-widget03 header="$1.999,50" text="Income" iconClasses="fa fa-cogs bg-primary"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <c-widget03 header="$1.999,50" text="Income" iconClasses="fa fa-laptop bg-info"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <c-widget03 header="$1.999,50" text="Income" iconClasses="fa fa-moon-o bg-warning bg-primary"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <c-widget03 header="$1.999,50" text="Income" iconClasses="fa fa-bell bg-danger"/>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col cols="12" sm="6" lg="4">
        <c-widget03 header="$1.999,50" text="Income" iconClasses="fa fa-cogs bg-primary px-5"/>
      </b-col>
      <b-col cols="12" sm="6" lg="4">
        <c-widget03 header="$1.999,50" text="Income" iconClasses="fa fa-laptop bg-info px-5"/>
      </b-col>
      <b-col cols="12" sm="6" lg="4">
        <c-widget03 header="$1.999,50" text="Income" iconClasses="fa fa-moon-o bg-warning bg-primary px-5"/>
      </b-col>

    </b-row><!--/.row-->
    <b-row>
      <b-col md="3" sm="6">
        <c-widget04 variant="facebook" rightHeader="89k" rightFooter="friends" leftHeader="459" leftFooter="feeds"/>
       </b-col>
       <b-col md="3" sm="6">
        <c-widget04 variant="twitter" rightHeader="973k" rightFooter="followers" leftHeader="1.792" leftFooter="tweets"/>
       </b-col>
       <b-col md="3" sm="6">
        <c-widget04 variant="linkedin" rightHeader="500+" rightFooter="contracts" leftHeader="292" leftFooter="feeds"/>
       </b-col>
       <b-col md="3" sm="6" class="codeContainer">
        <c-widget04  variant='warning' rightHeader='0:57' rightFooter='time' leftHeader='17' leftFooter='percentage'>
          <i slot="icon" class="fa fa-battery-1"></i>
        </c-widget04>
       </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col md="3" sm="6">
        <c-widget04 variant="facebook" rightHeader="89k" rightFooter="friends" leftHeader="459" leftFooter="feeds">
          <c-simple-line-chart chartId="facebook" :data='[65, 59, 84, 84, 51, 55, 40]' label='Friends'
                       :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                       style='height:100px' color='rgba(255,255,255,.1)'/>
        </c-widget04>
       </b-col>
       <b-col md="3" sm="6">
        <c-widget04 variant="twitter" rightHeader="973k" rightFooter="followers" leftHeader="1.792" leftFooter="tweets">
          <c-simple-line-chart chartId="twitter" :data='[1, 13, 9, 17, 34, 41, 38]' label='Followers'
                       :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                       style='height:100px'  color='rgba(255,255,255,.1)'/>
        </c-widget04>
       </b-col>
       <b-col md="3" sm="6">
        <c-widget04 variant="linkedin" rightHeader="500+" rightFooter="contracts" leftHeader="292" leftFooter="feeds">
          <c-simple-line-chart chartId="linkedIn" :data='[78, 81, 80, 45, 34, 12, 40]' label='Contracts'
                       :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                       style='height:100px'  color='rgba(255,255,255,.1)'/>
        </c-widget04>
       </b-col>
       <b-col md="3" sm="6">
        <c-widget04 variant='google-plus'
                    rightHeader='894'
                    rightFooter='followers'
                    leftHeader='92' leftFooter='circles'>
          <c-simple-line-chart chartId="google-plus"
                               :data='[35, 23, 56, 22, 97, 23, 64]'
                               label='Followers'
                               :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                               style='height:100px'
                               color='rgba(255,255,255,.1)'/>
        </c-widget04>
       </b-col>
    </b-row><!--/.row-->
    <b-card-group class="mb-4">
      <c-widget05 iconClasses="icon-people" header="87.500" text="Visitors" variant="info"/>
      <c-widget05 iconClasses="icon-user-follow" header="385" text="New Clients" variant="success"/>
      <c-widget05 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning"/>
      <c-widget05 iconClasses="icon-pie-chart" header="28%" text="Returning Visitors"/>
      <c-widget05 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="danger"/>
    </b-card-group>
    <b-card-group class="mb-4">
      <c-widget05 iconClasses="icon-people" header="87.500" text="Visitors" variant="info" inverse/>
      <c-widget05 iconClasses="icon-user-follow" header="385" text="New Clients" variant="success" inverse/>
      <c-widget05 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning" inverse/>
      <c-widget05 iconClasses="icon-pie-chart" header="28%" variant="primary" text="Returning Visitors" inverse/>
      <c-widget05 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="danger" inverse/>
    </b-card-group>
    <b-row>
      <b-col sm="6" md="2">
        <c-widget05 iconClasses="icon-people" header="87.500" text="visitors" variant="info"/>
      </b-col>
      <b-col sm="6" md="2">
        <c-widget05 iconClasses="icon-user-follow" header="385" text="New Clients" variant="success"/>
      </b-col>
      <b-col sm="6" md="2">
        <c-widget05 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning"/>
      </b-col>
      <b-col sm="6" md="2">
        <c-widget05 iconClasses="icon-pie-chart" header="28%" text="Returning Visitors"/>
      </b-col>
      <b-col sm="6" md="2">
        <c-widget05 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" >
          <CProgress variant="danger" :value="25" class="progress-xs my-3 mb-0"/>
        </c-widget05>
      </b-col>
      <b-col sm="6" md="2">
        <c-widget05 iconClasses="icon-speech" header="972" text="Comments" variant="info"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" md="2">
        <c-widget05 iconClasses="icon-people" header="87.500" text="visitors" variant="info" inverse/>
      </b-col>
      <b-col sm="6" md="2">
        <c-widget05 iconClasses="icon-user-follow" header="385" text="New Clients" variant="success" inverse/>
      </b-col>
      <b-col sm="6" md="2">
        <c-widget05 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning" inverse/>
      </b-col>
      <b-col sm="6" md="2">
        <c-widget05 iconClasses="icon-pie-chart" header="28%" text="Returning Visitors" variant="primary" inverse/>
      </b-col>
      <b-col sm="6" md="2">
        <c-widget05 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="danger" inverse/>
      </b-col>
      <b-col sm="6" md="2">
        <c-widget05 iconClasses="icon-speech" header="972" text="Comments" variant="info" inverse/>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" lg="3">
        <c-widget06 cardClasses="bg-primary" header="9.823" text="Members online">
          <template slot='dropdown'>
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </template>
          <c-simple-pointed-chart class='px-3' :data='[65, 59, 84, 84, 51, 55, 40]'
                         :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                         style='height:70px' label='Members' pointHoverColor='primary'/>
        </c-widget06>
      </b-col>
      <b-col sm="6" lg="3">
        <c-widget06 cardClasses="bg-info" header="9.823" text="Members online">
          <b-dropdown slot="dropdown" class="float-right" variant="transparent p-0" right no-caret>
            <i slot="button-content"
               class="icon-location-pin"
            ></i>
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else here...</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
          <CSimplePointedChart class="px-3"
                               :data="[1, 18, 9, 17, 34, 22, 11]"
                               :labels="['January', 'February', 'March', 'April',  'May', 'June', 'July']"
                               style="height:70px"
                               label="Members"
                               :options="{elements: {line: {tension: 0.00001}}}"
                               pointHoverColor="info"
          />
        </c-widget06>
      </b-col>
      <b-col sm="6" lg="3">
        <c-widget06 cardClasses="bg-warning" header="9.823" text="Members online">
          <template slot='dropdown'>
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </template>
          <c-simple-line-chart chartId="c-widget06_3" :data='[78, 81, 80, 45, 34, 12, 40]'
                         :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                         style='height:70px' color ='rgba(255,255,255,.2)' label='Members'
                         :options="{elements: {line: {borderWidth: 2.5}}}" pointHoverColor='warning'/>
        </c-widget06>
      </b-col>
      <b-col sm="6" lg="3">
        <c-widget06 cardClasses="bg-danger" header="9.823" text="Members online">
          <template slot="dropdown">
            <b-dropdown class="float-right" variant="transparent p-0" right>
              <template slot="button-content">
                <i class="icon-settings"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </template>
          <c-simple-bar-chart chartId="CWidget06_4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                        label='Members' color='rgb(250, 152, 152)' style='height:70px' />
        </c-widget06>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" lg="3">
        <c-widget07 rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <c-simple-line-chart style="height:40px" chartId="c-widget07_line1" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <CSimpleBarChart style="height:40px"
                           :data="[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]"
                           label="Sales"
          />
        </c-widget07>
      </b-col>
      <b-col sm="6" lg="3">
        <c-widget07 cardClasses='bg-success' rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <c-simple-line-chart style="height:40px" chartId="c-widget07_line2" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <c-simple-bar-chart style="height:40px" chartId="c-widget07_bar2" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
        </c-widget07>
      </b-col>
      <b-col sm="6" lg="3">
        <c-widget07 cardClasses='bg-danger' rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <c-simple-line-chart style="height:40px" chartId="c-widget07_line3" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <c-simple-bar-chart style="height:40px" chartId="c-widget07_bar3" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
        </c-widget07>
      </b-col>
      <b-col sm="6" lg="3">
        <c-widget07 cardClasses='bg-warning' rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <c-simple-line-chart style="height:40px" chartId="c-widget07_line4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <c-simple-bar-chart style="height:40px" chartId="c-widget07_bar4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
        </c-widget07>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4" lg="2">
        <c-widget08 header='title' text='1,123'>
          <c-simple-line-chart style="height:40px" chartId="c-widget08_1" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                       label='Sales' borderColor='danger'/>
        </c-widget08>
      </b-col>
      <b-col sm="4" lg="2">
        <c-widget08 header='title' text='1,123'>
          <c-simple-line-chart style="height:40px" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                       label='Sales' borderColor='primary'/>
        </c-widget08>
      </b-col>
      <b-col sm="4" lg="2">
        <c-widget08 header='title' text='1,123'>
                       <CSimpleLineChart style="height:40px"
                                        :data="[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]"
                                        label="Sales"
                                        borderColor="success"
                       />
        </c-widget08>
      </b-col>
      <b-col sm="4" lg="2">
        <c-widget08  header='title' text='1,123'>
          <c-simple-bar-chart style="height:40px" chartId="c-widget08_4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                      label='Sales' color='danger'/>
        </c-widget08>
      </b-col>
      <b-col sm="4" lg="2">
        <c-widget08  header='title' text='1,123'>
          <c-simple-bar-chart style="height:40px" chartId="c-widget08_5" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                      label='Sales' color='primary'/>
        </c-widget08>
      </b-col>
      <b-col sm="4" lg="2">
        <c-widget08  header='title' text='1,123'>
          <c-simple-bar-chart style="height:40px"  :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                      label='Sales' color='success'/>
        </c-widget08>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Widgets'
}
</script>
