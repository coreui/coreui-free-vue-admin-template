<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i><strong> Bootstrap Breadcrumb</strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/breadcrumb" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </div>
            <CBreadcrumb :items="items"/>
            <CBreadcrumb :items="items2"/>
            <CBreadcrumb :items="items3"/>
            <Breadcrumb :list="items3"/>

          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// import CBreadcrumb from './CBreadcrumb'
export default {
  name: 'breadcrumbs',
  // components: {
  //   CBreadcrumb
  // },
  data () {
    return {
      items: [{
        text: 'Admin',
        href: '#'
      }, {
        text: 'Manage',
        href: '#'
      }, {
        text: 'Library'
      }],
      items2: [{
        text: 'Go to dashboard',
        to: '/dashboard'
      }, {
        text: 'Go to widgets',
        to: '/Widgets'
      }, {
        text: 'Go to Google',
        href: 'http://google.com'
      },{
        text: 'Current page'
      }],
      items3: ['sd', {
        text: 'Link',
        to: '#2',
        activeClass: 'bg-info p-1'
      }, {
        text: 'Active',
        to: '#3',
        activeClass: 'bg-warning p-1'
      },{
        text: 'Classes',
        to: '#4',
        activeClass: 'bg-danger p-1',
        current: false
      }]
    }
  }
}
</script>
