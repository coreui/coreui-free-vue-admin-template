<template>
  <div class="animated fadeIn">
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
      <b-col cols="12" sm="6" lg="3">
        <widget03 header="$1.999,50" text="Income" iconClasses="fa fa-cogs bg-primary px-5"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <widget03 header="$1.999,50" text="Income" iconClasses="fa fa-laptop bg-info px-5"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <widget03 header="$1.999,50" text="Income" iconClasses="fa fa-moon-o bg-warning bg-primary px-5"/>
      </b-col>
      <b-col cols="12" sm="6" lg="3">
        <widget03 header="$1.999,50" text="Income" iconClasses="fa fa-bell bg-danger px-5"/>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col md="3" sm="6">
        <widget04 type="facebook" :dataPoints="[65, 59, 84, 84, 51, 55, 40]"
                             rightHeader="89k" rightFooter="friends" leftHeader="459" leftFooter="feeds"/>
       </b-col>
       <b-col md="3" sm="6">
        <widget04 type="twitter" :dataPoints="[1, 13, 9, 17, 34, 41, 38]"
                             rightHeader="973k" rightFooter="followers" leftHeader="1.792" leftFooter="tweets"/>
       </b-col>
       <b-col md="3" sm="6">
        <widget04 type="linkedin" :dataPoints="[78, 81, 80, 45, 34, 12, 40]"
                             rightHeader="500+" rightFooter="contracts" leftHeader="292" leftFooter="feeds"/>
       </b-col>
       <b-col md="3" sm="6">
        <widget04 type="google-plus" :dataPoints="[35, 23, 56, 22, 97, 23, 64]"
                             rightHeader="894" rightFooter="followers" leftHeader="92" leftFooter="circles"/>
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
  </div>
</template>

<script>
import Widget01 from './widgets/Widget01'
import Widget02 from './widgets/Widget02'
import Widget03 from './widgets/Widget03'
import Widget04 from './widgets/Widget04'
import Widget05 from './widgets/Widget05'

export default {
  name: 'Widgets',
  components: {
    Widget01,
    Widget02,
    Widget03,
    Widget04,
    Widget05
  },
}
</script>
