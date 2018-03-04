<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12" md="6">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>Bootstrap Badge</strong>
              <div class="card-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/badge" target="_blank"><small class="text-muted">docs</small></a>
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
          <b-card header="Badge <small>contextual variations</small>"
            header-tag="header"
            footer-tag="footer">
            <div>
              <b-badge variant="primary">Primary</b-badge>
              <b-badge variant="secondary">Secondary</b-badge>
              <b-badge variant="success">Success</b-badge>
              <b-badge variant="danger">Danger</b-badge>
              <b-badge variant="warning">Warning</b-badge>
              <b-badge variant="info">Info</b-badge>
              <b-badge variant="light">Light</b-badge>
              <b-badge variant="dark">Dark</b-badge>
            </div>
          </b-card>
          <b-card header="Badge <small>pills</small>"
            header-tag="header"
            footer-tag="footer">
            <div>
              <b-badge pill variant="primary">Primary</b-badge>
              <b-badge pill variant="secondary">Secondary</b-badge>
              <b-badge pill variant="success">Success</b-badge>
              <b-badge pill variant="danger">Danger</b-badge>
              <b-badge pill variant="warning">Warning</b-badge>
              <b-badge pill variant="info">Info</b-badge>
              <b-badge pill variant="light">Light</b-badge>
              <b-badge pill variant="dark">Dark</b-badge>
            </div>
          </b-card>
          <b-card header="Badge <small>actionable</small>"
            header-tag="header"
            footer-tag="footer">
            <div>
              <b-badge href="#" variant="primary">Primary</b-badge>
              <b-badge href="#" variant="secondary">Secondary</b-badge>
              <b-badge href="#" variant="success">Success</b-badge>
              <b-badge href="#" variant="danger">Danger</b-badge>
              <b-badge href="#" variant="warning">Warning</b-badge>
              <b-badge href="#" variant="info">Info</b-badge>
              <b-badge href="#" variant="light">Light</b-badge>
              <b-badge href="#" variant="dark">Dark</b-badge>
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
