<template>
  <div class="c-wrapper">
    <div>
      <CRow>
        <CCol col>
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Bootstrap Breadcrumb</strong>
              <div class="c-card-header-actions">
                <a 
                  href="https://coreui.io/vue/docs/3.0/components/Breadcrumb" 
                  class="card-header-action" 
                  rel="noreferrer noopener" 
                  target="_blank"
                >
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </CCardHeader>
            <CCardBody>
              <CBreadcrumb :items="items"/>
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
      items: [
        {
          textHtml: '<b>Admin</b>',
          href: '#'
        }, 
        {
          textHtml: 'Manage',
          href: '#'
        }, 
        {
          textHtml: 'Library'
        }
      ],


      items2: [
        {
          textHtml: 'Go to dashboard',
          to: '/dashboard'
        }, 
        {
          textHtml: 'Go to widgets',
          to: '/Widgets'
        }, 
        {
          textHtml: 'Go to Google',
          href: 'http://google.com'
        },
        {
          textHtml: 'Current page'
        }
      ],


      items3: [
        {
          textHtml: 'Added',
          to: '#2',
          addClasses: 'c-font-xl'
        }, 
        {
          textHtml: 'Custom',
          to: '#3',
          addClasses: 'c-font-xl'
        },
        {
          textHtml: 'Classes',
          to: '#4',
          addClasses: 'c-font-xl c-text-danger'
        }
      ]
    }
  }
}
</script>

<style>
  .c-breadcrumb-item + .c-font-xl.c-breadcrumb-item::before {
    color: rgb(140, 195, 38);
    content: '>>';
    padding: 0px 10px;

  }
</style>
