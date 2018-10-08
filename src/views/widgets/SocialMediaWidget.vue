<template>
  <b-col md="3" sm="6">
    <div class="brand-card">
      <div :class="'bg-' + type" class="brand-card-header bg-facebook">
        <i  class="fa" :class="'fa-'+ type"></i>
        <div class="chart-wrapper">
          <social-box-chart-example :data="dataPoints" />
        </div>
      </div>
      <div class="brand-card-body">
        <div>
          <div class="text-value">{{rightHeader}}</div>
          <div class="text-uppercase text-muted small">{{rightFooter}}</div>
        </div>
        <div>
          <div class="text-value">{{leftHeader}}</div>
          <div class="text-uppercase text-muted small">{{leftFooter}}</div>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
import SocialBoxChartExample from './../dashboard/SocialBoxChartExample'


export default {
  name: 'SocialMediaWidget',
  components: {
    SocialBoxChartExample
  },
  props: {
    type: {
      type: String,
      default: 'facebook'
    },
    dataPoints: {
      type: Array,
      default: [65, 59, 84, 84, 51, 55, 40]
    },
    rightHeader: {
      type: String,
      default: '89k'
    },
    rightFooter: {
      type: String,
      default: 'friends'
    },
    leftHeader: {
      type: String,
      default: '459'
    },
    leftFooter: {
      type: String,
      default: 'feeds'
    },
  }
}
</script>
