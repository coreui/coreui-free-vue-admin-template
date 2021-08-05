<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Button Groups</strong>
        </CCardHeader>
        <CCardBody>
            <h4 class="mt-4">Basic example</h4>
            <CRow>
            <CCol md="6">
                <Example href="components/button-group.html#basic-example">
                    <CButtonGroup role="group" aria-label="Basic example">
                        <CButton color="primary">Left</CButton>
                        <CButton color="primary">Middle</CButton>
                        <CButton color="primary">Right</CButton>
                    </CButtonGroup>
                </Example>
            </CCol>
            <CCol md="6">
                <Example href="components/button-group.html#basic-example">
                    <CButtonGroup>
                        <CButton href="#" color="primary" active>Active link</CButton>
                        <CButton href="#" color="primary">Link</CButton>
                        <CButton href="#" color="primary">Link</CButton>
                    </CButtonGroup>
                </Example>
            </CCol>
            </CRow>


            <CRow>
            <CCol md="6">
                <h4 class="mt-4">Mixed styles</h4>
                <Example href="components/button-group.html#mixed-styles">
                    <CButtonGroup role="group" aria-label="Basic mixed styles example">
                        <CButton color="danger">Left</CButton>
                        <CButton color="warning">Middle</CButton>
                        <CButton color="success">Right</CButton>
                    </CButtonGroup>
                </Example>
            </CCol>
            <CCol md="6">
                <h4 class="mt-4">Outlined styles</h4>
                <Example href="components/button-group.html#outlined-styles">
                    <CButtonGroup role="group" aria-label="Basic outlined example">
                        <CButton color="primary" variant="outline">Left</CButton>
                        <CButton color="primary" variant="outline">Middle</CButton>
                        <CButton color="primary" variant="outline">Right</CButton>
                    </CButtonGroup>
                </Example>
            </CCol>
            </CRow>


            <h4 class="mt-4">Checkbox and radio button groups</h4>
            <CRow>
            <CCol md="6">
                <Example href="components/button-group.html#checkbox-and-radio-button-groups">
                    <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                        <CFormCheck button buttonVariant="outline" id="btncheck1" autoComplete="off" label="Checkbox 1"/>
                        <CFormCheck button buttonVariant="outline" id="btncheck2" autoComplete="off" label="Checkbox 2"/>
                        <CFormCheck button buttonVariant="outline" id="btncheck3" autoComplete="off" label="Checkbox 3"/>
                    </CButtonGroup>
                </Example>
            </CCol>
            <CCol md="6">
                <Example href="components/button-group.html#checkbox-and-radio-button-groups">
                    <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                        <CFormCheck type="radio" button buttonVariant="outline" name="btnradio" id="btnradio1" autoComplete="off" label="Radio 1"/>
                        <CFormCheck type="radio" button buttonVariant="outline" name="btnradio" id="btnradio2" autoComplete="off" label="Radio 2"/>
                        <CFormCheck type="radio" button buttonVariant="outline" name="btnradio" id="btnradio3" autoComplete="off" label="Radio 3"/>
                    </CButtonGroup>
                </Example>
            </CCol>
            </CRow>


            <h4 class="mt-4">Button toolbar</h4>
                <Example href="components/button-group.html#button-toolbar">
                    <CButtonToolbar role="group" aria-label="Toolbar with button groups">
                        <CButtonGroup class="me-2" role="group" aria-label="First group">
                            <CButton color="primary">1</CButton>
                            <CButton color="primary">2</CButton>
                            <CButton color="primary">3</CButton>
                            <CButton color="primary">4</CButton>
                        </CButtonGroup>
                        <CButtonGroup class="me-2" role="group" aria-label="Second group">
                            <CButton color="secondary">5</CButton>
                            <CButton color="secondary">6</CButton>
                            <CButton color="secondary">7</CButton>
                        </CButtonGroup>
                        <CButtonGroup class="me-2" role="group" aria-label="Third group">
                            <CButton color="info">8</CButton>
                        </CButtonGroup>
                    </CButtonToolbar>
                </Example>
                <Example href="components/button-group.html#button-toolbar">
                    <CButtonToolbar class="mb-3" role="group" aria-label="Toolbar with button groups">
                        <CButtonGroup class="me-2" role="group" aria-label="First group">
                            <CButton color="secondary" variant="outline">1</CButton>
                            <CButton color="secondary" variant="outline">2</CButton>
                            <CButton color="secondary" variant="outline">3</CButton>
                            <CButton color="secondary" variant="outline">4</CButton>
                        </CButtonGroup>
                        <CInputGroup>
                            <CInputGroupText>@</CInputGroupText>
                            <CFormInput placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                        </CInputGroup>
                        </CButtonToolbar>
                        <CButtonToolbar class="justify-content-between" role="group" aria-label="Toolbar with button groups">
                        <CButtonGroup class="me-2" role="group" aria-label="First group">
                            <CButton color="secondary" variant="outline">1</CButton>
                            <CButton color="secondary" variant="outline">2</CButton>
                            <CButton color="secondary" variant="outline">3</CButton>
                            <CButton color="secondary" variant="outline">4</CButton>
                        </CButtonGroup>
                        <CInputGroup>
                            <CInputGroupText>@</CInputGroupText>
                            <CFormInput placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                        </CInputGroup>
                    </CButtonToolbar>
                </Example>

            <h4 class="mt-4">Sizing</h4>
                <Example href="components/button-group.html#sizing">
                    <CButtonGroup size="lg" role="group" aria-label="Large button group">
                        <CButton color="dark" variant="outline">Left</CButton>
                        <CButton color="dark" variant="outline">Middle</CButton>
                        <CButton color="dark" variant="outline">Right</CButton>
                    </CButtonGroup>
                    <br/>
                    <CButtonGroup role="group" aria-label="Default button group">
                        <CButton color="dark" variant="outline">Left</CButton>
                        <CButton color="dark" variant="outline">Middle</CButton>
                        <CButton color="dark" variant="outline">Right</CButton>
                    </CButtonGroup>
                    <br/>
                    <CButtonGroup size="sm" role="group" aria-label="Small button group">
                        <CButton color="dark" variant="outline">Left</CButton>
                        <CButton color="dark" variant="outline">Middle</CButton>
                        <CButton color="dark" variant="outline">Right</CButton>
                    </CButtonGroup>
                </Example>

            <h4 class="mt-4">Vertical variation</h4>
            <CRow>
            <CCol md="4">
                <Example href="components/button-group.html#vertical-variation">
                    <CButtonGroup vertical role="group" aria-label="Vertical button group">
                        <CButton color="dark">Button</CButton>
                        <CButton color="dark">Button</CButton>
                        <CButton color="dark">Button</CButton>
                        <CButton color="dark">Button</CButton>
                        <CButton color="dark">Button</CButton>
                        <CButton color="dark">Button</CButton>
                        <CButton color="dark">Button</CButton>
                    </CButtonGroup>
                </Example>
            </CCol>
            <CCol md="4">
                <Example href="components/button-group.html#vertical-variation">
                    <CButtonGroup vertical role="group" aria-label="Vertical button group">
                        <CButton color="primary">Button</CButton>
                        <CButton color="primary">Button</CButton>
                        <CDropdown variant="btn-group">
                            <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
                            <CDropdownMenu>
                            <CDropdownItem href="#">Action</CDropdownItem>
                            <CDropdownItem href="#">Another action</CDropdownItem>
                            <CDropdownItem href="#">Something else here</CDropdownItem>
                            <CDropdownDivider/>
                            <CDropdownItem href="#">Separated link</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                        <CButton color="primary">Button</CButton>
                        <CButton color="primary">Button</CButton>
                        <CDropdown variant="btn-group">
                            <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
                            <CDropdownMenu>
                            <CDropdownItem href="#">Action</CDropdownItem>
                            <CDropdownItem href="#">Another action</CDropdownItem>
                            <CDropdownItem href="#">Something else here</CDropdownItem>
                            <CDropdownDivider/>
                            <CDropdownItem href="#">Separated link</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                        <CDropdown variant="btn-group">
                            <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
                            <CDropdownMenu>
                            <CDropdownItem href="#">Action</CDropdownItem>
                            <CDropdownItem href="#">Another action</CDropdownItem>
                            <CDropdownItem href="#">Something else here</CDropdownItem>
                            <CDropdownDivider/>
                            <CDropdownItem href="#">Separated link</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                        <CDropdown variant="btn-group">
                            <CDropdownToggle color="primary">Dropdown</CDropdownToggle>
                            <CDropdownMenu>
                            <CDropdownItem href="#">Action</CDropdownItem>
                            <CDropdownItem href="#">Another action</CDropdownItem>
                            <CDropdownItem href="#">Something else here</CDropdownItem>
                            <CDropdownDivider/>
                            <CDropdownItem href="#">Separated link</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                    </CButtonGroup>
                </Example>
            </CCol>
            <CCol md="4">
                <Example href="components/button-group.html#vertical-variation">
                    <CButtonGroup vertical role="group" aria-label="Vertical button group">
                        <CFormCheck type="radio" button buttonColor="danger" buttonVariant="outline" name="vbtnradio" id="vbtnradio1" autoComplete="off" label="Radio 1" defaultChecked/>
                        <CFormCheck type="radio" button buttonColor="danger" buttonVariant="outline" name="vbtnradio" id="vbtnradio2" autoComplete="off" label="Radio 2"/>
                        <CFormCheck type="radio" button buttonColor="danger" buttonVariant="outline" name="vbtnradio" id="vbtnradio3" autoComplete="off" label="Radio 3"/>
                    </CButtonGroup>
                </Example>
            </CCol>
            </CRow>

        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "ButtonGroups",
};
</script>