<template>
  <div class="animated fadeIn">
    <CRow>
      <CCol sm="6">
        <CCard>
          <CCardHeader slot="header">
            <strong>Credit Card </strong> <small>Form</small>
          </CCardHeader>
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
        </CCard>
      </CCol>
      <CCol sm="6">
        <CCard>
          <CCardHeader slot="header">
            <strong>Company </strong><small>Form</small>
          </CCardHeader>
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
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol md="6">
        <CCard>
          <CCardHeader slot="header">
            <strong>Basic Form</strong> Elements
          </CCardHeader>
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
              label="Select"
              size="lg"
              horizontal
              :options="options"
              placeholder="Please select"
            />
            <CFormSelect
              label="Select"
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
              <div class="form-row form-group" :key="name">
                <CCol sm="3">
                  {{name}}
                </CCol>
                <CCol sm="9" :class="key % 2 === 1 ? 'form-inline' : ''">
                  <CFormCheckbox
                    v-for="option in options"
                    :key="option"
                    :label="option"
                    :type="[0,1,4,5].includes(key) ? 'radio' : 'checkbox'"
                    :value="option"
                    :custom="key > 3"
                    :name="`Option 1${key}`"
                    :checked="[0,1,4,5].includes(key) ?
                      `Option 1` : Math.random() > 0.6"
                    :class="key % 2 === 1 ? 'form-check-inline' : ''"
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
          </CForm>
          <CCardFooter slot="footer">
            <CButton type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</CButton>
            <CButton type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</CButton>
          </CCardFooter>
        </CCard>
        <CCard>
          <CCardHeader slot="header">
            <strong>Inline</strong> Form
          </CCardHeader>

          <!-- Bootstrap Vue has some problems with Inline forms that's why we use some standard bootstrap classes -->
          <CForm inline>
            <CFormInput
              class="mr-2"
              label="<small>Name:&nbsp;</small>"
              placeholder="Jane Doe"
            />
            <CFormInput
              label="<small>Email:&nbsp;</small>"
              placeholder="jane.doe@example.com"
              autocomplete="email"
            />
          </CForm>
          <CCardFooter slot="footer">
            <CButton type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</CButton>
            <CButton type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol md="6">
        <CCard>
          <CCardHeader slot="header">
            <strong>Horizontal</strong> Form
          </CCardHeader>
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
            <CCardFooter slot="footer">
              <CButton type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</CButton>
              <CButton type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</CButton>
            </CCardFooter>
          </CForm>
        </CCard>
        <CCard>
          <CCardHeader slot="header">
            <strong>Normal</strong> Form
          </CCardHeader>
          <CForm novalidate>
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
            <CCardFooter slot="footer">
              <CButton type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</CButton>
              <CButton type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</CButton>
            </CCardFooter>
          </CForm>
        </CCard>
        <CCard :no-block="true">
          <CCardHeader slot="header">
            Input <strong>Grid</strong>
          </CCardHeader>
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
          <CCardFooter slot="footer">
            <CButton type="submit" size="sm" variant="primary"><i class="fa fa-user"></i> Login</CButton>
            <CButton type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</CButton>
          </CCardFooter>
        </CCard>
        <CCard>
          <CCardHeader slot="header">
            Input <strong>Sizes</strong>
          </CCardHeader>
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
          <CCardFooter slot="footer">
            <CButton type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</CButton>
            <CButton type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
    <CRow>

      <CCol sm="12" md="6">
        <CCard noWrapper :no-block="true">
          <CCardHeader slot="header">
            <strong>Basic Validation</strong> Form
          </CCardHeader>
          <CCardBody slot="body">
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
        <CCard header="<strong>Custom Validation</strong> Form">
          <CForm>
            <CFormInput
              label="Input is valid"
              valid-feedback="Input is valid."
              invalid-feedback="Please provide at least 4 characters."
              value="Valid value"
              :isValid="validator"
            />
            <CFormInput
              label="Input is invalid"
              valid-feedback="Thank you :)"
              invalid-feedback="Please provide at least 4 characters."
              :isValid="validator"
            />
          </CForm>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="4">
        <CCard>
          <CCardHeader slot="header">
            <strong>Icon/Text</strong> Groups
          </CCardHeader>
          <CFormInput
            placeholder="Username"
            prepend="<i class='fa fa-user'></i>"
          />
          <CFormInput
            type="email"
            placeholder="Email"
            autocomplete="email"
            append="<i class='fa fa-envelope-o'></i>"
          />
          <CFormInput
            prepend="<i class='fa fa-euro'></i>"
            placeholder="ex. $1.000.000"
            append=".00"
          />
          <CCardFooter slot="footer">
            <CButton type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Submit</CButton>
            <CButton type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol sm="4" >
        <CCard header="<strong>Buttons</strong> Groups">
          <CFormInput placeholder="Username">
            <template #prepend>
              <CButton variant="primary"><i class="fa fa-search"></i> Search</CButton>
            </template>
          </CFormInput>
          <CFormInput
            type="email"
            placeholder="Email"
            autocomplete="email"
          >
            <template #append>
              <CButton type="submit" variant="primary">Submit</CButton>
            </template>
          </CFormInput>
          <CFormInput
            type="email"
            placeholder="Email"
            autocomplete="email"
          >
            <template #prepend>
              <CButton variant="primary"><i class="fa fa-facebook"></i></CButton>
            </template>
            <template #append>
              <CButton variant="primary"><i class="fa fa-twitter"></i></CButton>
            </template>
          </CFormInput>
          <CCardFooter slot="footer">
            <CButton type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Submit</CButton>
            <CButton type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol sm="4">
        <CCard header="<strong>Dropdowns</strong> Groups">
          <CFormInput placeholder="Username">
            <template #prepend>
              <CDropdown
                button-content="Action"
                variant="primary"
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
                button-content="Action"
                variant="primary"
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
                button-content="Split"
                variant="primary"
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
                button-content="Action"
                variant="primary"
                right
              >
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdown>
            </template>

          </CFormInput>


          <CCardFooter slot="footer">
            <CButton type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Submit</CButton>
            <CButton type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol md="6">
        <CCard>
          <CCardHeader slot="header">
            Use the grid for big devices! <small><code>.col-lg-*</code> <code>.col-md-*</code> <code>.col-sm-*</code></small>
          </CCardHeader>
          <CRow
            class="form-group"
            v-for="(number, key) in [4,5,6,7,8]"
            :key="key"
          >
            <CCol :cols="12 - number">
              <CFormInput class="mb-0" :placeholder="`.col-md-${12 - number}`"/>
            </CCol>
            <CCol :cols="number">
              <CFormInput class="mb-0" :placeholder="`.col-md-${number}`"/>
            </CCol>
          </CRow>
          <CCardFooter slot="footer">
            <CButton size="sm" variant="primary">Action</CButton>
            <CButton size="sm" variant="danger">Action</CButton>
            <CButton size="sm" variant="warning">Action</CButton>
            <CButton size="sm" variant="info">Action</CButton>
            <CButton size="sm" variant="success">Action</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol md="6">
        <CCard>
          <CCardHeader slot="header">
            Input Grid for small devices! <small> <code>.col-*</code></small>
          </CCardHeader>
          <CRow
            class="form-group"
            v-for="(number, key) in [4,5,6,7,8]"
            :key="key"
          >
            <CCol :cols="number">
              <CFormInput class="mb-0" :placeholder="`.col-${number}`"/>
            </CCol>
            <CCol :cols="12 - number">
              <CFormInput class="mb-0" :placeholder="`.col-${12 - number}`"/>
            </CCol>
          </CRow>
          <CCardFooter slot="footer">
            <CButton size="sm" variant="primary">Action</CButton>
            <CButton size="sm" variant="danger">Action</CButton>
            <CButton size="sm" variant="warning">Action</CButton>
            <CButton size="sm" variant="info">Action</CButton>
            <CButton size="sm" variant="success">Action</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="4">
        <CCard>
          <CCardHeader slot="header">
            Example Form
          </CCardHeader>
          <CForm>
            <CFormInput
              prepend="Username"
              append="<i class='fa fa-user'></i>"
            />
            <CFormInput
              prepend="Email"
              type="email"
              autocomplete="email"
              append="<i class='fa fa-envelope'></i>"
            />
            <CFormInput
              prepend="Password"
              type="password"
              autocomplete="current-password"
              append="<i class='fa fa-asterisk'></i>"
            />
            <div class="form-group form-actions">
              <CButton type="submit" size="sm" variant="primary">Submit</CButton>
            </div>
          </CForm>
        </CCard>
      </CCol>
      <CCol sm="4">
        <CCard>
          <CCardHeader slot="header">
            Example Form
          </CCardHeader>
          <CForm>
            <CFormInput
              placeholder="Username"
              append="<i class='fa fa-user'></i>"
            />
            <CFormInput
              placeholder="Email"
              type="email"
              autocomplete="email"
              append="<i class='fa fa-envelope'></i>"
            />
            <CFormInput
              placeholder="Password"
              type="password"
              autocomplete="current-password"
              append="<i class='fa fa-asterisk'></i>"
            />
            <div class="form-group form-actions">
              <CButton type="submit" class="btn btn-sm btn-secondary">Submit</CButton>
            </div>
          </CForm>
        </CCard>
      </CCol>
      <CCol sm="4">
        <CCard>
          <CCardHeader slot="header">
            Example Form
          </CCardHeader>
          <CForm>
            <CFormInput
              placeholder="Username"
              prepend="<i class='fa fa-user'></i>"
            />
            <CFormInput
              placeholder="Email"
              type="email"
              autocomplete="email"
              prepend="<i class='fa fa-envelope'></i>"
            />
            <CFormInput
              placeholder="Password"
              type="password"
              autocomplete="current-password"
              prepend="<i class='fa fa-asterisk'></i>"
            />
            <div class="form-group form-actions">
              <CButton type="submit" size="sm" variant="success">Submit</CButton>
            </div>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol lg="12">
        <transition name="fade">
          <CCard
            v-if="show"
            no-wrapper
          >
            <CCardHeader slot="header">
              <i class="fa fa-edit"></i> Form Elements
              <div class="card-header-actions">
                <CLink href="#" class="card-header-action btn-setting">
                  <i class="icon-settings"></i>
                </CLink>
                <CLink
                  class="card-header-action btn-minimize"
                  @click="formElements=!formElements"
                >
                  <i :class="`icon-arrow-${formElements ? 'down' : 'up'}`"></i>
                </CLink>
                <CLink href="#" class="card-header-action btn-close" v-on:click="show = !show">
                  <i class="icon-close"></i>
                </CLink>
              </div>
            </CCardHeader>
            <CCollapse
              slot="body"
              :show="formElements"
            >
              <CCardBody>
                <CFormInput
                  label="Prepended text"
                  prepend="@"
                  description="Here's some help text"
                  type="email"
                  autocomplete="email"
                />
                <CFormInput
                  label="Appended text"
                  append=".00"
                  description="Here's some help text"
                />
                <CFormInput
                  label="Appended text"
                  prepend="$"
                  append=".00"
                  description="Here's some help text"
                />
                <CFormInput
                  label="Append with button"
                  description="Here's some help text"
                >
                  <template v-slot:append>
                    <CButton variant="primary">Go!</CButton>
                  </template>
                </CFormInput>
                <CFormInput label="Two-buttons append">
                  <template v-slot:append>
                    <CButton variant="primary">Search</CButton>
                    <CButton variant="danger">Options</CButton>
                  </template>
                </CFormInput>
                <div class="form-actions">
                  <CButton type="submit" variant="primary">Save changes</CButton>
                  <CButton variant="secondary">Cancel</CButton>
                </div>
              </CCardBody>
            </CCollapse>
          </CCard>
        </transition>
        <CCard>
        <!-- <CForm :id="id">
          <input type="text" :value="cInput"/>
          <CFormInput type="email"
                      label="CFormInput"
                      placeholder="Email input"
                      description="input description"
                      size="lg"
                      :readonly="false"
                      :plaintext="false"
                      :horizontal="{input: 'col-sm-8', label: 'col-sm-4'}"
                      :disabled="false"
                      validFeedback="valid feedback"
                      invalidFeedback="invalid feedback"
                      append=".00"
                      prepend="$"
                      required
                      :tooltipFeedbacks="true"
                      :isValid="validator"
                      :was-validateds="true"
                      addInputClasses="hehe"
                      addLabelClasses="heh2"
                      addWrapperClasses="heh2"
                      v-model="cInput"
                      lazys
          />
          <CFormTextarea label="Input label"
                         placeholder="Placeholder for textarea"
                         descriptiond="input description"
                         size="lg"
                         :readonly="false"
                         :plaintext="false"
                         :horizontal="{input: 'col-sm-8', label: 'col-sm-4'}"
                         :disabled="false"
                         validFeedback="valid feedback"
                         invalidFeedback="invalid feedback"
                         append=".00"
                         prepends="$"
                         required
                         value="wsewrwed"
                         :tooltipFeedbacks="true"
                         :isValids="true"
                         :was-validated="true"
                         addInputClasses="fsad"
                         addLabelClassesa="heh2"
                         :rows="20"
                         :cols="12"
                         v-model="cInput"
          >
            <CButton slot="prepend" class="btn btn-success">asd</CButton>
          </CFormTextarea>
          <br>
          <CFormSelect label="Input label"
                      :options="['first', true,3,{value:'fourth', text:'Another text', disabled:'disabled'},
                                {value:null, text:'boolean value'}]"
                      placeholder="Placeholder test"
                      description="input description"
                      size="lg"
                      customs
                      plaintexts
                      :horizontal="{input: 'col-sm-8', label: 'col-sm-4'}"
                      disableds="disabled"
                      validFeedback="valid feedback"
                      invalidFeedback="invalid feedback"
                      appenda=".00"
                      prepends="$"
                      required
                      :tooltipFeedback="true"
                      :isValidf="true"
                      :was-validated="true"
                      addInputClassess="form-control-plaintext"
                      addLabelClasses="heh2"
                      addWrapperClasses="hehe22"
                      v-model="selected"
          >
            <CButton slot="prepends" class="btn btn-success">dssdf</CButton>
          </CFormSelect>
          {{String(selected)}}
          <CFormFile label="Input label"
                     description="input description"
                     size="lg"
                     :horizontals="{input: 'col-sm-8', label: 'col-sm-4'}"
                     :disabled="false"
                     validFeedback="valid feedback"
                     invalidFeedback="invalid feedback"
                     required
                     :tooltipFeedback="true"
                     :isValid="true"
                     :was-validateds="true"
                     addInputClassesa="hehe"
                     addLabelClassesa="heh2"
                     custom
                     multiple
                     accept="image/*"
          />
          <div class="my-radio-group row">
            <div class="col-sm-4">
              My radio group
            </div>
            <div class="col-sm-8" >
              <CFormCheckbox type="radio"
                             :label="String(value)"
                             descriptions="input description"
                             :disabled="false"
                             validFeedback="valid feedback"
                             invalidFeedback="invalid feedback"
                             required
                             :tooltipFeedbacks="true"
                             :was-validateds="true"
                             addLabelClassesa="heh2"
                             custom
                             name="someName"
                             :value="value"
                             v-model="checks[1]"
                             :key="key"
                             inline
                             v-for="(value, key) in ['first', null, 3, false]"
              />
              <CFormCheckbox label="Input label"
                             descriptions="input description"
                             sizes="lg"
                             :disabled="false"
                             validFeedback="valid feedback"
                             invalidFeedback="invalid feedback"
                             required
                             :tooltipFeedback="true"
                             :was-validated="true"
                             addInputClassesa="hehe"
                             addLabelClassesa="heh2"
                             :isValidss="true"
                             value="hehes"
                             custom="radio"
                             v-model="checks[0]"

              />
            </div>
        </div>

        </CForm>
        <CSpinner variant="success"/>
        <CSpinner grow/>
        <CSpinner small />
        <CSpinner small grow/>
        <CSpinner grow tag="span"/> -->

        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'forms',
  data () {
    return {
      selected: [], // Must be an array reference!
      show: true,
      id: 'sdfjosdf22',
      cInput: '',
      smh: 'shnsad',
      trueValue:'someTrueValue',
      falseValue:'someFalseValue',
      checks: ['someTrueValue','hehehe2','',1,1,1,1,1,1,1,1,1,1,1,1],
      selected: 'first',
      isValid: '',
      testkkk: 2,
      horizontal: { label:'col-3', input:'col-9' },
      options: ['Option 1', 'Option 2', 'Option 3'],
      formElements: true,
      checkboxNames: ['Radios', 'Inline Radios',
                      'Checkboxes', 'Inline Checkboxes',
                      'Radios - custom', 'Inline Radios - custom',
                      'Checkboxes - custom', 'Inline Checkboxes - custom']
    }
  },
  updated () {
    console.log('parent updated')
  },
  methods: {
    testt (e) {
      // console.log(e)
      //   this.selected = 3
      this.cInput += 100
    },
    validator (val) {
      return val ? val.length >= 4 : false
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
