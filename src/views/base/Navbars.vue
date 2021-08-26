<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Navbars</strong>
        </CCardHeader>
        <CCardBody>

            <h4 class="mt-4">Basic usage of navbar</h4>
            <Example href="components/navbar.html#basic-usage">
                <CNavbar expand="lg" colorScheme="light" class="bg-light">
                    <CContainer fluid>
                        <CNavbarBrand href="#">Navbar</CNavbarBrand>
                        <CNavbarToggler @click="visible = !visible"/>
                        <CCollapse class="navbar-collapse" :visible="visible">
                        <CNavbarNav>
                            <CNavItem>
                            <CNavLink href="#" active>
                                Home
                            </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="#">Link</CNavLink>
                            </CNavItem>
                            <CDropdown variant="nav-item" :popper="false">
                            <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem href="#">Action</CDropdownItem>
                                <CDropdownItem href="#">Another action</CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem href="#">Something else here</CDropdownItem>
                            </CDropdownMenu>
                            </CDropdown>
                            <CNavItem>
                            <CNavLink href="#" disabled>
                                Disabled
                            </CNavLink>
                            </CNavItem>
                        </CNavbarNav>
                        <CForm class="d-flex">
                            <CFormInput type="search" class="me-2" placeholder="Search"/>
                            <CButton type="submit" color="success" variant="outline">Search</CButton>
                        </CForm>
                        </CCollapse>
                    </CContainer>
                </CNavbar>
            </Example>

            <h4 class="mt-4">Vue nav brand</h4>
            <CRow>
            <CCol md="6">
            <Example href="components/navbar.html#brand">
                <CNavbar colorScheme="light" class="bg-light">
                    <CContainer fluid>
                        <CNavbarBrand href="#">Brand as link</CNavbarBrand>
                    </CContainer>
                </CNavbar>
            </Example>
            </CCol>
            <CCol md="6">
            <Example href="components/navbar.html#brand">
                <CNavbar colorScheme="light" class="bg-light">
                    <CContainer fluid>
                        <CNavbarBrand class="mb-0 h1">Brand</CNavbarBrand>
                    </CContainer>
                </CNavbar>
            </Example>
            </CCol>
            <CCol md="6">
            <Example href="components/navbar.html#brand">
                <CNavbar colorScheme="light" class="bg-light">
                    <CContainer fluid>
                        <CNavbarBrand href="#">
                            <img src="/images/brand/coreui-signet.svg" alt="" width="22" height="24"/>
                        </CNavbarBrand>
                    </CContainer>
                </CNavbar>
            </Example>
            </CCol>
            <CCol md="6">
            <Example href="components/navbar.html#brand">
                <CNavbar colorScheme="light" class="bg-light">
                    <CContainer fluid>
                        <CNavbarBrand href="#">
                        <img src="/images/brand/coreui-signet.svg" alt="" width="22" height="24" class="d-inline-block align-top"/> CoreUI
                        </CNavbarBrand>
                    </CContainer>
                </CNavbar>
            </Example>
            </CCol>
            </CRow>

            <h4 class="mt-4">Vue navbar with nav</h4>
            <Example href="components/navbar.html#nav">
                <CNavbar expand="lg" colorScheme="light" class="bg-light">
                    <CContainer fluid>
                        <CNavbarBrand href="#">Navbar</CNavbarBrand>
                        <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
                        <CCollapse class="navbar-collapse" :visible="visible">
                        <CNavbarNav>
                            <CNavItem>
                            <CNavLink href="#" active>
                                Home
                            </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="#">Features</CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="#">Pricing</CNavLink>
                            </CNavItem>
                            <CDropdown variant="nav-item" :popper="false">
                            <CDropdownToggle>Dropdown link</CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem href="#">Action</CDropdownItem>
                                <CDropdownItem href="#">Another action</CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem href="#">Something else here</CDropdownItem>
                            </CDropdownMenu>
                            </CDropdown>
                        </CNavbarNav>
                        </CCollapse>
                    </CContainer>
                </CNavbar>
            </Example>

            <h4 class="mt-4">Vue navbar with form</h4>
            <Example href="components/navbar.html#forms">
                <CNavbar colorScheme="light" class="bg-light">
                    <CContainer fluid>
                        <CForm class="d-flex">
                            <CFormInput type="search" class="me-2" placeholder="Search"/>
                            <CButton type="submit" color="success" variant="outline">Search</CButton>
                        </CForm>
                    </CContainer>
                </CNavbar>
            </Example>
            <h4 class="mt-4">Vue navbar with form on right side</h4>
            <Example href="components/navbar.html#forms">
                <CNavbar colorScheme="light" class="bg-light">
                    <CContainer fluid>
                        <CNavbarBrand href="#">Navbar</CNavbarBrand>
                        <CForm class="d-flex">
                            <CFormInput type="search" class="me-2" placeholder="Search"/>
                            <CButton type="submit" color="success" variant="outline">Search</CButton>
                        </CForm>
                    </CContainer>
                </CNavbar>

            </Example>
            <h4 class="mt-4">Vue navbar with input group</h4>
            <Example href="components/navbar.html#forms">
                <CNavbar colorScheme="light" class="bg-light">
                    <CForm class="container-fluid">
                        <CInputGroup>
                        <CInputGroupText id="basic-addon1">@</CInputGroupText>
                        <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/> 
                        </CInputGroup>
                    </CForm>
                </CNavbar>
            </Example>

            <h4 class="mt-4">Vue navbar with buttons</h4>
            <Example href="components/navbar.html#forms">
                <CNavbar colorScheme="light" class="bg-light">
                    <CForm class="container-fluid justify-content-start">
                        <CButton type="button" color="success" variant="outline" class="me-2">Main button</CButton>
                        <CButton type="button" color="secondary" variant="outline" size="sm">Smaller button</CButton>
                    </CForm>
                </CNavbar>
            </Example>

            <h4 class="mt-4">Vue navbar with text</h4>
            <Example href="components/navbar.html#forms">
                <CNavbar colorScheme="light" class="bg-light">
                    <CContainer fluid>
                        <CNavbarText>Navbar text with an inline element</CNavbarText>
                    </CContainer>
                </CNavbar>
            </Example>

            <h4 class="mt-4">Vue navbar color schemes</h4>
            <Example href="components/navbar.html#color-schemes">
                <CNavbar expand="lg" colorScheme="dark" class="bg-dark">
                    <CContainer fluid>
                        <CNavbarBrand href="#">Navbar</CNavbarBrand>
                        <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
                        <CCollapse class="navbar-collapse" :visible="visible">
                        <CNavbarNav>
                            <CNavItem>
                            <CNavLink href="#" active>
                                Home
                            </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="#">Link</CNavLink>
                            </CNavItem>
                            <CDropdown variant="nav-item" :popper="false">
                            <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem href="#">Action</CDropdownItem>
                                <CDropdownItem href="#">Another action</CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem href="#">Something else here</CDropdownItem>
                            </CDropdownMenu>
                            </CDropdown>
                            <CNavItem>
                            <CNavLink href="#" disabled>
                                Disabled
                            </CNavLink>
                            </CNavItem>
                        </CNavbarNav>
                        <CForm class="d-flex">
                            <CFormInput type="search" class="me-2" placeholder="Search"/>
                            <CButton type="submit" color="light" variant="outline">Search</CButton>
                        </CForm>
                        </CCollapse>
                    </CContainer>
                </CNavbar>
                <br/>
                <CNavbar expand="lg" colorScheme="dark" class="bg-primary">
                    <CContainer fluid>
                        <CNavbarBrand href="#">Navbar</CNavbarBrand>
                        <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
                        <CCollapse class="navbar-collapse" :visible="visible">
                        <CNavbarNav>
                            <CNavItem>
                            <CNavLink href="#" active>
                                Home
                            </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="#">Link</CNavLink>
                            </CNavItem>
                            <CDropdown variant="nav-item" :popper="false">
                            <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem href="#">Action</CDropdownItem>
                                <CDropdownItem href="#">Another action</CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem href="#">Something else here</CDropdownItem>
                            </CDropdownMenu>
                            </CDropdown>
                            <CNavItem>
                            <CNavLink href="#" disabled>
                                Disabled
                            </CNavLink>
                            </CNavItem>
                        </CNavbarNav>
                        <CForm class="d-flex">
                            <CFormInput type="search" class="me-2" placeholder="Search"/>
                            <CButton type="submit" color="light" variant="outline">Search</CButton>
                        </CForm>
                        </CCollapse>
                    </CContainer>
                </CNavbar>
                <br/>
                <CNavbar expand="lg" colorScheme="light" style="background-color:#e3f2fd;">
                    <CContainer fluid>
                        <CNavbarBrand href="#">Navbar</CNavbarBrand>
                        <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
                        <CCollapse class="navbar-collapse" :visible="visible">
                        <CNavbarNav>
                            <CNavItem>
                            <CNavLink href="#" active>
                                Home
                            </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="#">Link</CNavLink>
                            </CNavItem>
                            <CDropdown variant="nav-item" :popper="false">
                            <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                            <CDropdownMenu>
                                <CDropdownItem href="#">Action</CDropdownItem>
                                <CDropdownItem href="#">Another action</CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem href="#">Something else here</CDropdownItem>
                            </CDropdownMenu>
                            </CDropdown>
                            <CNavItem>
                            <CNavLink href="#" disabled>
                                Disabled
                            </CNavLink>
                            </CNavItem>
                        </CNavbarNav>
                        <CForm class="d-flex">
                            <CFormInput type="search" class="me-2" placeholder="Search"/>
                            <CButton type="submit" color="primary" variant="outline">Search</CButton>
                        </CForm>
                        </CCollapse>
                    </CContainer>
                </CNavbar>
            </Example>

            <h4 class="mt-4">Vue navbar placement</h4>
            <CRow>
            <CCol md="6">
            <Example href="components/navbar.html#placement">
                <CNavbar colorScheme="light" class="bg-light">
                    <CContainer fluid>
                        <CNavbarBrand href="#">Default</CNavbarBrand>
                    </CContainer>
                </CNavbar>
            </Example>
            </CCol>
            <CCol md="6">
            <Example href="components/navbar.html#placement">
                <CNavbar colorScheme="light" class="bg-light" placement="fixed-top">
                    <CContainer fluid>
                        <CNavbarBrand href="#">Fixed top</CNavbarBrand>
                    </CContainer>
                </CNavbar>
            </Example>
            </CCol>
            <CCol md="6">
            <Example href="components/navbar.html#placement">
                <CNavbar colorScheme="light" class="bg-light" placement="fixed-bottom">
                    <CContainer fluid>
                        <CNavbarBrand href="#">Fixed bottom</CNavbarBrand>
                    </CContainer>
                </CNavbar>
            </Example>
            </CCol>
            <CCol md="6">
            <Example href="components/navbar.html#placement">
                <CNavbar colorScheme="light" class="bg-light" placement="sticky-top">
                    <CContainer fluid>
                        <CNavbarBrand href="#">Sticky top</CNavbarBrand>
                    </CContainer>
                </CNavbar>
            </Example>
            </CCol>
            </CRow>

            <h4 class="mt-4">Vue navbar responsive</h4>
            <p>With no CNavbarBrand shown at the smallest breakpoint:</p>
            <Example href="components/navbar.html#forms">
                <CNavbar expand="lg" colorScheme="light" class="bg-light">
                    <CContainer fluid>
                        <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
                        <CCollapse class="navbar-collapse" :visible="visible">
                        <CNavbarBrand href="#">Hidden brand</CNavbarBrand>
                        <CNavbarNav class="me-auto mb-2 mb-lg-0">
                            <CNavItem>
                            <CNavLink href="#" active>
                                Home
                            </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="#">Link</CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="#" disabled>
                                Disabled
                            </CNavLink>
                            </CNavItem>
                        </CNavbarNav>
                        <CForm class="d-flex">
                            <CFormInput type="search" class="me-2" placeholder="Search"/>
                            <CButton type="submit" color="success" variant="outline">Search</CButton>
                        </CForm>
                        </CCollapse>
                    </CContainer>
                </CNavbar>
            </Example>
            <p>With a brand name shown on the left and toggler on the right:</p>
            <Example href="components/navbar.html#forms">
                <CNavbar expand="lg" colorScheme="light" class="bg-light">
                    <CContainer fluid>
                        <CNavbarBrand href="#">Navbar</CNavbarBrand>
                        <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
                        <CCollapse class="navbar-collapse" :visible="visible">
                        <CNavbarNav class="me-auto mb-2 mb-lg-0">
                            <CNavItem>
                            <CNavLink href="#" active>
                                Home
                            </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="#">Link</CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="#" disabled>
                                Disabled
                            </CNavLink>
                            </CNavItem>
                        </CNavbarNav>
                        <CForm class="d-flex">
                            <CFormInput type="search" class="me-2" placeholder="Search"/>
                            <CButton type="submit" color="success" variant="outline">Search</CButton>
                        </CForm>
                        </CCollapse>
                    </CContainer>
                </CNavbar>
            </Example>

            <p>With a toggler on the left and brand name on the right:</p>
            <Example href="components/navbar.html#forms">
                <CNavbar expand="lg" colorScheme="light" class="bg-light">
                    <CContainer fluid>
                        <CNavbarToggler aria-label="Toggle navigation" aria-expanded={visible} @click="visible = !visible"/>
                        <CNavbarBrand href="#">Navbar</CNavbarBrand>
                        <CCollapse class="navbar-collapse" :visible="visible">
                        <CNavbarNav class="me-auto mb-2 mb-lg-0">
                            <CNavItem>
                            <CNavLink href="#" active>
                                Home
                            </CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="#">Link</CNavLink>
                            </CNavItem>
                            <CNavItem>
                            <CNavLink href="#" disabled>
                                Disabled
                            </CNavLink>
                            </CNavItem>
                        </CNavbarNav>
                        <CForm class="d-flex">
                            <CFormInput type="search" class="me-2" placeholder="Search"/>
                            <CButton type="submit" color="success" variant="outline">Search</CButton>
                        </CForm>
                        </CCollapse>
                    </CContainer>
                </CNavbar>
            </Example>

        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Navbars",
};
</script>