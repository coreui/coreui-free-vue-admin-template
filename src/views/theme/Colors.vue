<template>
  <div>
    <CCard >
      <CCardHeader>
        <i class="cui-drop"></i> Theme colors
      </CCardHeader>
      <CCardBody>
        <CRow>
          <ColorTheme color="c-bg-primary">
            <h6>Brand Primary Color</h6>
          </ColorTheme>
          <ColorTheme color="c-bg-secondary"><h6>Brand Secondary Color</h6></ColorTheme>
          <ColorTheme color="c-bg-success"><h6>Brand Success Color</h6></ColorTheme>
          <ColorTheme color="c-bg-danger"><h6>Brand Danger Color</h6></ColorTheme>
          <ColorTheme color="c-bg-warning"><h6>Brand Warning Color</h6></ColorTheme>
          <ColorTheme color="c-bg-info"><h6>Brand Info Color</h6></ColorTheme>
          <ColorTheme color="c-bg-light"><h6>Brand Light Color</h6></ColorTheme>
          <ColorTheme color="c-bg-dark"><h6>Brand Dark Color</h6></ColorTheme>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <i class="cui-drop"></i> Grays
      </CCardHeader>
      <CCardBody>
        <CRow>
          <ColorTheme color="c-bg-gray-100"><h6>Brand 100 Color</h6></ColorTheme>
          <ColorTheme color="c-bg-gray-200"><h6>Brand 200 Color</h6></ColorTheme>
          <ColorTheme color="c-bg-gray-300"><h6>Brand 300 Color</h6></ColorTheme>
          <ColorTheme color="c-bg-gray-400"><h6>Brand 400 Color</h6></ColorTheme>
          <ColorTheme color="c-bg-gray-500"><h6>Brand 500 Color</h6></ColorTheme>
          <ColorTheme color="c-bg-gray-600"><h6>Brand 600 Color</h6></ColorTheme>
          <ColorTheme color="c-bg-gray-700"><h6>Brand 700 Color</h6></ColorTheme>
          <ColorTheme color="c-bg-gray-800"><h6>Brand 800 Color</h6></ColorTheme>
          <ColorTheme color="c-bg-gray-900"><h6>Brand 900 Color</h6></ColorTheme>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard >
      <CCardHeader>
        <i class="cui-drop"></i> Additional colors
      </CCardHeader>
      <CCardBody>
        <CRow>
          <ColorTheme color="c-bg-blue"><h6>Brand Blue Color</h6></ColorTheme>
          <ColorTheme color="c-bg-indigo"><h6>Brand Indigo Color</h6></ColorTheme>
          <ColorTheme color="c-bg-purple"><h6>Brand Purple Color</h6></ColorTheme>
          <ColorTheme color="c-bg-pink"><h6>Brand Pink Color</h6></ColorTheme>
          <ColorTheme color="c-bg-red"><h6>Brand Red Color</h6></ColorTheme>
          <ColorTheme color="c-bg-orange"><h6>Brand Orange Color</h6></ColorTheme>
          <ColorTheme color="c-bg-yellow"><h6>Brand Yellow Color</h6></ColorTheme>
          <ColorTheme color="c-bg-green"><h6>Brand Green Color</h6></ColorTheme>
          <ColorTheme color="c-bg-teal"><h6>Brand Teal Color</h6></ColorTheme>
          <ColorTheme color="c-bg-cyan"><h6>Brand Cyan Color</h6></ColorTheme>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import ColorTheme from './ColorTheme'
export default {
  name: 'colors',
  components: { ColorTheme }
}
</script>
