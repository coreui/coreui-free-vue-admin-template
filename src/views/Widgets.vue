<template>
  <div class="animated fadeIn">
    <b-row>
      <widget01 header="89.9%" variant="success"/>
      <widget01 header="12.124" variant="info"/>
      <widget01 header="$98.111,00" variant="warning"/>
      <widget01 header="2 TB" variant="danger"/>
    </b-row><!--/.row-->
    <b-row>
      <widget01 header="89.9%"  variant="background-success"/>
      <widget01 header="12.124" variant="background-info"/>
      <widget01 header="$98.111,00" variant="background-warning"/>
      <widget01 header="2 TB" variant="background-danger"/>
    </b-row><!--/.row-->
    <b-row>
      <widget02 header="$1.999,50" iconClasses="fa fa-cogs bg-primary"/>
      <widget02 header="$1.999,50" iconClasses="fa fa-laptop bg-info"/>
      <widget02 header="$1.999,50" iconClasses="fa fa-moon-o bg-warning bg-primary"/>
      <widget02 header="$1.999,50" iconClasses="fa fa-bell bg-danger"/>
    </b-row><!--/.row-->
    <b-row>
      <widget02 header="$1.999,50" iconClasses="fa fa-cogs bg-primary" :showLink="true"/>
      <widget02 header="$1.999,50" iconClasses="fa fa-laptop bg-info" :showLink="true"/>
      <widget02 header="$1.999,50" iconClasses="fa fa-moon-o bg-warning bg-primary" :showLink="true"/>
      <widget02 header="$1.999,50" iconClasses="fa fa-bell bg-danger" :showLink="true"/>
    </b-row><!--/.row-->
    <b-row>
      <widget03 header="$1.999,50" iconClasses="fa fa-cogs bg-primary"/>
      <widget03 header="$1.999,50" iconClasses="fa fa-laptop bg-info"/>
      <widget03 header="$1.999,50" iconClasses="fa fa-moon-o bg-warning bg-primary"/>
      <widget03 header="$1.999,50" iconClasses="fa fa-bell bg-danger"/>
    </b-row><!--/.row-->
    <b-row>
      <widget03 header="$1.999,50" iconClasses="fa fa-cogs bg-primary px-5"/>
      <widget03 header="$1.999,50" iconClasses="fa fa-laptop bg-info px-5"/>
      <widget03 header="$1.999,50" iconClasses="fa fa-moon-o bg-warning bg-primary px-5"/>
      <widget03 header="$1.999,50" iconClasses="fa fa-bell bg-danger px-5"/>
    </b-row><!--/.row-->
    <b-row>
      <social-media-widget type="facebook" :dataPoints="[65, 59, 84, 84, 51, 55, 40]"
                           rightHeader="89k" rightFooter="friends" leftHeader="459" leftFooter="feeds"/>
      <social-media-widget type="twitter" :dataPoints="[1, 13, 9, 17, 34, 41, 38]"
                           rightHeader="973k" rightFooter="followers" leftHeader="1.792" leftFooter="tweets"/>
      <social-media-widget type="linkedin" :dataPoints="[78, 81, 80, 45, 34, 12, 40]"
                           rightHeader="500+" rightFooter="contracts" leftHeader="292" leftFooter="feeds"/>
      <social-media-widget type="google-plus" :dataPoints="[35, 23, 56, 22, 97, 23, 64]"
                           rightHeader="894" rightFooter="followers" leftHeader="92" leftFooter="circles"/>
    </b-row><!--/.row-->
    <b-card-group class="mb-4">
      <widget04 iconClasses="icon-people" header="87.500" text="Visitors" variant="info"/>
      <widget04 iconClasses="icon-user-follow" header="385" text="New Clients" variant="success"/>
      <widget04 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning"/>
      <widget04 iconClasses="icon-pie-chart" header="28%" text="Returning Visitors"/>
      <widget04 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="danger"/>
    </b-card-group>
    <b-row>
      <b-col sm="6" md="2">
        <widget04 iconClasses="icon-people" header="87.500" text="visitors" variant="info"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget04 iconClasses="icon-user-follow" header="385" text="New Clients" variant="success"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget04 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="warning"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget04 iconClasses="icon-pie-chart" header="28%" text="Returning Visitors"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget04 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="danger"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget04 iconClasses="icon-speech" header="972" text="Comments" variant="info"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" md="2">
        <widget04 iconClasses="icon-people" header="87.500" text="visitors" variant="background-info"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget04 iconClasses="icon-user-follow" header="385" text="New Clients" variant="background-success"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget04 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="background-warning"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget04 iconClasses="icon-pie-chart" header="28%" text="Returning Visitors" variant="background-primary"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget04 iconClasses="icon-speedometer" header="5:34:11" text="Avg. Time" variant="background-danger"/>
      </b-col>
      <b-col sm="6" md="2">
        <widget04 iconClasses="icon-speech" header="972" text="Comments" variant="background-info"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget01 from './widgets/Widget01'
import Widget02 from './widgets/Widget02'
import Widget03 from './widgets/Widget03'
import SocialMediaWidget from './widgets/SocialMediaWidget'
import Widget04 from './widgets/Widget04'

export default {
  name: 'widgets',
  components: {
    Widget01,
    Widget02,
    Widget03,
    SocialMediaWidget,
    Widget04
  },
  data () {
    return {
      msg: 'Widgets'
    }
  }
}
</script>
