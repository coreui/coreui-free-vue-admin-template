<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Popovers</strong> <small>Basic example</small>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="components/popover.html#example">
            <CButton
              v-c-popover="{
                header: 'Popover title',
                content:
                  'And here\’s some amazing content. It’s very engaging. Right?',
                placement: 'right',
              }"
              color="danger"
              size="lg"
            >
              Click to toggle popover
            </CButton>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Popover</strong> <small>Four directions</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Four options are available: top, right, bottom, and left aligned.
            Directions are mirrored when using CoreUI for Vue in RTL.
          </p>
          <DocsExample href="components/popover.html#four-directions">
            <CButton
              v-c-popover="{
                content:
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                placement: 'top',
              }"
              color="secondary"
              >Popover on top</CButton
            >
            <CButton
              v-c-popover="{
                content:
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                placement: 'right',
              }"
              color="secondary"
              >Popover on right</CButton
            >
            <CButton
              v-c-popover="{
                content:
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                placement: 'bottom',
              }"
              color="secondary"
              >Popover on bottom</CButton
            >
            <CButton
              v-c-popover="{
                content:
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                placement: 'left',
              }"
              color="secondary"
              >Popover on left</CButton
            >
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Popovers',
}
</script>
