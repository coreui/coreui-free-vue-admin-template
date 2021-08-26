<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Brand Buttons</strong>
        </CCardHeader>
        <CCardBody>

             TODO: check did I should remove brand-buttons

          <Example href="breadcrumbs">
            <template v-for="(brandName, key) in brands" :key="key">
              <CButton
                :name="brandName"
                :color="brandName"
                class="btn-brand"
              >
                <CIcon :name="'cib-' + brandName"/>
                <span>{{brandName}}</span>
              </CButton>
            </template>
            
            <template v-for="(brandName, key) in brands" :key="key">
              <CButton
                :name="brandName"
                size="sm"
                :color="brandName"
                class="btn-brand"
              >
                <CIcon size="sm" :name="'cib-' + brandName"/>
                <span>{{brandName}}</span>
              </CButton>
            </template>

            <template v-for="(brandName, key) in brands" :key="key">
              <CButton
                :name="brandName"
                size="lg"
                :color="brandName"
                class="btn-brand"
              >
                <CIcon size="lg" :name="'cib-' + brandName"/>
                <span>{{brandName}}</span>
              </CButton>
            </template>
          </Example>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "BrandButtons",
  data: function(){
      return {
        brands: [
            'facebook',
            'twitter',
            'linkedin',
            'flickr',
            'tumblr',
            'xing',
            'github',
            'stackoverflow',
            'youtube',
            'dribbble',
            'instagram',
            'pinterest',
            'vk',
            'yahoo',
            'behance',
            'reddit',
            'vimeo'
        ]
      }
  }
};
</script>