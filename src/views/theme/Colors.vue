<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader> <CIcon icon="cil-drop" /> Theme colors </CCardHeader>
        <CCardBody>
          <CRow>
            <ColorTheme color="bg-primary">
              <h6>Brand Primary Color</h6>
            </ColorTheme>
            <ColorTheme color="bg-secondary"
              ><h6>Brand Secondary Color</h6></ColorTheme
            >
            <ColorTheme color="bg-success"
              ><h6>Brand Success Color</h6></ColorTheme
            >
            <ColorTheme color="bg-danger"
              ><h6>Brand Danger Color</h6></ColorTheme
            >
            <ColorTheme color="bg-warning"
              ><h6>Brand Warning Color</h6></ColorTheme
            >
            <ColorTheme color="bg-info"><h6>Brand Info Color</h6></ColorTheme>
            <ColorTheme color="bg-light"><h6>Brand Light Color</h6></ColorTheme>
            <ColorTheme color="bg-dark"><h6>Brand Dark Color</h6></ColorTheme>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import ColorTheme from './ColorTheme'
export default {
  name: 'Colors',
  components: { ColorTheme },
}
</script>
