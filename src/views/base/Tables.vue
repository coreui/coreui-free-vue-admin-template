<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <b-card header="test1 ">
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
                   loading
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
              <!-- <td slot="show_details" slot-scope="{item, index}">
                <button class="btn btn-primary" @click="toggleDetails(index)">
                  {{details.includes(index) ? 'Hide' : 'Show'}}
                </button>
              </td> -->
              <!-- <td slot="index-col"
                  slot-scope="{index}"
                  @click="toggleDetails(index)"
                  style="cursor:pointer"
              >
                <i class="icons font-lg d-block cui-chevron-right"
                  style="transition: transform 0.4s"
                  :style="details.includes(index) ? 'transform:rotate(90deg)': ''"></i>
              </td> -->
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
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <b-card header="test2">
          <CTable :items="items.slice(0)"
                   :fields="fields"
                   :perPage="5"
                   indexCol="onlyIndexes2"
                   filterRow
                   optionsRow="onlyFilter2"
                   :paginationProps="{align:'center', size:'lg'}"
                   noPagination
          >
              <td slot="status" slot-scope="{item}">
                <CBadge :variant="getBadge(item.status)">{{item.status}}</CBadge>
              </td>
          </CTable>
        </b-card>
      </b-col>
    </b-row>


    <b-row @click="test">
      <b-col lg="6">
        <old-table caption="<i class='fa fa-align-justify' items='{username: 'Samppa Nori', registered: '2012/01/01', role: 'Member', status: 'Active'}' ></i> Simple Table"></old-table>
      </b-col><!--/.col-->

      <b-col lg="6">
        <old-table striped caption="<i class='fa fa-align-justify'></i> Striped Table"></old-table>
      </b-col><!--/.col-->
    </b-row><!--/.row-->

    <b-row>
      <b-col lg="6">
        <old-table small caption="<i class='fa fa-align-justify'></i> Condensed Table"></old-table>
      </b-col><!--/.col-->

      <b-col lg="6">
        <old-table fixed bordered caption="<i class='fa fa-align-justify'></i> Bordered Table"></old-table>
      </b-col><!--/.col-->
    </b-row><!--/.row-->

    <b-row>
      <b-col sm="12">
        <old-table hover striped bordered small fixed caption="<i class='fa fa-align-justify'></i> Combined All Table"></old-table>
      </b-col>
    </b-row>


  </div>

</template>

<script>
import oldTable from './Table.vue'

// const fields = ['username', 'registered', 'role']
const fields = [
  { key: 'username', label: 'UsErNaMe', _style:'width:40%'},
  { key: 'registered' , style:'width:20%', noSorting: true, noFilter: true},
  { key: 'role', _classes: 'table-danger2', _style:'width:20%; color:bluse'},
  { key: 'status' },
  // { key: 'show_details' , label:'',_style:'width:1%', noSorting: true, noFilter: true },
]
const items = [
  {number:11.1, username: '<b>Samppa Nori</b>', registered: '2012/01/01', _classes: 'table-success2',_cellClasses: {role: 'table-success'}, role: 'Member', status: 'Active'},
  {number:1.3, username: 'Estavan Lykos', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {number:1.3, username: 'Chetan Mohamed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {number:1.3, username: 'Derick Maximinus', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {number:1.3, username: 'Friderik Dávid', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {number:1.3, username: 'Yiorgos Avraamu', registered: '2012/01/01', role: 'Member', status: 'Active'},
  {number:1.3, username: 'Avram Tarasios', registered: '2012/02/01', role: 'Staff', status: 'Banned'},
  {number:1.3, username: 'Quintin Ed', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {number:1.3, username: 'Enéas Kwadwo', registered: '2012/03/01', role: 'Member', status: 'Pending'},
  {number:1.3, username: 'Agapetus Tadeáš', registered: '2012/01/21', role: 'Staff', status: 'Active'},
  {number:1.3, username: 'Carwyn Fachtna', registered: '2012/01/01', role: 'Member', status: 'Active'},
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
  {number: 1.3, username: 'Einar Randall', registered: '2012/02/01', role: 'Admin', status: 'Inactive'},
  {number: 1.2, username: 'Félix Troels', registered: '2012/03/21', role: 'Staff', status: 'Active'},
  {number: 11.1, username: 'Aulus Agmundr', registered: '2012/01/01', role: 'Member', status: 'Pending'}
]

export default {
  name: 'tables',
  components: { oldTable },
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
    test () {
      this.$refs.table.changeSort('username')
      this.$refs.table.filter = 't'
      // console.log(this.items)
    },
    test3 (item, index) {
      alert(index + ' - ' + item.username)
      // console.log()
    },
    log(val) {
      console.log(val)
    },
    toggleDetails (index) {
      // console.log('hehe')
      const position = this.details.indexOf(index)
      position !== -1 ? this.details.splice(position, 1) : this.details.push(index)
    }
  }
  // computed: {
  //   pages () {
  //     return this.$refs.table.pages
  //   }
  // }
}
</script>
