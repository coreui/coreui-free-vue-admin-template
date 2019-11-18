<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-drop"/> Theme colors
      </CCardHeader>
      <CCardBody>
        <CRow>
          <ColorTheme color="bg-primary">
            <h6>Brand Primary Color</h6>
          </ColorTheme>
          <ColorTheme color="bg-secondary"><h6>Brand Secondary Color</h6></ColorTheme>
          <ColorTheme color="bg-success"><h6>Brand Success Color</h6></ColorTheme>
          <ColorTheme color="bg-danger"><h6>Brand Danger Color</h6></ColorTheme>
          <ColorTheme color="bg-warning"><h6>Brand Warning Color</h6></ColorTheme>
          <ColorTheme color="bg-info"><h6>Brand Info Color</h6></ColorTheme>
          <ColorTheme color="bg-light"><h6>Brand Light Color</h6></ColorTheme>
          <ColorTheme color="bg-dark"><h6>Brand Dark Color</h6></ColorTheme>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-drop"/> Grays
      </CCardHeader>
      <CCardBody>
        <CRow>
          <ColorTheme color="bg-gray-100"><h6>Brand 100 Color</h6></ColorTheme>
          <ColorTheme color="bg-gray-200"><h6>Brand 200 Color</h6></ColorTheme>
          <ColorTheme color="bg-gray-300"><h6>Brand 300 Color</h6></ColorTheme>
          <ColorTheme color="bg-gray-400"><h6>Brand 400 Color</h6></ColorTheme>
          <ColorTheme color="bg-gray-500"><h6>Brand 500 Color</h6></ColorTheme>
          <ColorTheme color="bg-gray-600"><h6>Brand 600 Color</h6></ColorTheme>
          <ColorTheme color="bg-gray-700"><h6>Brand 700 Color</h6></ColorTheme>
          <ColorTheme color="bg-gray-800"><h6>Brand 800 Color</h6></ColorTheme>
          <ColorTheme color="bg-gray-900"><h6>Brand 900 Color</h6></ColorTheme>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import ColorTheme from './ColorTheme'
export default {
  name: 'Colors',
  components: { ColorTheme }
}
</script>
