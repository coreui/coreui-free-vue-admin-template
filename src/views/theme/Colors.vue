<template>
  <div class="animated fadeIn">
    <b-card header-tag="header">
      <div slot="header">
        <i class="icon-drop"></i> Theme colors
      </div>
      <b-card-body>
        <b-row>
          <color-theme color="bg-primary">
            <h6>Brand Primary Color</h6>
          </color-theme>
          <color-theme color="bg-secondary"><h6>Brand Secondary Color</h6></color-theme>
          <color-theme color="bg-success"><h6>Brand Success Color</h6></color-theme>
          <color-theme color="bg-danger"><h6>Brand Danger Color</h6></color-theme>
          <color-theme color="bg-warning"><h6>Brand Warning Color</h6></color-theme>
          <color-theme color="bg-info"><h6>Brand Info Color</h6></color-theme>
          <color-theme color="bg-light"><h6>Brand Light Color</h6></color-theme>
          <color-theme color="bg-dark"><h6>Brand Dark Color</h6></color-theme>
        </b-row>
      </b-card-body>
    </b-card>
    <b-card header-tag="header">
      <div slot="header">
        <i class="icon-drop"></i> Grays
      </div>
      <b-card-body>
        <b-row>
          <color-theme color="bg-gray-100"><h6>Brand 100 Color</h6></color-theme>
          <color-theme color="bg-gray-200"><h6>Brand 200 Color</h6></color-theme>
          <color-theme color="bg-gray-300"><h6>Brand 300 Color</h6></color-theme>
          <color-theme color="bg-gray-400"><h6>Brand 400 Color</h6></color-theme>
          <color-theme color="bg-gray-500"><h6>Brand 500 Color</h6></color-theme>
          <color-theme color="bg-gray-600"><h6>Brand 600 Color</h6></color-theme>
          <color-theme color="bg-gray-700"><h6>Brand 700 Color</h6></color-theme>
          <color-theme color="bg-gray-800"><h6>Brand 800 Color</h6></color-theme>
          <color-theme color="bg-gray-900"><h6>Brand 900 Color</h6></color-theme>
        </b-row>
      </b-card-body>
    </b-card>
    <b-card header-tag="header">
      <div slot="header">
        <i class="icon-drop"></i> Additional colors
      </div>
      <b-card-body>
        <b-row>
          <color-theme color="bg-blue"><h6>Brand Blue Color</h6></color-theme>
          <color-theme color="bg-indigo"><h6>Brand Indigo Color</h6></color-theme>
          <color-theme color="bg-purple"><h6>Brand Purple Color</h6></color-theme>
          <color-theme color="bg-pink"><h6>Brand Pink Color</h6></color-theme>
          <color-theme color="bg-red"><h6>Brand Red Color</h6></color-theme>
          <color-theme color="bg-orange"><h6>Brand Orange Color</h6></color-theme>
          <color-theme color="bg-yellow"><h6>Brand Yellow Color</h6></color-theme>
          <color-theme color="bg-green"><h6>Brand Green Color</h6></color-theme>
          <color-theme color="bg-teal"><h6>Brand Teal Color</h6></color-theme>
          <color-theme color="bg-cyan"><h6>Brand Cyan Color</h6></color-theme>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import ColorTheme from './ColorTheme'

export default {
  name: 'colors',
  components: { ColorTheme }
}
</script>
