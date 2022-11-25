<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="forms/form-control.html">
            <CForm>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput1"
                  >Email address</CFormLabel
                >
                <CFormInput
                  id="exampleFormControlInput1"
                  type="email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlTextarea1"
                  >Example textarea</CFormLabel
                >
                <CFormTextarea
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></CFormTextarea>
              </div>
            </CForm>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong> <small>Sizing</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Set heights using <code>size</code> property like
            <code>size=&#34;lg&#34;</code> and <code>size=&#34;sm&#34;</code>.
          </p>
          <DocsExample href="forms/form-control.html#sizing">
            <CFormInput
              type="text"
              size="lg"
              placeholder="Large input"
              aria-label="lg input example"
            />
            <br />
            <CFormInput
              type="text"
              placeholder="Default input"
              aria-label="default input example"
            />
            <br />
            <CFormInput
              type="text"
              size="sm"
              placeholder="Small input"
              aria-label="sm input example"
            />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong> <small>Disabled</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add the <code>disabled</code> boolean attribute on an input to give
            it a grayed out appearance and remove pointer events.
          </p>
          <DocsExample href="forms/form-control.html#disabled">
            <CFormInput
              type="text"
              placeholder="Disabled input"
              aria-label="Disabled input example"
              disabled
            />
            <br />
            <CFormInput
              type="text"
              placeholder="Disabled readonly input"
              aria-label="Disabled input example"
              disabled
              readonly
            />
            <br />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong> <small>Readonly</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add the <code>readonly</code> boolean attribute on an input to
            prevent modification of the input&#39;s value. Read-only inputs
            appear lighter (just like disabled inputs), but retain the standard
            cursor.
          </p>
          <DocsExample href="forms/form-control.html#readonly">
            <CFormInput
              type="text"
              placeholder="Readonly input here..."
              aria-label="readonly input example"
              readonly
            />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong> <small>Readonly plain text</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            If you want to have <code>&lt;input readonly&gt;</code> elements in
            your form styled as plain text, use the
            <code>plain-text</code> boolean property to remove the default form
            field styling and preserve the correct margin and padding.
          </p>
          <DocsExample href="forms/form-control.html#readonly-plain-text">
            <CRow class="mb-3">
              <CFormLabel for="staticEmail" class="col-sm-2 col-form-label">
                Email
              </CFormLabel>
              <div class="col-sm-10">
                <CFormInput
                  id="staticEmail"
                  type="text"
                  value="email@example.com"
                  readonly
                  plain-text
                />
              </div>
            </CRow>
            <CRow class="mb-3">
              <CFormLabel for="inputPassword" class="col-sm-2 col-form-label">
                Password
              </CFormLabel>
              <div class="col-sm-10">
                <CFormInput id="inputPassword" type="password" />
              </div>
            </CRow>
          </DocsExample>
          <DocsExample href="forms/form-control.html#readonly-plain-text">
            <CForm class="row g-3">
              <div class="col-auto">
                <CFormLabel for="staticEmail2" class="visually-hidden">
                  Email
                </CFormLabel>
                <CFormInput
                  id="staticEmail2"
                  type="text"
                  value="email@example.com"
                  readonly
                  plain-text
                />
              </div>
              <div class="col-auto">
                <CFormLabel for="inputPassword2" class="visually-hidden">
                  Password
                </CFormLabel>
                <CFormInput
                  id="inputPassword2"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div class="col-auto">
                <CButton type="submit" class="mb-3"> Confirm identity </CButton>
              </div>
            </CForm>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong> <small>File input</small>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="forms/form-control.html#file-input">
            <div class="mb-3">
              <CFormLabel for="formFile">Default file input example</CFormLabel>
              <CFormInput id="formFile" type="file" />
            </div>
            <div class="mb-3">
              <CFormLabel for="formFileMultiple"
                >Multiple files input example</CFormLabel
              >
              <CFormInput id="formFileMultiple" type="file" multiple />
            </div>
            <div class="mb-3">
              <CFormLabel for="formFileDisabled"
                >Disabled file input example</CFormLabel
              >
              <CFormInput id="formFileDisabled" type="file" disabled />
            </div>
            <div class="mb-3">
              <CFormLabel for="formFileSm">Small file input example</CFormLabel>
              <CFormInput id="formFileSm" type="file" size="sm" />
            </div>
            <div>
              <CFormLabel for="formFileLg">Large file input example</CFormLabel>
              <CFormInput id="formFileLg" type="file" size="lg" />
            </div>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong> <small>Color</small>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="forms/form-control.html#color">
            <CFormLabel for="exampleColorInput">Color picker</CFormLabel>
            <CFormInput
              id="exampleColorInput"
              type="color"
              value="#563d7c"
              title="Choose your color"
            />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'FormControl',
}
</script>
