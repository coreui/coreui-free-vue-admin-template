<template>
  <CRow>
    <CCol col="12">
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
              <CButton color="secondary">One</CButton>
              <CButton color="secondary">Two</CButton>
              <CButton color="secondary">Three</CButton>
              <CButton color="secondary">Four</CButton>
              <CButton color="secondary" class="d-sm-down-none">Five</CButton>
            </CButtonGroup>
            <br><br>
            <CButtonGroup>
              <CButton class="d-sm-down-none" color="success">Success</CButton>
              <CButton color="info">Info</CButton>
              <CButton color="warning">Warn</CButton>
              <CButton class="d-sm-down-none" color="primary">Primary</CButton>
              <CButton color="danger">Danger</CButton>
              <CButton color="link">Link</CButton>
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
              <CButton color="secondary">Left</CButton>
              <CButton color="secondary">Middle</CButton>
              <CButton color="secondary">Right</CButton>
            </CButtonGroup>
            <br><br>
            <CButtonGroup size="sm">
              <CButton color="secondary">Left</CButton>
              <CButton color="secondary">Middle</CButton>
              <CButton color="secondary">Right</CButton>
            </CButtonGroup>
            <br><br>
            <CButtonGroup size="lg">
              <CButton color="secondary">Left</CButton>
              <CButton color="secondary">Middle</CButton>
              <CButton color="secondary">Right</CButton>
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
              <CButton color="secondary" class="d-sm-down-none">Button 1</CButton>
              <CButton color="secondary" class="d-sm-down-none">Button 2</CButton>
              <CDropdown right text="Menu" color="success">
                <CDropdownItem>Item 1</CDropdownItem>
                <CDropdownItem>Item 2</CDropdownItem>
                <CDropdownDivider></CDropdownDivider>
                <CDropdownItem>Item 3</CDropdownItem>
              </CDropdown>
              <CButton color="secondary" class="d-sm-down-none">Button 3</CButton>
              <CDropdown right split text="Split Menu" color="info">
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
              <CButton color="secondary">Top</CButton>
              <CButton color="secondary">Middle</CButton>
              <CButton color="secondary">Bottom</CButton>
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
          <CButtonToolbar aria-label="Toolbar with button groups" >
            <CButtonGroup class="mx-1">
              <CButton color="secondary" class="d-sm-down-none">&laquo;</CButton>
              <CButton color="secondary">&lsaquo;</CButton>
            </CButtonGroup>
            <CButtonGroup class="mx-1">
              <CButton color="secondary" class="d-sm-down-none">Edit</CButton>
              <CButton color="secondary">Undo</CButton>
              <CButton color="secondary">Redo</CButton>
            </CButtonGroup>
            <CButtonGroup class="mx-1">
              <CButton color="secondary">&rsaquo;</CButton>
              <CButton color="secondary" class="d-sm-down-none">&raquo;</CButton>
            </CButtonGroup>
          </CButtonToolbar>
          <hr class="d-sm-down-none"/>
          <CButtonToolbar
            aria-label="Toolbar with button groups and input groups"
            class="d-sm-down-none"
          >
            <CButtonGroup size="sm" class="mx-1">
              <CButton color="secondary">New</CButton>
              <CButton color="secondary">Edit</CButton>
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
              <CButton color="secondary">Save</CButton>
              <CButton color="secondary">Cancel</CButton>
            </CButtonGroup>
          </CButtonToolbar>
          <hr/>
          <CButtonToolbar aria-label="Toolbar with button groups and dropdown menu">
            <CButtonGroup class="mx-1 d-sm-down-none">
              <CButton color="secondary">New</CButton>
              <CButton color="secondary">Edit</CButton>
              <CButton color="secondary">Undo</CButton>
            </CButtonGroup>
            <CDropdown
              color="secondary"
              class="mx-1"
              placement="bottom-end"
              button-content="Menu"
            >
              <CDropdownItem>Item 1</CDropdownItem>
              <CDropdownItem>Item 2</CDropdownItem>
              <CDropdownItem>Item 3</CDropdownItem>
            </CDropdown>
            <CButtonGroup class="mx-1">
              <CButton color="secondary">Save</CButton>
              <CButton color="secondary">Cancel</CButton>
            </CButtonGroup>
          </CButtonToolbar>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
<script>
export default {
  name: 'ButtonGroups',
}
</script>
