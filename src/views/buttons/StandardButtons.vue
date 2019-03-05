<template>
  <div class="animated fadeIn">
    <CCard >
      <CCardHeader>
        <strong>Standard buttons</strong>
      </CCardHeader>
      <CCardBody>
        <CRow class="align-items-center">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="primary">Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="secondary">Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="success">Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="warning">Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="danger">Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="info">Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="light">Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="dark">Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="link">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Active State
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="primary" aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="secondary" aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="success" aria-pressed="true">Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="warning" aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="danger" aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="info" aria-pressed="true">Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="light" aria-pressed="true">Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="dark" aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="link" aria-pressed="true">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Disabled
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="primary" disabled>Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="secondary" disabled>Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="success" disabled>Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="warning" disabled>Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="danger" disabled>Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="info" disabled>Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="light" disabled>Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="dark" disabled>Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="link" disabled>Link</CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard >
      <CCardHeader>
        <strong>Outline Buttons</strong>
      </CCardHeader>
      <CCardBody>
        <p>
          Use <code>variant="outline-*"</code> prop
        </p>
        <CRow class="align-items-center">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-primary">Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-secondary">Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-success">Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-warning">Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-danger">Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-info">Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-light">Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-dark">Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Active State
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline-primary" aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline-secondary" aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline-success" aria-pressed="true">Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline-warning" aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline-danger" aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline-info" aria-pressed="true">Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline-light" aria-pressed="true">Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed variant="outline-dark" aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Disabled
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-primary" disabled>Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-secondary" disabled>Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-success" disabled>Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-warning" disabled>Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-danger" disabled>Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-info" disabled>Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-light" disabled>Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="outline-dark" disabled>Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard >
      <CCardHeader>
        <strong>Ghost Buttons</strong>
      </CCardHeader>
      <CCardBody>
        <p>
          Use
          <code>ghost</code> prop for ghost buttons.
        </p>
        <CRow class="align-items-center">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0" >
            <CButton block ghost variant="primary">Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="secondary">Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="success">Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="warning">Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="danger">Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="info">Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="light">Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="dark">Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Active State
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost variant="primary" aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost variant="secondary" aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost variant="success" aria-pressed="true">Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost variant="warning" aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost variant="danger" aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost variant="info" aria-pressed="true">Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost variant="light" aria-pressed="true">Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost variant="dark" aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Disabled
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="primary" disabled>Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="secondary" disabled>Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="success" disabled>Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="warning" disabled>Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="danger" disabled>Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="info" disabled>Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="light" disabled>Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost variant="dark" disabled>Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard >
      <CCardHeader>
        <strong>Square Buttons</strong>
      </CCardHeader>
      <CCardBody>
        <p>
          Use
          <code>square</code> prop for square buttons.
        </p>
        <CRow class="align-items-center">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="primary" square>Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="secondary" square>Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="success" square>Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="warning" square>Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="danger" square>Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="info" square>Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="light" square>Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="dark" square>Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="link" square>Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Active State
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="primary" square aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="secondary" square aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="success" square aria-pressed="true">Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="warning" square aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="danger" square aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="info" square aria-pressed="true">Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="light" square aria-pressed="true">Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="dark" square aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="link" square aria-pressed="true">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Disabled
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="primary" square disabled>Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="secondary" square disabled>Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="success" square disabled>Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="warning" square disabled>Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="danger" square disabled>Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="info" square disabled>Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="light" square disabled>Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="dark" square disabled>Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="link" square disabled>Link</CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard >
      <CCardHeader>
        <strong>Pill Buttons</strong>
      </CCardHeader>
      <CCardBody>
        <p>
          Use
          <code>pill</code> prop for pill buttons.
        </p>
        <CRow class="align-items-center">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="primary" pill>Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="secondary" pill>Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="success" pill>Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="warning" pill>Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="danger" pill>Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="info" pill>Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="light" pill>Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="dark" pill>Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="link" pill>Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Active State
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="primary" pill aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="secondary" pill aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="success" pill aria-pressed="true">Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="warning" pill aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="danger" pill aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="info" pill aria-pressed="true">Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="light" pill aria-pressed="true">Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="dark" pill aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block variant="link" pill aria-pressed="true">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol cols="12" xl class="mb-3 mb-xl-0">
            Disabled
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="primary" pill disabled>Primary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="secondary" pill disabled>Secondary</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="success" pill disabled>Success</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="warning" pill disabled>Warning</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="danger" pill disabled>Danger</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="info" pill disabled>Info</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="light" pill disabled>Light</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="dark" pill disabled>Dark</CButton>
          </CCol>
          <CCol cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block variant="link" pill disabled>Link</CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard >
      <CCardHeader>
        <strong>Sizes</strong>
      </CCardHeader>
      <CCardBody>
        <p>Fancy larger or smaller buttons? Add <code>size="lg"</code> or <code>size="sm"</code> for additional sizes.</p>
        <CRow class="align-items-center">
          <CCol cols="2" xl class="mb-3 mb-xl-0">
            Small
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="primary" size="sm">Standard Button</CButton>
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="outline-secondary" size="sm">Outline Button</CButton>
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton size="sm" ghost variant="success">Ghost Button</CButton>
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="warning" size="sm" square>Square Button</CButton>
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="danger" size="sm" pill>Pill Button</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol cols="2" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="primary">Standard Button</CButton>
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="outline-secondary" >Outline Button</CButton>
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton ghost variant="success">Ghost Button</CButton>
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="warning" square>Square Button</CButton>
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="danger" pill>Pill Button</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol cols="2" xl class="mb-3 mb-xl-0">
            Large
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="primary" size="lg">Standard Button</CButton>
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="outline-secondary" size="lg">Outline Button</CButton>
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton ghost variant="success" size="lg">Ghost Button</CButton>
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="warning" size="lg" square>Square Button</CButton>
          </CCol>
          <CCol cols="2" class="mb-3 mb-xl-0 text-center">
            <CButton variant="danger" size="lg" pill>Pill Button</CButton>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard >
      <CCardHeader>
        <strong>With Icons</strong>
      </CCardHeader>
      <CCardBody>
        <CRow class="align-items-center">
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="primary">
              <i class="fa fa-lightbulb-o"></i>&nbsp;Standard Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="secondary" outline>
              <i class="fa fa-lightbulb-o"></i>&nbsp;Outline Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="success">
              <i class="fa fa-lightbulb-o"></i>&nbsp;Ghost Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="warning" square>
              <i class="fa fa-lightbulb-o"></i>&nbsp;Square Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="danger" pill>
              <i class="fa fa-lightbulb-o"></i>&nbsp;Pill Button
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
            <CButton variant="outline-primary" :pressed.sync="togglePress">Primary {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="outline-secondary" :pressed.sync="togglePress">Secondary {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="outline-success" :pressed.sync="togglePress">Success {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="outline-info" :pressed.sync="togglePress">Info {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="outline-warning" :pressed.sync="togglePress">Warning {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton variant="outline-danger" :pressed.sync="togglePress">Danger {{togglePress ? 'On ' : 'Off'}}</CButton>
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
            <CButton size="lg" variant="secondary" block>Block level button</CButton>
            <CButton size="lg" variant="primary" block>Block level button</CButton>
            <CButton size="lg" variant="success" block>Block level button</CButton>
            <CButton size="lg" variant="info" block>Block level button</CButton>
            <CButton size="lg" variant="warning" block>Block level button</CButton>
            <CButton size="lg" variant="danger" block>Block level button</CButton>
            <CButton size="lg" variant="link" block>Block level button</CButton>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
      <CCard>
          <CCardHeader>
            <strong>Block Level CButtons </strong><small>Add this <code>block</code></small>
          </CCardHeader>
          <CCardBody>
            <CButton size="lg" variant="outline-secondary" block>Block level button</CButton>
            <CButton size="lg" variant="outline-primary" block>Block level button</CButton>
            <CButton size="lg" variant="outline-success" block>Block level button</CButton>
            <CButton size="lg" variant="outline-info" block>Block level button</CButton>
            <CButton size="lg" variant="outline-warning" block>Block level button</CButton>
            <CButton size="lg" variant="outline-danger" block>Block level button</CButton>
            <CButton size="lg" ghost variant="info" block>Block level button</CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'standard-buttons',
  data () {
    return { togglePress: false }
  }
}
</script>

<style scoped>
  .btn.disabled {
    cursor: auto;
  }
</style>
