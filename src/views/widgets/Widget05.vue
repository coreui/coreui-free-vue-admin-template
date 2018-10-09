<template>
  <b-card :class="styleClasses">
    <div class="h1 text-muted text-right mb-4">
      <i :class="iconClasses"></i>
    </div>
    <div class="h4 mb-0">{{header}}</div>
    <small class="text-muted text-uppercase font-weight-bold">{{text}}</small>
    <b-progress height={} :variant="variant" :value="value"
                :class="[backgroundColor ? 'progress-white' : '', 'progress-xs my-3 mb-0']"/>
  </b-card>
</template>

<script>
export default {
  name: 'Widget05',
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
    iconClasses: {
      type: String,
      default: 'icon-people'
    },
    header: {
      type: String,
      default: 'header|string'
    },
    text: {
      type: String,
      default: 'text|string'
    },
    variant: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 25
    },
  }
}
</script>
