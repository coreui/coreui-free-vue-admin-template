<template>
  <b-col sm="6" lg="3">
    <b-card :class="styleClasses">
      <div class="h4 m-0">{{header}}</div>
      <div>{{text}}</div>
      <b-progress height={} :variant="variant" :value="value"
                  :class="[backgroundColor ? 'progress-white' : '', 'progress-xs my-3 mb-0']"/>
      <small class="text-muted">{{footer}}</small>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'Widget01',
  data () {
    return{
      backgroundColor: '',
      styleClasses: '',
    }
  },
  created ()  {
    if(this.variant.includes('background')){
      this.backgroundColor = this.variant.replace('background-','');
      this.styleClasses = 'text-white bg-' + this.backgroundColor
    }
  },
  props: {
    header: {
      type: String,
      default: 'Lorem ipsum...'
    },
    text: {
      type: String,
      default: 'Lorem ipsum...'
    },
    variant: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: 'Lorem ipsum dolor sit amet enim.'
    },
    value: {
      type: Number,
      default: 25
    },
  }
}
</script>
