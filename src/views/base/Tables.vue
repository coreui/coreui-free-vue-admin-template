<template>
  <div>
    <CRow>
      <CCol lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          caption="<i class='fa fa-align-justify'></i> Simple Table"
        />
      </CCol>

      <CCol lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          striped
          caption="<i class='fa fa-align-justify'></i> Striped Table"
        />
      </CCol>
    </CRow>

    <CRow>
      <CCol lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          small
          caption="<i class='fa fa-align-justify'></i> Condensed Table"
        />
      </CCol>

      <CCol lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          fixed
          bordered
          caption="<i class='fa fa-align-justify'></i> Bordered Table"
        />
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          bordered
          small
          fixed
          caption="<i class='fa fa-align-justify'></i> Combined All Table"
        />
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          bordered
          small
          fixed
          dark
          caption="<i class='fa fa-align-justify'></i> Combined All Table"
        />
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CTableWrapper from './Table.vue'
import usersData from '../users/UsersData'

export default {
  name: 'Tables',
  components: { CTableWrapper },
  methods: {
    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },

    getShuffledUsersData () {
      return this.shuffleArray(usersData.slice(0))
    }
  }
}
</script>
