<template>
  <CCard :header="caption">
    <CTable
      :hover="hover"
      :striped="striped"
      :bordered="bordered"
      :small="small"
      :fixed="fixed"
      :items="items"
      :fields="fields"
      :per-page="small ? 10 : 5"
      :dark="dark"
      noSorting
    >
      <template v-slot:status="{item}">
        <td>
          <CBadge :variant="getBadge(item.status)">{{item.status}}</CBadge>
        </td>
      </template>
    </CTable>
  </CCard>
</template>

<script>
import items from '../users/UsersData'
export default {
  name: 'TableWrapper',
  props: {
    items: Array,
    fields: {
      type: Array,
      default () {
        return ['username', 'registered', 'role', 'status']
      }
    },
    caption: {
      type: String,
      default: 'Table'
    },
    hover: Boolean,
    striped: Boolean,
    bordered: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
  }
}
</script>
