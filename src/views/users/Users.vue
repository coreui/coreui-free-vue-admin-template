<template>
  <CRow>
    <CCol cols="12" xl="8">
      <transition name="slide">
        <CCard header="users">
          <CTable hover
                  striped
                  :items="items"
                  :fields="fields"
                  :current-page="currentPage"
                  :per-page="perPage"
                  @row-clicked="rowClicked"
                  :paginationProps="$options.paginationProps"
          >
            <td slot="id" slot-scope="data">
              <strong>{{data.item.id}}</strong>
            </td>
            <td slot="name" slot-scope="data">
              <strong>{{data.item.name}}</strong>
            </td>
            <td slot="status" slot-scope="data">
              <CBadge :variant="getBadge(data.item.status)">{{data.item.status}}</CBadge>
            </td>
          </CTable>
        </CCard>
      </transition>
    </CCol>
  </CRow>
</template>

<script>
import usersData from './UsersData'
export default {
  name: 'Users',
  data: () => {
    return {
      items: usersData.filter((user) => user.id < 42),
      fields: [
        {key: 'id'},
        {key: 'name'},
        {key: 'registered'},
        {key: 'role'},
        {key: 'status'}
      ],
      currentPage: 1,
      perPage: 5,
      totalRows: 0
    }
  },
  paginationProps: {
    // size: 'sm',
    align: 'center',
    hideDoubleArrows: true,
    previousButtonText: 'prev',
    nextButtonText: 'next'
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    userLink (id) {
      return `users/${id.toString()}`
    },
    rowClicked (item) {
      const userLink = this.userLink(item.id)
      this.$router.push({path: userLink})
    }

  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>
