<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CRow>
        <CCol cols>
          <CCard>
            <CCardHeader slot="header">
              <i class="fa fa-align-justify"></i><strong> Bootstrap Breadcrumb</strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/breadcrumb" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </CCardHeader>
            <CBreadcrumb :items="items" addLinkClasses="sss" lastItemClasses="aaa"/>
            <CBreadcrumb :items="items2"/>
            <CBreadcrumb :items="items3"/>
          </CCard>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'breadcrumbs',
  data () {
    return {
      items: [{
        text: '<b>Admin</b>',
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


      items3: [{
        text: 'Link',
        to: '#2',
        activeClass: 'bg-info p-1'
      }, {
        text: 'Active',
        to: '#3',
        activeClass: 'bg-warning p-1',
        addLinkClasses: 'bg-info p-1'
      },{
        text: 'Classes',
        to: '#4',
        activeClass: 'bg-danger p-1',
      }]
    }
  }
}
</script>
