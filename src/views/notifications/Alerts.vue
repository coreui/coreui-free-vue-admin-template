<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Bootstrap Alert</strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/alert" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </div>
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
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> Alert
              <small> use <code>.alert-link</code> to provide links</small>
            </div>
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
                <b-link href="#" class="alert-link">an example link</b-link>
                .
              </CAlert>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> Alerts <small>with additional content</small>
            </div>
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
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> Alerts <small>dismissible</small>
            </div>
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
            <b-btn @click="showDismissibleAlert=true" variant="info" class="m-1">
              Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
            </b-btn>
            </div>
          </b-card>
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> Alerts <small>auto dismissible</small>
            </div>
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
                <b-progress variant="info"
                            :max="dismissSecs"
                            :value="dismissCountDown"
                            height="4px">
                </b-progress>
              </CAlert>
              <b-btn @click="showAlert" variant="info" class="m-1">
                Show alert with timer
              </b-btn>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// import CAlert from './CAlert'
// import CButtonClose from './CButtonClose'
export default {
  name: 'alerts',
  // components: {
  //   CAlert,
  //   CButtonClose
  // },
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
