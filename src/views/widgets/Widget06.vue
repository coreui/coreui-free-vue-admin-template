<template>
  <b-card no-body :class="cardClasses">
    <b-card-body class="pb-0">
      <slot name='dropdown'></slot>
      <h4 class="mb-0">{{header}}</h4>
      <p>{{text}}</p>
    </b-card-body>
    <div class="chart-wrapper">
      <slot name='chart'></slot>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'Widget06',
  data () {
    return{
      backgroundColor: '',
    }
  },
  created ()  {
  },
  props: {
    cardClasses: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
  }
}
</script>
