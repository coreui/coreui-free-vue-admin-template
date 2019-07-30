<template>
  <div class="c-wrapper">
    <div>
      <CRow>
        <CCol col="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Bootstrap Alert</strong>
              <!-- <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/alert" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div> -->
            </CCardHeader>
            <CCardBody>
              <div>
                <p></p>
                <CAlert show variant="primary">Primary Alert</CAlert>
                <CAlert show variant="secondary">Secondary Alert</CAlert>
                <CAlert show variant="success">Success Alert</CAlert>
                <CAlert show variant="danger">Danger Alert</CAlert>
                <CAlert show variant="warning">Warning Alert</CAlert>
                <CAlert show variant="info">Info Alert</CAlert>
                <CAlert show variant="light">Light Alert</CAlert>
                <CAlert show variant="dark">Dark Alert</CAlert>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol col="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> Alert
              <small> use <code>.c-alert-link</code> to provide links</small>
            </CCardHeader>
            <CCardBody>
              <div>
                <CAlert show variant="primary">
                  Primary Alert with <a href="#" class="c-alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="secondary">
                  Secondary Alert with <a href="#" class="c-alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="success">
                  Success Alert with <a href="#" class="c-alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="danger">
                  Danger Alert with <a href="#" class="c-alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="warning">
                  Warning Alert with <a href="#" class="c-alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="info">
                  Info Alert with <a href="#" class="c-alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="light">
                  Light Alert with <a href="#" class="c-alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="dark">
                  Dark Alert with
                  <CLink href="#" class="c-alert-link">an example link</CLink>
                  .
                </CAlert>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol col="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> Alerts <small>with additional content</small>
            </CCardHeader>
            <CCardBody>
              <CAlert show variant="success">
                <h4 class="c-alert-heading">Well done!</h4>
                <p>
                  Aww yeah, you successfully read this important alert message.
                  This example text is going to run a bit longer so that you can see
                  how spacing within an alert works with this kind of content.
                </p>
                <hr>
                <p class="c-mb-0">
                  Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                </p>
              </CAlert>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol col="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> Alerts
              <small>dismissible</small>
            </CCardHeader>
            <CCardBody>
              <CAlert
                variant="secondary"
                closeButton
                :show.sync="dismissibleAlerts[0]"
              >
                Dismissible Alert!
              </CAlert>

              <CAlert
                variant="secondary"
                closeButton
                fade
                :show.sync="dismissibleAlerts[1]"
              >
                Dismissible Alert with fade effect!
              </CAlert>

              <CAlert
                variant="secondary"
                :show.sync="dismissibleAlerts[2]"
                v-slot="{dismiss}"
                class="c-alert-dismissible"
              >
                Dismissible Alert with custom button!
                <CButton
                  class="c-position-absolute"
                  variant="secondary"
                  style="right:10px;top: 50%;transform: translateY(-50%);"
                  textHtml="<i>Close</i>"
                  @click="dismiss"
                />
              </CAlert>
              <CButton
                @click="showDismissibleAlerts"
                variant="info"
                class="c-m-1"
              >
                Show dismissible alerts
              </CButton>
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> Alerts
              <small>auto dismissible</small>
            </CCardHeader>
            <CCardBody>
              <div>
                <CAlert
                  :show.sync="dismissCountDown"
                  closeButton
                  variant="warning"
                  fade
                >
                  Alert will dismiss after
                  <strong>{{dismissCountDown}}</strong> seconds...
                </CAlert>

                <CAlert
                  :show.sync="dismissCountDown"
                  closeButton
                  variant="info"
                >
                  Alert will dismiss after {{dismissCountDown}} seconds...
                  <CProgress
                    variant="info"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
                  />
                </CAlert>
                <CButton @click="showAlert" variant="info" class="c-m-1">
                  Show alert with timer
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alerts',
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 10,
      dismissibleAlerts: [true, true, true],
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    showDismissibleAlerts () {
      this.dismissibleAlerts = this.dismissibleAlerts.map(el => el = true)
    }
  }
}
</script>
