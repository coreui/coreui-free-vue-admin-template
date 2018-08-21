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
              <b-alert show variant="primary">Primary Alert</b-alert>
              <b-alert show variant="secondary">Secondary Alert</b-alert>
              <b-alert show variant="success">Success Alert</b-alert>
              <b-alert show variant="danger">Danger Alert</b-alert>
              <b-alert show variant="warning">Warning Alert</b-alert>
              <b-alert show variant="info">Info Alert</b-alert>
              <b-alert show variant="light">Light Alert</b-alert>
              <b-alert show variant="dark">Dark Alert</b-alert>
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
              <b-alert show variant="primary">
                Primary Alert with <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="secondary">
                Secondary Alert with <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="success">
                Success Alert with <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="danger">
                Danger Alert with <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="warning">
                Warning Alert with <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="info">
                Info Alert with <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="light">
                Light Alert with <a href="#" class="alert-link">an example link</a>.
              </b-alert>
              <b-alert show variant="dark">
                Dark Alert with
                <b-link href="#" class="alert-link">an example link</b-link>
                .
              </b-alert>
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
            <b-alert show variant="success">
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
            </b-alert>
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
              <b-alert show dismissible>
                Dismissible Alert!
              </b-alert>
            <b-alert variant="danger"
                     dismissible
                     :show="showDismissibleAlert"
                     @dismissed="showDismissibleAlert=false">
              Dismissible Alert!
            </b-alert>
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
              <b-alert :show="dismissCountDown"
                       dismissible
                       variant="warning"
                       @dismissed="dismissCountdown=0"
                       @dismiss-count-down="countDownChanged">
                Alert will dismiss after <strong>{{dismissCountDown}}</strong> seconds...
              </b-alert>
              <b-alert :show="dismissCountDown"
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
              </b-alert>
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
