<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Popovers</strong> <small>Basic example</small>
        </CCardHeader>
        <CCardBody>
          <Example href="directives/popover.html#example">
            <CButton
              color="danger"
              size="lg"
              v-c-popover="{
                header: 'Popover title',
                content:
                  'And here\’s some amazing content. It’s very engaging. Right?',
                placement: 'right',
              }"
            >
              Click to toggle popover
            </CButton>
          </Example>
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
          <Example href="directives/popover.html#four-directions">
            <CButton
              color="secondary"
              v-c-popover="{
                content:
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                placement: 'top',
              }"
              >Popover on top</CButton
            >
            <CButton
              color="secondary"
              v-c-popover="{
                content:
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                placement: 'right',
              }"
              >Popover on right</CButton
            >
            <CButton
              color="secondary"
              v-c-popover="{
                content:
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                placement: 'bottom',
              }"
              >Popover on bottom</CButton
            >
            <CButton
              color="secondary"
              v-c-popover="{
                content:
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
                placement: 'left',
              }"
              >Popover on left</CButton
            >
          </Example>
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
