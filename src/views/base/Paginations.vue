<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/>
        <strong> Pagination </strong>
        <small>size</small>
        <div class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/components/pagination" 
            class="card-header-action" 
            rel="noreferrer noopener" 
            target="_blank"
          >
            <small class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody>
        <h6>Default</h6>
        <CPagination
          :active-page.sync="currentPage"
          :pages="10"
          responsive
        />
        <br>

        <h6>Small</h6>
        <CPagination
          size="sm"
          :active-page.sync="currentPage"
          :pages="10"/>
        <br>

        <div class="d-md-down-none">
          <h6>Large</h6>
          <CPagination
            size="lg"
            :active-page.sync="currentPage"
            :pages="10"
            responsive
          />
          <br>
        </div>

        <div>currentPage: {{currentPage}}</div>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/>
        <strong> Pagination </strong>
        <small>alignment</small>
      </CCardHeader>
      <CCardBody>
        <h6>Left alignment (default)</h6>
        <CPagination
          :active-page.sync="currentPage"
          :pages="10"
        />
        <br>

        <h6>Center alignment</h6>
        <CPagination
          align="center"
          :pages="10"
          :active-page.sync="currentPage"
        />
        <br>

        <h6>Right (end) alignment</h6>
        <CPagination
          align="end"
          :active-page.sync="currentPage"
          :pages="10"
        />
        <br>

        <div>currentPage: {{currentPage}}</div>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
export default {
  name: 'Paginations',
  data () {
    return {
      currentPage: 3
    }
  }
}
</script>
