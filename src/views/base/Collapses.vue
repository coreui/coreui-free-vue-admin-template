<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Collapses</strong>
        </CCardHeader>
        <CCardBody>
          <h4>Toggle</h4>
          <Example href="components/collapse.html#example">
            <CButton color="primary" href="#" @click="visible = !visible">Link</CButton>
            <CButton color="primary" @click="visible = !visible">Button</CButton>
            <CCollapse :visible="visible">
                <CCard class="mt-3">
                <CCardBody>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                    ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                </CCardBody>
                </CCard>
            </CCollapse>
          </Example>

        <h4 class="mt-4">Toggle multiple targets</h4>
        <Example href="components/collapse.html#multiple-targets">
            <CButton color="primary" @click="visibleA = !visibleA">Toggle first element</CButton>
            <CButton color="primary" @click="visibleB = !visibleB">Toggle second element</CButton>
            <CButton color="primary" @click="() => {
                visibleA = !visibleA
                visibleB = !visibleB
            }"
            >
                Toggle both elements
            </CButton>
            <CRow>
                <CCol xs="6">
                <CCollapse :visible="visibleA">
                    <CCard class="mt-3">
                    <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                        cred nesciunt sapiente ea proident.
                    </CCardBody>
                    </CCard>
                </CCollapse>
                </CCol>
                <CCol xs="6">
                <CCollapse :visible="visibleB">
                    <CCard class="mt-3">
                    <CCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                        cred nesciunt sapiente ea proident.
                    </CCardBody>
                    </CCard>
                </CCollapse>
                </CCol>
            </CRow>
        </Example>


        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Breadcrumbs",
    data() {
      return { 
        visible: false,
        visibleA: false,
        visibleB: false,
      }
    }
};
</script>