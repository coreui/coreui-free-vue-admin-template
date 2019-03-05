<template>
  <div class="animated fadeIn">
    <CRow>
      <CCol sm="12">
        <CCard header="CTable power presentation" bodyWrapper>
          <CTable :items="items.slice(0)"
                  :fields="fields"
                  :perPage="6"
                  indexColumn
                  filterRow
                  optionsRow
                  loadings
                  hover
                  :defaultSorter="{ name:'username', direction:'desc'}"
                  :defaultColumnFilter="{ role:'staff' }"
          >
              <template #index-col="{index}">
                <td
                  @click="toggleDetails(index)"
                  style="cursor:pointer"
                  class="text-center"
                >
                  <i
                    class="icons font-lg d-block cui-chevron-right"
                    style="transition: transform 0.4s"
                    :style="details.includes(index) ? 'transform:rotate(90deg)': ''"
                  ></i>
                </td>
              </template>
              <template #status="{item}">
                <td>
                  <CBadge :variant="getBadge(item.status)">
                    {{item.status}}
                  </CBadge>
                </td>
              </template>
              <template #show_details="{item, index}">
                <td class="py-2">
                  <CButton
                    variant="outline-primary"
                    square
                    size="sm"
                    @click="toggleDetails(index)"
                    :text="details.includes(index) ? 'Hide' : 'Show'"
                  />
                </td>
              </template>
              <template #details="{item, index}">
                <CCollapse :show="details.includes(index)">
                  <CCardBody>
                    {{index + 1}} - {{item}}
                  </CCardBody>
                </CCollapse>
              </template>
          </CTable>
        </CCard>
      </CCol>
    </CRow>
    <!-- <CRow>
      <CCol sm="12">
        <CCard header="test2">
          <CTable
            :items="items.slice(0)"
            :fields="fields"
            :perPage="5"
            indexCol="onlyCleaner"
            filterRow
            optionsRow="onlyFiltesr"
            :paginationProps="{align:'center'}"
          >
              <td slot="status" slot-scope="{item}">
                <CBadge :variant="getBadge(item.status)">{{item.status}}</CBadge>
              </td>
          </CTable>
        </CCard>
      </CCol>
    </CRow> -->


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

const fields = [
  { key: 'username', _style:'width:40%' },
  { key: 'registered' , style:'width:20%' },
  { key: 'role', _style:'width:20%;' },
  { key: 'status', _style:'width:20%;' },
  { key: 'show_details' , label:'', _style:'width:1%', noSorting: true, noFilter: true },
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
    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },
    toggleDetails (index) {
      const position = this.details.indexOf(index)
      position !== -1 ? this.details.splice(position, 1) : this.details.push(index)
    },
    getItems () {
      return this.shuffleArray(this.items.slice(0))
    }
  }
}
</script>
