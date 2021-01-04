<template>
  <CRow>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <strong>Brand Button</strong>
          <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/button-components" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small class="text-muted">docs</small>
              </a>
            </div>
        </CCardHeader>
        <CCardBody>
          <small>Usage </small>
          <code>{{ $options.usage }}</code>
          <hr/>
          <h6>
            Size Small
            <small>Add <code>size="sm"</code></small>
          </h6>
          <p>
            <template v-for="(brandName, key) in $options.brands">
              <CButton
                :name="brandName"
                size="sm"
                :key="key"
                :color="brandName"
                class="btn-brand"
              >
                <CIcon size="sm" :name="'cib-' + brandName"/>
                <span>{{brandName}}</span>
              </CButton>
            </template>
          </p>
          <h6>Size Normal</h6>
          <p>
            <template v-for="(brandName, key) in $options.brands">
              <CButton
                :name="brandName"
                :key="key"
                :color="brandName"
                class="btn-brand"
              >
                <CIcon :name="'cib-' + brandName"/>
                <span>{{brandName}}</span>
              </CButton>
            </template>
          </p>
          <h6>Size Large <small>Add <code>size="lg"</code></small></h6>
          <p>
            <template v-for="(brandName, key) in $options.brands">
              <CButton
                :name="brandName"
                size="lg"
                :key="key"
                :color="brandName"
                class="btn-brand"
              >
                <CIcon size="lg" :name="'cib-' + brandName"/>
                <span>{{brandName}}</span>
              </CButton>
            </template>
          </p>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <strong>Brand Button </strong> <small>Icons only</small>
        </CCardHeader>
        <CCardBody>
          <small>Usage </small>
            <code>{{ $options.iconsOnlyUsage }}</code>
          <hr/>
          <h6>Size Small <small>Add <code>size="sm"</code></small></h6>
          <p>
            <template v-for="(brandName, key) in $options.brands">
              <CButton
                :name="brandName"
                size="sm"
                :key="key"
                :color="brandName"
              >
                <CIcon size="sm" :name="'cib-' + brandName"/>
              </CButton>
            </template>
          </p>
          <h6>Size Normal</h6>
          <p>
            <template v-for="(brandName, key) in $options.brands">
              <CButton
                :name="brandName"
                :key="key"
                :color="brandName"
              >
                <CIcon :name="'cib-' + brandName"/>
              </CButton>
            </template>
          </p>
          <h6>Size Large <small>Add <code>size="lg"</code></small></h6>
          <p>
            <template v-for="(brandName, key) in $options.brands">
              <CButton
                :name="brandName"
                size="lg"
                :key="key"
                :color="brandName"
              >
                <CIcon size="lg" :name="'cib-' + brandName"/>
              </CButton>
            </template>
          </p>
        </CCardBody>
      </CCard>
    </CCol>

    <CCol col="12">
      <CCard>
        <CCardHeader>
          <strong>Brand Button </strong> <small>Text only</small>
        </CCardHeader>
        <CCardBody>
          <small>Usage </small> 
          <code>
            {{ $options.textOnlyUsage }}
          </code>
          <hr/>
          <h6>Size Small <small>Add <code>size="sm"</code></small></h6>
          <p>
            <template v-for="(brandName, key) in $options.brands">
              <CButton
                size="sm"
                :key="key"
                :color="brandName"
              >
                <span>{{brandName}}</span>
              </CButton>
            </template>
          </p>
          <h6>Size Normal</h6>
          <p>
            <template v-for="(brandName, key) in $options.brands">
              <CButton
                :key="key"
                :color="brandName"
              >
                <span>{{brandName}}</span>
              </CButton>
            </template>
          </p>
          <h6>Size Large <small>Add <code>size="lg"</code></small></h6>
          <p>
            <template v-for="(brandName, key) in $options.brands">
              <CButton
                size="lg"
                :key="key"
                :color="brandName"
              >
                <span>{{brandName}}</span>
              </CButton>
            </template>
          </p>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'BrandButtons',
  usage: '<CButton color="facebook"><CIcon name="cib-facebook"/><span>Facebook</span></CButton>',
  iconsOnlyUsage: '<CButton color="facebook"><CIcon name="cib-facebook"/></CButton>',
  textOnlyUsage: '<CButton color="facebook"><span>Facebook</span></CButton>',
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
  // labels: {
  //   facebook: 'Facebook',
  //   twitter: 'Twitter',
  //   linkedin: 'LinkedIn',
  //   flickr: 'Flickr',
  //   tumblr: 'Tumblr',
  //   xing: 'Xing',
  //   github: 'Github',
  //   stackoverflow: 'StackOverflow',
  //   youtube: 'YouTube',
  //   dribbble: 'Dribbble',
  //   instagram: 'Instagram',
  //   pinterest: 'Pinterest',
  //   vk: 'VK',
  //   yahoo: 'Yahoo',
  //   behance: 'Behance',
  //   reddit: 'Reddit',
  //   vimeo: 'Vimeo'
  // }
}
</script>

<style scoped lang="scss">
.btn {
  margin-bottom: 4px;
  margin-right: 6px;
}
// todo
.btn-brand:not(:only-child) {
  .c-icon {
    margin-top: 0 !important;
    margin-right: 8px;
  }
  .c-icon-sm {
    margin-right: 5px;
  }
  .c-icon-lg {
    margin-right: 12px;
  }
}
</style>
