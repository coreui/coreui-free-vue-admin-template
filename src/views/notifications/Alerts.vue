<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CRow>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Bootstrap Alert</strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/alert" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
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
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> Alert
              <small> use <code>.alert-link</code> to provide links</small>
            </CCardHeader>
            <CCardBody>
              <div>
                <CAlert show variant="primary">
                  Primary Alert with <a href="#" class="alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="secondary">
                  Secondary Alert with <a href="#" class="alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="success">
                  Success Alert with <a href="#" class="alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="danger">
                  Danger Alert with <a href="#" class="alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="warning">
                  Warning Alert with <a href="#" class="alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="info">
                  Info Alert with <a href="#" class="alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="light">
                  Light Alert with <a href="#" class="alert-link">an example link</a>.
                </CAlert>
                <CAlert show variant="dark">
                  Dark Alert with
                  <CLink href="#" class="alert-link">an example link</CLink>
                  .
                </CAlert>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> Alerts <small>with additional content</small>
            </CCardHeader>
            <CCardBody>
              <CAlert show variant="success">
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
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> Alerts <small>dismissible</small>
            </CCardHeader>
            <CCardBody>
              <div>
                <CAlert :show="true" dismissible disabled>
                  Dismissible Alert!
                </CAlert>
                <!-- :dismissible="{attrs: {disabled:'disabled', 'aria-label':'close it'}, class:'hehe' } -->
                <CAlert :show="true"
                        dismissible>
                  Dismissible Alert!
                  <CButtonClose slot-scope="{ dismiss }"
                                @click="dismiss"
                                aria-label="close it"
                                style="color:red">
                    ok
                  </CButtonClose>
                </CAlert>
                <CAlert show dismissible>
                  Dismissible Alert!
                </CAlert>
              <CAlert variant="danger"
                       dismissible
                       fade
                       :show="showDismissibleAlert"
                       @dismissed="showDismissibleAlert=false"
              >
                Dismissible Alert!
              </CAlert>
              <CButton @click="showDismissibleAlert=true" variant="info" class="m-1">
                Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
              </CButton>
              </div>
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i> Alerts <small>auto dismissible</small>
            </CCardHeader>
            <CCardBody>
              <div>
                <CAlert :show="dismissCountDown"
                         dismissible
                         variant="warning"
                         @dismissed="dismissCountdown=0"
                         @dismiss-count-down="countDownChanged">
                  Alert will dismiss after <strong>{{dismissCountDown}}</strong> seconds...
                </CAlert>

                <CAlert :show="dismissCountDown"
                         dismissible
                         variant="info"
                         @dismissed="dismissCountdown=0"
                         @dismiss-count-down="countDownChanged">
                  Alert will dismiss after {{dismissCountDown}} seconds...
                  <CProgress variant="info"
                              :max="dismissSecs"
                              :value="dismissCountDown"
                              height="4px">
                  </CProgress>
                </CAlert>
                <CButton @click="showAlert" variant="info" class="m-1">
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
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
