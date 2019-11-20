<template>
  <CRow>
    <CCol col>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/><strong> Bootstrap Breadcrumb</strong>
          <div class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/breadcrumb" 
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
</template>

<script>
export default {
  name: 'Breadcrumbs',
  data () {
    return {
      items: [
        {
          text: 'Admin',
          href: '#'
        }, 
        {
          text: 'Manage',
          href: '#'
        }, 
        {
          text: 'Library'
        }
      ],


      items2: [
        {
          text: 'Go to dashboard',
          to: '/dashboard'
        }, 
        {
          text: 'Go to widgets',
          to: '/Widgets'
        }, 
        {
          text: 'Go to Google',
          href: 'http://google.com'
        },
        {
          text: 'Current page'
        }
      ],


      items3: [
        {
          text: 'Added',
          to: '#2',
          addClasses: 'font-xl'
        }, 
        {
          text: 'Custom',
          to: '#3',
          addClasses: 'font-xl'
        },
        {
          text: 'Classes',
          to: '#4',
          addClasses: 'font-xl text-danger'
        }
      ]
    }
  }
}
</script>

<style>
  .breadcrumb-item + .font-xl.breadcrumb-item::before {
    color: rgb(140, 195, 38);
    content: '>>';
    padding: 0px 10px;

  }
</style>
