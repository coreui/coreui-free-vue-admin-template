<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Button Dropdowns</strong>
        </CCardHeader>
        <CCardBody>


            <h4 class="mt-4">Single button</h4>
            <CRow>
            <CCol md="6">
            <Example href="components/dropdown.html#single-button">
                <CDropdown color="secondary">
                    <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </Example>
            </CCol>
            <CCol md="6">
            <Example href="components/dropdown.html#single-button">
                <CDropdown color="secondary" togglerText="Dropdown button">
                    <CDropdownToggle component="a" color="primary">Dropdown Button</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>  
                </CDropdown>
            </Example>
            </CCol>
            </CRow>
            <Example href="components/dropdown.html#single-button">
                <template v-for="(item) in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']">
                    <CDropdown :color="item" :togglerText="item" variant="btn-group">
                        <CDropdownToggle :color="item">{{item}}</CDropdownToggle>
                        <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </template>
            </Example>

            <h4 class="mt-4">Split button</h4>
            <Example href="components/dropdown.html#split-button">
                <template v-for="(item) in ['primary', 'secondary', 'success', 'info', 'warning', 'danger']">
                    <CDropdown :color="item" :togglerText="item" variant="btn-group">
                        <CButton :color="item">{{ item }}</CButton>
                        <CDropdownToggle :color="item" split>{{item}}</CDropdownToggle>
                        <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </template>
            </Example>

            <h4 class="mt-4">Sizing</h4>
            <Example href="components/dropdown.html#sizing">
                <CDropdown variant="btn-group">
                    <CDropdownToggle color="secondary" size="lg">Large button</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider/>
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                    </CDropdown>
                    <CDropdown variant="btn-group">
                    <CButton color="secondary" size="lg">Large split button</CButton>
                    <CDropdownToggle color="secondary" size="lg" split>Large button</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider/>
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
                <CDropdown variant="btn-group">
                    <CDropdownToggle color="secondary" size="sm">Small button</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider/>
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                    </CDropdown>
                    <CDropdown variant="btn-group">
                    <CButton color="secondary" size="sm">Small split button</CButton>
                    <CDropdownToggle color="secondary" size="sm" split>Small button</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider/>
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </Example>

            <h4 class="mt-4">Dark dropdowns</h4>
            <Example href="components/dropdown.html#dark-dropdowns">
                <CDropdown color="secondary" dark>
                    <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider/>
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </Example>
            <p>In navbar:</p>
            <Example href="components/dropdown.html#dark-dropdowns">
                <CNavbar expand="lg" colorScheme="dark" class="bg-dark">
                    <CContainer fluid>
                        <CNavbarBrand href="#">Navbar</CNavbarBrand>
                        <CNavbarNav>
                        <CDropdown dark variant="nav-item">
                            <CDropdownToggle color="primary">Dropdown Button</CDropdownToggle>
                            <CDropdownMenu>
                            <CDropdownItem href="#">Action</CDropdownItem>
                            <CDropdownItem href="#">Another action</CDropdownItem>
                            <CDropdownItem href="#">Something else here</CDropdownItem>
                            <CDropdownDivider/>
                            <CDropdownItem href="#">Separated link</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                        </CNavbarNav>
                    </CContainer>
                </CNavbar>
            </Example>

            <h4 class="mt-4">Directions</h4>
            <Example href="components/dropdown.html#directions">
                <CDropdown color="secondary" direction="dropup">
                    <CDropdownToggle color="secondary">Dropup</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider/>
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                    </CDropdown>
                    <CDropdown color="secondary" direction="dropup">
                    <CButton color="secondary">Split dropup</CButton>
                    <CDropdownToggle color="secondary" split/>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider/>
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </Example>
            <Example href="components/dropdown.html#directions">
                <CDropdown color="secondary" direction="dropend">
                    <CDropdownToggle color="secondary">Dropend</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider/>
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                    </CDropdown>
                    <CDropdown color="secondary" direction="dropend">
                    <CButton color="secondary">Split dropend</CButton>
                    <CDropdownToggle color="secondary" split/>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider/>
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </Example>
            <Example href="components/dropdown.html#directions">
                <CDropdown color="secondary" direction="dropstart">
                    <CDropdownToggle color="secondary">Dropstart</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider/>
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                    </CDropdown>
                    <CButtonGroup>
                    <CDropdown color="secondary" direction="dropstart">
                        <CDropdownToggle color="secondary" split/>
                        <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider/>
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                    <CButton color="secondary">Split dropstart</CButton>
                </CButtonGroup>
            </Example>

            <h4 class="mt-4">Responsive alignment</h4>
            <Example href="components/dropdown.html#responsive-alignment">
                <CDropdown color="secondary" :alignment="{ 'lg': 'end' }">
                    <CDropdownToggle color="secondary">Left-aligned but right aligned when large screen</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider/>
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </Example>
            <Example href="components/dropdown.html#responsive-alignment">
                <CDropdown color="secondary" :alignment="{ 'xs': 'end', 'lg': 'start' }">
                    <CDropdownToggle color="secondary">Right-aligned but left aligned when large screen</CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#">Something else here</CDropdownItem>
                        <CDropdownDivider/>
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>
            </Example>

            <h4 class="mt-4">Dropdown menu content examples</h4>
            <Example href="components/dropdown.html#menu-content">
                <div class="border rounded py-2">
                    <CDropdownHeader>Dropdown header</CDropdownHeader>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                </div>
            </Example>
            <Example href="components/dropdown.html#menu-content">
                <div class="border rounded py-2">
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider/>
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                </div>
            </Example>
            <Example href="components/dropdown.html#menu-content">
                <div class="border rounded p-4 text-muted" style="max-width: 200px">
                    <p>
                        Some example text that's free-flowing within the dropdown menu.
                    </p>
                    <p class="mb-0">
                        And this is more example text.
                    </p>
                </div>
            </Example>
            <Example href="components/dropdown.html#menu-content">
                <div class="border rounded py-2">
                    <CForm class="px-4 py-4">
                        <div class="mb-3">
                        <CFormLabel for="exampleDropdownFormEmail1">Email address</CFormLabel>
                        <CFormInput type="email" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
                        </div>
                        <div class="mb-3">
                        <CFormLabel for="exampleDropdownFormPassword1">Password</CFormLabel>
                        <CFormInput type="password" id="exampleDropdownFormPassword1" placeholder="Password"/>
                        </div>
                        <div class="mb-3">
                        <CFormCheck id="dropdownCheck" label="Remember me"/>
                        </div>
                        <CButton type="submit">Sign in</CButton>
                    </CForm>
                    <CDropdownDivider/>
                    <CDropdownItem href="#">New around here? Sign up</CDropdownItem>
                    <CDropdownItem href="#">Forgot password?</CDropdownItem>
                </div>
            </Example>


        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "ButtonDropdowns",
};
</script>