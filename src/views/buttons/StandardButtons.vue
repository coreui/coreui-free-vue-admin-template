<template>
  <div>
    <CCard>
      <CCardHeader>
        <strong>Standard buttons</strong>
        <div class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/components/button-components" 
            class="card-header-action" 
            rel="noreferrer noopener" 
            target="_blank"
          >
            <small class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody>
        <CRow class="align-items-center">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="primary">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="secondary">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="success">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="warning">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="danger">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="info">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="light">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="dark">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="link">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Active State
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="primary" aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="secondary" aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="success" aria-pressed="true">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="warning" aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="danger" aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="info" aria-pressed="true">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="light" aria-pressed="true">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="dark" aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="link" aria-pressed="true">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Disabled
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="primary" disabled>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="secondary" disabled>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="success" disabled>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="warning" disabled>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="danger" disabled>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="info" disabled>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="light" disabled>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="dark" disabled>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="link" disabled>Link</CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <strong>Outline Buttons</strong>
      </CCardHeader>
      <CCardBody>
        <p>
          Use <code>variant="outline"</code> prop
        </p>
        <CRow class="align-items-center">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="primary">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="secondary">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="success">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="warning">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="danger">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="info">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="light">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="dark">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Active State
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline" color="primary" aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline" color="secondary" aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline" color="success" aria-pressed="true">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline" color="warning" aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline" color="danger" aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline" color="info" aria-pressed="true">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline" color="light" aria-pressed="true">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline" color="dark" aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Disabled
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="primary" disabled>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="secondary" disabled>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="success" disabled>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="warning" disabled>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="danger" disabled>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="info" disabled>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="light" disabled>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline" color="dark" disabled>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <strong>Ghost Buttons</strong>
      </CCardHeader>
      <CCardBody>
        <p>
          Use
          <code>variant="ghost"</code> prop for ghost buttons.
        </p>
        <CRow class="align-items-center">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="primary">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="secondary">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="success">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="warning">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="danger">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="info">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="light">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="dark">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Active State
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="ghost" color="primary" aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="ghost" color="secondary" aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="ghost" color="success" aria-pressed="true">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="ghost" color="warning" aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="ghost" color="danger" aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="ghost" color="info" aria-pressed="true">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="ghost" color="light" aria-pressed="true">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="ghost" color="dark" aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Disabled
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="primary" disabled>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="secondary" disabled>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="success" disabled>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="warning" disabled>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="danger" disabled>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="info" disabled>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="light" disabled>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="ghost" color="dark" disabled>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <strong>Square Buttons</strong>
      </CCardHeader>
      <CCardBody>
        <p>
          Use
          <code>square</code> prop for square buttons.
        </p>
        <CRow class="align-items-center">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="primary" square>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="secondary" square>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="success" square>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="warning" square>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="danger" square>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="info" square>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="light" square>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="dark" square>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="link" square>Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Active State
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="primary" square aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="secondary" square aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="success" square aria-pressed="true">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="warning" square aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="danger" square aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="info" square aria-pressed="true">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="light" square aria-pressed="true">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="dark" square aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="link" square aria-pressed="true">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Disabled
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="primary" square disabled>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="secondary" square disabled>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="success" square disabled>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="warning" square disabled>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="danger" square disabled>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="info" square disabled>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="light" square disabled>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="dark" square disabled>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="link" square disabled>Link</CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <strong>Pill Buttons</strong>
      </CCardHeader>
      <CCardBody>
        <p>
          Use
          <code>pill</code> prop for pill buttons.
        </p>
        <CRow class="align-items-center">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="primary" shape="pill">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="secondary" shape="pill">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="success" shape="pill">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="warning" shape="pill">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="danger" shape="pill">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="info" shape="pill">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="light" shape="pill">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="dark" shape="pill">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="link" shape="pill">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Active State
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="primary" shape="pill" aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="secondary" shape="pill" aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="success" shape="pill" aria-pressed="true">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="warning" shape="pill" aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="danger" shape="pill" aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="info" shape="pill" aria-pressed="true">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="light" shape="pill" aria-pressed="true">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="dark" shape="pill" aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="link" shape="pill" aria-pressed="true">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Disabled
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="primary" shape="pill" disabled>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="secondary" shape="pill" disabled>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="success" shape="pill" disabled>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="warning" shape="pill" disabled>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="danger" shape="pill" disabled>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="info" shape="pill" disabled>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="light" shape="pill" disabled>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="dark" shape="pill" disabled>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="link" shape="pill" disabled>Link</CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <strong>Sizes</strong>
      </CCardHeader>
      <CCardBody>
        <p>Fancy larger or smaller buttons? Add <code>size="lg"</code> or <code>size="sm"</code> for additional sizes.</p>
        <CRow class="align-items-center">
          <CCol col="2" xl class="mb-3 mb-xl-0">
            Small
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="primary" size="sm">Standard Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="outline" color="secondary" size="sm">Outline Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton size="sm" variant="ghost" color="success">Ghost Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="warning" size="sm" square>Square Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="danger" size="sm" shape="pill">Pill Button</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="2" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="primary">Standard Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="outline" color="secondary">Outline Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="ghost" color="success">Ghost Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="warning" square>Square Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="danger" shape="pill">Pill Button</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="2" xl class="mb-3 mb-xl-0">
            Large
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="primary" size="lg">Standard Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="outline" color="secondary" size="lg">Outline Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="ghost" color="success" size="lg">Ghost Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="warning" size="lg" square>Square Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="danger" size="lg" shape="pill">Pill Button</CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <strong>With Icons</strong>
      </CCardHeader>
      <CCardBody>
        <CRow class="align-items-center">
          <CCol sm xs="12" class="text-center mt-3">
            <CButton color="primary">
              <CIcon name="cil-lightbulb"/>&nbsp;Standard Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton color="secondary" variant="outline">
              <CIcon name="cil-lightbulb"/>&nbsp;Outline Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton color="success">
              <CIcon name="cil-lightbulb"/>&nbsp;Ghost Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton color="warning" square>
              <CIcon name="cil-lightbulb"/>&nbsp;Square Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton color="danger" shape="pill">
              <CIcon name="cil-lightbulb"/>&nbsp;Pill Button
            </CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <strong>Toggle pressed state</strong>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="outline" color="primary" :pressed.sync="togglePress">Primary {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="outline" color="secondary" :pressed.sync="togglePress">Secondary {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="outline" color="success" :pressed.sync="togglePress">Success {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="outline" color="info" :pressed.sync="togglePress">Info {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="outline" color="warning" :pressed.sync="togglePress">Warning {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="outline" color="danger" :pressed.sync="togglePress">Danger {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CRow>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            <strong>Block Level CButtons </strong><small>Add this <code>block</code></small>
          </CCardHeader>
          <CCardBody>
            <CButton size="lg" color="secondary" block>Block level button</CButton>
            <CButton size="lg" color="primary" block>Block level button</CButton>
            <CButton size="lg" color="success" block>Block level button</CButton>
            <CButton size="lg" color="info" block>Block level button</CButton>
            <CButton size="lg" color="warning" block>Block level button</CButton>
            <CButton size="lg" color="danger" block>Block level button</CButton>
            <CButton size="lg" color="link" block>Block level button</CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
      <CCard>
          <CCardHeader>
            <strong>Block Level CButtons </strong><small>Add this <code>block</code></small>
          </CCardHeader>
          <CCardBody>
            <CButton size="lg" variant="outline" color="secondary" block>Block level button</CButton>
            <CButton size="lg" variant="outline" color="primary" block>Block level button</CButton>
            <CButton size="lg" variant="outline" color="success" block>Block level button</CButton>
            <CButton size="lg" variant="outline" color="info" block>Block level button</CButton>
            <CButton size="lg" variant="outline" color="warning" block>Block level button</CButton>
            <CButton size="lg" variant="outline" color="danger" block>Block level button</CButton>
            <CButton size="lg" variant="ghost" color="info" block>Block level button</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'StandardButtons',
  data () {
    return { togglePress: false }
  }
}
</script>