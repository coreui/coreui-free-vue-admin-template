<template>
  <div class="animated fadeIn">
    <b-card no-body>
      <b-card-header>
        <strong>Standard buttons</strong>
      </b-card-header>
      <b-card-body>
        <b-row class="align-items-center">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Normal
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="primary">Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="secondary">Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="success">Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="warning">Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="danger">Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="info">Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="light">Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="dark">Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="link">Link</b-button>
          </b-col>
        </b-row>
        <b-row class="align-items-center mt-3">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Active State
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="primary" aria-pressed="true">Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="secondary" aria-pressed="true">Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="success" aria-pressed="true">Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="warning" aria-pressed="true">Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="danger" aria-pressed="true">Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="info" aria-pressed="true">Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="light" aria-pressed="true">Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="dark" aria-pressed="true">Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="link" aria-pressed="true">Link</b-button>
          </b-col>
        </b-row>
        <b-row class="align-items-center mt-3">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Disabled
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="primary" disabled>Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="secondary" disabled>Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="success" disabled>Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="warning" disabled>Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="danger" disabled>Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="info" disabled>Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="light" disabled>Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="dark" disabled>Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="link" disabled>Link</b-button>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
    <b-card no-body>
      <b-card-header>
        <strong>Outline Buttons</strong>
      </b-card-header>
      <b-card-body>
        <p>
          Use <code>variant="outline-*"</code> prop
        </p>
        <b-row class="align-items-center">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Normal
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-primary">Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-secondary">Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-success">Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-warning">Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-danger">Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-info">Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-light">Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-dark">Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></b-col>
        </b-row>
        <b-row class="align-items-center mt-3">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Active State
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="outline-primary" aria-pressed="true">Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="outline-secondary" aria-pressed="true">Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="outline-success" aria-pressed="true">Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="outline-warning" aria-pressed="true">Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="outline-danger" aria-pressed="true">Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="outline-info" aria-pressed="true">Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="outline-light" aria-pressed="true">Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="outline-dark" aria-pressed="true">Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></b-col>
        </b-row>
        <b-row class="align-items-center mt-3">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Disabled
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-primary" disabled>Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-secondary" disabled>Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-success" disabled>Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-warning" disabled>Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-danger" disabled>Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-info" disabled>Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-light" disabled>Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="outline-dark" disabled>Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></b-col>
        </b-row>
      </b-card-body>
    </b-card>
    <b-card no-body>
      <b-card-header>
        <strong>Ghost Buttons</strong>
      </b-card-header>
      <b-card-body>
        <p>
          Use
          <code>.btn-ghost-*</code> class for ghost buttons.
        </p>
        <b-row class="align-items-center">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Normal
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-primary">Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-secondary">Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-success">Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-warning">Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-danger">Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-info">Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-light">Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-dark">Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></b-col>
        </b-row>
        <b-row class="align-items-center mt-3">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Active State
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="ghost-primary" aria-pressed="true">Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="ghost-secondary" aria-pressed="true">Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="ghost-success" aria-pressed="true">Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="ghost-warning" aria-pressed="true">Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="ghost-danger" aria-pressed="true">Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="ghost-info" aria-pressed="true">Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="ghost-light" aria-pressed="true">Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block pressed variant="ghost-dark" aria-pressed="true">Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></b-col>
        </b-row>
        <b-row class="align-items-center mt-3">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Disabled
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-primary" disabled>Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-secondary" disabled>Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-success" disabled>Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-warning" disabled>Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-danger" disabled>Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-info" disabled>Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-light" disabled>Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="ghost-dark" disabled>Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0"></b-col>
        </b-row>
      </b-card-body>
    </b-card>
    <b-card no-body>
      <b-card-header>
        <strong>Square Buttons</strong>
      </b-card-header>
      <b-card-body>
        <p>
          Use
          <code>.btn-square</code> class for square buttons.
        </p>
        <b-row class="align-items-center">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Normal
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="primary" class="btn-square">Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="secondary" class="btn-square">Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="success" class="btn-square">Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="warning" class="btn-square">Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="danger" class="btn-square">Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="info" class="btn-square">Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="light" class="btn-square">Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="dark" class="btn-square">Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="link" class="btn-square">Link</b-button>
          </b-col>
        </b-row>
        <b-row class="align-items-center mt-3">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Active State
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="primary" class="btn-square" aria-pressed="true">Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="secondary" class="btn-square" aria-pressed="true">Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="success" class="btn-square" aria-pressed="true">Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="warning" class="btn-square" aria-pressed="true">Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="danger" class="btn-square" aria-pressed="true">Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="info" class="btn-square" aria-pressed="true">Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="light" class="btn-square" aria-pressed="true">Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="dark" class="btn-square" aria-pressed="true">Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="link" class="btn-square" aria-pressed="true">Link</b-button>
          </b-col>
        </b-row>
        <b-row class="align-items-center mt-3">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Disabled
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="primary" class="btn-square" disabled>Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="secondary" class="btn-square" disabled>Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="success" class="btn-square" disabled>Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="warning" class="btn-square" disabled>Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="danger" class="btn-square" disabled>Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="info" class="btn-square" disabled>Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="light" class="btn-square" disabled>Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="dark" class="btn-square" disabled>Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="link" class="btn-square" disabled>Link</b-button>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
    <b-card no-body>
      <b-card-header>
        <strong>Pill Buttons</strong>
      </b-card-header>
      <b-card-body>
        <p>
          Use
          <code>.btn-pill</code> class for pill buttons.
        </p>
        <b-row class="align-items-center">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Normal
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="primary" class="btn-pill">Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="secondary" class="btn-pill">Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="success" class="btn-pill">Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="warning" class="btn-pill">Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="danger" class="btn-pill">Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="info" class="btn-pill">Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="light" class="btn-pill">Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="dark" class="btn-pill">Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="link" class="btn-pill">Link</b-button>
          </b-col>
        </b-row>
        <b-row class="align-items-center mt-3">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Active State
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="primary" class="btn-pill" aria-pressed="true">Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="secondary" class="btn-pill" aria-pressed="true">Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="success" class="btn-pill" aria-pressed="true">Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="warning" class="btn-pill" aria-pressed="true">Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="danger" class="btn-pill" aria-pressed="true">Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="info" class="btn-pill" aria-pressed="true">Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="light" class="btn-pill" aria-pressed="true">Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="dark" class="btn-pill" aria-pressed="true">Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button pressed block variant="link" class="btn-pill" aria-pressed="true">Link</b-button>
          </b-col>
        </b-row>
        <b-row class="align-items-center mt-3">
          <b-col cols="12" xl class="mb-3 mb-xl-0">
            Disabled
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="primary" class="btn-pill" disabled>Primary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="secondary" class="btn-pill" disabled>Secondary</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="success" class="btn-pill" disabled>Success</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="warning" class="btn-pill" disabled>Warning</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="danger" class="btn-pill" disabled>Danger</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="info" class="btn-pill" disabled>Info</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="light" class="btn-pill" disabled>Light</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="dark" class="btn-pill" disabled>Dark</b-button>
          </b-col>
          <b-col cols="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
            <b-button block variant="link" class="btn-pill" disabled>Link</b-button>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
    <b-card no-body>
      <b-card-header>
        <strong>Sizes</strong>
      </b-card-header>
      <b-card-body>
        <p>Fancy larger or smaller buttons? Add <code>size="lg"</code> or <code>size="sm"</code> for additional sizes.</p>
        <b-row class="align-items-center">
          <b-col cols="2" xl class="mb-3 mb-xl-0">
            Small
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="primary" size="sm">Standard Button</b-button>
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="outline-secondary" size="sm">Outline Button</b-button>
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button size="sm" variant="ghost-success">Ghost Button</b-button>
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="warning" size="sm" class="btn-square">Square Button</b-button>
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="danger" size="sm" class="btn-pill">Pill Button</b-button>
          </b-col>
        </b-row>
        <b-row class="align-items-center mt-3">
          <b-col cols="2" xl class="mb-3 mb-xl-0">
            Normal
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="primary">Standard Button</b-button>
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="outline-secondary" >Outline Button</b-button>
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="ghost-success">Ghost Button</b-button>
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="warning" class="btn-square">Square Button</b-button>
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="danger" class="btn-pill">Pill Button</b-button>
          </b-col>
        </b-row>
        <b-row class="align-items-center mt-3">
          <b-col cols="2" xl class="mb-3 mb-xl-0">
            Large
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="primary" size="lg">Standard Button</b-button>
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="outline-secondary" size="lg">Outline Button</b-button>
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="ghost-success" size="lg">Ghost Button</b-button>
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="warning" size="lg" class="btn-square">Square Button</b-button>
          </b-col>
          <b-col cols="2" class="mb-3 mb-xl-0 text-center">
            <b-button variant="danger" size="lg" class="btn-pill">Pill Button</b-button>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
    <b-card no-body>
      <b-card-header>
        <strong>With Icons</strong>
      </b-card-header>
      <b-card-body>
        <b-row class="align-items-center mt-3">
          <b-col sm xs="12" class="text-center mt-3">
            <b-button variant="primary">
              <i class="fa fa-lightbulb-o"></i>&nbsp;Standard Button
            </b-button>
          </b-col>
          <b-col sm xs="12" class="text-center mt-3">
            <b-button variant="secondary" outline>
              <i class="fa fa-lightbulb-o"></i>&nbsp;Outline Button
            </b-button>
          </b-col>
          <b-col sm xs="12" class="text-center mt-3">
            <b-button variant="ghost-success">
              <i class="fa fa-lightbulb-o"></i>&nbsp;Ghost Button
            </b-button>
          </b-col>
          <b-col sm xs="12" class="text-center mt-3">
            <b-button variant="warning" class="btn-square">
              <i class="fa fa-lightbulb-o"></i>&nbsp;Square Button
            </b-button>
          </b-col>
          <b-col sm xs="12" class="text-center mt-3">
            <b-button variant="danger" class="btn-pill">
              <i class="fa fa-lightbulb-o"></i>&nbsp;Pill Button
            </b-button>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
    <b-card>
      <div slot="header">
        <strong>Toggle pressed state</strong>
      </div>
      <b-row>
        <b-col sm xs="12" class="text-center mt-3">
          <b-button variant="outline-primary" :pressed.sync="togglePress">Primary {{togglePress ? 'On ' : 'Off'}}</b-button>
        </b-col>
        <b-col sm xs="12" class="text-center mt-3">
          <b-button variant="outline-secondary" :pressed.sync="togglePress">Secondary {{togglePress ? 'On ' : 'Off'}}</b-button>
        </b-col>
        <b-col sm xs="12" class="text-center mt-3">
          <b-button variant="outline-success" :pressed.sync="togglePress">Success {{togglePress ? 'On ' : 'Off'}}</b-button>
        </b-col>
        <b-col sm xs="12" class="text-center mt-3">
          <b-button variant="outline-info" :pressed.sync="togglePress">Info {{togglePress ? 'On ' : 'Off'}}</b-button>
        </b-col>
        <b-col sm xs="12" class="text-center mt-3">
          <b-button variant="outline-warning" :pressed.sync="togglePress">Warning {{togglePress ? 'On ' : 'Off'}}</b-button>
        </b-col>
        <b-col sm xs="12" class="text-center mt-3">
          <b-button variant="outline-danger" :pressed.sync="togglePress">Danger {{togglePress ? 'On ' : 'Off'}}</b-button>
        </b-col>
      </b-row>
    </b-card>
    <b-row>
      <b-col xs="12" md="6">
        <b-card>
          <div slot="header">
            <strong>Block Level b-buttons</strong> <small>Add this <code>block</code></small>
          </div>
          <b-button size="lg" variant="secondary" block>Block level button</b-button>
          <b-button size="lg" variant="primary" block>Block level button</b-button>
          <b-button size="lg" variant="success" block>Block level button</b-button>
          <b-button size="lg" variant="info" block>Block level button</b-button>
          <b-button size="lg" variant="warning" block>Block level button</b-button>
          <b-button size="lg" variant="danger" block>Block level button</b-button>
          <b-button size="lg" variant="link" block>Block level button</b-button>
        </b-card>
      </b-col>
      <b-col xs="12" md="6">
      <b-card>
          <div slot="header">
            <strong>Block Level b-buttons</strong> <small>Add this <code>block</code></small>
          </div>
          <b-button size="lg" variant="outline-secondary" block>Block level button</b-button>
          <b-button size="lg" variant="outline-primary" block>Block level button</b-button>
          <b-button size="lg" variant="outline-success" block>Block level button</b-button>
          <b-button size="lg" variant="outline-info" block>Block level button</b-button>
          <b-button size="lg" variant="outline-warning" block>Block level button</b-button>
          <b-button size="lg" variant="outline-danger" block>Block level button</b-button>
          <b-button size="lg" variant="ghost-info" block>Block level button</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'standard-buttons',
  data: () => {
    return { togglePress: false }
  }
}
</script>

<style scoped>
  .btn.disabled {
    cursor: auto;
  }
</style>
