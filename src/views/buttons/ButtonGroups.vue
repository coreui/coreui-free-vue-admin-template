<template>
  <div class="wrapper">
    <div>
      <CRow>
        <CCol col="12" >
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Bootstrap button group</strong>
              <div class="card-header-actions">
                <a 
                  href="https://coreui.io/vue/docs/3.0/components/ButtonComponents" 
                  class="card-header-action" 
                  rel="noreferrer noopener" 
                  target="_blank"
                >
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </CCardHeader>
            <CCardBody>
              <div>
                <CButtonGroup>
                  <CButton variant="secondary">One</CButton>
                  <CButton variant="secondary">Two</CButton>
                  <CButton variant="secondary">Three</CButton>
                  <CButton variant="secondary">Four</CButton>
                  <CButton variant="secondary" class="d-sm-down-none">Five</CButton>
                </CButtonGroup>
                <br><br>
                <CButtonGroup>
                  <CButton class="d-sm-down-none" variant="success">Success</CButton>
                  <CButton variant="info">Info</CButton>
                  <CButton variant="warning">Warn</CButton>
                  <CButton class="d-sm-down-none" variant="primary">Primary</CButton>
                  <CButton variant="danger">Danger</CButton>
                  <CButton variant="link">Link</CButton>
                </CButtonGroup>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol col="12">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Button group </strong>sizing
            </CCardHeader>
            <CCardBody>
              <div>
                <CButtonGroup>
                  <CButton variant="secondary">Left</CButton>
                  <CButton variant="secondary">Middle</CButton>
                  <CButton variant="secondary">Right</CButton>
                </CButtonGroup>
                <br><br>
                <CButtonGroup size="sm">
                  <CButton variant="secondary">Left</CButton>
                  <CButton variant="secondary">Middle</CButton>
                  <CButton variant="secondary">Right</CButton>
                </CButtonGroup>
                <br><br>
                <CButtonGroup size="lg">
                  <CButton variant="secondary">Left</CButton>
                  <CButton variant="secondary">Middle</CButton>
                  <CButton variant="secondary">Right</CButton>
                </CButtonGroup>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol col="12">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Button group </strong>dropdown support
            </CCardHeader>
            <CCardBody>
              <div>
                <CButtonGroup>
                  <CButton variant="secondary" class="d-sm-down-none">Button 1</CButton>
                  <CButton variant="secondary" class="d-sm-down-none">Button 2</CButton>
                  <CDropdown right text="Menu" variant="success">
                    <CDropdownItem>Item 1</CDropdownItem>
                    <CDropdownItem>Item 2</CDropdownItem>
                    <CDropdownDivider></CDropdownDivider>
                    <CDropdownItem>Item 3</CDropdownItem>
                  </CDropdown>
                  <CButton variant="secondary" class="d-sm-down-none">Button 3</CButton>
                  <CDropdown right split text="Split Menu" variant="info">
                    <CDropdownItem>Item 1</CDropdownItem>
                    <CDropdownItem>Item 2</CDropdownItem>
                    <CDropdownDivider></CDropdownDivider>
                    <CDropdownItem>Item 3</CDropdownItem>
                  </CDropdown>
                </CButtonGroup>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol col="12">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Button group </strong>vertical variation
            </CCardHeader>
            <CCardBody>
              <div>
                <CButtonGroup vertical>
                  <CButton variant="secondary">Top</CButton>
                  <CButton variant="secondary">Middle</CButton>
                  <CButton variant="secondary">Bottom</CButton>
                </CButtonGroup>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol col="12">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Button toolbar </strong>
              <small>with button groups</small>
              <!-- <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/button-toolbar" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div> -->
            </CCardHeader>
            <CCardBody>
              <div>
                <CButtonToolbar aria-label="Toolbar with button groups">
                  <CButtonGroup class="mx-1">
                    <CButton variant="secondary" class="d-sm-down-none">&laquo;</CButton>
                    <CButton variant="secondary">&lsaquo;</CButton>
                  </CButtonGroup>
                  <CButtonGroup class="mx-1">
                    <CButton variant="secondary" class="d-sm-down-none">Edit</CButton>
                    <CButton variant="secondary">Undo</CButton>
                    <CButton variant="secondary">Redo</CButton>
                  </CButtonGroup>
                  <CButtonGroup class="mx-1">
                    <CButton variant="secondary">&rsaquo;</CButton>
                    <CButton variant="secondary" class="d-sm-down-none">&raquo;</CButton>
                  </CButtonGroup>
                </CButtonToolbar>
              </div>
              <hr class="d-sm-down-none"/>
              <div>
                <CButtonToolbar
                  aria-label="Toolbar with button groups and input groups"
                  class="d-sm-down-none"
                >
                  <CButtonGroup size="sm" class="mx-1">
                    <CButton variant="secondary">New</CButton>
                    <CButton variant="secondary">Edit</CButton>
                  </CButtonGroup>
                  <CFormInput
                    class="mb-0 w-25 mx-1"
                    size="sm"
                    prepend-html="$"
                    append-html=".00"
                    value="100"
                  />
                  <CFormSelect
                    class="mb-0 w-25 mx-1"
                    size="sm"
                    prepend-html="Size"
                    value="Medium"
                    :options="['Large','Medium','Small']"
                    custom
                  />
                  <CButtonGroup size="sm" class="mx-1">
                    <CButton variant="secondary">Save</CButton>
                    <CButton variant="secondary">Cancel</CButton>
                  </CButtonGroup>
                </CButtonToolbar>
              </div>
              <hr/>
              <div>
                <CButtonToolbar aria-label="Toolbar with button groups and dropdown menu">
                  <CButtonGroup class="mx-1 d-sm-down-none">
                    <CButton variant="secondary">New</CButton>
                    <CButton variant="secondary">Edit</CButton>
                    <CButton variant="secondary">Undo</CButton>
                  </CButtonGroup>
                  <CDropdown
                    variant="secondary"
                    class="mx-1"
                    placement="bottom-end"
                    button-content="Menu"
                  >
                    <CDropdownItem>Item 1</CDropdownItem>
                    <CDropdownItem>Item 2</CDropdownItem>
                    <CDropdownItem>Item 3</CDropdownItem>
                  </CDropdown>
                  <CButtonGroup class="mx-1">
                    <CButton variant="secondary">Save</CButton>
                    <CButton variant="secondary">Cancel</CButton>
                  </CButtonGroup>
                </CButtonToolbar>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  </div>
</template>
<script>
export default {
  name: 'button-groups',
  data () {
    return {
      myToggle: false,
      myToggle2: false,
      itemsCount: 33

    }
  }
}
</script>
