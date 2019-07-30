<template>
  <div class="c-wrapper">
    <div>
      <CRow>
        <CCol col="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Bootstrap Dropdown</strong>
              <div class="c-card-header-actions">
                <a 
                  href="https://coreui.io/vue/docs/3.0/components/Dropdown" 
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
                <CDropdown 
                  button-html="Dropdown Button" 
                  class="c-m-2"
                  variant="secondary"
                >
                  <CDropdownItem>First Action</CDropdownItem>
                  <CDropdownItem>Second Action</CDropdownItem>
                  <CDropdownItem>Third Action</CDropdownItem>
                  <CDropdownDivider></CDropdownDivider>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </div>
              <!-- <div>
                <CDropdown button-html="Dropdown using buttons as menu items" class="c-m-2">
                  <CDropdownItem>I'm a button</CDropdownItem>
                  <CDropdownItem>I'm also a button</CDropdownItem>
                  <CDropdownItem disabled>I'm a button, but disabled!</CDropdownItem>
                  <CDropdownItem>I don't look like a button, but I am!</CDropdownItem>
                </CDropdown>
              </div> -->
              <div>
                <CDropdown 
                  button-html="Dropdown with divider" 
                  class="c-m-2"
                  variant="secondary"
                >
                  <CDropdownItem>First item</CDropdownItem>
                  <CDropdownItem>Second item</CDropdownItem>
                  <CDropdownDivider></CDropdownDivider>
                  <CDropdownItem>Separated Item</CDropdownItem>
                </CDropdown>
              </div>
              <div>
                <CDropdown 
                  button-html="Dropdown with header" 
                  class="c-m-2"
                  variant="secondary"
                >
                  <CDropdownHeader>Dropdown header</CDropdownHeader>
                  <CDropdownItem>First item</CDropdownItem>
                  <CDropdownItem>Second Item</CDropdownItem>
                </CDropdown>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol col="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Dropdown </strong>
              <small>positioning</small>
            </CCardHeader>
            <CCardBody>
              <div>
                <CDropdown
                  button-html="Left align"
                  variant="primary"
                  class="c-m-2"
                >
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here</CDropdownItem>
                </CDropdown>
                <CDropdown
                  placement="bottom-end"
                  button-html="Right align"
                  variant="primary"
                  class="c-m-2"
                >
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here</CDropdownItem>
                </CDropdown>
              </div>
              <div>
                <CDropdown
                  button-html="Drop-Up"
                  variant="info"
                  class="c-m-2"
                  dropup
                >
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here</CDropdownItem>
                </CDropdown>
              </div>
              <div>
                <CDropdown
                  variant="secondary"
                  :offset="25"
                  button-html="Offset Dropdown"
                  class="c-m-2"
                >
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here</CDropdownItem>
                </CDropdown>
              </div>
              <div>
                <CDropdown
                  variant="secondary"
                  split
                  button-html="Split Dropdown"
                  class="c-m-2"
                >
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
        <CCol col="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Dropdown </strong>
              <small>hidden caret</small>
            </CCardHeader>
            <CCardBody>
              <div>
                <CDropdown
                  variant="link"
                  size="lg"
                  buttonHtml="&#x1f50d;<span class='sr-only'>Search</span>"
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
        <CCol col="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Dropdown </strong>
              <small>sizing</small>
            </CCardHeader>
            <CCardBody>
              <div>
                <CDropdown
                  variant="secondary"
                  size="lg"
                  button-html="Large"
                  class="c-m-2"
                >
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here</CDropdownItem>
                </CDropdown>
                <CDropdown
                  variant="secondary"
                  size="lg"
                  split
                  button-html="Large Split"
                  class="c-m-2"
                >
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                </CDropdown>
                <br>
                <CDropdown
                  variant="secondary"
                  size="sm"
                  button-html="Small"
                  class="c-m-2"
                >
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                </CDropdown>
                <CDropdown
                  variant="secondary"
                  size="sm"
                  split button-html="Small Split"
                  class="c-m-2"
                >
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
        <!-- <CCol col="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Dropdown </strong>
              <small>headers and accessibility</small>
            </CCardHeader>
            <CCardBody>
              <div>
                <CDropdown
                  button-html="Dropdown ARIA" variant="primary"
                  class="c-m-2"
                >
                  <div role="group">
                    <CDropdownHeader>Groups</CDropdownHeader>
                    <CDropdownItem>Add</CDropdownItem>
                    <CDropdownItem>Delete</CDropdownItem>
                  </div>
                  <div role="group">
                    <CDropdownHeader>Users</CDropdownHeader>
                    <CDropdownItem>Add</CDropdownItem>
                    <CDropdownItem>Delete</CDropdownItem>
                  </div>
                  <CDropdownDivider></CDropdownDivider>
                  <CDropdownItem>
                    Something <strong>not</strong> associated with user
                  </CDropdownItem>
                </CDropdown>
              </div>
            </CCardBody>
          </CCard>
        </CCol> -->
        <CCol col="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Dropdown </strong>
              <small><code>variant</code></small>
            </CCardHeader>
            <CCardBody>
              <CDropdown
                size="sm"
                button-html="Primary"
                variant="primary"
                class="c-m-0"
              >
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown
                size="sm"
                button-html="Secondary"
                variant="secondary"
                class="c-m-0"
              >
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown
                size="sm"
                button-html="Success"
                variant="success"
                class="c-m-0"
              >
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown
                size="sm"
                button-html="Warning"
                variant="warning"
                class="c-m-0"
              >
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown
                size="sm"
                button-html="Danger"
                variant="danger"
                class="c-m-0"
              >
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown
                size="sm"
                button-html="Info"
                variant="info"
                class="c-m-0"
              >
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown
                size="sm"
                button-html="Light"
                variant="light"
                class="c-m-0"
              >
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown
                size="sm"
                button-html="Dark"
                variant="dark"
                class="c-m-0"
              >
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
              </CDropdown>
              <CDropdown
                size="sm"
                button-html="Link"
                variant="link"
                class="c-m-0"
              >
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
