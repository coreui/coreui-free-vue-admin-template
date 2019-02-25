<template>
  <div class="wrapper">
    <div class="animated fadeIn">
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
                <CDropdownItem><i class="fa fa-file" /> Projects
                  <CBadge variant="primary">32</CBadge>
                </CDropdownItem>
                <CDropdownItem><i class="fa fa-shield" /> Lock Account</CDropdownItem>
                <CDropdownItem><i class="fa fa-lock" /> Logout</CDropdownItem>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CNavbar>
      </CCard> -->
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Navbar </strong>
          <div class="card-header-actions">
            <a href="https://bootstrap-vue.js.org/docs/components/navbar" class="card-header-action" rel="noreferrer noopener" target="_blank">
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CNavbar toggleable="md" type="dark" variant="info">
          <CNavbarToggle @click="show=!show"/>
          <CNavbarBrand href="#">NavBar</CNavbarBrand>
          <CCollapse :show="show"
                     navbar
          >
            <CNavbarNav>
              <CNavItem href="#">Link</CNavItem>
              <CNavItem href="#" disabled>Disabled</CNavItem>
            </CNavbarNav>

            <!-- Right aligned nav items -->
            <CNavbarNav class="ml-auto">
              <CForm inline>
                <CFormInput
                  class="mr-sm-2"
                  placeholder="Search"
                  size="sm"
                />
                <CButton size="sm" class="my-2 my-sm-0" type="submit">Search</CButton>
              </CForm>

              <CDropdown button-content="Lang"
                         nav
                         placement="bottom-end"
              >
                  <CDropdownItem>EN</CDropdownItem>
                  <CDropdownItem>ES</CDropdownItem>
                  <CDropdownItem>RU</CDropdownItem>
                  <CDropdownItem>FA</CDropdownItem>
              </CDropdown>

              <CDropdown nav
                         button-content="<em>User</em>"
                         placement="bottom-end"
              >
                <CDropdownItem>Profile</CDropdownItem>
                <CDropdownItem>Signout</CDropdownItem>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CNavbar>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>brand</small>
        </CCardHeader>
        <div>
          <!-- Image and text -->
          <CNavbar variant="faded" light>
            <CNavbarBrand href="#">
              <img src="https://placekitten.com/g/30/30" class="d-inline-block align-top" alt="BV">
              BootstrapVue
            </CNavbarBrand>
          </CNavbar>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>text</small>
        </CCardHeader>
        <div>
          <CNavbar toggleable="sm" light variant="light">
            <CNavbarToggle @click="navbarText=!navbarText"></CNavbarToggle>
            <CNavbarBrand>BootstrapVue</CNavbarBrand>
            <CCollapse :show="navbarText" navbar>
              <CNavbarNav>
                <span class="navbar-text">Navbar text</span>
              </CNavbarNav>
            </CCollapse>
          </CNavbar>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>dropdown</small>
        </CCardHeader>
        <div>
          <CNavbar type="dark" variant="primary">
            <!-- <CNavbarToggle @click="navbarDropdown = !navbarDropdown"></CNavbarToggle>
            <CCollapse :show="navbarDropdown" navbar> -->
              <CNavbarNav>
                <CNavItem href="#">Home</CNavItem>
                <CNavItem href="#">Link</CNavItem>
                <!-- Navbar dropdowns -->
                <CDropdown button-content="Lang" right nav>
                  <CDropdownItem>EN</CDropdownItem>
                  <CDropdownItem>ES</CDropdownItem>
                  <CDropdownItem>RU</CDropdownItem>
                  <CDropdownItem>FA</CDropdownItem>
                </CDropdown>
                <CDropdown button-content="User" right nav>
                  <CDropdownItem>Account</CDropdownItem>
                  <CDropdownItem>Settings</CDropdownItem>
                </CDropdown>
              </CNavbarNav>
            <!-- </CCollapse> -->
          </CNavbar>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>form</small>
        </CCardHeader>
        <div>
          <CNavbar type="light" variant="light">
            <CForm inline>
              <CFormInput
                class="mr-sm-2"
                placeholder="Search"
                size="sm"
              />
              <CButton variant="outline-success" class="my-2 my-sm-0" type="submit">Search</CButton>
            </CForm>
          </CNavbar>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i> <strong> Navbar </strong>
          <small>input group</small>
        </CCardHeader>
        <div>
          <CNavbar type="light" variant="light">
            <CForm inline>
              <CFormInput
                class="mr-sm-2"
                placeholder="Username"
              />
            </CForm>
          </CNavbar>
        </div>
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
