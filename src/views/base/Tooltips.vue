<template>
  <CRow>
    <CCol :xs="12">
      <DocsComponents href="components/tooltip.html" />
      <CCard>
        <CCardHeader>
          <strong>Vue Tooltips</strong> <small>Basic example</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Hover over the links below to see tooltips:
          </p>
          <DocsExample href="components/tooltip.html">
            <p class="text-body-secondary">
              Tight pants next level keffiyeh
              <CLink v-c-tooltip="'Tooltip text'"> you probably </CLink>
              haven't heard of them. Photo booth beard raw denim letterpress
              vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's
              fixie sustainable quinoa 8-bit american apparel
              <CLink v-c-tooltip="'Tooltip text'"> have a </CLink>
              terry richardson vinyl chambray. Beard stumptown, cardigans banh
              mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko
              mcsweeney''s cleanse vegan chambray. A really ironic artisan
              <CLink v-c-tooltip="'Tooltip text'"> whatever keytar </CLink>
              scenester farm-to-table banksy Austin
              <CLink v-c-tooltip="'Tooltip text'"> twitter handle </CLink>
              freegan cred raw denim single-origin coffee viral.
            </p>
          </DocsExample>
          <p class="text-body-secondary small">
            Hover over the links below to see tooltips:
          </p>
          <DocsExample href="components/tooltip.html">
            <CButton
              v-c-tooltip="{
                content:
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                placement: 'top',
              }"
              color="secondary"
              >Tooltip on top</CButton
            >
            <CButton
              v-c-tooltip="{
                content:
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                placement: 'right',
              }"
              color="secondary"
              >Tooltip on right</CButton
            >
            <CButton
              v-c-tooltip="{
                content:
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                placement: 'bottom',
              }"
              color="secondary"
              >Tooltip on bottom</CButton
            >
            <CButton
              v-c-tooltip="{
                content:
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                placement: 'left',
              }"
              color="secondary"
              >Tooltip on left</CButton
            >
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
