<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Switches</strong>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="forms/checks-radios.html#switches">
            <CRow>
                <CCol md="4">
                    <CFormSwitch label="Default switch checkbox input" />
                    <CFormSwitch label="Checked switch checkbox input" defaultChecked />
                    <CFormSwitch label="Disabled switch checkbox input" disabled />
                    <CFormSwitch label="Disabled checked switch checkbox input" defaultChecked disabled />
                </CCol>
                <CCol md="4">
                    <CFormSwitch label="Large switch"  size="lg"/>
                    <CFormSwitch label="Large switch" defaultChecked  size="lg"/>
                    <CFormSwitch label="Large switch" disabled  size="lg"/>
                    <CFormSwitch label="Large switch" defaultChecked disabled  size="lg"/>
                </CCol>
                <CCol md="4">
                    <CFormSwitch label="Extra-large switch"  size="xl"/>
                    <CFormSwitch label="Extra-large switch" defaultChecked  size="xl"/>
                    <CFormSwitch label="Extra-large switch" disabled  size="xl"/>
                    <CFormSwitch label="Extra-large switch" defaultChecked disabled  size="xl"/>
                </CCol>
            </CRow>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Switches",
};
</script>
