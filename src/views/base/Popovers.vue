<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Popovers</strong>
          <div class="card-header-actions">
            <a href="https://bootstrap-vue.js.org/docs/components/popovers" class="card-header-action" rel="noreferrer noopener" target="_blank">
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CRow>
          <CCol cols="6">
            <div class="my-3 text-center">
              <CButton
                v-c-popover.hover="{
                  header: 'Popover header',
                  content: 'I am popover content!'
                }"
              >
                Hover Me
              </CButton>
            </div>
          </CCol>
          <CCol cols="6">
            <div class="my-3 text-center">
              <CButton
                variant="primary"
                v-c-popover.hover.active="{
                  header: 'Popover!',
                  content: 'I start <strong>open</strong>'
                }"
              >
                Button
              </CButton>
            </div>
          </CCol>
        </CRow>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Popovers </strong>
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
                v-c-popover.hover.focus="{
                  header: 'Popover!',
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
      <!-- <CCard class="d-sm-down-none">
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Popovers </strong>
          <small>via properties or slots</small>
        </CCardHeader>
        <CRow>
          <CCol md="6" class="py-4 text-center">
            <CButton id="exPopover2" variant="primary">Using properties</CButton>
            <b-popover target="exPopover2"
                       title="Prop Examples"
                       triggers="hover focus"
                       content="Embedding content using properties is easy">
            </b-popover>
          </CCol>
          <CCol md="6" class="py-4 text-center">
            <CButton id="exPopover3" variant="primary">Using slots</CButton>
            <b-popover target="exPopover3" triggers="hover focus">
              <template slot="title">Content via Slots</template>
              Embedding content <span class="text-danger">using slots</span>
              affords you <em>greater <strong>control.</strong></em> and
              basic HTML support.
            </b-popover>
          </CCol>
        </CRow>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Popovers </strong>
          <small>show</small>
        </CCardHeader>
        <div class="d-flex flex-column text-md-center">
          <div class="p-2">
            <CButton id="popoverButton-sync" variant="primary">I have a popover</CButton>
          </div>
          <div class="p-2">
            <CButton class="px-1" @click="show = !show">Toggle Popover</CButton>

            <b-popover :show.sync="show" target="popoverButton-sync" title="Popover">
              Hello <strong>World!</strong>
            </b-popover>
          </div>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Popover </strong>
          <small>open/close events</small>
        </CCardHeader>
        <div class="d-flex flex-column text-md-center">
          <div class="p-2">
            <CButton id="popoverButton-event" variant="primary">I have a popover</CButton>
          </div>
          <div class="p-2">
            <CButton class="px-1" @click="onOpen">Open</CButton>
            <CButton class="px-1" @click="onClose">Close</CButton>
          </div>

          <b-popover ref="popover1" target="popoverButton-event" title="Popover">
            Hello <strong>World!</strong>
          </b-popover>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Popover </strong>
          <small>enable/disable events</small>
        </CCardHeader>
        <div class="d-flex flex-column text-md-center">
          <div class="p-2">
            <CButton id="popoverButton-disableevent" variant="primary">I have a popover</CButton>
          </div>
          <div class="p-2">
            <CButton class="px-1" @click="onEnable">Enable</CButton>
            <CButton class="px-1" @click="onDisable">Disable</CButton>
          </div>

          <b-popover ref="popover2" target="popoverButton-disableevent" title="Popover">
            Hello <strong>World!</strong>
          </b-popover>
        </div>
      </CCard> -->
      <!-- <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Popover </strong><small><code>v-b-popover</code> directive</small>
        </CCardHeader>
        <CRow>
          <CCol md="3" class="py-3 text-center">
            <CButton v-b-popover.hover.top="'I am Top'"
                   title="Popover!"
                   variant="primary">Top</CButton>
          </CCol>
          <CCol md="3" class="py-3 text-center">
            <CButton v-b-popover.hover.left="'I am Left'"
                   title="Popover!"
                   variant="primary">Left</CButton>
          </CCol>
          <CCol md="3" class="py-3 text-center">
            <CButton v-b-popover.hover.right="'I am Right'"
                   title="Popover!"
                   variant="primary">Right</CButton>
          </CCol>
          <CCol md="3" class="py-3 text-center">
            <CButton v-b-popover.hover.bottom="'I am Bottom'"
                   title="Popover!"
                   variant="primary">Bottom</CButton>
          </CCol>
        </CRow>
      </CCard> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'popovers',
  data () {
    return {
      placements: [
        'top-start', 'top', 'top-end',
        'bottom-start', 'bottom', 'bottom-end',
        'right-start', 'right', 'right-end',
        'left-start', 'left', 'left-end'
      ],
      show: false,
      counter: 0
    }
  },
  methods: {
    onOpen () {
      this.$refs.popover1.$emit('open')
    },
    onClose () {
      this.$refs.popover1.$emit('close')
    },
    onEnable () {
      this.$refs.popover2.$emit('enable')
    },
    onDisable () {
      this.$refs.popover2.$emit('disable')
    }
  }
}
</script>
