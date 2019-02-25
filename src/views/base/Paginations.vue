<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Bootstrap Pagination</strong>
          <div class="card-header-actions">
            <a href="https://bootstrap-vue.js.org/docs/components/pagination" class="card-header-action" rel="noreferrer noopener" target="_blank">
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <div>
          <h6>Default</h6>
          <CPagination v-model="currentPage" :pages="10"/>
          <br>

          <h6>Small</h6>
          <CPagination size="sm" v-model="currentPage" :pages="10"/>
          <br>

          <div class="d-sm-down-none">
            <h6>Large</h6>
            <CPagination size="lg" v-model="currentPage" :pages="10"/>
            <br>
          </div>

          <div>currentPage: {{currentPage}}</div>
        </div>
      </CCard>
      <CCard>
        <CCardHeader slot="header">
          <i class="fa fa-align-justify"></i><strong> Pagination </strong>
          <small>alignment</small>
        </CCardHeader>
        <div>
          <h6>Left alignment (default)</h6>
          <CPagination v-model="currentPage" :pages="10"/>
          <br>

          <h6>Center alignment</h6>
          <CPagination align="center" :pages="10" v-model="currentPage"/>
          <br>

          <h6>Right (end) alignment</h6>
          <CPagination align="end" v-model="currentPage" :pages="10"/>
          <br>

          <div>currentPage: {{currentPage}}</div>
        </div>
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
  },
  // methods: {
  //   linkGen (pageNum) {
  //     return '#page/' + pageNum + '/foobar'
  //   },
  // }
}
</script>
