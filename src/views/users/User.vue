<template>
  <CRow>
    <CCol cols="12"
          lg="6"
    >
      <CCard no-header>
        <template slot="header">
          User id:  {{ $route.params.id }}
        </template>
        <CTable striped
                small
                fixed
                :items="items($route.params.id)"
                :fields="$options.fields"
        />
        <template slot="footer">
          <CButton @click="goBack">Back</CButton>
        </template>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import usersData from './UsersData'
export default {
  name: 'User',
  props: {
    caption: {
      type: String,
      default: 'User id'
    },
  },
  fields: [
    { key: 'key', _style:'width:150px'},
    { key: 'value' , _style:'width:150px;', _classes:'font-weight-bold'}
  ],
  methods: {
    items (id) {
      const user = usersData.find( user => user.id.toString() === id)
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
      return userDetails.map(([key, value]) => {return {key: key, value: value}})
    },
    goBack() {
      this.$router.go(-1)
      // this.$router.replace({path: '/users'})
    }
  }
}
</script>
