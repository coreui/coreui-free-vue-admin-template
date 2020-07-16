<template>
  <div>
    <CRow>
      <CCol sm="6">
        <CCard>
          <CCardHeader>
            <strong>Credit Card </strong> <small>Form</small>
            <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/form-components" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12">
                <CInput
                  label="Name"
                  placeholder="Enter your name"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <CInput
                  label="Credit Card Number"
                  placeholder="0000 0000 0000 0000"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="4">
                <CSelect
                  label="Month"
                  :options="[1,2,3,4,5,6,7,8,9,10,11,12]"
                />
              </CCol>
              <CCol sm="4">
                <CSelect
                  label="Year"
                  :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]"
                />
              </CCol>
              <CCol sm="4">
                <CInput
                  label="CVV/CVC"
                  placeholder="123"
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6">
        <CCard>
          <CCardHeader>
            <strong>Company </strong><small>Form</small>
          </CCardHeader>
          <CCardBody>
            <CInput
              label="Company"
              placeholder="Enter your company name"
            />
            <CInput
              label="VAT"
              placeholder="PL1234567890"
            />
            <CInput
              label="Street"
              placeholder="Enter street name"
            />
            <CRow>
              <CCol sm="8">
                <CInput
                  label="City"
                  placeholder="Enter your city"
                />
              </CCol>
              <CCol sm="4">
                <CInput
                  label="Postal code"
                  placeholder="Postal code"
                />
              </CCol>
            </CRow>
            <CInput
              label="Country"
              placeholder="Country name"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            <strong>Basic Form</strong> Elements
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                description="Let us know your full name."
                label="Enter your name"
                horizontal
                autocomplete="name"
              />
              <CInput
                label="Static"
                value="Username"
                horizontal
                plaintext
              />
              <CInput
                label="Text input"
                description="This is a help text"
                placeholder="Text"
                horizontal
              />
              <CInput
                label="Date"
                type="date"
                horizontal
              />
              <CInput
                label="Email input"
                description="Please enter your email"
                placeholder="Enter your email"
                type="email"
                horizontal
                autocomplete="email"
              />
              <CInput
                label="Password Input"
                description="Please enter a complex password"
                placeholder="Enter your password"
                type="password"
                horizontal
                autocomplete="current-password"
              />
              <CInput
                label="Disabled Input"
                placeholder="Disabled"
                horizontal
                disabled
              />
              <CTextarea
                label="Textarea"
                placeholder="Content..."
                horizontal
                rows="9"
              />
              <CSelect
                label="Select"
                horizontal
                :options="options"
                placeholder="Please select"
              />
              <CSelect
                label="Large select"
                size="lg"
                horizontal
                :value.sync="selectedOption"
                :options="selectOptions"
                placeholder="Please select"
              />
              <CSelect
                label="Small select"
                size="sm"
                horizontal
                :options="options"
                placeholder="Please select"
                custom
              />
              <CSelect
                label="Select"
                horizontal
                :options="options"
                placeholder="Please select"
                disabled
              />
              <template v-for="(name, key) in checkboxNames">
                <CRow form class="form-group" :key="name">
                  <CCol tag="label" sm="3" class="col-form-label">
                    {{name}}
                  </CCol>
                  <CCol sm="9" :class="key % 2 === 1 ? 'form-inline' : ''">
                    <CInputCheckbox
                      v-for="(option, optionIndex) in options"
                      :key="key + option"
                      :label="option"
                      :value="option"
                      :custom="key > 1"
                      :name="`Option 1${key}`"
                      :checked="optionIndex === key"
                      :inline="key % 2 === 1"
                    />
                  </CCol>
                </CRow>
              </template>
              <CRow form class="form-group">
                  <CCol tag="label" sm="3" class="col-form-label">
                    Switch checkboxes
                  </CCol>
                  <CCol sm="9">
                    <CSwitch
                      class="mr-1"
                      color="primary"
                      :checked="true"
                    />
                    <CSwitch
                      class="mr-1"
                      color="success"
                      :checked="true"
                      variant="outline"
                    />
                    <CSwitch
                      class="mr-1"
                      color="warning"
                      :checked="true"
                      variant="opposite"
                    />
                    <CSwitch
                      class="mr-1"
                      color="danger"
                      :checked="true"
                      shape="pill"
                    />
                    <CSwitch
                      class="mr-1"
                      color="info"
                      :checked="true"
                      shape="pill"
                      variant="outline"
                    />
                    <CSwitch
                      class="mr-1"
                      color="dark"
                      :checked="true"
                      shape="pill"
                      variant="opposite"
                    />
                  </CCol>
                </CRow>
              <template v-for="(name, key) in radioNames">
                <CRow form class="form-group" :key="name">
                  <CCol sm="3">
                    {{name}}
                  </CCol>
                  <CInputRadioGroup
                    class="col-sm-9"
                    :options="options"
                    :custom="key > 1"
                    :checked="`Option ${key}`"
                    :inline="key % 2 === 1"
                  />
                </CRow>
              </template>
              <CInputFile
                label="File input"
                horizontal
              />
              <CInputFile
                label="Multiple file input"
                horizontal
                multiple
              />
              <CInputFile
                label="File custom input"
                horizontal
                custom
              />
              <CInputFile
                label="Multiple file custom input"
                horizontal
                multiple
                custom
              />
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
        <CCard>
          <CCardHeader>
            <strong>Inline</strong> Form
          </CCardHeader>

          <CCardBody>
            <!-- Bootstrap Vue has some problems with Inline forms that's why we use some standard bootstrap classes -->
            <CForm inline>
              <CInput
                class="mr-2"
                placeholder="Jane Doe"
              >
                <template #label>
                  <small>Name:&nbsp;</small>
                </template>
              </CInput>
              <CInput
                placeholder="jane.doe@example.com"
                autocomplete="email"
              >
                <template #label>
                  <small>Email:&nbsp;</small>
                </template>
              </CInput>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            <strong>Horizontal</strong> Form
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                type="email"
                description="Please enter your email."
                autocomplete="email"
                label="Email"
                horizontal
                placeholder="Enter Email..."
              />
              <CInput
                type="password"
                description="Please enter your password."
                autocomplete="current-password"
                label="Password"
                horizontal
                placeholder="Enter Password..."
              />
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
        <CCard>
          <CCardHeader>
            <strong>Normal</strong> Form
          </CCardHeader>
          <CForm novalidate>
            <CCardBody>
              <CInput
                type="email"
                description="Please enter your email."
                autocomplete="email"
                label="Email"
                placeholder="Enter Email..."
                required
                was-validated
              />
              <CInput
                type="password"
                description="Please enter your password."
                autocomplete="current-password"
                label="Password"
                placeholder="Enter Password..."
                required
                was-validated
              />
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
            </CCardFooter>
          </CForm>
        </CCard>
        <CCard>
          <CCardHeader>
            Input <strong>Grid</strong>
          </CCardHeader>
          <CCardBody>
            <CRow class="form-group">
              <CCol sm="3">
                <CInput class="mb-0" placeholder=".col-sm-3"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="4">
                <CInput class="mb-0" placeholder=".col-sm-4"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="5">
                <CInput class="mb-0" placeholder=".col-sm-5"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="6">
                <CInput class="mb-0" placeholder=".col-sm-6"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="7">
                <CInput class="mb-0" placeholder=".col-sm-7"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="8">
                <CInput class="mb-0" placeholder=".col-sm-8"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="9">
                <CInput class="mb-0" placeholder=".col-sm-9"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="10">
                <CInput class="mb-0" placeholder=".col-sm-10"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="11">
                <CInput class="mb-0" placeholder=".col-sm-11"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="12">
                <CInput class="mb-0" placeholder=".col-sm-12"/>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-user"/> Login</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
        <CCard>
          <CCardHeader>
            Input <strong>Sizes</strong>
          </CCardHeader>
          <CCardBody>
            <CInput
              label="Small input"
              size="sm"
              horizontal
              placeholder="size='sm'"
            />
            <CInput
              label="Default input"
              horizontal
              placeholder="normal"
            />
            <CInput
              label="Large input"
              size="lg"
              horizontal
              placeholder="size='lg'"
            />
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
    <CRow>

      <CCol sm="12" md="6">
        <CCard>
          <CCardHeader>
            <strong>Basic Validation</strong> Form
          </CCardHeader>
          <CCardBody>
            <CForm validated novalidate>
              <CInput
                label="Input is valid"
                valid-feedback="Input is not required."
              />
              <CInput
                label="Input is invalid"
                required
                valid-feedback="Thank you :)"
                invalid-feedback="Please provide a required input."
              />
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="12" md="6">
        <CCard>
          <CCardHeader>
            <strong>Custom Validation</strong> Form
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                label="Input is valid"
                valid-feedback="Input is valid."
                invalid-feedback="Please provide at least 4 characters."
                value="Valid value"
                :is-valid="validator"
              />
              <CInput
                label="Input is invalid"
                valid-feedback="Thank you :)"
                invalid-feedback="Please provide at least 4 characters."
                :is-valid="validator"
              />
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="4">
        <CCard>
          <CCardHeader>
            <strong>Icon/Text</strong> Groups
          </CCardHeader>
          <CCardBody>
            <CInput placeholder="Username">
              <template #prepend-content><CIcon name="cil-user"/></template>
            </CInput>
            <CInput
              type="email"
              placeholder="Email"
              autocomplete="email"
            >
              <template #append-content><CIcon name="cil-envelope-open"/></template>
            </CInput>
            <CInput
              placeholder="ex. $1.000.000"
              append=".00"
            >
              <template #prepend-content><CIcon name="cil-euro"/></template>
            </CInput>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="success"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol sm="4">
        <CCard>
          <CCardHeader>
            <strong>Buttons</strong> Groups
          </CCardHeader>
          <CCardBody>
            <CInput placeholder="Username">
              <template #prepend>
                <CButton color="primary">
                  <CIcon name="cil-magnifying-glass"/> Search
                </CButton>
              </template>
            </CInput>
            <CInput
              type="email"
              placeholder="Email"
              autocomplete="email"
            >
              <template #append>
                <CButton type="submit" color="primary">Submit</CButton>
              </template>
            </CInput>
            <CInput
              type="email"
              placeholder="Email"
              autocomplete="email"
            >
              <template #prepend>
                <CButton color="primary"><CIcon name="cib-facebook"/></CButton>
              </template>
              <template #append>
                <CButton color="primary"><CIcon name="cib-twitter"/></CButton>
              </template>
            </CInput>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="success"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol sm="4">
        <CCard>
          <CCardHeader>
            <strong>Dropdowns</strong> Groups
          </CCardHeader>
          <CCardBody>
            <CInput placeholder="Username">
              <template #prepend>
                <CDropdown
                  togglerText="Action"
                  color="primary"
                >
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>
            </CInput>
            <CInput
              type="email"
              placeholder="Email"
              autocomplete="email"
            >
              <template #append>
                <CDropdown
                  togglerText="Action"
                  color="primary"
                  right
                >
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>
            </CInput>
            <CInput placeholder="...">

              <template #prepend>
                <CDropdown
                  togglerText="Split"
                  color="primary"
                  split
                >
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>

              <template #append>
                <CDropdown
                  togglerText="Action"
                  color="primary"
                  right
                >
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>

            </CInput>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="success"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            Use the grid for big devices! <small><code>.col-lg-*</code> <code>.col-md-*</code> <code>.col-sm-*</code></small>
          </CCardHeader>
          <CCardBody>
            <CRow
              class="form-group"
              v-for="(number, key) in [4,5,6,7,8]"
              :key="key"
            >
              <CCol :col="12 - number">
                <CInput class="mb-0" :placeholder="`.col-md-${12 - number}`"/>
              </CCol>
              <CCol :col="number">
                <CInput class="mb-0" :placeholder="`.col-md-${number}`"/>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton size="sm" color="primary">Action</CButton>
            <CButton size="sm" color="danger">Action</CButton>
            <CButton size="sm" color="warning">Action</CButton>
            <CButton size="sm" color="info">Action</CButton>
            <CButton size="sm" color="success">Action</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol md="6">
        <CCard>
          <CCardHeader>
            Input Grid for small devices! <small> <code>.col-*</code></small>
          </CCardHeader>
          <CCardBody>
            <CRow
              class="form-group"
              v-for="(number, key) in [4,5,6,7,8]"
              :key="key"
            >
              <CCol :col="number">
                <CInput class="mb-0" :placeholder="`.col-${number}`"/>
              </CCol>
              <CCol :col="12 - number">
                <CInput class="mb-0" :placeholder="`.col-${12 - number}`"/>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton size="sm" color="primary">Action</CButton>
            <CButton size="sm" color="danger">Action</CButton>
            <CButton size="sm" color="warning">Action</CButton>
            <CButton size="sm" color="info">Action</CButton>
            <CButton size="sm" color="success">Action</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="4">
        <CCard>
          <CCardHeader>
            Example Form
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput prepend="Username">
                <template #append-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                type="email"
                autocomplete="email"
                prepend="Email"
              >
                <template #append-content><CIcon name="cil-envelope-closed"/></template>
              </CInput>
              <CInput
                type="password"
                autocomplete="current-password"
                prepend="Password"
              >
                <template #append-content><CIcon name="cil-shield-alt"/></template>
              </CInput>
              <div class="form-group form-actions">
                <CButton type="submit" size="sm" color="primary">
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="4">
        <CCard>
          <CCardHeader>
            Example Form
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput placeholder="Username">
                <template #append-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="Email"
                type="email"
                autocomplete="email"
              >
                <template #append-content><CIcon name="cil-envelope-closed"/></template>
              </CInput>
              <CInput
                placeholder="Password"
                type="password"
                autocomplete="current-password"
              >
                <template #append-content><CIcon name="cil-shield-alt"/></template>
              </CInput>
              <div class="form-group form-actions">
                <CButton type="submit" class="btn btn-sm btn-secondary">
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="4">
        <CCard>
          <CCardHeader>
            Example Form
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput placeholder="Username">
                <template #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
              <CInput
                placeholder="Email"
                type="email"
                autocomplete="email"
              >
                <template #prepend-content><CIcon name="cil-envelope-closed"/></template>
              </CInput>
              <CInput
                placeholder="Password"
                type="password"
                autocomplete="current-password"
              >
                <template #prepend-content><CIcon name="cil-shield-alt"/></template>
              </CInput>
              <div class="form-group form-actions">
                <CButton type="submit" size="sm" color="success">
                  Submit
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol lg="12">
        <transition name="fade">
          <CCard v-if="show">
            <CCardHeader>
              <CIcon name="cil-pencil"/> Form Elements
              <div class="card-header-actions">
                <CLink href="#" class="card-header-action btn-setting">
                  <CIcon name="cil-settings"/>
                </CLink>
                <CLink
                  class="card-header-action btn-minimize"
                  @click="formCollapsed=!formCollapsed"
                >
                  <CIcon :name="`cil-chevron-${formCollapsed ? 'bottom' : 'top'}`"/>
                </CLink>
                <CLink href="#" class="card-header-action btn-close" v-on:click="show = !show">
                  <CIcon name="cil-x-circle"/>
                </CLink>
              </div>
            </CCardHeader>
            <CCollapse :show="formCollapsed">
              <CCardBody>
                <CInput
                  label="Prepended text"
                  description="Here's some help text"
                  type="email"
                  autocomplete="email"
                  prepend="@"
                />
                <CInput
                  label="Appended text"
                  append=".00"
                  description="Here's some help text"
                />
                <CInput
                  label="Appended and prepended text"
                  append=".00"
                  description="Here's some help text"
                  prepend="$"
                />
                <CInput
                  label="Append with button"
                  description="Here's some help text"
                >
                  <template #append>
                    <CButton color="primary">Go!</CButton>
                  </template>
                </CInput>
                <CInput label="Two-buttons append">
                  <template #append>
                    <CButton color="primary">Search</CButton>
                    <CButton color="danger">Options</CButton>
                  </template>
                </CInput>
                <div class="form-actions">
                  <CButton type="submit" color="primary">Save changes</CButton>
                  <CButton color="secondary">Cancel</CButton>
                </div>
              </CCardBody>
            </CCollapse>
          </CCard>
        </transition>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  data () {
    return {
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label:'col-3', input:'col-9' },
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectOptions: [
        'Option 1', 'Option 2', 'Option 3',
        { 
          value: 'some value', 
          label: 'Selected option'
        }
      ],
      selectedOption: 'some value',

      formCollapsed: true,
      checkboxNames: ['Checkboxes', 'Inline Checkboxes',
                      'Checkboxes - custom', 'Inline Checkboxes - custom'],
      radioNames: ['Radios', 'Inline Radios',
                    'Radios - custom', 'Inline Radios - custom']
    }
  },
  methods: {
    validator (val) {
      return val ? val.length >= 4 : false
    }
  }
}
</script>
