<template>
  <div class="c-wrapper">
    <div class="c-animated c-fadeIn">
      <CRow>
        <CCol col="12" >
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Bootstrap button group</strong>
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
                  <CButton class="c-d-sm-down-none">Five</CButton>
                </CButtonGroup>
                <br><br>
                <CButtonGroup>
                  <CButton class="c-d-sm-down-none" variant="success">Success</CButton>
                  <CButton variant="info">Info</CButton>
                  <CButton variant="warning">Warn</CButton>
                  <CButton class="c-d-sm-down-none" variant="primary">Primary</CButton>
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
        <CCol col="12">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Button group </strong>dropdown support
            </CCardHeader>
            <CCardBody>
              <div>
                <CButtonGroup>
                  <CButton class="c-d-sm-down-none">Button 1</CButton>
                  <CButton class="c-d-sm-down-none">Button 2</CButton>
                  <CDropdown right text="Menu" variant="success">
                    <CDropdownItem>Item 1</CDropdownItem>
                    <CDropdownItem>Item 2</CDropdownItem>
                    <CDropdownDivider></CDropdownDivider>
                    <CDropdownItem>Item 3</CDropdownItem>
                  </CDropdown>
                  <CButton class="c-d-sm-down-none">Button 3</CButton>
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
                  <CButton>Top</CButton>
                  <CButton>Middle</CButton>
                  <CButton>Bottom</CButton>
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
                  <CButtonGroup class="c-mx-1">
                    <CButton class="c-d-sm-down-none">&laquo;</CButton>
                    <CButton>&lsaquo;</CButton>
                  </CButtonGroup>
                  <CButtonGroup class="c-mx-1">
                    <CButton class="c-d-sm-down-none">Edit</CButton>
                    <CButton>Undo</CButton>
                    <CButton>Redo</CButton>
                  </CButtonGroup>
                  <CButtonGroup class="c-mx-1">
                    <CButton>&rsaquo;</CButton>
                    <CButton class="c-d-sm-down-none">&raquo;</CButton>
                  </CButtonGroup>
                </CButtonToolbar>
              </div>
              <hr class="c-d-sm-down-none"/>
              <div>
                <CButtonToolbar
                  aria-label="Toolbar with button groups and input groups"
                  class="c-d-sm-down-none"c-
                >
                  <CButtonGroup size="sm" class="c-mx-1">
                    <CButton>New</CButton>
                    <CButton>Edit</CButton>
                  </CButtonGroup>
                  <CFormInput
                    class="c-mb-0 c-w-25 c-mx-1"
                    size="sm"
                    prepend-html="$"
                    append-html=".00"
                    value="100"
                  />
                  <CFormSelect
                    class="c-mb-0 c-w-25 c-mx-1"
                    size="sm"
                    prepend-html="Size"
                    value="Medium"
                    :options="['Large','Medium','Small']"
                    custom
                  />
                  <CButtonGroup size="sm" class="c-mx-1">
                    <CButton>Save</CButton>
                    <CButton>Cancel</CButton>
                  </CButtonGroup>
                </CButtonToolbar>
              </div>
              <hr/>
              <div>
                <CButtonToolbar aria-label="Toolbar with button groups and dropdown menu">
                  <CButtonGroup class="c-mx-1 c-d-sm-down-none">
                    <CButton>New</CButton>
                    <CButton>Edit</CButton>
                    <CButton>Undo</CButton>
                  </CButtonGroup>
                  <CDropdown
                    class="c-mx-1"
                    placement="bottom-end"
                    button-content="Menu"
                  >
                    <CDropdownItem>Item 1</CDropdownItem>
                    <CDropdownItem>Item 2</CDropdownItem>
                    <CDropdownItem>Item 3</CDropdownItem>
                  </CDropdown>
                  <CButtonGroup class="c-mx-1">
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
