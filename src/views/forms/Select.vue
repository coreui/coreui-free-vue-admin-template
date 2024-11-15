<template>
  <CRow>
    <CCol :xs="12">
      <DocsComponents href="forms/select.html" />
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Select</strong> <small>Default</small>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="forms/select.html">
            <CFormSelect aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Select</strong> <small>Sizing</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            You may also choose from small and large custom selects to match our
            similarly sized text inputs.
          </p>
          <DocsExample href="forms/select.html#sizing">
            <CFormSelect
              size="lg"
              class="mb-3"
              aria-label="Large select example"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
            <CFormSelect
              size="sm"
              class="mb-3"
              aria-label="Small select example"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
          </DocsExample>
          <p class="text-body-secondary small">
            The <code>multiple</code> attribute is also supported:
          </p>
          <DocsExample href="forms/select.html#sizing">
            <CFormSelect
              size="lg"
              multiple
              aria-label="Multiple select example"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
          </DocsExample>
          <p class="text-body-secondary small">
            As is the <code>html-size</code> property:
          </p>
          <DocsExample href="forms/select.html#sizing">
            <CFormSelect
              size="lg"
              multiple
              aria-label="Multiple select example"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Select</strong> <small>Disabled</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Add the <code>disabled</code> boolean attribute on a select to give
            it a grayed out appearance and remove pointer events.
          </p>
          <DocsExample href="forms/select.html#disabled">
            <CFormSelect aria-label="Disabled select example" disabled>
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
