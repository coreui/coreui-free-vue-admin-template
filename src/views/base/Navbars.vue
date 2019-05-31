<template>
  <div class="c-wrapper">
    <div class="c-animated c-fadeIn">
      <!-- <CCard>
        <CNavbar toggleable="md" light variant="light">
          <CNavbarToggle class="hehe" @click="test2 = !test2"/>
          <CLink class="navbar-brand">NavBar</CLink>
          <CCollapse :duration="500" :show="test2" navbar @finish="test2 = test2" >
            <CNavbarNav pills class="navbar-nav">
              <CNavItem>
                hehehe1
              </CNavItem>
              <CNavItem class="nav-item">
                hehehe1
              </CNavItem>
              <CNavItem class="nav-item">
                hehehe2
              </CNavItem>
              <DefaultHeaderDropdownAccnt/>
            </CNavbarNav>
            <CNavbarNav class="ml-auto">
              <CDropdown right class="nav-item b-nav-dropdown" toggleClasses="nav-link">
                <CDropdownItem><i class="cui-file" /> Projects
                  <CBadge variant="primary">32</CBadge>
                </CDropdownItem>
                <CDropdownItem><i class="cui-shield" /> Lock Account</CDropdownItem>
                <CDropdownItem><i class="cui-lock-locked" /> Logout</CDropdownItem>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CNavbar>
      </CCard> -->
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
          <strong> Bootstrap Navbar </strong>
          <!-- <div class="c-card-header-actions">
            <a href="https://bootstrap-vue.js.org/docs/components/navbar" class="c-card-header-action" rel="noreferrer noopener" target="_blank">
              <small class="c-text-muted">docs</small>
            </a>
          </div> -->
        </CCardHeader>
        <CCardBody>
          <CNavbar
            toggleable="md"
            type="dark"
            variant="info"
            sticky
          >
            <CNavbarToggle @click="show=!show"/>
            <CNavbarBrand href="#">NavBar</CNavbarBrand>
            <CCollapse :show="show" navbar>
              <CNavbarNav>
                <CNavItem href="#">Link</CNavItem>
                <CNavItem href="#" disabled>Disabled</CNavItem>
              </CNavbarNav>

              <!-- Right aligned nav items -->
              <CNavbarNav class="c-ml-auto">
                <CForm inline>
                  <CFormInput
                    class="c-mr-sm-2"
                    placeholder="Search"
                    size="sm"
                  />
                  <CButton size="sm" class="c-my-2 c-my-sm-0" type="submit">Search</CButton>
                </CForm>

                <CDropdown
                  buttonHtml="Lang"
                  nav
                  placement="bottom-end"
                >
                    <CDropdownItem>EN</CDropdownItem>
                    <CDropdownItem>ES</CDropdownItem>
                    <CDropdownItem>RU</CDropdownItem>
                    <CDropdownItem>FA</CDropdownItem>
                </CDropdown>

                <CDropdown
                  nav
                  buttonHtml="<em>User</em>"
                  placement="bottom-end"
                >
                  <CDropdownItem>Profile</CDropdownItem>
                  <CDropdownItem>Signout</CDropdownItem>
                </CDropdown>
              </CNavbarNav>
            </CCollapse>
          </CNavbar>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>brand</small>
        </CCardHeader>
        <CCardBody>
          <!-- Image and text -->
          <CNavbar variant="faded" light>
            <CNavbarBrand href="#">
              <img src="https://placekitten.com/g/30/30" class="c-d-inline-block c-align-top" alt="BV">
              BootstrapVue
            </CNavbarBrand>
          </CNavbar>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>text</small>
        </CCardHeader>
        <CCardBody>
          <CNavbar toggleable="sm" light variant="light">
            <CNavbarToggle @click="navbarText=!navbarText"></CNavbarToggle>
            <CNavbarBrand>BootstrapVue</CNavbarBrand>
            <CCollapse :show="navbarText" navbar>
              <CNavbarNav>
                <span class="c-navbar-text">Navbar text</span>
              </CNavbarNav>
            </CCollapse>
          </CNavbar>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>dropdown</small>
        </CCardHeader>
        <CCardBody>
          <CNavbar type="dark" variant="primary">
            <!-- <CNavbarToggle @click="navbarDropdown = !navbarDropdown"></CNavbarToggle>
            <CCollapse :show="navbarDropdown" navbar> -->
              <CNavbarNav>
                <CNavItem href="#">Home</CNavItem>
                <CNavItem href="#">Link</CNavItem>
                <!-- Navbar dropdowns -->
                <CDropdown
                  buttonHtml="Lang"
                  right
                  nav
                >
                  <CDropdownItem>EN</CDropdownItem>
                  <CDropdownItem>ES</CDropdownItem>
                  <CDropdownItem>RU</CDropdownItem>
                  <CDropdownItem>FA</CDropdownItem>
                </CDropdown>
                <CDropdown
                  buttonHtml="User"
                  right
                  nav
                >
                  <CDropdownItem>Account</CDropdownItem>
                  <CDropdownItem>Settings</CDropdownItem>
                </CDropdown>
              </CNavbarNav>
            <!-- </CCollapse> -->
          </CNavbar>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>form</small>
        </CCardHeader>
        <CCardBody>
          <CNavbar type="light" variant="light">
            <CForm inline>
              <CFormInput
                class="c-mr-sm-2"
                placeholder="Search"
                size="sm"
              />
              <CButton variant="outline-success" class="c-my-2 c-my-sm-0" type="submit">Search</CButton>
            </CForm>
          </CNavbar>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>input group</small>
        </CCardHeader>
        <CCardBody>
          <CNavbar type="light" variant="light">
            <CForm inline>
              <CFormInput
                class="c-mr-sm-2"
                placeholder="Username"
              />
            </CForm>
          </CNavbar>
        </CCardBody>
      </CCard>
    </div>
  </div>
</template>
<script>
import DefaultHeaderDropdownAccnt from '../../containers/DefaultHeaderDropdownAccnt'
export default {
  name: 'navbars',
  components: {
    DefaultHeaderDropdownAccnt
  },
  data () {
    return {
      show: false,
      navbarText: false,
      navbarDropdown: false,
    }
  }
}
</script>
