<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Tooltips </strong>
          <small><code>v-c-tooltip</code> directive</small>
          <div class="card-header-actions">
            <a href="https://bootstrap-vue.js.org/docs/components/tooltip" class="card-header-action" rel="noreferrer noopener" target="_blank">
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CRow>
          <CCol cols="4">
            <div class="text-center my-3">
              <CButton v-c-tooltip.hover.click="'I am a tooltip!'">
                Hover Me
              </CButton>
            </div>
          </CCol>
          <CCol cols="4">
            <div class="text-center my-3">
              <CButton v-c-tooltip="{content: 'I start open!', active:true }">
                Hover me
              </CButton>
            </div>
          </CCol>
          <CCol cols="4">
            <div class="text-center my-3">
              <CButton v-c-tooltip.click="
                'I am showing on click and hiding on click outside tooltip!'
              ">
                Click me
              </CButton>
            </div>
          </CCol>
        </CRow>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i>
          <strong> Tooltips </strong>
          <small>placement</small>
        </CCardHeader>
        <div class="my-3">
          <CRow>
            <CCol
              md="4"
              class="py-4 text-center"
              v-for="placement in placements"
              :key="placement"
            >
              <CButton
                variant="primary"
                v-c-tooltip.hover="{
                  content: `Placement ${placement}`,
                  placement
                }"
              >
                {{ placement }}
              </CButton>
            </CCol>
          </CRow>
        </div>
      </CCard>
        <!-- <CRow>
          <CCol md="6" class="py-4 text-center">
            <CButton id="exButton1" variant="outline-success">Live chat</CButton>
          </CCol>
          <CCol md="6" class="py-4 text-center">
            <CButton id="exButton2" variant="outline-success">Html chat</CButton>
          </CCol>
        </CRow>

        <b-tooltip target="exButton1" title="Online!"></b-tooltip>

        <b-tooltip target="exButton2" placement="bottom">
          Hello <strong>World!</strong>
        </b-tooltip>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Tooltips </strong><small><code>show</code> prop</small>
        </CCardHeader>
        <div class="text-center">
          <CButton id="tooltipButton-1" variant="primary">I have a tooltip</CButton>
          <br><br>
          <CButton @click="show = !show">Toggle Tooltip</CButton>

          <b-tooltip :show.sync="show" target="tooltipButton-1" placement="top">
            Hello <strong>World!</strong>
          </b-tooltip>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Tooltips </strong><small><code>open close</code> events</small>
        </CCardHeader>
        <div class="d-flex flex-column text-md-center">
          <div class="p-2">
            <CButton id="tooltipButton-showEvent" variant="primary">I have a tooltip</CButton>
          </div>
          <div class="p-2">
            <CButton class="px-1 mr-1" @click="onOpen">Open</CButton>
            <CButton class="px-1" @click="onClose">Close</CButton>
          </div>

          <b-tooltip ref="tooltip" target="tooltipButton-showEvent">
            Hello <strong>World!</strong>
          </b-tooltip>
        </div>
      </CCard>
      <CCard id="boundary">
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Tooltips </strong><small><code>enable disable</code> events</small>
        </CCardHeader>
        <div class="d-flex flex-column text-md-center">
          <div class="p-2">
            <CButton id="tooltipButton-disable" variant="primary">I have a tooltip</CButton>
          </div>
          <div class="p-2">
            <CButton @click="disabled = !disabled" class="mr-1">
              {{ disabled ? 'Enable' : 'Disable' }} Tooltip by prop
            </CButton>

            <CButton @click="disableByRef">
              {{ disabled ? 'Enable' : 'Disable' }} Tooltip by $ref event
            </CButton>

            <b-tooltip :disabled.sync="disabled" ref="tooltip2" target="tooltipButton-disable">
              Hello <strong>World!</strong>
            </b-tooltip>
          </div>
        </div>
      </CCard> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'tooltips',
  data () {
    return {
      placements: [
        'top-start', 'top', 'top-end',
        'bottom-start', 'bottom', 'bottom-end',
        'right-start', 'right', 'right-end',
        'left-start', 'left', 'left-end'
      ]
    }
  },
  methods: {
    // onOpen () {
    //   this.$refs.tooltip.$emit('open')
    // },
    // onClose () {
    //   this.$refs.tooltip.$emit('close')
    // },
    // disableByRef () {
    //   if (this.disabled) {
    //     this.$refs.tooltip2.$emit('enable')
    //   } else {
    //     this.$refs.tooltip2.$emit('disable')
    //   }
    // },
    // test () {
    //   this.show = !this.show
    //   this.placement = 'right'
    //   this.smh = 200
    // }
  }
}
</script>
