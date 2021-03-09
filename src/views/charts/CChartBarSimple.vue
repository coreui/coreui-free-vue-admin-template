<template>
  <BarChart :options="options"></BarChart>
</template>

<script>
import BarChart from "jscharting-vue";

export default {
  data() {
    return {
      options: {
        type: 'column',
        legend_visible: false,
        defaultPoint: { 
          color: "#fca09c",
          fill: '#fca09c',
          focusGlow: {
            color: '#fca09c',
          }
        },
        defaultTooltip: {
          combined: true,
          label_text:'<b>%xValue</b><br>%points',
          fill: 'rgba(0, 0, 0, 0.7)',
          radius: 0,
          outline: {
            color: 'rgba(0, 0, 0, 0.7)'
          },
          label: {
            color: 'white'
          }
        },
        xAxis: {
          visible: false,
          spacingPercentage: 0.6
        },
        yAxis: {
          visible: false,
        },
        box_fill: 'none',
        series: [
          {
            points: [
              { x: 'January', y: 20 },
              { x: 'February', y: 35 },
              { x: 'March', y: 22 },
              { x: 'April', y: 50 },
              { x: 'May', y: 44 },
              { x: 'June', y:  55 },
              { x: 'July', y: 60 },
              { x: 'August', y: 34 },
              { x: 'September', y: 64 },
              { x: 'October', y: 20 },
              { x: 'November', y: 52 },
              { x: 'December', y: 15 },
            ]
          }
        ],
      }
    };
  },
  components: {
    BarChart
  }
};
</script>
<style type="text/css">
 #brandingLogo {
    display: none !important;
 }
</style>