<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Tooltips</strong>
        </CCardHeader>
        <CCardBody>
            <h4 class="mt-4">Tooltips example</h4>
            <Example href="directives/tooltip.html">
                <p class="text-medium-emphasis">
                    Tight pants next level keffiyeh
                    <CLink v-c-tooltip="'Tooltip text'"> you probably </CLink>
                        haven't heard of them.
                    Photo booth beard raw denim letterpress vegan messenger
                    bag stumptown. Farm-to-table seitan, mcsweeney's fixie
                    sustainable quinoa 8-bit american apparel
                    <CLink v-c-tooltip="'Tooltip text'"> have a </CLink>
                    terry richardson vinyl chambray. Beard stumptown,
                    cardigans banh mi lomo thundercats. Tofu biodiesel
                    williamsburg marfa, four loko mcsweeney''s cleanse
                    vegan chambray. A really ironic artisan
                    <CLink v-c-tooltip="'Tooltip text'"> whatever keytar </CLink>
                    scenester farm-to-table banksy Austin
                    <CLink v-c-tooltip="'Tooltip text'"> twitter handle </CLink>
                    freegan cred raw denim single-origin coffee viral.
                </p>
            </Example>
            <h4 class="mt-4">Tooltips placements</h4>
            <Example href="directives/tooltip.html">
                <CButton color="secondary" v-c-tooltip="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'top'}">Tooltip on top</CButton>
                <CButton color="secondary" v-c-tooltip="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'right'}">Tooltip on right</CButton>
                <CButton color="secondary" v-c-tooltip="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'bottom'}">Tooltip on bottom</CButton>
                <CButton color="secondary" v-c-tooltip="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'left'}">Tooltip on left</CButton>            
            </Example>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Tooltips",
};
</script>