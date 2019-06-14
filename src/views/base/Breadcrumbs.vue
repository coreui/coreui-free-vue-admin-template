<template>
  <div class="c-wrapper">
    <div>
      <CRow>
        <CCol col>
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Bootstrap Breadcrumb</strong>
              <!-- <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/breadcrumb" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div> -->
            </CCardHeader>
            <CCardBody>
              <CBreadcrumb :items="items" add-link-classes="sss" last-item-classes="aaa"/>
              <CBreadcrumb :items="items2"/>
              <CBreadcrumb :items="items3"/>
            </CCardBody>
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
        textHtml: '<b>Admin</b>',
        href: '#'
      }, {
        textHtml: 'Manage',
        href: '#'
      }, {
        textHtml: 'Library'
      }],


      items2: [{
        textHtml: 'Go to dashboard',
        to: '/dashboard'
      }, {
        textHtml: 'Go to widgets',
        to: '/Widgets'
      }, {
        textHtml: 'Go to Google',
        href: 'http://google.com'
      },{
        textHtml: 'Current page'
      }],


      items3: [{
        textHtml: 'Link',
        to: '#2',
        activeClass: 'c-bg-info c-p-1'
      }, {
        textHtml: 'Active',
        to: '#3',
        activeClass: 'c-bg-warning c-p-1',
        addLinkClasses: 'c-bg-info c-p-1'
      },{
        textHtml: 'Classes',
        to: '#4',
        activeClass: 'c-bg-danger c-p-1',
      }]
    }
  }
}
</script>
