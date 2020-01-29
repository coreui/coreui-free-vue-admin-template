<template>
  <div>
    <CRow>
      <CCol col="12" md="6">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
            <strong> Bootstrap Dropdown</strong>
            <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/dropdown" 
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
                toggler-text="Dropdown Button" 
                class="m-2"
                color="secondary"
              >
                <CDropdownItem>First Action</CDropdownItem>
                <CDropdownItem>Second Action</CDropdownItem>
                <CDropdownItem>Third Action</CDropdownItem>
                <CDropdownDivider/>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdown>
            </div>
            <!-- <div>
              <CDropdown toggler-text="Dropdown using buttons as menu items" class="m-2">
                <CDropdownItem>I'm a button</CDropdownItem>
                <CDropdownItem>I'm also a button</CDropdownItem>
                <CDropdownItem disabled>I'm a button, but disabled!</CDropdownItem>
                <CDropdownItem>I don't look like a button, but I am!</CDropdownItem>
              </CDropdown>
            </div> -->
            <div>
              <CDropdown 
                toggler-text="Dropdown with divider" 
                class="m-2"
                color="secondary"
              >
                <CDropdownItem>First item</CDropdownItem>
                <CDropdownItem>Second item</CDropdownItem>
                <CDropdownDivider/>
                <CDropdownItem>Separated Item</CDropdownItem>
              </CDropdown>
            </div>
            <div>
              <CDropdown 
                toggler-text="Dropdown with header" 
                class="m-2"
                color="secondary"
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
            <CIcon name="cil-justify-center"/>
            <strong> Dropdown </strong>
            <small>positioning</small>
          </CCardHeader>
          <CCardBody>
            <div>
              <CDropdown
                toggler-text="Left align"
                color="primary"
                class="m-2 d-inline-block"
              >
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here</CDropdownItem>
              </CDropdown>
              <CDropdown
                placement="bottom-end"
                toggler-text="Right align"
                color="primary"
                class="m-2 d-inline-block"
              >
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here</CDropdownItem>
              </CDropdown>
            </div>
            <div>
              <CDropdown
                toggler-text="Drop-Up"
                color="info"
                class="m-2"
                placement="top-start"

              >
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here</CDropdownItem>
              </CDropdown>
            </div>
            <div>
              <CDropdown
                color="secondary"
                :offset="[10, 5]"
                toggler-text="Offset Dropdown"
                class="m-2"
              >
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here</CDropdownItem>
              </CDropdown>
            </div>
            <div>
              <CDropdown
                color="secondary"
                split
                toggler-text="Split Dropdown"
                class="m-2"
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
            <CIcon name="cil-justify-center"/>
            <strong> Dropdown </strong>
            <small>hidden caret</small>
          </CCardHeader>
          <CCardBody>
            <div>
              <CDropdown
                color="link"
                size="lg"
                :caret="false"
              >
                <template #toggler-content>
                  &#x1f50d;<span class="sr-only">Search</span>
                </template>
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
            <CIcon name="cil-justify-center"/>
            <strong> Dropdown </strong>
            <small>sizing</small>
          </CCardHeader>
          <CCardBody>
            <div>
              <CDropdown
                color="secondary"
                size="lg"
                toggler-text="Large"
                class="m-2 d-inline-block"
              >
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here</CDropdownItem>
              </CDropdown>
              <CDropdown
                color="secondary"
                size="lg"
                split
                toggler-text="Large Split"
                class="m-2"
              >
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
              </CDropdown>
              <br>
              <CDropdown
                color="secondary"
                size="sm"
                toggler-text="Small"
                class="m-2 d-inline-block"
              >
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
              </CDropdown>
              <CDropdown
                color="secondary"
                size="sm"
                split toggler-text="Small Split"
                class="m-2"
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
            <CIcon name="cil-justify-center"/>
            <strong> Dropdown </strong>
            <small>headers and accessibility</small>
          </CCardHeader>
          <CCardBody>
            <div>
              <CDropdown
                toggler-text="Dropdown ARIA" color="primary"
                class="m-2"
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
                <CDropdownDivider/>
                <CDropdownItem>
                  Something <strong>not</strong> associated with user
                </CDropdownItem>
              </CDropdown>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol col="12" md="6">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
            <strong> Dropdown </strong>
            <small><code>color</code></small>
          </CCardHeader>
          <CCardBody>
            <CDropdown
              size="sm"
              toggler-text="Primary"
              color="primary"
              class="m-0 d-inline-block"
            >
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Secondary"
              color="secondary"
              class="m-0 d-inline-block"
            >
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Success"
              color="success"
              class="m-0 d-inline-block"
            >
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Warning"
              color="warning"
              class="m-0 d-inline-block"
            >
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Danger"
              color="danger"
              class="m-0 d-inline-block"
            >
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Info"
              color="info"
              class="m-0 d-inline-block"
            >
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Light"
              color="light"
              class="m-0 d-inline-block"
            >
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Dark"
              color="dark"
              class="m-0 d-inline-block"
            >
              <CDropdownItem>First Action</CDropdownItem>
              <CDropdownItem>Second Action</CDropdownItem>
              <CDropdownItem>Third Action</CDropdownItem>
            </CDropdown>
            <CDropdown
              size="sm"
              toggler-text="Link"
              color="link"
              class="m-0 d-inline-block"
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
</template>

<script>
export default {
  name: 'Dropdowns'
}
</script>
