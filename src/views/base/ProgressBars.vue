<template>
  <div>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i>
        <strong> Bootstrap Progress</strong>
        <div class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/3.0/components/Progress" 
            class="card-header-action" 
            rel="noreferrer noopener" 
            target="_blank"
          >
            <small class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody>
        <CProgress :value="counter" :max="max" show-progress animated></CProgress>
        <CProgress class="mt-1" :max="max" show-value>
          <CProgressBar :value="counter*(6/10)" variant="success"/>
          <CProgressBar :value="counter*(2.5/10)" variant="warning"/>
          <CProgressBar :value="counter*(1.5/10)" variant="danger"/>
        </CProgress>
        <CButton 
          @click="clicked"
          variant="secondary"
          class="mt-4" 
        >
          Click me to animate progress bars
        </CButton>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i> <strong> Progress </strong><small>labels</small>
      </CCardHeader>
      <CCardBody>
        <h6>No label</h6>
        <CProgress :value="value" :max="max2" class="mb-3"/>
        <h6>Value label</h6>
        <CProgress :value="value" :max="max2" show-value class="mb-3"/>
        <h6>Progress label</h6>
        <CProgress :value="value" :max="max2" show-progress class="mb-3"/>
        <h6>Value label with precision</h6>
        <CProgress :value="value" :max="max2" :precision="2" show-value class="mb-3"/>
        <h6>Progress label with precision</h6>
        <CProgress :value="value" :max="max2" :precision="2" show-progress class="mb-3"/>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i>
        <strong> Progress </strong>
        <small>width</small>
      </CCardHeader>
      <CCardBody>
        <h6>Default width</h6>
        <CProgress :value="value3" class="mb-3"/>
        <h6>Custom widths</h6>
        <CProgress :value="value3" class="w-75 mb-2"/>
        <CProgress :value="value3" class="w-50 mb-2"/>
        <CProgress :value="value3" class="w-25"/>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i>
        <strong> Progress </strong>
        <small>height</small>
      </CCardHeader>
      <CCardBody>
        <h6>Default height</h6>
        <CProgress :value="value3" show-progress class="mb-3"/>
        <h6>Custom heights</h6>
        <CProgress height="2rem" :value="value3" show-progress class="mb-2"/>
        <CProgress height="20px" :value="value3" show-progress class="mb-2"/>
        <CProgress height="2px" :value="value3"/>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i>
        <strong> Progress </strong>
        <small>variants</small>
      </CCardHeader>
      <CCardBody>
        <div :key="index" v-for="(bar, index) in bars" class="row mb-1">
          <div class="col-sm-2">{{ bar.variant }}:</div>
          <div class="col-sm-10 pt-1">
            <CProgress
              :value="bar.value"
              :variant="bar.variant"
              :key="bar.variant"
            />
          </div>
        </div>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i>
        <strong> Progress </strong>
        <small>striped</small>
      </CCardHeader>
      <CCardBody>
        <CProgress
          :value="25"
          variant="success"
          :striped="striped"
          class="mb-2"
        />
        <CProgress
          :value="50"
          variant="info"
          :striped="striped"
          class="mb-2"
        />
        <CProgress
          :value="75"
          variant="warning"
          :striped="striped"
          class="mb-2"
        />
        <CProgress
          :value="100"
          variant="danger"
          :striped="striped"
          class="mb-2"
        />
        <CButton variant="secondary" @click="striped = !striped">
          {{ striped ? 'Remove' : 'Add'}} Striped
        </CButton>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i>
        <strong> Progress </strong>
        <small>animated</small>
      </CCardHeader>
      <CCardBody>
        <CProgress
          :value="25"
          variant="success"
          striped
          :animated="animate"
          class="mb-2"
        />
        <CProgress
          :value="50"
          variant="info"
          striped
          :animated="animate"
          class="mb-2"
        />
        <CProgress
          :value="75"
          variant="warning"
          striped
          :animated="animate"
          class="mb-2"
        />
        <CProgress
          :value="100"
          variant="danger"
          :animated="animate"
          class="mb-3"
        />
        <CButton variant="secondary" @click="animate = !animate">
          {{ animate ? 'Stop' : 'Start'}} Animation
        </CButton>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="fa fa-align-justify"></i>
        <strong> Progress </strong>
        <small>multiple bars</small>
      </CCardHeader>
      <CCardBody>
        <CProgress :max="max3" class="mb-3">
          <CProgressBar variant="primary" :value="values[0]"/>
          <CProgressBar variant="success" :value="values[1]"/>
          <CProgressBar variant="info" :value="values[2]"/>
        </CProgress>
        <CProgress show-progress :max="max3" class="mb-3">
          <CProgressBar variant="primary" :value="values[0]"/>
          <CProgressBar variant="success" :value="values[1]"/>
          <CProgressBar variant="info" :value="values[2]"/>
        </CProgress>
        <CProgress show-value striped :max="max3" class="mb-3">
          <CProgressBar variant="primary" :value="values[0]"/>
          <CProgressBar variant="success" :value="values[1]"/>
          <CProgressBar variant="info" :value="values[2]"/>
        </CProgress>
        <CProgress :max="max3" class="mb-3">
          <CProgressBar variant="primary" :value="values[0]" show-progress/>
          <CProgressBar variant="success" :value="values[1]" animated show-progress/>
          <CProgressBar variant="info" :value="values[2]" striped show-progress/>
        </CProgress>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  name: 'ProgressBars',
  data () {
    return {
      counter: 73,
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
