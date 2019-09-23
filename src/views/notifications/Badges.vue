<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Bootstrap Badge</strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/badge" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </div>
            <div>
              <h2>Example heading <b-badge>New</b-badge></h2>
              <h3>Example heading <b-badge>New</b-badge></h3>
              <h4>Example heading <b-badge>New</b-badge></h4>
              <h5>Example heading <b-badge>New</b-badge></h5>
              <h6>Example heading <b-badge>New</b-badge></h6>
            </div>
            <div slot="footer">
              <b-button variant="primary">
                Notifications <b-badge variant="light" :style="{position: 'static'}">4</b-badge>
              </b-button>
            </div>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header"><i class='fa fa-align-justify'></i> Badge <small>contextual variations</small></div>
            <div>
              <b-badge class="m-1" variant="primary">Primary</b-badge>
              <b-badge class="m-1" variant="secondary">Secondary</b-badge>
              <b-badge class="m-1" variant="success">Success</b-badge>
              <b-badge class="m-1" variant="danger">Danger</b-badge>
              <b-badge class="m-1" variant="warning">Warning</b-badge>
              <b-badge class="m-1" variant="info">Info</b-badge>
              <b-badge class="m-1" variant="light">Light</b-badge>
              <b-badge class="m-1" variant="dark">Dark</b-badge>
            </div>
          </b-card>
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header"><i class='fa fa-align-justify'></i> Badge <small>pills</small></div>
            <div>
              <b-badge class="m-1" pill variant="primary">Primary</b-badge>
              <b-badge class="m-1" pill variant="secondary">Secondary</b-badge>
              <b-badge class="m-1" pill variant="success">Success</b-badge>
              <b-badge class="m-1" pill variant="danger">Danger</b-badge>
              <b-badge class="m-1" pill variant="warning">Warning</b-badge>
              <b-badge class="m-1" pill variant="info">Info</b-badge>
              <b-badge class="m-1" pill variant="light">Light</b-badge>
              <b-badge class="m-1" pill variant="dark">Dark</b-badge>
            </div>
          </b-card>
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header"><i class='fa fa-align-justify'></i> Badge <small>actionable</small></div>
            <div>
              <b-badge class="m-1" href="#" variant="primary">Primary</b-badge>
              <b-badge class="m-1" href="#" variant="secondary">Secondary</b-badge>
              <b-badge class="m-1" href="#" variant="success">Success</b-badge>
              <b-badge class="m-1" href="#" variant="danger">Danger</b-badge>
              <b-badge class="m-1" href="#" variant="warning">Warning</b-badge>
              <b-badge class="m-1" href="#" variant="info">Info</b-badge>
              <b-badge class="m-1" href="#" variant="light">Light</b-badge>
              <b-badge class="m-1" href="#" variant="dark">Dark</b-badge>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>

  </div>

</template>

<script>
export default {
  name: 'badges',
  data () {
    return {
    }
  }
}
</script>
