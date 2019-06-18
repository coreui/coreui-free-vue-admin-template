<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          User id:  {{ $route.params.id }}
        </CCardHeader>
        <CCardBody>
          <CTable
            striped
            small
            fixed
            :items="items($route.params.id)"
            :fields="$options.fields"
          />
        </CCardBody>
        <CCardFooter>
          <CButton @click="goBack">Back</CButton>
        </CCardFooter>
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
