<template>
  <CRow>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong> Bootstrap Collapse </strong>
          <div class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/collapse" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <CButton @click="collapse = !collapse" color="primary" class="mb-2">
            Toggle Collapse
          </CButton>
          <CCollapse :show="collapse" :duration="400">
            <CCard body-wrapper>
              <CCardText>Collapse contents Here</CCardText>
              <CButton  
                @click="innerCollapse = !innerCollapse" 
                size="sm" 
                color="secondary"
              >
                Toggle Inner Collapse
              </CButton>
              <CCollapse :show="innerCollapse" class="mt-2">
                <CCard body-wrapper>Hello!</CCard>
              </CCollapse>
            </CCard>
          </CCollapse>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" md="6">
      <CCard>
        <CButton
          @click="cardCollapse = !cardCollapse"
          tag="button"
          color="link" 
          block
          class="text-left shadow-none card-header"
        > 
          <h5 class="m-0">Collapsible card</h5>
        </CButton>
        <CCollapse :show="cardCollapse">
          <CCardBody class="m-1">
            {{text}}
          </CCardBody>
        </CCollapse>
      </CCard>
    </CCol>
    <CCol xl="6">
      <CCard>
        <CCardHeader>
          Collapse
          <small> accordion</small>
        </CCardHeader>
        <CCardBody>
          <div>
            <CCard class="mb-0">
              <CButton 
                block 
                color="link" 
                class="text-left shadow-none card-header" 
                @click="accordion = accordion === 0 ? false : 0" 
              >
                <h5 class="m-0">Collapsible Group Item #1</h5>
              </CButton>
              <CCollapse :show="accordion === 0">
                <CCardBody>
                  1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                  cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                </CCardBody>
              </CCollapse>
            </CCard>
            <CCard class="mb-0">
              <CButton 
                block 
                color="link" 
                class="text-left shadow-none card-header" 
                @click="accordion = accordion === 1 ? false : 1" 
              >
                <h5 class="m-0">Collapsible Group Item #2</h5>
              </CButton>
              <CCollapse :show="accordion === 1">
                <CCardBody>
                  2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                  cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                </CCardBody>
              </CCollapse>
            </CCard>
            <CCard class="mb-0">
              <CButton 
                block 
                color="link" 
                class="text-left shadow-none card-header" 
                @click="accordion = accordion === 2 ? false : 2" 
              >
                <h5 class="m-0">Collapsible Group Item #3</h5>
              </CButton>
              <CCollapse :show="accordion === 2">
                <CCardBody>
                  3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                  cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                </CCardBody>
              </CCollapse>
            </CCard>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Collapses',
  data () {
    return {
      collapse: false,
      cardCollapse: true,
      innerCollapse: false,
      accordion: 0,
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
