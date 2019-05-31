<template>
  <div class="c-animated c-fadeIn">
    <CCard >
      <CCardHeader>
        <strong>Standard buttons</strong>
      </CCardHeader>
      <CCardBody>
        <CRow class="c-align-items-center">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Normal
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="primary">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="secondary">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="success">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="warning">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="danger">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="info">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="light">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="dark">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="link">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="c-align-items-center c-mt-3">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Active State
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="primary" aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="secondary" aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="success" aria-pressed="true">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="warning" aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="danger" aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="info" aria-pressed="true">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="light" aria-pressed="true">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="dark" aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="link" aria-pressed="true">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="c-align-items-center c-mt-3">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Disabled
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="primary" disabled>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="secondary" disabled>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="success" disabled>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="warning" disabled>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="danger" disabled>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="info" disabled>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="light" disabled>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="dark" disabled>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
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
          Use <code>outline</code> prop
        </p>
        <CRow class="c-align-items-center">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Normal
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="primary">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="secondary">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="success">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="warning">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="danger">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="info">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="light">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="dark">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0"></CCol>
        </CRow>
        <CRow class="c-align-items-center c-mt-3">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Active State
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed outline variant="primary" aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed outline variant="secondary" aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed outline variant="success" aria-pressed="true">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed outline variant="warning" aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed outline variant="danger" aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed outline variant="info" aria-pressed="true">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed outline variant="light" aria-pressed="true">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed outline variant="dark" aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0"></CCol>
        </CRow>
        <CRow class="c-align-items-center c-mt-3">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Disabled
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="primary" disabled>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="secondary" disabled>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="success" disabled>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="warning" disabled>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="danger" disabled>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="info" disabled>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="light" disabled>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block outline variant="dark" disabled>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0"></CCol>
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
        <CRow class="c-align-items-center">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Normal
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0" >
            <CButton block ghost variant="primary">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="secondary">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="success">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="warning">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="danger">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="info">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="light">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="dark">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0"></CCol>
        </CRow>
        <CRow class="c-align-items-center c-mt-3">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Active State
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed ghost variant="primary" aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed ghost variant="secondary" aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed ghost variant="success" aria-pressed="true">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed ghost variant="warning" aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed ghost variant="danger" aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed ghost variant="info" aria-pressed="true">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed ghost variant="light" aria-pressed="true">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block pressed ghost variant="dark" aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0"></CCol>
        </CRow>
        <CRow class="c-align-items-center c-mt-3">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Disabled
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="primary" disabled>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="secondary" disabled>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="success" disabled>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="warning" disabled>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="danger" disabled>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="info" disabled>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="light" disabled>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block ghost variant="dark" disabled>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0"></CCol>
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
        <CRow class="c-align-items-center">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Normal
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="primary" square>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="secondary" square>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="success" square>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="warning" square>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="danger" square>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="info" square>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="light" square>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="dark" square>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="link" square>Link</CButton>
          </CCol>
        </CRow>
        <CRow class="c-align-items-center c-mt-3">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Active State
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="primary" square aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="secondary" square aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="success" square aria-pressed="true">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="warning" square aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="danger" square aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="info" square aria-pressed="true">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="light" square aria-pressed="true">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="dark" square aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="link" square aria-pressed="true">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="c-align-items-center c-mt-3">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Disabled
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="primary" square disabled>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="secondary" square disabled>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="success" square disabled>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="warning" square disabled>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="danger" square disabled>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="info" square disabled>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="light" square disabled>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="dark" square disabled>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
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
        <CRow class="c-align-items-center">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Normal
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="primary" pill>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="secondary" pill>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="success" pill>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="warning" pill>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="danger" pill>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="info" pill>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="light" pill>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="dark" pill>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="link" pill>Link</CButton>
          </CCol>
        </CRow>
        <CRow class="c-align-items-center c-mt-3">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Active State
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="primary" pill aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="secondary" pill aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="success" pill aria-pressed="true">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="warning" pill aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="danger" pill aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="info" pill aria-pressed="true">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="light" pill aria-pressed="true">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="dark" pill aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton pressed block variant="link" pill aria-pressed="true">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="c-align-items-center c-mt-3">
          <CCol col="12" xl class="c-mb-3 c-mb-xl-0">
            Disabled
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="primary" pill disabled>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="secondary" pill disabled>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="success" pill disabled>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="warning" pill disabled>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="danger" pill disabled>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="info" pill disabled>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="light" pill disabled>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
            <CButton block variant="dark" pill disabled>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="c-mb-3 c-mb-xl-0">
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
        <CRow class="c-align-items-center">
          <CCol col="2" xl class="c-mb-3 c-mb-xl-0">
            Small
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton variant="primary" size="sm">Standard Button</CButton>
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton outline variant="secondary" size="sm">Outline Button</CButton>
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton size="sm" ghost variant="success">Ghost Button</CButton>
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton variant="warning" size="sm" square>Square Button</CButton>
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton variant="danger" size="sm" pill>Pill Button</CButton>
          </CCol>
        </CRow>
        <CRow class="c-align-items-center c-mt-3">
          <CCol col="2" xl class="c-mb-3 c-mb-xl-0">
            Normal
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton variant="primary">Standard Button</CButton>
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton outline variant="secondary" >Outline Button</CButton>
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton ghost variant="success">Ghost Button</CButton>
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton variant="warning" square>Square Button</CButton>
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton variant="danger" pill>Pill Button</CButton>
          </CCol>
        </CRow>
        <CRow class="c-align-items-center c-mt-3">
          <CCol col="2" xl class="c-mb-3 c-mb-xl-0">
            Large
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton variant="primary" size="lg">Standard Button</CButton>
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton outline variant="secondary" size="lg">Outline Button</CButton>
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton ghost variant="success" size="lg">Ghost Button</CButton>
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
            <CButton variant="warning" size="lg" square>Square Button</CButton>
          </CCol>
          <CCol col="2" class="c-mb-3 c-mb-xl-0 c-text-center">
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
        <CRow class="c-align-items-center">
          <CCol sm xs="12" class="c-text-center c-mt-3">
            <CButton variant="primary">
              <i class="cui-lightbulb"></i>&nbsp;Standard Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="c-text-center c-mt-3">
            <CButton variant="secondary" outline>
              <i class="cui-lightbulb"></i>&nbsp;Outline Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="c-text-center c-mt-3">
            <CButton variant="success">
              <i class="cui-lightbulb"></i>&nbsp;Ghost Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="c-text-center c-mt-3">
            <CButton variant="warning" square>
              <i class="cui-lightbulb"></i>&nbsp;Square Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="c-text-center c-mt-3">
            <CButton variant="danger" pill>
              <i class="cui-lightbulb"></i>&nbsp;Pill Button
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
          <CCol sm xs="12" class="c-text-center c-mt-3">
            <CButton outline variant="primary" :pressed.sync="togglePress">Primary {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="c-text-center c-mt-3">
            <CButton outline variant="secondary" :pressed.sync="togglePress">Secondary {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="c-text-center c-mt-3">
            <CButton outline variant="success" :pressed.sync="togglePress">Success {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="c-text-center c-mt-3">
            <CButton outline variant="info" :pressed.sync="togglePress">Info {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="c-text-center c-mt-3">
            <CButton outline variant="warning" :pressed.sync="togglePress">Warning {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="c-text-center c-mt-3">
            <CButton outline variant="danger" :pressed.sync="togglePress">Danger {{togglePress ? 'On ' : 'Off'}}</CButton>
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
            <CButton size="lg" outline variant="secondary" block>Block level button</CButton>
            <CButton size="lg" outline variant="primary" block>Block level button</CButton>
            <CButton size="lg" outline variant="success" block>Block level button</CButton>
            <CButton size="lg" outline variant="info" block>Block level button</CButton>
            <CButton size="lg" outline variant="warning" block>Block level button</CButton>
            <CButton size="lg" outline variant="danger" block>Block level button</CButton>
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
