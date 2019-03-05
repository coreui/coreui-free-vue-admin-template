<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CRow>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Bootstrap Collapse </strong>
              <div class="card-header-actions">
                <CLink class="card-header-action">
                  <small class="text-muted">docs</small>
                </CLink>
              </div>
            </CCardHeader>
            <CCardBody>
              <CButton id="collapse1" variant="primary">
                Toggle Collapse
              </CButton>
              <CCollapse toggler="collapse1" class="mt-2">
                <CCard bodyWrapper>
                  <p class="card-text">Collapse contents Here</p>
                  <CButton id="collapse2" size="sm">
                    Toggle Inner Collapse
                  </CButton>
                  <CCollapse toggler="collapse2" class="mt-2">
                    <CCard>Hello!</CCard>
                  </CCollapse>
                </CCard>
              </CCollapse>
            </CCardBody>
          </CCard>
        </CCol>
        <!-- <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Collapse </strong> <small>with <code>v-b-toggle</code> directive</small>
            </CCardHeader>
            <div>
              <CButton v-b-toggle.collapse2 class="m-1">Toggle Collapse</CButton>

              <CButton v-b-toggle="'collapse2'" class="m-1">Toggle Collapse</CButton>

              <CCollapse id="collapse2">
                <CCard>
                  I am collapsible content!
                </CCard>
              </CCollapse>
            </div>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Collapse </strong> <small>with <code>visibility</code></small>
            </CCardHeader>
            <div>
              <CButton v-b-toggle.collapse3 class="m-1">Toggle Collapse</CButton>
              <CCollapse visible id="collapse3">
                <CCard>
                  I should start open!
                </CCard>
              </CCollapse>
            </div>
          </CCard>
        </CCol>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Collapse </strong> <small>with <code>v-model</code></small>
            </CCardHeader>
            <div>
              <CButton @click="showCollapse = !showCollapse"
                     :class="showCollapse ? 'collapsed' : null"
                     aria-controls="collapse4"
                     :aria-expanded="showCollapse ? 'true' : 'false'">
                Toggle Collapse
              </CButton>
              <CCollapse class="mt-2" v-model="showCollapse" id="collapse4">
                <CCard>
                  I should start open!
                </CCard>
              </CCollapse>
            </div>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Collapse </strong> <small>multiple elements</small>
            </CCardHeader>
            <div>
              <CButton v-b-toggle.collapseA.collapseB>Toggle Both Collapse A and B</CButton>

              <CCollapse id="collapseA" class="mt-2">
                <CCard>
                  I am collapsable content A!
                </CCard>
              </CCollapse>
              <CCollapse id="collapseB" class="mt-2">
                <CCard>
                  I am collapsable content B!
                </CCard>
              </CCollapse>
            </div>
          </CCard>
        </CCol>
        <CCol cols="12" md="6">
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i><strong> Collapse </strong> <small><code>accordion</code> support</small>
            </CCardHeader>
            <div role="tablist">
              <CCard  class="mb-1">
                <CCardHeader  class="p-1" role="tab">
                  <CButton block href="#" v-b-toggle.accordion1 variant="info">Accordion 1</CButton>
                </CCardHeader>
                <CCollapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                  <CCardBody>
                    <p class="card-text">
                      I start opened because <code>visible</code> is <code>true</code>
                    </p>
                    <p class="card-text">
                      {{ text }}
                    </p>
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard  class="mb-1">
                <CCardHeader  class="p-1" role="tab">
                  <CButton block href="#" v-b-toggle.accordion2 variant="info">Accordion 2</CButton>
                </CCardHeader>
                <CCollapse id="accordion2" accordion="my-accordion" role="tabpanel">
                  <CCardBody>
                    <p class="card-text">
                      {{ text }}
                    </p>
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard  class="mb-1">
                <CCardHeader  class="p-1" role="tab">
                  <CButton block href="#" v-b-toggle.accordion3 variant="info">Accordion 3</CButton>
                </CCardHeader>
                <CCollapse id="accordion3" accordion="my-accordion" role="tabpanel">
                  <CCardBody>
                    <p class="card-text">
                      {{ text }}
                    </p>
                  </CCardBody>
                </CCollapse>
              </CCard>
            </div>
          </CCard>
        </CCol> -->
      </CRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collapses',
  data () {
    return {
      showCollapse: true,
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `
    }
  }
}
</script>
