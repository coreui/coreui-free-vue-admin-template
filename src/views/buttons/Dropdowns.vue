<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CRow>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Bootstrap Dropdown</strong>
              <!-- <div class="card-header-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/dropdown" class="card-header-action" rel="noreferrer noopener" target="_blank">
                  <small class="text-muted">docs</small>
                </a>
              </div> -->
            </CCardHeader>
            <CCardBody>
              <div>
                <CDropdown id="ddown1" buttonContent="Dropdown Button" class="m-2">
                  <CDropdownItem>First Action</CDropdownItem>
                  <CDropdownItem>Second Action</CDropdownItem>
                  <CDropdownItem>Third Action</CDropdownItem>
                  <CDropdownDivider></CDropdownDivider>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </div>
              <!-- <div>
                <CDropdown id="ddown-buttons" buttonContent="Dropdown using buttons as menu items" class="m-2">
                  <CDropdownItem>I'm a button</CDropdownItem>
                  <CDropdownItem>I'm also a button</CDropdownItem>
                  <CDropdownItem disabled>I'm a button, but disabled!</CDropdownItem>
                  <CDropdownItem>I don't look like a button, but I am!</CDropdownItem>
                </CDropdown>
              </div> -->
              <div>
                <CDropdown id="ddown-divider" buttonContent="Dropdown with divider" class="m-2">
                  <CDropdownItem>First item</CDropdownItem>
                  <CDropdownItem>Second item</CDropdownItem>
                  <CDropdownDivider></CDropdownDivider>
                  <CDropdownItem>Separated Item</CDropdownItem>
                </CDropdown>
              </div>
              <div>
                <CDropdown id="ddown-header" buttonContent="Dropdown with header" class="m-2">
                  <CDropdownHeader>Dropdown header</CDropdownHeader>
                  <CDropdownItem>First item</CDropdownItem>
                  <CDropdownItem>Second Item</CDropdownItem>
                </CDropdown>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Dropdown </strong><small>positioning</small>
            </CCardHeader>
            <CCardBody>
              <div>
                <CDropdown id="ddown-left" buttonContent="Left align" variant="primary" class="m-2">
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here</CDropdownItem>
                </CDropdown>
                <CDropdown id="ddown-right"
                           placement="bottom-end"
                           buttonContent="Right align"
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
                           buttonContent="Drop-Up"
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
                           buttonContent="Offset Dropdown"
                           class="m-2"
                >
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here</CDropdownItem>
                </CDropdown>
              </div>
              <div>
                <CDropdown id="ddown-split" split buttonContent="Split Dropdown" class="m-2">
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                </CDropdown>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Dropdown </strong><small>hidden caret</small>
            </CCardHeader>
            <CCardBody>
              <div>
                <CDropdown variant="link"
                           size="lg"
                           buttonContent="&#x1f50d;<span class='sr-only'>Search</span>"
                           no-caret
                >
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                </CDropdown>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Dropdown </strong><small>sizing</small>
            </CCardHeader>
            <CCardBody>
              <div>
                <CDropdown id="ddown-lg" size="lg" buttonContent="Large" class="m-2">
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here</CDropdownItem>
                </CDropdown>
                <CDropdown id="ddown-lg-split" size="lg" split buttonContent="Large Split" class="m-2">
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                </CDropdown>
                <br>
                <CDropdown id="ddown-sm" size="sm" buttonContent="Small" class="m-2">
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                </CDropdown>
                <CDropdown id="ddown-sm-split" size="sm" split buttonContent="Small Split" class="m-2">
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                </CDropdown>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Dropdown </strong><small>headers and accessibility</small>
            </CCardHeader>
            <CCardBody>
              <div>
                <CDropdown id="ddown-aria" buttonContent="Dropdown ARIA" variant="primary" class="m-2">
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
            </CCardBody>
          </CCard>
        </CCol>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Dropdown </strong><small><code>variant</code></small>
            </CCardHeader>
            <CCardBody>
              <CDropdown size="sm" id="ddown_primary" buttonContent="Primary" variant="primary" class="m-0">
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown size="sm" id="ddown_secondary" buttonContent="Secondary" variant="secondary" class="m-0">
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown size="sm" id="ddown_success" buttonContent="Success" variant="success" class="m-0">
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown size="sm" id="ddown_warning" buttonContent="Warning" variant="warning" class="m-0">
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown size="sm" id="ddown_danger" buttonContent="Danger" variant="danger" class="m-0">
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown size="sm" id="ddown_info" buttonContent="Info" variant="info" class="m-0">
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown size="sm" id="ddown_light" buttonContent="Light" variant="light" class="m-0">
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown size="sm" id="ddown_dark" buttonContent="Dark" variant="dark" class="m-0">
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown size="sm" id="ddown_link" buttonContent="Link" variant="link" class="m-0">
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
            </CCardBody>
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
