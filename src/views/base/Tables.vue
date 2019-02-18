<template>
  <div class="animated fadeIn">
    <CRow>
      <CCol sm="12">
        <CCard header="test1 ">

          <!-- <CTable :items="items.slice(0)"
                  noSorting
                  striped
          /> -->

          <CTable :items="items.slice(0)"
                   :fields="fields"
                   :activePage="page"
                   @pages-change="val => pages = val"
                   :perPage="5"
                   ref="table"
                   indexCol="onlyFilter"
                   filterRow
                   smalls
                   noPagination
                   @row-clicked2="(item, index) => toggleDetails(index)"
                   loadings
                   hover
                   striped
                   optionsRow="onlyFilter2"
                   :defaultSorter="{ name:'username', direction:'desc'}"
                   defaultTableFilter="staff"
                   :defaultColumnFilter="{username:'zby'}"
          >
               <template slot="status-header" slot-scope="{item}">
                Status scoped slot
              </template>

              <!-- <tempalate slot="sorting-icon" slot-scope={state}>
                {{state}}
              </tempalate> -->
              <!-- <td slot="status-filter" slot-scope="{clear, colName}" @click="clear">
                <i class="cui-ban icons text-danger d-block mt-2 ml-1"></i>
              </td> -->
              <!-- <div slot="underTable">hehe</div>
              <caption slot="caption" style="caption-side: top;">
                This is a table caption at the top.
              </caption> -->
              <td slot="status" slot-scope="{item}">
                <CBadge :variant="getBadge(item.status)">{{item.status}}</CBadge>
              </td>
              <td slot="show_details" slot-scope="{item, index}">
                <button class="btn btn-primary" @click="toggleDetails(index)">
                  {{details.includes(index) ? 'Hide' : 'Show'}}
                </button>
              </td>
              <td slot="index-col"
                  slot-scope="{index}"
                  @click="toggleDetails(index)"
                  style="cursor:pointer"
                  class="text-center"
              >
                <i class="icons font-lg d-block cui-chevron-right"
                  style="transition: transform 0.4s"
                  :style="details.includes(index) ? 'transform:rotate(90deg)': ''"></i>
              </td>
              <CCollapse :show="details.includes(index)"
                         slot="details"
                         slot-scope="{item, index}">
                <CCardBody>
                  {{index + 1}} - {{item}}
                </CCardBody>
              </CCollapse>
          </CTable>
          <CPagination v-show="pages > 1"
                       v-model="page"
                       :pages="pages"
                       align="center"
                       size="lg"
          />
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol sm="12">
        <CCard header="test2">
          <CTable
            :items="items.slice(0)"
            :fields="fields"
            :perPage="5"
            indexCol="onlyCleaner"
            filterRow
            optionsRow="onlyFilter"
            :paginationProps="{align:'center', size:'lg'}"
          >
              <td slot="status" slot-scope="{item}">
                <CBadge :variant="getBadge(item.status)">{{item.status}}</CBadge>
              </td>
          </CTable>
        </CCard>
      </CCol>
    </CRow>


    <CRow>
      <CCol lg="6">
        <CTableWrapper
          :items="getItems()"
          caption="<i class='fa fa-align-justify'></i> Simple Table"
        />
      </CCol><!--/.col-->

      <CCol lg="6">
        <CTableWrapper
          :items="getItems()"
          striped
          caption="<i class='fa fa-align-justify'></i> Striped Table"
        />
      </CCol><!--/.col-->
    </CRow><!--/.row-->

    <CRow>
      <CCol lg="6">
        <CTableWrapper
          :items="getItems()"
          small
          caption="<i class='fa fa-align-justify'></i> Condensed Table"
        />
      </CCol><!--/.col-->

      <CCol lg="6">
        <CTableWrapper
          :items="getItems()"
          fixed
          bordered
          caption="<i class='fa fa-align-justify'></i> Bordered Table"
        />
      </CCol><!--/.col-->
    </CRow><!--/.row-->

    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="getItems()"
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
          :items="getItems()"
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

// const fields = ['username', 'registered', 'role']
const fields = [
  { key: 'username', label: 'UsErNaMe', _style:'width:40%'},
  { key: 'registered' , style:'width:20%', noSorting: true, noFilter: true},
  { key: 'role', _classes: 'table-danger2', _style:'width:20%; color:bluse'},
  { key: 'status' },
  // { key: 'show_details' , label:'',_style:'width:1%', noSorting: true, noFilter: true },
]
const items = [
  {number:11.1, username: '<b>Samppa Nori</b>', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {number:1.3, username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {number:1.3, username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {number:1.3, username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {number:1.3, username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {number:1.3, username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {number:1.3, username: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned', _classes: 'table-success'},
  {number:1.3, username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {number:1.3, username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {number:1.3, username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {number:1.3, username: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active', _classes: 'table-info'},
  {number:1.3, username: 'Nehemiah Tatius', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {number:1.3, username: 'Ebbe Gemariah', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {number:1.3, username: 'Eustorgios Amulius', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {number:1.3, username: 'Leopold Gáspár', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {number:1.3, username: 'Pompeius René', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {number:1.3, username: 'Paĉjo Jadon', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {number:1.3, username: 'Micheal Mercurius', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {number:2.3, username: 'Ganesha Dubhghall', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {number:1.3, username: 'Hiroto Šimun', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {number:1.3, username: 'Vishnu Serghei', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {number: 0.9, username: 'Zbyněk Phoibos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {number: 1.3, username: 'Einar Randall', registered: '2012/02/01', role: 'Admin', status: 'Inactive', _classes: 'table-danger'},
  {number: 1.2, username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},
  {number: 11.1, username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}
]

export default {
  name: 'tables',
  components: { CTableWrapper },
  data () {
    return {
      items: items,
      fields: fields,
      page: 1,
      page2: 1,
      itemsNumber: 0,
      pages: null,
      details: []
    }
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
            : status === 'Inactive' ? 'secondary'
            : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    },
    // test () {
    //   this.$refs.table.changeSort('username')
    //   this.$refs.table.filter = 't'
    //   // console.log(this.items)
    // },
    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },
    log(val) {
      console.log(val)
    },
    toggleDetails (index) {
      const position = this.details.indexOf(index)
      position !== -1 ? this.details.splice(position, 1) : this.details.push(index)
    },
    getItems () {
      return this.shuffleArray(this.items.slice(0))
    }
  }
  // computed: {
  //   pages () {
  //     return this.$refs.table.pages
  //   }
  // }
}
</script>
