<template>
  <div>
    <CCard>
      <CCardHeader>
        <strong>Standard buttons</strong>
        <div class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/3.0/components/ButtonComponents" 
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
          Use <code>outline</code> prop
        </p>
        <CRow class="align-items-center">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="primary">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="secondary">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="success">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="warning">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="danger">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="info">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="light">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="dark">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Active State
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed outline color="primary" aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed outline color="secondary" aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed outline color="success" aria-pressed="true">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed outline color="warning" aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed outline color="danger" aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed outline color="info" aria-pressed="true">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed outline color="light" aria-pressed="true">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed outline color="dark" aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Disabled
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="primary" disabled>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="secondary" disabled>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="success" disabled>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="warning" disabled>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="danger" disabled>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="info" disabled>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="light" disabled>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block outline color="dark" disabled>Dark</CButton>
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
          <code>ghost</code> prop for ghost buttons.
        </p>
        <CRow class="align-items-center">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Normal
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="primary">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="secondary">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="success">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="warning">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="danger">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="info">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="light">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="dark">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Active State
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost color="primary" aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost color="secondary" aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost color="success" aria-pressed="true">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost color="warning" aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost color="danger" aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost color="info" aria-pressed="true">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost color="light" aria-pressed="true">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block pressed ghost color="dark" aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Disabled
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="primary" disabled>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="secondary" disabled>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="success" disabled>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="warning" disabled>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="danger" disabled>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="info" disabled>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="light" disabled>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block ghost color="dark" disabled>Dark</CButton>
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
            <CButton block color="primary" pill>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="secondary" pill>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="success" pill>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="warning" pill>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="danger" pill>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="info" pill>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="light" pill>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="dark" pill>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="link" pill>Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Active State
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="primary" pill aria-pressed="true">Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="secondary" pill aria-pressed="true">Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="success" pill aria-pressed="true">Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="warning" pill aria-pressed="true">Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="danger" pill aria-pressed="true">Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="info" pill aria-pressed="true">Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="light" pill aria-pressed="true">Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="dark" pill aria-pressed="true">Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton pressed block color="link" pill aria-pressed="true">Link</CButton>
          </CCol>
        </CRow>
        <CRow class="align-items-center mt-3">
          <CCol col="12" xl class="mb-3 mb-xl-0">
            Disabled
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="primary" pill disabled>Primary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="secondary" pill disabled>Secondary</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="success" pill disabled>Success</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="warning" pill disabled>Warning</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="danger" pill disabled>Danger</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="info" pill disabled>Info</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="light" pill disabled>Light</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="dark" pill disabled>Dark</CButton>
          </CCol>
          <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <CButton block color="link" pill disabled>Link</CButton>
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
            <CButton outline color="secondary" size="sm">Outline Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton size="sm" ghost color="success">Ghost Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="warning" size="sm" square>Square Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="danger" size="sm" pill>Pill Button</CButton>
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
            <CButton outline color="secondary">Outline Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton ghost color="success">Ghost Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="warning" square>Square Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="danger" pill>Pill Button</CButton>
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
            <CButton outline color="secondary" size="lg">Outline Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton ghost color="success" size="lg">Ghost Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="warning" size="lg" square>Square Button</CButton>
          </CCol>
          <CCol col="2" class="mb-3 mb-xl-0 text-center">
            <CButton color="danger" size="lg" pill>Pill Button</CButton>
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
              <i class="cui-lightbulb"></i>&nbsp;Standard Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton color="secondary" outline>
              <i class="cui-lightbulb"></i>&nbsp;Outline Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton color="success">
              <i class="cui-lightbulb"></i>&nbsp;Ghost Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton color="warning" square>
              <i class="cui-lightbulb"></i>&nbsp;Square Button
            </CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton color="danger" pill>
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
          <CCol sm xs="12" class="text-center mt-3">
            <CButton outline color="primary" :pressed.sync="togglePress">Primary {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton outline color="secondary" :pressed.sync="togglePress">Secondary {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton outline color="success" :pressed.sync="togglePress">Success {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton outline color="info" :pressed.sync="togglePress">Info {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton outline color="warning" :pressed.sync="togglePress">Warning {{togglePress ? 'On ' : 'Off'}}</CButton>
          </CCol>
          <CCol sm xs="12" class="text-center mt-3">
            <CButton outline color="danger" :pressed.sync="togglePress">Danger {{togglePress ? 'On ' : 'Off'}}</CButton>
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
            <CButton size="lg" outline color="secondary" block>Block level button</CButton>
            <CButton size="lg" outline color="primary" block>Block level button</CButton>
            <CButton size="lg" outline color="success" block>Block level button</CButton>
            <CButton size="lg" outline color="info" block>Block level button</CButton>
            <CButton size="lg" outline color="warning" block>Block level button</CButton>
            <CButton size="lg" outline color="danger" block>Block level button</CButton>
            <CButton size="lg" ghost color="info" block>Block level button</CButton>
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