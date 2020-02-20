<template>
  <CRow>
    <CCol col="12" lg="6">
      <CCard>
        <CCardHeader>
          User id:  {{ $route.params.id }}
        </CCardHeader>
        <CCardBody>
          <CDataTable
            striped
            small
            fixed
            :items="visibleData"
            :fields="fields"
          />
        </CCardBody>
        <CCardFooter>
          <CButton color="primary" @click="goBack">Back</CButton>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import usersData from './UsersData'
export default {
  name: 'User',
  computed: {
    fields () {
      return [
        { 
          key: 'key', 
          label: this.userData.filter(param => param.key === 'username')[0].value,
          _style: 'width:150px'
        },
        { key: 'value', label: '', _style: 'width:150px;' }
      ]
    },
    userData () {
      const id = this.$route.params.id
      const user = usersData.find((user, index) => index + 1 == id)
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
      return userDetails.map(([key, value]) => { return { key, value } })
    },
    visibleData () {
      return this.userData.filter(param => param.key !== 'username')
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
