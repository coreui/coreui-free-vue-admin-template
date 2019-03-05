<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CRow>
        <CCol cols="12" >
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Bootstrap button group</strong>
              <!-- <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/button-group" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div> -->
            </CCardHeader>
            <CCardBody>
              <div>
                <CButtonGroup>
                  <CButton>One</CButton>
                  <CButton>Two</CButton>
                  <CButton>Three</CButton>
                  <CButton>Four</CButton>
                  <CButton class="d-sm-down-none">Five</CButton>
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
        <CCol cols="12">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Button group </strong>sizing
            </CCardHeader>
            <CCardBody>
              <div>
                <CButtonGroup>
                  <CButton>Left</CButton>
                  <CButton>Middle</CButton>
                  <CButton>Right</CButton>
                </CButtonGroup>
                <br><br>
                <CButtonGroup size="sm">
                  <CButton>Left</CButton>
                  <CButton>Middle</CButton>
                  <CButton>Right</CButton>
                </CButtonGroup>
                <br><br>
                <CButtonGroup size="lg">
                  <CButton>Left</CButton>
                  <CButton>Middle</CButton>
                  <CButton>Right</CButton>
                </CButtonGroup>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol cols="12">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Button group </strong>dropdown support
            </CCardHeader>
            <CCardBody>
              <div>
                <CButtonGroup>
                  <CButton class="d-sm-down-none">Button 1</CButton>
                  <CButton class="d-sm-down-none">Button 2</CButton>
                  <CDropdown right text="Menu" variant="success">
                    <CDropdownItem>Item 1</CDropdownItem>
                    <CDropdownItem>Item 2</CDropdownItem>
                    <CDropdownDivider></CDropdownDivider>
                    <CDropdownItem>Item 3</CDropdownItem>
                  </CDropdown>
                  <CButton class="d-sm-down-none">Button 3</CButton>
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
        <CCol cols="12">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Button group </strong>vertical variation
            </CCardHeader>
            <CCardBody>
              <div>
                <CButtonGroup vertical>
                  <CButton>Top</CButton>
                  <CButton>Middle</CButton>
                  <CButton>Bottom</CButton>
                </CButtonGroup>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol cols="12">
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
                <CButtonToolbar key-nav aria-label="Toolbar with button groups">
                  <CButtonGroup class="mx-1">
                    <CButton class="d-sm-down-none">&laquo;</CButton>
                    <CButton>&lsaquo;</CButton>
                  </CButtonGroup>
                  <CButtonGroup class="mx-1">
                    <CButton class="d-sm-down-none">Edit</CButton>
                    <CButton>Undo</CButton>
                    <CButton>Redo</CButton>
                  </CButtonGroup>
                  <CButtonGroup class="mx-1">
                    <CButton>&rsaquo;</CButton>
                    <CButton class="d-sm-down-none">&raquo;</CButton>
                  </CButtonGroup>
                </CButtonToolbar>
              </div>
              <hr class="d-sm-down-none"/>
              <div>
                <CButtonToolbar aria-label="Toolbar with button groups and input groups" class="d-sm-down-none">
                  <CButtonGroup size="sm" class="mx-1">
                    <CButton>New</CButton>
                    <CButton>Edit</CButton>
                  </CButtonGroup>
                  <CFormInput
                    class="mb-0 w-25 mx-1"
                    size="sm"
                    prepend="$"
                    append=".00"
                    value="100"
                  />
                  <CFormSelect
                    class="mb-0 w-25 mx-1"
                    size="sm"
                    prepend="Size"
                    value="Medium"
                    :options="['Large','Medium','Small']"
                    custom
                  />
                  <CButtonGroup  size="sm" class="mx-1">
                    <CButton>Save</CButton>
                    <CButton>Cancel</CButton>
                  </CButtonGroup>
                </CButtonToolbar>
              </div>
              <hr/>
              <div>
                <CButtonToolbar aria-label="Toolbar with button groups and dropdown menu">
                  <CButtonGroup class="mx-1 d-sm-down-none">
                    <CButton>New</CButton>
                    <CButton>Edit</CButton>
                    <CButton>Undo</CButton>
                  </CButtonGroup>
                  <CDropdown
                    class="mx-1"
                    placement="bottom-end"
                    buttonContent="Menu"
                  >
                    <CDropdownItem>Item 1</CDropdownItem>
                    <CDropdownItem>Item 2</CDropdownItem>
                    <CDropdownItem>Item 3</CDropdownItem>
                  </CDropdown>
                  <CButtonGroup class="mx-1">
                    <CButton>Save</CButton>
                    <CButton>Cancel</CButton>
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
