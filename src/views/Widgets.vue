<template>
  <div class="animated fadeIn" @dblclick="copyTry($event)">
    <b-row>
      <b-col sm="6" lg="3">
        <widget01 header="89.9%" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="success" :value="25"/>
      </b-col>
      <b-col sm="6" lg="3">
        <widget01 header="12.124" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="info" :value="25"/>
      </b-col>
      <b-col sm="6" lg="3">
        <widget01 header="$98.111,00" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="warning" :value="25"/>
      </b-col>
      <b-col sm="6" lg="3">
          <widget01 header="2 TB" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                    variant="danger" :value="25"/>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col sm="6" lg="3">
        <widget01 header="89.9%" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="background-success" :value="25"/>
      </b-col>
      <b-col sm="6" lg="3">
        <widget01 header="12.124" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="background-info" :value="25"/>
      </b-col>
      <b-col sm="6" lg="3">
        <widget01 header="$98.111,00" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="background-warning" :value="25"/>
      </b-col>
      <b-col sm="6" lg="3">
        <widget01 header="2 TB" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
                  variant="background-danger" :value="25"/>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col cols="12" sm="6" lg="3">
        <widget02 header="$1.999,50" iconClasses="fa fa-cogs bg-primary" text="Income"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <widget02 header="$1.999,50" iconClasses="fa fa-laptop bg-info" text="Income"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <widget02 header="$1.999,50" iconClasses="fa fa-moon-o bg-warning bg-primary" text="Income"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <widget02 header="$1.999,50" iconClasses="fa fa-bell bg-danger" text="Income"/>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col cols="12" sm="6" lg="3">
        <widget02 header="$1.999,50" iconClasses="fa fa-cogs bg-primary" text="Income" :showLink="true"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <widget02 header="$1.999,50" iconClasses="fa fa-laptop bg-info" text="Income" :showLink="true"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <widget02 header="$1.999,50" iconClasses="fa fa-moon-o bg-warning bg-primary" text="Income" :showLink="true"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <widget02 header="$1.999,50" iconClasses="fa fa-bell bg-danger" text="Income" :showLink="true"/>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col cols="12" sm="6" lg="3">
        <widget03 header="$1.999,50" text="Income" iconClasses="fa fa-cogs bg-primary"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <widget03 header="$1.999,50" text="Income" iconClasses="fa fa-laptop bg-info"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <widget03 header="$1.999,50" text="Income" iconClasses="fa fa-moon-o bg-warning bg-primary"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <widget03 header="$1.999,50" text="Income" iconClasses="fa fa-bell bg-danger"/>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col cols="12" sm="6" lg="4">
        <widget03 header="$1.999,50" text="Income" iconClasses="fa fa-cogs bg-primary px-5"/>
      </b-col>
      <b-col cols="12" sm="6" lg="4">
        <widget03 header="$1.999,50" text="Income" iconClasses="fa fa-laptop bg-info px-5"/>
      </b-col>
      <b-col cols="12" sm="6" lg="4">
        <widget03 header="$1.999,50" text="Income" iconClasses="fa fa-moon-o bg-warning bg-primary px-5"/>
      </b-col>

    </b-row><!--/.row-->
    <b-row>
      <b-col md="3" sm="6">
        <widget04 type="facebook" rightHeader="89k" rightFooter="friends" leftHeader="459" leftFooter="feeds"/>
       </b-col>
       <b-col md="3" sm="6">
        <widget04 type="twitter" rightHeader="973k" rightFooter="followers" leftHeader="1.792" leftFooter="tweets"/>
       </b-col>
       <b-col md="3" sm="6">
        <widget04 type="linkedin" rightHeader="500+" rightFooter="contracts" leftHeader="292" leftFooter="feeds"/>
       </b-col>
       <b-col md="3" sm="6" class="codeContainer" data-code="<widget04 type='google-plus' rightHeader='894' rightFooter='followers' leftHeader='92' leftFooter='circles'/>">
        <widget04  type='google-plus' rightHeader='894' rightFooter='followers' leftHeader='92' leftFooter='circles'/>
       </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col md="3" sm="6">
        <widget04 type="facebook" rightHeader="89k" rightFooter="friends" leftHeader="459" leftFooter="feeds">
          <line-chart1 chartId="facebook" :data='[65, 59, 84, 84, 51, 55, 40]' label='Friends'
                       :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                       style='height:100px' backgroundColor='rgba(255,255,255,.1)'/>
        </widget04>
       </b-col>
       <b-col md="3" sm="6">
        <widget04 type="twitter" rightHeader="973k" rightFooter="followers" leftHeader="1.792" leftFooter="tweets">
          <line-chart1 chartId="twitter" :data='[1, 13, 9, 17, 34, 41, 38]' label='Followers'
                       :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                       style='height:100px'  backgroundColor='rgba(255,255,255,.1)'/>
        </widget04>
       </b-col>
       <b-col md="3" sm="6">
        <widget04 type="linkedin" rightHeader="500+" rightFooter="contracts" leftHeader="292" leftFooter="feeds">
          <line-chart1 chartId="linkedIn" :data='[78, 81, 80, 45, 34, 12, 40]' label='Contracts'
                       :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                       style='height:100px'  backgroundColor='rgba(255,255,255,.1)'/>
        </widget04>
       </b-col>
       <b-col md="3" sm="6">
        <widget04  type='google-plus' rightHeader='894' rightFooter='followers' leftHeader='92' leftFooter='circles'>
          <line-chart1 chartId="google-plus" :data='[35, 23, 56, 22, 97, 23, 64]' label='Followers'
                       :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                       style='height:100px' backgroundColor='rgba(255,255,255,.1)'/>
        </widget04>
       </b-col>
    </b-row><!--/.row-->
    <b-card-group class="mb-4">
      <widget05 iconClasses="icon-people" header="87.500" text="Visitors" variant="info"/>
      <widget05 iconClasses="icon-user-follow" header="385" text="New Clients" variant="success"/>
      <widget05 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning"/>
      <widget05 iconClasses="icon-pie-chart" header="28%" text="Returning Visitors"/>
      <widget05 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="danger"/>
    </b-card-group>
    <b-row>
      <b-col sm="6" md="2">
        <widget05 iconClasses="icon-people" header="87.500" text="visitors" variant="info"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget05 iconClasses="icon-user-follow" header="385" text="New Clients" variant="success"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget05 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget05 iconClasses="icon-pie-chart" header="28%" text="Returning Visitors"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget05 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="danger"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget05 iconClasses="icon-speech" header="972" text="Comments" variant="info"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" md="2">
        <widget05 iconClasses="icon-people" header="87.500" text="visitors" variant="background-info"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget05 iconClasses="icon-user-follow" header="385" text="New Clients" variant="background-success"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget05 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="background-warning"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget05 iconClasses="icon-pie-chart" header="28%" text="Returning Visitors" variant="background-primary"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget05 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="background-danger"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget05 iconClasses="icon-speech" header="972" text="Comments" variant="background-info"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" lg="3">
        <widget06 cardClasses="bg-primary" header="9.823" text="Members online" chartType="chart1">
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
          <template slot='chart'>
            <line-chart2 chartId="widget06_1" slot='chart' class='px-3' :data='[65, 59, 84, 84, 51, 55, 40]'
                         :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                         style='height:70px' label='Members' pointHoverBackgroundColor='primary'/>
          </template>
        </widget06>
      </b-col>
      <b-col sm="6" lg="3">
        <widget06 cardClasses="bg-info" header="9.823" text="Members online" chartType="chart2">
          <template slot='dropdown'>
            <b-dropdown class="float-right" variant="transparent p-0" right no-caret>
              <template slot="button-content">
                <i class="icon-location-pin"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here...</b-dropdown-item>
              <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </b-dropdown>
          </template>
          <template slot='chart'>
            <line-chart2 chartId='widget06_2' slot='chart' class='px-3' :data='[1, 18, 9, 17, 34, 22, 11]'
                         :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                         style='height:70px' label='Members' :options='{elements: {line: {tension: 0.00001}}}'
                         pointHoverBackgroundColor='info'/>
          </template>
        </widget06>
      </b-col>
      <b-col sm="6" lg="3">
        <widget06 cardClasses="bg-warning" header="9.823" text="Members online" chartType="chart3">
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
          <template slot='chart'>
            <line-chart1 chartId="widget06_3" slot='chart' :data='[78, 81, 80, 45, 34, 12, 40]'
                         :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                         style='height:70px' backgroundColor ='rgba(255,255,255,.2)' label='Members'
                         :options="{elements: {line: {borderWidth: 2.5}}}" pointHoverBackgroundColor='warning'/>
          </template>
        </widget06>
      </b-col>
      <b-col sm="6" lg="3">
        <widget06 cardClasses="bg-danger" header="9.823" text="Members online" chartType="chart4">
          <template name='dropdown'>
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
          <template name='chart'>
            <bar-chart1 chartId="widget06_4" slot='chart' :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                        label='Members' backgroundColor='rgb(250, 152, 152)' style='height:70px' />
          </template>
        </widget06>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" lg="3">
        <widget07 rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <line-chart1 style="height:40px" chartId="widget07_line1" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <bar-chart1 style="height:40px" chartId="widget07_bar1" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
        </widget07>
      </b-col>
      <b-col sm="6" lg="3">
        <widget07 cardClasses='bg-success' rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <line-chart1 style="height:40px" chartId="widget07_line2" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <bar-chart1 style="height:40px" chartId="widget07_bar2" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
        </widget07>
      </b-col>
      <b-col sm="6" lg="3">
        <widget07 cardClasses='bg-danger' rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <line-chart1 style="height:40px" chartId="widget07_line3" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <bar-chart1 style="height:40px" chartId="widget07_bar3" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
        </widget07>
      </b-col>
      <b-col sm="6" lg="3">
        <widget07 cardClasses='bg-warning' rightHeader='SALE' rightFooter='Today 6:43 AM' leftHeader='$1.890,65' leftFooter='+432,50 (15,78%)'>
          <line-chart1 style="height:40px" chartId="widget07_line4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
          <bar-chart1 style="height:40px" chartId="widget07_bar4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]' label='Sales'/>
        </widget07>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4" lg="2">
        <widget08 header='title' text='1,123'>
          <line-chart1 style="height:40px" chartId="widget08_1" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                       label='Sales' borderColor='danger'/>
        </widget08>
      </b-col>
      <b-col sm="4" lg="2">
        <widget08 header='title' text='1,123'>
          <line-chart1 style="height:40px" chartId="widget08_2" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                       label='Sales' borderColor='primary'/>
        </widget08>
      </b-col>
      <b-col sm="4" lg="2">
        <widget08 header='title' text='1,123'>
          <line-chart1 style="height:40px" chartId="widget08_3" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                       label='Sales' borderColor='success'/>
        </widget08>
      </b-col>
      <b-col sm="4" lg="2">
        <widget08  header='title' text='1,123'>
          <bar-chart1 style="height:40px" chartId="widget08_4" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                      label='Sales' backgroundColor='danger'/>
        </widget08>
      </b-col>
      <b-col sm="4" lg="2">
        <widget08  header='title' text='1,123'>
          <bar-chart1 style="height:40px" chartId="widget08_5" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                      label='Sales' backgroundColor='primary'/>
        </widget08>
      </b-col>
      <b-col sm="4" lg="2">
        <widget08  header='title' text='1,123'>
          <bar-chart1 style="height:40px" chartId="widget08_6" :data='[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]'
                      label='Sales' backgroundColor='success'/>
        </widget08>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget01 from './widgets/Widget01'
import Widget02 from './widgets/Widget02'
import Widget03 from './widgets/Widget03'
import Widget04 from './widgets/Widget04'
import Widget05 from './widgets/Widget05'
import Widget06 from './widgets/Widget06'
import Widget07 from './widgets/Widget07'
import Widget08 from './widgets/Widget08'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import LineChart1 from './dashboard/LineChart1'
import LineChart2 from './dashboard/LineChart2'
import BarChart1 from './dashboard/BarChart1'

export default {
  name: 'Widgets',
  components: {
    Widget01,
    Widget02,
    Widget03,
    Widget04,
    Widget05,
    Widget06,
    Widget07,
    Widget08,
    SocialBoxChartExample,
    LineChart1,
    LineChart2,
    BarChart1,
  },
  methods:{
    copyTry:function($event){
      var componentCode = $event.target.closest('.col-md-3').getAttribute('data-code')
      if(componentCode)
        console.log(componentCode)
        const el = document.createElement('textarea');
        el.value = componentCode;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    },
  }
}
</script>
