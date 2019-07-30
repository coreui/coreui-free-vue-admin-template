<template>
  <div>
    <CRow>
      <CCol col="12">
        <CCard>
          <CCardHeader>
            <strong>Brand Button</strong>
            <div class="c-card-header-actions">
                <a 
                  href="https://coreui.io/vue/docs/3.0/components/ButtonComponents" 
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
            <code>
              &lt;CButton variant="facebook"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/CButton&gt;
            </code>
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
                  :variant="brandName"
                >
                  <CIcon :name="brandName"/>
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
                  :variant="brandName"
                >
                  <CIcon :name="brandName"/>
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
                  :variant="brandName"
                >
                  <CIcon :name="brandName"/>
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
              <code>
                {{ `<CButton variant="facebook"><CIcon name="facebook"/></CButton>` }}
              </code>
            <hr/>
            <h6>Size Small <small>Add <code>size="sm"</code></small></h6>
            <p>
              <template v-for="(brandName, key) in $options.brands">
                <CButton
                  :name="brandName"
                  size="sm"
                  :key="key"
                  :variant="brandName"
                >
                  <CIcon :name="brandName"/>
                </CButton>
              </template>
            </p>
            <h6>Size Normal</h6>
            <p>
              <template v-for="(brandName, key) in $options.brands">
                <CButton
                  :name="brandName"
                  :key="key"
                  :variant="brandName"
                >
                  <CIcon :name="brandName"/>
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
                  :variant="brandName"
                >
                  <CIcon :name="brandName"/>
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
            <small>Usage </small> <code>&lt;CButton variant="facebook"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/CButton&gt;</code>
            <hr/>
            <h6>Size Small <small>Add <code>size="sm"</code></small></h6>
            <p>
              <template v-for="(brandName, key) in $options.brands">
                <CButton
                  :name="brandName"
                  size="sm"
                  :key="key"
                  :variant="brandName"
                >
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
                  :variant="brandName"
                >
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
                  :variant="brandName"
                >
                  <span>{{brandName}}</span>
                </CButton>
              </template>
            </p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'brand-buttons',
  brands: [
    'facebook',
    'twitter',
    'linkedin',
    'flickr',
    'tumblr',
    'xing',
    'github',
    'stack-overflow',
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
  //   'stack-overflow': 'StackOverflow',
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

<style scoped lang="css">
.c-btn {
  margin-bottom: 4px;
  margin-right: 6px;
}
.c-btn svg + span {
  margin-left: 8px;
}
</style>
