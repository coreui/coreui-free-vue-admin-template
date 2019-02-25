<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CRow>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader slot="header">
              <i class="fa fa-align-justify"></i><strong> Bootstrap Dropdown</strong>
              <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/dropdown" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div>
            </CCardHeader>
            <div>
              <CDropdown id="ddown1" button-content="Dropdown Button" class="m-2">
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
                <CDropdownDivider></CDropdownDivider>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdown>
            </div>
            <!-- <div>
              <CDropdown id="ddown-buttons" button-content="Dropdown using buttons as menu items" class="m-2">
                <CDropdownItem>I'm a button</CDropdownItem>
                <CDropdownItem>I'm also a button</CDropdownItem>
                <CDropdownItem disabled>I'm a button, but disabled!</CDropdownItem>
                <CDropdownItem>I don't look like a button, but I am!</CDropdownItem>
              </CDropdown>
            </div> -->
            <div>
              <CDropdown id="ddown-divider" button-content="Dropdown with divider" class="m-2">
                <CDropdownItem>First item</CDropdownItem>
                <CDropdownItem>Second item</CDropdownItem>
                <CDropdownDivider></CDropdownDivider>
                <CDropdownItem>Separated Item</CDropdownItem>
              </CDropdown>
            </div>
            <div>
              <CDropdown id="ddown-header" button-content="Dropdown with header" class="m-2">
                <CDropdownHeader>Dropdown header</CDropdownHeader>
                <CDropdownItem>First item</CDropdownItem>
                <CDropdownItem>Second Item</CDropdownItem>
              </CDropdown>
            </div>
          </CCard>
        </CCol>
        <CCol cols="12" md="6">
          <CCard

            >
            <CCardHeader slot="header">
              <i class="fa fa-align-justify"></i><strong> Dropdown </strong><small>positioning</small>
            </CCardHeader>
            <div>
              <CDropdown id="ddown-left" button-content="Left align" variant="primary" class="m-2">
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here</CDropdownItem>
              </CDropdown>
              <CDropdown id="ddown-right"
                         placement="bottom-end"
                         button-content="Right align"
                         variant="primary"
                         class="m-2"
              >
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here</CDropdownItem>
              </CDropdown>
            </div>
            <div>
              <CDropdown id="ddown-dropup"
                         button-content="Drop-Up"
                         variant="info"
                         class="m-2"
                         dropup
              >
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here</CDropdownItem>
              </CDropdown>
            </div>
            <div>
              <CDropdown id="ddown-offset"
                         :offset="25"
                         button-content="Offset Dropdown"
                         class="m-2"
              >
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here</CDropdownItem>
              </CDropdown>
            </div>
            <div>
              <CDropdown id="ddown-split" split button-content="Split Dropdown" class="m-2">
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
              </CDropdown>
            </div>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol cols="12" md="6">
          <CCard

            >
            <CCardHeader slot="header">
              <i class="fa fa-align-justify"></i><strong> Dropdown </strong><small>hidden caret</small>
            </CCardHeader>
            <div>
              <CDropdown variant="link"
                         size="lg"
                         button-content="&#x1f50d;<span class='sr-only'>Search</span>"
                         no-caret
              >
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
              </CDropdown>
            </div>
          </CCard>
        </CCol>
        <CCol cols="12" md="6">
          <CCard

            >
            <CCardHeader slot="header">
              <i class="fa fa-align-justify"></i><strong> Dropdown </strong><small>sizing</small>
            </CCardHeader>
            <div>
              <CDropdown id="ddown-lg" size="lg" button-content="Large" class="m-2">
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here</CDropdownItem>
              </CDropdown>
              <CDropdown id="ddown-lg-split" size="lg" split button-content="Large Split" class="m-2">
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
              </CDropdown>
              <br>
              <CDropdown id="ddown-sm" size="sm" button-content="Small" class="m-2">
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
              </CDropdown>
              <CDropdown id="ddown-sm-split" size="sm" split button-content="Small Split" class="m-2">
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
              </CDropdown>
            </div>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol cols="12" md="6">
          <CCard

            >
            <CCardHeader slot="header">
              <i class="fa fa-align-justify"></i><strong> Dropdown </strong><small>headers and accessibility</small>
            </CCardHeader>
            <div>
              <CDropdown id="ddown-aria" button-content="Dropdown ARIA" variant="primary" class="m-2">
                <div role="group" aria-lableledby="header1">
                  <CDropdownHeader id="header1">Groups</CDropdownHeader>
                  <CDropdownItem aria-describedby="header1">Add</CDropdownItem>
                  <CDropdownItem aria-describedby="header1">Delete</CDropdownItem>
                </div>
                <div role="group" aria-lableledby="header2">
                  <CDropdownHeader id="header2">Users</CDropdownHeader>
                  <CDropdownItem aria-describedby="header2">Add</CDropdownItem>
                  <CDropdownItem aria-describedby="header2">Delete</CDropdownItem>
                </div>
                <CDropdownDivider></CDropdownDivider>
                <CDropdownItem>Something <strong>not</strong> associated with user</CDropdownItem>
              </CDropdown>
            </div>
          </CCard>
        </CCol>
        <CCol cols="12" md="6">
          <CCard

            >
            <CCardHeader slot="header">
              <i class="fa fa-align-justify"></i><strong> Dropdown </strong><small><code>variant</code></small>
            </CCardHeader>
            <CDropdown size="sm" id="ddown_primary" button-content="Primary" variant="primary" class="m-0">
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown size="sm" id="ddown_secondary" button-content="Secondary" variant="secondary" class="m-0">
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown size="sm" id="ddown_success" button-content="Success" variant="success" class="m-0">
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown size="sm" id="ddown_warning" button-content="Warning" variant="warning" class="m-0">
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown size="sm" id="ddown_danger" button-content="Danger" variant="danger" class="m-0">
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown size="sm" id="ddown_info" button-content="Info" variant="info" class="m-0">
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown size="sm" id="ddown_light" button-content="Light" variant="light" class="m-0">
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown size="sm" id="ddown_dark" button-content="Dark" variant="dark" class="m-0">
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown size="sm" id="ddown_link" button-content="Link" variant="link" class="m-0">
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
          </CCard>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdowns'
}
</script>
