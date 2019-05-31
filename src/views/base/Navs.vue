<template>
  <div class="c-wrapper">
    <div class="c-animated c-fadeIn">
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navs</strong>
          <!-- <div class="c-card-header-actions">
            <CLink
              href="#"
              class="c-card-header-action"
            >
              <small class="c-text-muted">docs</small>
            </CLink>
          </div> -->
        </CCardHeader>
        <CCardBody>
          <CNav>
            <CNavItem active>Active</CNavItem>
            <CNavItem title="Link"/>
            <CNavItem>Another Link</CNavItem>
            <CNavItem disabled>Disabled</CNavItem>
          </CNav>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Navs </strong>
          <small>icons</small>
        </CCardHeader>
        <CCardBody>
          <CNav>
            <CNavItem active>
              <i class="cui-basket-loaded"></i>
            </CNavItem>
            <CNavItem>
              Link
            </CNavItem>
            <CNavItem>
              Another Link
            </CNavItem>
            <CNavItem disabled>Disabled</CNavItem>
          </CNav>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Navs </strong>
          <small>tab style</small>
        </CCardHeader>
        <CCardBody>
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
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader @click="item++">
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Navs </strong>
          <small>pill style</small>
        </CCardHeader>
        <CCardBody>
          <CNav pills>
            <CNavItem active>Active</CNavItem>
            <CNavItem>Link</CNavItem>
            <CNavItem>Another Link</CNavItem>
            <CNavItem disabled>Disabled</CNavItem>
          </CNav>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Navs </strong>
          <small>fill tabs</small>
        </CCardHeader>
        <CCardBody>
          <CNav fill tabs>
            <CNavItem active>Active</CNavItem>
            <CNavItem>Link</CNavItem>
            <CNavItem>Link with a long name </CNavItem>
            <CNavItem disabled>Disabled</CNavItem>
          </CNav>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Navs </strong>
          <small>justified tabs</small>
        </CCardHeader>
        <CCardBody>
          <CNav justified tabs>
            <CNavItem active>Active</CNavItem>
            <CNavItem>Link</CNavItem>
            <CNavItem>Link with a long name </CNavItem>
            <CNavItem disabled>Disabled</CNavItem>
          </CNav>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Navs </strong>
          <small>dropdown support</small>
        </CCardHeader>
        <CCardBody>
          <CNav pills>
            <CNavItem active>Active</CNavItem>
            <CNavItem>Link</CNavItem>
            <CDropdown id="nav7_ddown"
                       nav
                       placement="bottom-end"
                       buttonContent="Dropdown"
            >
              <!-- <a class="c-nav-link c-dropdown-toggle" slot="button">Dropdown</a> -->
              <CDropdownItem>one</CDropdownItem>
              <CDropdownItem>two</CDropdownItem>
              <CDropdownDivider/>
              <CDropdownItem>three</CDropdownItem>
            </CDropdown>
          </CNav>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Navs </strong>
          <small>vertical variation</small>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol col="3" class="c-m-0">
              <CNav vertical pills >
                <CNavItem active>Active</CNavItem>
                <CNavItem>Link</CNavItem>
                <CNavItem>Another Link</CNavItem>
                <CNavItem disabled>Disabled</CNavItem>
              </CNav>
            </CCol>
          </CRow>
        </CCardBody>
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
