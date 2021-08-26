<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Popovers</strong>
        </CCardHeader>
        <CCardBody>
            <h4 class="mt-4">Vue popover example</h4>
            <Example href="directives/popover.html#example">
                <CButton 
                    color="danger" 
                    size="lg" 
                    v-c-popover="{header: 'Popover title', content: 'And here\’s some amazing content. It’s very engaging. Right?', placement: 'right'}"
                >
                    Click to toggle popover
                </CButton>
            </Example>
            <h4 class="mt-4">Vue popovers four directions</h4>
            <Example href="directives/popover.html#four-directions">
                <CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'top'}">Popover on top</CButton>
                <CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'right'}">Popover on right</CButton>
                <CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'bottom'}">Popover on bottom</CButton>
                <CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'left'}">Popover on left</CButton>
            </Example>           
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Popovers",
};
</script>