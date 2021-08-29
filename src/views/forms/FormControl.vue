<template>
  <CRow>
    <CCol xs="12">
      <DocsCallout name="Form Control" href="forms/form-control" />
    </CCol>
    <CCol xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="forms/form-control">
            <CForm>
              <div class="mb-3">
                <CFormLabel for="exampleFormControlInput1"
                  >Email address</CFormLabel
                >
                <CFormInput
                  type="email"
                  id="exampleFormControlInput1"
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
    <CCol xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong> <small>Sizing</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Set heights using <code>size</code> property like
            <code>size=&#34;lg&#34;</code> and <code>size=&#34;sm&#34;</code>.
          </p>
          <DocsExample href="forms/form-control#sizing">
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
    <CCol xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong> <small>Disabled</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add the <code>disabled</code> boolean attribute on an input to give
            it a grayed out appearance and remove pointer events.
          </p>
          <DocsExample href="forms/form-control#disabled">
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
              readOnly
            />
            <br />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong> <small>Readonly</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add the <code>readOnly</code> boolean attribute on an input to
            prevent modification of the input&#39;s value. Read-only inputs
            appear lighter (just like disabled inputs), but retain the standard
            cursor.
          </p>
          <DocsExample href="forms/form-control#readonly">
            <CFormInput
              type="text"
              placeholder="Readonly input here..."
              aria-label="readonly input example"
              readOnly
            />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong> <small>Readonly plain text</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            If you want to have <code>&lt;input readonly&gt;</code> elements in
            your form styled as plain text, use the
            <code>plainText</code> boolean property to remove the default form
            field styling and preserve the correct margin and padding.
          </p>
          <DocsExample href="components/accordion">
            <CRow class="mb-3">
              <CFormLabel for="staticEmail" class="col-sm-2 col-form-label">
                Email
              </CFormLabel>
              <div class="col-sm-10">
                <CFormInput
                  type="text"
                  id="staticEmail"
                  defaultValue="email@example.com"
                  readOnly
                  plainText
                />
              </div>
            </CRow>
            <CRow class="mb-3">
              <CFormLabel for="inputPassword" class="col-sm-2 col-form-label">
                Password
              </CFormLabel>
              <div class="col-sm-10">
                <CFormInput type="password" id="inputPassword" />
              </div>
            </CRow>
          </DocsExample>
          <DocsExample href="components/accordion">
            <CForm class="row g-3">
              <div class="col-auto">
                <CFormLabel for="staticEmail2" class="visually-hidden">
                  Email
                </CFormLabel>
                <CFormInput
                  type="text"
                  id="staticEmail2"
                  defaultValue="email@example.com"
                  readOnly
                  plainText
                />
              </div>
              <div class="col-auto">
                <CFormLabel for="inputPassword2" class="visually-hidden">
                  Password
                </CFormLabel>
                <CFormInput
                  type="password"
                  id="inputPassword2"
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
    <CCol xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong> <small>File input</small>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="forms/form-control#file-input">
            <div class="mb-3">
              <CFormLabel for="formFile">Default file input example</CFormLabel>
              <CFormInput type="file" id="formFile" />
            </div>
            <div class="mb-3">
              <CFormLabel for="formFileMultiple"
                >Multiple files input example</CFormLabel
              >
              <CFormInput type="file" id="formFileMultiple" multiple />
            </div>
            <div class="mb-3">
              <CFormLabel for="formFileDisabled"
                >Disabled file input example</CFormLabel
              >
              <CFormInput type="file" id="formFileDisabled" disabled />
            </div>
            <div class="mb-3">
              <CFormLabel for="formFileSm">Small file input example</CFormLabel>
              <CFormInput type="file" size="sm" id="formFileSm" />
            </div>
            <div>
              <CFormLabel for="formFileLg">Large file input example</CFormLabel>
              <CFormInput type="file" size="lg" id="formFileLg" />
            </div>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Form Control</strong> <small>Color</small>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="forms/form-control#color">
            <CFormLabel for="exampleColorInput">Color picker</CFormLabel>
            <CFormInput
              type="color"
              id="exampleColorInput"
              defaultValue="#563d7c"
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
