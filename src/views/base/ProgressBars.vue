<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Bootstrap Progress</strong>
          <div class="card-header-actions">
            <a href="https://bootstrap-vue.js.org/docs/components/progress" class="card-header-action" rel="noreferrer noopener" target="_blank">
              <small class="text-muted">docs</small>
            </a>
          </div>
        </div>
        <div>
          <b-progress :value="counter" :max="max" show-progress animated></b-progress>
          <b-progress class="mt-1" :max="max" show-value>
            <b-progress-bar :value="counter*(6/10)" variant="success"></b-progress-bar>
            <b-progress-bar :value="counter*(2.5/10)" variant="warning"></b-progress-bar>
            <b-progress-bar :value="counter*(1.5/10)" variant="danger"></b-progress-bar>
          </b-progress>
          <b-btn class="mt-4" @click="clicked">Click me</b-btn>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Progress</strong> <small>labels</small>
        </div>
        <div>
          <h5>No label</h5>
          <b-progress :value="value" :max="max2" class="mb-3"></b-progress>
          <h5>Value label</h5>
          <b-progress :value="value" :max="max2" show-value class="mb-3"></b-progress>
          <h5>Progress label</h5>
          <b-progress :value="value" :max="max2" show-progress class="mb-3"></b-progress>
          <h5>Value label with precision</h5>
          <b-progress :value="value" :max="max2" :precision="2" show-value class="mb-3"></b-progress>
          <h5>Progress label with precision</h5>
          <b-progress :value="value" :max="max2" :precision="2" show-progress class="mb-3"></b-progress>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Progress</strong> <small>width</small>
        </div>
        <div>
          <h5>Default width</h5>
          <b-progress :value="value3" class="mb-3"></b-progress>
          <h5>Custom widths</h5>
          <b-progress :value="value3" class="w-75 mb-2"></b-progress>
          <b-progress :value="value3" class="w-50 mb-2"></b-progress>
          <b-progress :value="value3" class="w-25"></b-progress>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Progress</strong> <small>height</small>
        </div>
        <div>
          <h5>Default height</h5>
          <b-progress :value="value3" show-progress class="mb-3"></b-progress>
          <h5>Custom heights</h5>
          <b-progress height="2rem" :value="value3" show-progress class="mb-2"></b-progress>
          <b-progress height="20px" :value="value3" show-progress class="mb-2"></b-progress>
          <b-progress height="2px" :value="value3"></b-progress>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Progress</strong> <small>variants</small>
        </div>
        <div>
          <div :key="index" v-for="(bar, index) in bars" class="row mb-1">
            <div class="col-sm-2">{{ bar.variant }}:</div>
            <div class="col-sm-10 pt-1">
              <b-progress :value="bar.value"
                          :variant="bar.variant"
                          :key="bar.variant"
              ></b-progress>
            </div>
          </div>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Progress</strong> <small>striped</small>
        </div>
        <div>
          <b-progress :value="25" variant="success" :striped="striped" class="mb-2"></b-progress>
          <b-progress :value="50" variant="info" :striped="striped" class="mb-2"></b-progress>
          <b-progress :value="75" variant="warning" :striped="striped" class="mb-2"></b-progress>
          <b-progress :value="100" variant="danger" :striped="striped" class="mb-2"></b-progress>
          <b-button variant="secondary" @click="striped = !striped">
            {{ striped ? 'Remove' : 'Add'}} Striped
          </b-button>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Progress</strong> <small>animated</small>
        </div>
        <div>
          <b-progress :value="25" variant="success" striped :animated="animate" class="mb-2"></b-progress>
          <b-progress :value="50" variant="info" striped :animated="animate" class="mb-2"></b-progress>
          <b-progress :value="75" variant="warning" striped :animated="animate" class="mb-2"></b-progress>
          <b-progress :value="100" variant="danger" :animated="animate" class="mb-3"></b-progress>
          <b-button variant="secondary" @click="animate = !animate">
            {{ animate ? 'Stop' : 'Start'}} Animation
          </b-button>
        </div>
      </b-card>
      <b-card
        header-tag="header"
        footer-tag="footer">
        <div slot="header">
          <i class="fa fa-align-justify"></i> <strong>Progress</strong> <small>multiple bars</small>
        </div>
        <div>
          <b-progress :max="max3" class="mb-3">
            <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
            <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
            <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
          </b-progress>
          <b-progress show-progress :max="max3" class="mb-3">
            <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
            <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
            <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
          </b-progress>
          <b-progress show-value striped :max="max3" class="mb-3">
            <b-progress-bar variant="primary" :value="values[0]"></b-progress-bar>
            <b-progress-bar variant="success" :value="values[1]"></b-progress-bar>
            <b-progress-bar variant="info" :value="values[2]"></b-progress-bar>
          </b-progress>
          <b-progress :max="max3" class="mb-3">
            <b-progress-bar variant="primary" :value="values[0]" show-progress></b-progress-bar>
            <b-progress-bar variant="success" :value="values[1]" animated show-progress></b-progress-bar>
            <b-progress-bar variant="info" :value="values[2]" striped show-progress></b-progress-bar>
          </b-progress>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'progress-bars',
  data () {
    return {
      counter: 45,
      max: 100,
      max2: 50,
      value: 33.333333333,
      value3: 75,
      bars: [
        {variant: 'success', value: 75},
        {variant: 'info', value: 75},
        {variant: 'warning', value: 75},
        {variant: 'danger', value: 75},
        {variant: 'primary', value: 75},
        {variant: 'secondary', value: 75},
        {variant: 'dark', value: 75}
      ],
      timer: null,
      striped: true,
      animate: true,
      max3: 100,
      values: [ 15, 30, 20 ]
    }
  },
  methods: {
    clicked () {
      this.counter = Math.random() * this.max
      console.log('Change progress to ' +
          Math.round(this.counter * 100) / 100)
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.bars.forEach(bar => {
        bar.value = 25 + (Math.random() * 75)
      })
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>

