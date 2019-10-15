<template>
  <div>
    <CRow>
      <CCol sm="6">
        <CCard>
          <CCardHeader>
            <strong>Credit Card </strong> <small>Form</small>
            <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/3.0/components/FormComponents" 
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
                <CFormInput
                  label="Name"
                  placeholder="Enter your name"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <CFormInput
                  label="Credit Card Number"
                  placeholder="0000 0000 0000 0000"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="4">
                <CFormSelect
                  label="Month"
                  :options="[1,2,3,4,5,6,7,8,9,10,11,12]"
                />
              </CCol>
              <CCol sm="4">
                <CFormSelect
                  label="Year"
                  :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]"
                />
              </CCol>
              <CCol sm="4">
                <CFormInput
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
            <CFormInput
              label="Company"
              placeholder="Enter your company name"
            />
            <CFormInput
              label="VAT"
              placeholder="PL1234567890"
            />
            <CFormInput
              label="Street"
              placeholder="Enter street name"
            />
            <CRow>
              <CCol sm="8">
                <CFormInput
                  label="City"
                  placeholder="Enter your city"
                />
              </CCol>
              <CCol sm="4">
                <CFormInput
                  label="Postal code"
                  placeholder="Postal code"
                />
              </CCol>
            </CRow>
            <CFormInput
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
              <CFormInput
                description="Let us know your full name."
                label="Enter your name"
                horizontal
                autocomplete="name"
              />
              <CFormInput
                label="Static"
                value="Username"
                horizontal
                plaintext
              />
              <CFormInput
                label="Text input"
                description="This is a help text"
                placeholder="Text"
                horizontal
              />
              <CFormInput
                label="Date"
                type="date"
                horizontal
              />
              <CFormInput
                label="Email input"
                description="Please enter your email"
                placeholder="Enter your email"
                type="email"
                horizontal
                autocomplete="email"
              />
              <CFormInput
                label="Password Input"
                description="Please enter a complex password"
                placeholder="Enter your password"
                type="password"
                horizontal
                autocomplete="current-password"
              />
              <CFormInput
                label="Disabled Input"
                placeholder="Disabled"
                horizontal
                disabled
              />
              <CFormInput
                label="Textarea"
                placeholder="Content..."
                horizontal
                textarea="true"
                rows="9"
              />
              <CFormSelect
                label="Select"
                horizontal
                :options="options"
                placeholder="Please select"
              />
              <CFormSelect
                label="Large select"
                size="lg"
                horizontal
                :value.sync="selectedOption"
                :options="selectOptions"
                placeholder="Please select"
              />
              <CFormSelect
                label="Small select"
                size="sm"
                horizontal
                :options="options"
                placeholder="Please select"
              />
              <CFormSelect
                label="Select"
                horizontal
                :options="options"
                placeholder="Please select"
                disabled
              />
              <template v-for="(name, key) in checkboxNames">
                <div class="form-group form-row" :key="name">
                  <CCol tag="label" sm="3" class="col-form-label">
                    {{name}}
                  </CCol>
                  <CCol sm="9" :class="key % 2 === 1 ? 'form-inline' : ''">
                    <CFormCheckbox
                      v-for="option in options"
                      :key="option"
                      :label="option"
                      :value="option"
                      :custom="key > 1"
                      :name="`Option 1${key}`"
                      :checked="Math.random() > 0.6"
                      :inline="key % 2 === 1"
                    />
                  </CCol>
                </div>
              </template>
              <template v-for="(name, key) in radioNames">
                <div class="form-row form-group" :key="name">
                  <CCol sm="3">
                    {{name}}
                  </CCol>
                  <CCol sm="9" :class="key % 2 === 1 ? 'form-inline' : ''">
                    <CFormRadio
                      v-for="(option, optionIndex) in options"
                      :key="option"
                      :label="option"
                      type="radio"
                      :value="option"
                      :custom="key > 1"
                      :name="`Option 1${key}`"
                      :checked="optionIndex === key"
                      :inline="key % 2 === 1"
                    />
                  </CCol>
                </div>
              </template>
              <CFormFile
                label="File input"
                horizontal
              />
              <CFormFile
                label="Multiple file input"
                horizontal
                multiple
              />
              <CFormFile
                label="File custom input"
                horizontal
                custom
              />
              <CFormFile
                label="Multiple file custom input"
                horizontal
                multiple
                custom
              />
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><i class="cui-circle-check"></i> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><i class="cui-ban"></i> Reset</CButton>
          </CCardFooter>
        </CCard>
        <CCard>
          <CCardHeader>
            <strong>Inline</strong> Form
          </CCardHeader>

          <CCardBody>
            <!-- Bootstrap Vue has some problems with Inline forms that's why we use some standard bootstrap classes -->
            <CForm inline>
              <CFormInput
                class="mr-2"
                placeholder="Jane Doe"
              >
                <template #label>
                  <small>Name:&nbsp;</small>
                </template>
              </CFormInput>
              <CFormInput
                placeholder="jane.doe@example.com"
                autocomplete="email"
              >
                <template #label>
                  <small>Email:&nbsp;</small>
                </template>
              </CFormInput>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><i class="cui-circle-check"></i> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><i class="cui-ban"></i> Reset</CButton>
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
              <CFormInput
                type="email"
                description="Please enter your email."
                autocomplete="email"
                label="Email"
                horizontal
                placeholder="Enter Email..."
              />
              <CFormInput
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
            <CButton type="submit" size="sm" color="primary"><i class="cui-circle-check"></i> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><i class="cui-ban"></i> Reset</CButton>
          </CCardFooter>
        </CCard>
        <CCard>
          <CCardHeader>
            <strong>Normal</strong> Form
          </CCardHeader>
          <CForm novalidate>
            <CCardBody>
              <CFormInput
                type="email"
                description="Please enter your email."
                autocomplete="email"
                label="Email"
                placeholder="Enter Email..."
                required
                was-validated
              />
              <CFormInput
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
              <CButton type="submit" size="sm" color="primary"><i class="cui-circle-check"></i> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><i class="cui-ban"></i> Reset</CButton>
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
                <CFormInput class="mb-0" placeholder=".col-sm-3"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="4">
                <CFormInput class="mb-0" placeholder=".col-sm-4"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="5">
                <CFormInput class="mb-0" placeholder=".col-sm-5"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="6">
                <CFormInput class="mb-0" placeholder=".col-sm-6"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="7">
                <CFormInput class="mb-0" placeholder=".col-sm-7"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="8">
                <CFormInput class="mb-0" placeholder=".col-sm-8"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="9">
                <CFormInput class="mb-0" placeholder=".col-sm-9"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="10">
                <CFormInput class="mb-0" placeholder=".col-sm-10"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="11">
                <CFormInput class="mb-0" placeholder=".col-sm-11"/>
              </CCol>
            </CRow>
            <CRow class="form-group">
              <CCol sm="12">
                <CFormInput class="mb-0" placeholder=".col-sm-12"/>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><i class="cui-user"></i> Login</CButton>
            <CButton type="reset" size="sm" color="danger"><i class="cui-ban"></i> Reset</CButton>
          </CCardFooter>
        </CCard>
        <CCard>
          <CCardHeader>
            Input <strong>Sizes</strong>
          </CCardHeader>
          <CCardBody>
            <CFormInput
              label="Small input"
              size="sm"
              horizontal
              placeholder="size='sm'"
            />
            <CFormInput
              label="Default input"
              horizontal
              placeholder="normal"
            />
            <CFormInput
              label="Large input"
              size="lg"
              horizontal
              placeholder="size='lg'"
            />
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><i class="cui-circle-check"></i> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><i class="cui-ban"></i> Reset</CButton>
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
              <CFormInput
                label="Input is valid"
                valid-feedback="Input is not required."
              />
              <CFormInput
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
              <CFormInput
                label="Input is valid"
                valid-feedback="Input is valid."
                invalid-feedback="Please provide at least 4 characters."
                value="Valid value"
                :is-valid="validator"
              />
              <CFormInput
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
            <CFormInput
              placeholder="Username"
              prependHtml="<i class='cui-user'></i>"
            />
            <CFormInput
              type="email"
              placeholder="Email"
              autocomplete="email"
              append-html="<i class='cui-envelope-open'></i>"
            />
            <CFormInput
              prependHtml="<i class='cui-euro'></i>"
              placeholder="ex. $1.000.000"
              append-html=".00"
            />
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="success"><i class="cui-circle-check"></i> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><i class="cui-ban"></i> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol sm="4">
        <CCard>
          <CCardHeader>
            <strong>Buttons</strong> Groups
          </CCardHeader>
          <CCardBody>
            <CFormInput placeholder="Username">
              <template #prepend>
                <CButton color="primary">
                  <i class="cui-magnifying-glass"></i> Search
                </CButton>
              </template>
            </CFormInput>
            <CFormInput
              type="email"
              placeholder="Email"
              autocomplete="email"
            >
              <template #append>
                <CButton type="submit" color="primary">Submit</CButton>
              </template>
            </CFormInput>
            <CFormInput
              type="email"
              placeholder="Email"
              autocomplete="email"
            >
              <template #prepend>
                <CButton color="primary"><CIcon name="facebook" height="14"/></CButton>
              </template>
              <template #append>
                <CButton color="primary"><CIcon name="twitter" height="14"/></CButton>
              </template>
            </CFormInput>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="success"><i class="cui-circle-check"></i> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><i class="cui-ban"></i> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol sm="4">
        <CCard>
          <CCardHeader>
            <strong>Dropdowns</strong> Groups
          </CCardHeader>
          <CCardBody>
            <CFormInput placeholder="Username">
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
            </CFormInput>
            <CFormInput
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
            </CFormInput>
            <CFormInput placeholder="...">

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

            </CFormInput>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="success"><i class="cui-circle-check"></i> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><i class="cui-ban"></i> Reset</CButton>
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
                <CFormInput class="mb-0" :placeholder="`.col-md-${12 - number}`"/>
              </CCol>
              <CCol :col="number">
                <CFormInput class="mb-0" :placeholder="`.col-md-${number}`"/>
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
                <CFormInput class="mb-0" :placeholder="`.col-${number}`"/>
              </CCol>
              <CCol :col="12 - number">
                <CFormInput class="mb-0" :placeholder="`.col-${12 - number}`"/>
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
              <CFormInput
                prepend-html="Username"
                append-html="<i class='cui-user'></i>"
              />
              <CFormInput
                prepend-html="Email"
                type="email"
                autocomplete="email"
                append-html="<i class='cui-envelope-closed'></i>"
              />
              <CFormInput
                prepend-html="Password"
                type="password"
                autocomplete="current-password"
                append-html="<i class='cui-shield'></i>"
              />
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
              <CFormInput
                placeholder="Username"
                append-html="<i class='cui-user'></i>"
              />
              <CFormInput
                placeholder="Email"
                type="email"
                autocomplete="email"
                append-html="<i class='cui-envelope-closed'></i>"
              />
              <CFormInput
                placeholder="Password"
                type="password"
                autocomplete="current-password"
                append-html="<i class='cui-shield'></i>"
              />
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
              <CFormInput
                placeholder="Username"
                prependHtml="<i class='cui-user'></i>"
              />
              <CFormInput
                placeholder="Email"
                type="email"
                autocomplete="email"
                prependHtml="<i class='cui-envelope-closed'></i>"
              />
              <CFormInput
                placeholder="Password"
                type="password"
                autocomplete="current-password"
                prependHtml="<i class='cui-shield'></i>"
              />
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
              <i class="cui-pencil"></i> Form Elements
              <div class="card-header-actions">
                <CLink href="#" class="card-header-action btn-setting">
                  <i class="cui-settings"></i>
                </CLink>
                <CLink
                  class="card-header-action btn-minimize"
                  @click="formCollapsed=!formCollapsed"
                >
                  <i :class="`cui-chevron-${formCollapsed ? 'bottom' : 'top'}`"></i>
                </CLink>
                <CLink href="#" class="card-header-action btn-close" v-on:click="show = !show">
                  <i class="cui-circle-x"></i>
                </CLink>
              </div>
            </CCardHeader>
            <CCollapse :show="formCollapsed">
              <CCardBody>
                <CFormInput
                  label="Prepended text"
                  prepend-html="@"
                  description="Here's some help text"
                  type="email"
                  autocomplete="email"
                />
                <CFormInput
                  label="Appended text"
                  append-html=".00"
                  description="Here's some help text"
                />
                <CFormInput
                  label="Appended and prepended text"
                  prepend-html="$"
                  append-html=".00"
                  description="Here's some help text"
                />
                <CFormInput
                  label="Append with button"
                  description="Here's some help text"
                >
                  <template #append>
                    <CButton color="primary">Go!</CButton>
                  </template>
                </CFormInput>
                <CFormInput label="Two-buttons append">
                  <template #append>
                    <CButton color="primary">Search</CButton>
                    <CButton color="danger">Options</CButton>
                  </template>
                </CFormInput>
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
          value: ['some value', 'another value'], 
          label: 'Selected option'
        }
      ],
      selectedOption: ['some value', 'another value'],

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
