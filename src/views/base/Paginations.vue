<template>
  <div class="c-wrapper">
    <div>
      <CCard>
        <CCardHeader>
          <i class="fa fa-align-justify"></i>
          <strong> Responsive bootstrap Pagination</strong>
          <div class="c-card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/3.0/components/Pagination" 
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

          <div>
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
          <i class="fa fa-align-justify"></i>
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
  </div>
</template>

<script>
export default {
  name: 'paginations',
  data () {
    return {
      currentPage: 3,
    }
  }
}
</script>
