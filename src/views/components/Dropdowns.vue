<template>
  <CRow>
    <CCol :xs="12">
      <DocsComponents href="components/dropdown.html" />
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Dropdown</strong> <small>Single button</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Here&#39;s how you can put them to work with either
            <code>&lt;button&gt;</code>
            elements:
          </p>
          <DocsExample href="components/dropdown.html#single-button">
            <CDropdown>
              <CDropdownToggle color="secondary"
                >Dropdown button</CDropdownToggle
              >
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </DocsExample>
          <p class="text-body-secondary small">
            The best part is you can do this with any button variant, too:
          </p>
          <DocsExample href="components/dropdown.html#single-button">
            <template
              v-for="color in [
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
              ]"
              :key="color"
            >
              <CDropdown variant="btn-group">
                <CDropdownToggle :color="color">{{ color }}</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </template>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Dropdown</strong> <small>Split button</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Similarly, create split button dropdowns with virtually the same
            markup as single button dropdowns, but with the addition of boolean
            prop <code>split</code> for proper spacing around the dropdown
            caret.
          </p>
          <p class="text-body-secondary small">
            We use this extra class to reduce the horizontal
            <code>padding</code> on either side of the caret by 25% and remove
            the <code>margin-left</code> that&#39;s attached for normal button
            dropdowns. Those additional changes hold the caret centered in the
            split button and implement a more properly sized hit area next to
            the main button.
          </p>
          <DocsExample href="components/dropdown.html#split-button">
            <template
              v-for="color in [
                'primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
              ]"
              :key="color"
            >
              <CDropdown variant="btn-group">
                <CButton :color="color">{{ color }}</CButton>
                <CDropdownToggle :color="color" split>{{
                  color
                }}</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </template>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Dropdown</strong> <small>Sizing</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Button dropdowns work with buttons of all sizes, including default
            and split dropdown buttons.
          </p>
          <DocsExample href="components/dropdown.html#sizing">
            <CDropdown variant="btn-group">
              <CDropdownToggle color="secondary" size="lg">
                Large button
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Separated link</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown variant="btn-group">
              <CButton color="secondary" size="lg">
                Large split button
              </CButton>
              <CDropdownToggle color="secondary" size="lg" split />
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Separated link</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </DocsExample>
          <DocsExample href="components/dropdown.html#sizing">
            <CDropdown variant="btn-group">
              <CDropdownToggle color="secondary" size="sm">
                Small button
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Separated link</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown variant="btn-group">
              <CButton color="secondary" size="sm">
                Small split button
              </CButton>
              <CDropdownToggle color="secondary" size="sm" split />
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Separated link</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Dropdown</strong> <small>Single button</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Opt into darker dropdowns to match a dark navbar or custom style by
            set
            <code>dark</code> property. No changes are required to the dropdown
            items.
          </p>
          <DocsExample href="components/dropdown.html#dark-dropdowns">
            <CDropdown dark>
              <CDropdownToggle color="secondary"
                >Dropdown button</CDropdownToggle
              >
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Separated link</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </DocsExample>
          <p class="text-body-secondary small">
            And putting it to use in a navbar:
          </p>
          <DocsExample href="components/dropdown.html#dark-dropdowns">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <div class="container-fluid">
                <a class="navbar-brand" href="https://coreui.io/vue/">
                  Navbar
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-coreui-toggle="collapse"
                  data-coreui-target="#navbarNavDarkDropdown"
                  aria-controls="navbarNavDarkDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  id="navbarNavDarkDropdown"
                  class="collapse navbar-collapse"
                >
                  <ul class="navbar-nav">
                    <CDropdown dark as="li" variant="nav-item">
                      <CDropdownToggle>Dropdown</CDropdownToggle>
                      <CDropdownMenu>
                        <CDropdownItem href="#">Action</CDropdownItem>
                        <CDropdownItem href="#">Another action</CDropdownItem>
                        <CDropdownItem href="#"
                          >Something else here</CDropdownItem
                        >
                        <CDropdownDivider />
                        <CDropdownItem href="#">Separated link</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </ul>
                </div>
              </div>
            </nav>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Dropdown</strong> <small>Dropup</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Trigger dropdown menus above elements by adding
            <code>direction=&#34;dropup&#34;</code> to the
            <code>&lt;CDropdown&gt;</code>
            component.
          </p>
          <DocsExample href="components/dropdown.html#dropup">
            <CDropdown variant="btn-group" direction="dropup">
              <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Separated link</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown variant="btn-group" direction="dropup">
              <CButton color="secondary">Small split button</CButton>
              <CDropdownToggle color="secondary" split />
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Separated link</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Dropdown</strong> <small>Dropright</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Trigger dropdown menus at the right of the elements by adding
            <code>direction=&#34;dropend&#34;</code> to the
            <code>&lt;CDropdown&gt;</code>
            component.
          </p>
          <DocsExample href="components/dropdown.html#dropright">
            <CDropdown variant="btn-group" direction="dropend">
              <CDropdownToggle color="secondary">Dropdown</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Separated link</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CDropdown variant="btn-group" direction="dropend">
              <CButton color="secondary">Small split button</CButton>
              <CDropdownToggle color="secondary" split />
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Separated link</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Dropdown</strong> <small>Dropleft</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Trigger dropdown menus at the left of the elements by adding
            <code>direction=&#34;dropstart&#34;</code> to the
            <code>&lt;CDropdown&gt;</code>
            component.
          </p>
          <DocsExample href="components/dropdown.html#dropleft">
            <CButtonGroup>
              <CDropdown variant="btn-group" direction="dropstart">
                <CDropdownToggle color="secondary" split />
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CButton color="secondary">Small split button</CButton>
            </CButtonGroup>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
