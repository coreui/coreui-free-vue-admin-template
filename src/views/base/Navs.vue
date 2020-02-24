<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/><strong> Bootstrap Navs</strong>
        <div class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/components/nav" 
            class="card-header-action" 
            rel="noreferrer noopener" 
            target="_blank"
          >
            <small class="text-muted">docs</small>
          </a>
        </div>
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
        <CIcon name="cil-justify-center"/>
        <strong> Bootstrap Navs </strong>
        <small>icons</small>
      </CCardHeader>
      <CCardBody>
        <CNav variant="pills">
          <CNavItem active>
            <CIcon name="cil-basket"/>
          </CNavItem>
          <CNavItem>
            <CIcon name="cil-settings"/>
          </CNavItem>
          <CNavItem>
            <CIcon name="cil-bell"/>
          </CNavItem>
          <CNavItem disabled>
            <CIcon name="cil-envelope-closed"/>
          </CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/>
        <strong> Bootstrap Navs </strong>
        <small>tab style</small>
      </CCardHeader>
      <CCardBody>
        <CNav variant="tabs">
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
        <CIcon name="cil-justify-center"/>
        <strong> Bootstrap Navs </strong>
        <small>pill style</small>
      </CCardHeader>
      <CCardBody>
        <CNav variant="pills">
          <CNavItem active>Active</CNavItem>
          <CNavItem>Link</CNavItem>
          <CNavItem>Another Link</CNavItem>
          <CNavItem disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/>
        <strong> Bootstrap Navs </strong>
        <small>fill tabs</small>
      </CCardHeader>
      <CCardBody>
        <CNav fill variant="tabs">
          <CNavItem active>Active</CNavItem>
          <CNavItem>Link</CNavItem>
          <CNavItem>Link with a long name </CNavItem>
          <CNavItem disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/>
        <strong> Bootstrap Navs </strong>
        <small>justified tabs</small>
      </CCardHeader>
      <CCardBody>
        <CNav justified variant="tabs">
          <CNavItem active>Active</CNavItem>
          <CNavItem>Link</CNavItem>
          <CNavItem>Link with a long name </CNavItem>
          <CNavItem disabled>Disabled</CNavItem>
        </CNav>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/>
        <strong> Bootstrap Navs </strong>
        <small>dropdown support</small>
      </CCardHeader>
      <CCardBody>
        <CNav variant="pills">
          <CNavItem>Active</CNavItem>
          <CNavItem>Link</CNavItem>
          <CDropdown
            in-nav
            placement="bottom-end"
            button-content="Dropdown"
          >
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
        <CIcon name="cil-justify-center"/>
        <strong> Bootstrap Navs </strong>
        <small>vertical variation</small>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol col="3" class="m-0">
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
</template>

<script>
export default {
  name: 'Navs'
}
</script>
