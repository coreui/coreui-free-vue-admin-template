<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs</strong>
          <div class="card-header-actions">
            <a href="https://bootstrap-vue.js.org/docs/components/nav" class="card-header-action" rel="noreferrer noopener" target="_blank">
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <div>
          <CNav>
            <CNavItem active>Active</CNavItem>
            <CNavItem title="Link"/>
            <CNavItem>Another Link</CNavItem>
            <CNavItem disabled>Disabled</CNavItem>
          </CNav>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs </strong><small>icons</small>
        </CCardHeader>
        <div>
          <CNav>
            <CNavItem active>
              <i class="icon-basket-loaded"></i>
            </CNavItem>
            <CNavItem>
              Link
            </CNavItem>
            <CNavItem>
              Another Link
            </CNavItem>
            <CNavItem disabled>Disabled</CNavItem>
          </CNav>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs </strong><small>tab style</small>
        </CCardHeader>
        <div>
          <CNav tabs>
            <CNavItem active>
              Active
            </CNavItem>
            <CNavItem>
              Link
            </CNavItem>
            <CNavItem>
              Another Link
            </CNavItem>
            <CNavItem disabled>Disabled</CNavItem>
          </CNav>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header" @click="item++">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs </strong><small>pill style</small>
        </CCardHeader>
        <div>
          <CNav pills>
            <CNavItem active>Active</CNavItem>
            <CNavItem>Link</CNavItem>
            <CNavItem>Another Link</CNavItem>
            <CNavItem disabled>Disabled</CNavItem>
          </CNav>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs </strong><small>fill tabs</small>
        </CCardHeader>
        <div>
          <CNav fill tabs>
            <CNavItem active>Active</CNavItem>
            <CNavItem>Link</CNavItem>
            <CNavItem>Link with a long name </CNavItem>
            <CNavItem disabled>Disabled</CNavItem>
          </CNav>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs </strong><small>justified tabs</small>
        </CCardHeader>
        <div>
          <CNav justified tabs>
            <CNavItem active>Active</CNavItem>
            <CNavItem>Link</CNavItem>
            <CNavItem>Link with a long name </CNavItem>
            <CNavItem disabled>Disabled</CNavItem>
          </CNav>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Navs </strong>
          <small>dropdown support</small>
        </CCardHeader>
        <div>
          <CNav pills>
            <CNavItem active>Active</CNavItem>
            <CNavItem>Link</CNavItem>
            <CDropdown id="nav7_ddown"
                       nav
                       placement="bottom-end"
                       button-content="Dropdown"
            >
              <!-- <a class="nav-link dropdown-toggle" slot="button">Dropdown</a> -->
              <CDropdownItem>one</CDropdownItem>
              <CDropdownItem>two</CDropdownItem>
              <CDropdownDivider/>
              <CDropdownItem>three</CDropdownItem>
            </CDropdown>
          </CNav>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Navs </strong>
          <small>vertical variation</small>
        </CCardHeader>
        <CRow>
          <CCol cols="3" class="m-0">
            <CNav vertical pills >
              <CNavItem active>Active</CNavItem>
              <CNavItem>Link</CNavItem>
              <CNavItem>Another Link</CNavItem>
              <CNavItem disabled>Disabled</CNavItem>
            </CNav>
          </CCol>
        </CRow>
      </CCard>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navs',
  data () {
    return {
      item: 2
    }
  }
}
</script>
