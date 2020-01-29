<template>
  <CRow>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong> Bootstrap Alert</strong>
          <div class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/alert" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <div>
            <p></p>
            <CAlert show color="primary">Primary Alert</CAlert>
            <CAlert show color="secondary">Secondary Alert</CAlert>
            <CAlert show color="success">Success Alert</CAlert>
            <CAlert show color="danger">Danger Alert</CAlert>
            <CAlert show color="warning">Warning Alert</CAlert>
            <CAlert show color="info">Info Alert</CAlert>
            <CAlert show color="light">Light Alert</CAlert>
            <CAlert show color="dark">Dark Alert</CAlert>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/> Alert
          <small> use <code>.alert-link</code> to provide links</small>
        </CCardHeader>
        <CCardBody>
          <div>
            <CAlert show color="primary">
              Primary Alert with <a href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert show color="secondary">
              Secondary Alert with <a href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert show color="success">
              Success Alert with <a href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert show color="danger">
              Danger Alert with <a href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert show color="warning">
              Warning Alert with <a href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert show color="info">
              Info Alert with <a href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert show color="light">
              Light Alert with <a href="#" class="alert-link">an example link</a>.
            </CAlert>
            <CAlert show color="dark">
              Dark Alert with
              <CLink href="#" class="alert-link">an example link</CLink>
              .
            </CAlert>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/> Alerts <small>with additional content</small>
        </CCardHeader>
        <CCardBody>
          <CAlert show color="success">
            <h4 class="alert-heading">Well done!</h4>
            <p>
              Aww yeah, you successfully read this important alert message.
              This example text is going to run a bit longer so that you can see
              how spacing within an alert works with this kind of content.
            </p>
            <hr>
            <p class="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
          </CAlert>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/> Alerts
          <small>dismissible</small>
        </CCardHeader>
        <CCardBody>
          <CAlert
            color="secondary"
            closeButton
            :show.sync="alert1"
          >
            Dismissible Alert!
          </CAlert>

          <CAlert
            color="secondary"
            :show.sync="alert2"
            class="alert-dismissible"
          >
            Dismissible Alert with custom button!
            <CButton
              class="position-absolute"
              color="secondary"
              style="right:10px;top: 50%;transform: translateY(-50%);"
              @click="alert2 = false"
            >
              Close
            </CButton>
          </CAlert>
          <CButton
            @click="showDismissibleAlerts"
            color="info"
            class="m-1"
          >
            Show dismissible alerts
          </CButton>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/> Alerts
          <small>auto dismissible</small>
        </CCardHeader>
        <CCardBody>
          <div>
            <CAlert
              :show.sync="dismissCountDown"
              closeButton
              color="warning"
              fade
            >
              Alert will dismiss after
              <strong>{{dismissCountDown}}</strong> seconds...
            </CAlert>

            <CAlert
              :show.sync="dismissCountDown"
              closeButton
              color="info"
            >
              Alert will dismiss after {{dismissCountDown}} seconds...
              <CProgress
                color="info"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
              />
            </CAlert>
            <CButton @click="showAlert" color="info" class="m-1">
              Show alert with timer
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Alerts',
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 10,
      alert1: true,
      alert2: true
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
      ['alert1', 'alert2'].forEach(alert => this[alert] = true)
    }
  }
}
</script>
