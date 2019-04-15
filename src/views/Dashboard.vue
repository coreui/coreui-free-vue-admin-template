<template>
  <div class="animated fadeIn">
    <WidgetsDropdown/>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="5">
            <h4 id="traffic" class="card-title mb-0">Traffic</h4>
            <div class="small text-muted">November 2017</div>
          </CCol>
          <CCol sm="7" class="d-none d-md-block">
            <CButton variant="primary" class="float-right"><i class="icon-cloud-download"></i></CButton>
            <CButtonGroup class="float-right mr-3">
              <CButton variant="outline-secondary"
                       v-for="(value, key) in ['Day', 'Month', 'Year']"
                       :key="key"
                       class="mx-0"
                       :pressed="value === selected ? true : false"
                       @click="selected = value"
              >
                {{value}}
              </CButton>
            </CButtonGroup>
          </CCol>
        </CRow>
        <MainChartExample style="height:300px;margin-top:40px;"/>
      </CCardBody>
      <CCardFooter>
        <CRow class="text-center">
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">Visits</div>
            <strong>29.703 Users (40%)</strong>
            <CProgress  class="progress-xs mt-2" :precision="1" variant="success" :value="40"></CProgress>
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Unique</div>
            <strong>24.093 Users (20%)</strong>
            <CProgress  class="progress-xs mt-2" :precision="1" variant="info" :value="20"></CProgress>
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">Pageviews</div>
            <strong>78.706 Views (60%)</strong>
            <CProgress  class="progress-xs mt-2" :precision="1" variant="warning" :value="60"></CProgress>
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">New Users</div>
            <strong>22.123 Users (80%)</strong>
            <CProgress class="progress-xs mt-2" :precision="1" variant="danger" :value="80"></CProgress>
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Bounce Rate</div>
            <strong>Average Rate (40.15%)</strong>
            <CProgress class="progress-xs mt-2" :precision="1" :value="40"></CProgress>
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
    <WidgetsSocial/>
    <CRow>
      <CCol md="12">
        <CCard headerHtml="Traffic &amp; Sales" bodyWrapper>
          <CRow>
            <CCol sm="12" lg="6">
              <CRow>
                <CCol sm="6">
                  <CCallout variant="info">
                    <small class="text-muted">New Clients</small><br>
                    <strong class="h4">9,123</strong>
                  </CCallout>
                  <!-- <CCallout variant="info" class="d-inline">
                    <div  class="d-inline">
                      <small class="text-muted">New Clients</small><br>
                      <strong class="h4">9,123</strong>
                    </div>
                    <div class="d-inline">
                      <CChartLineSimple
                        :data="[35, 23, 56, 22, 97, 23, 64]"
                        borderColor="info"
                        style="width:80px !important"
                        :options="{ maintainAspectRatio: true, aspectRatio: 3 }"
                      />
                    </div>
                  </CCallout> -->
                </CCol>
                <CCol sm="6">
                  <CCallout variant="danger">
                    <small class="text-muted">Recurring Clients</small><br>
                    <strong class="h4">22,643</strong>
                    <!-- <div :style="{ top: '-10px'}">
                      <CalloutChartExample :data="[65, 59, 84, 84, 51, 55, 40]" variant="danger" width="80" height="30" />
                    </div> -->
                  </CCallout>
                </CCol>
              </CRow>
              <hr class="mt-0">
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Monday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress class="progress-xs" variant="info" :value="34"  />
                  <CProgress class="progress-xs" variant="danger" :value="78"  />
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Tuesday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress  class="progress-xs" :value="56" variant="info"></CProgress>
                  <CProgress  class="progress-xs" :value="94" variant="danger"></CProgress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Wednesday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress  class="progress-xs" :value="12" variant="info"></CProgress>
                  <CProgress  class="progress-xs" :value="67" variant="danger"></CProgress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Thursday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress  class="progress-xs" :value="43" variant="info"></CProgress>
                  <CProgress  class="progress-xs" :value="91" variant="danger"></CProgress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Friday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress  class="progress-xs" :value="22" variant="info"></CProgress>
                  <CProgress  class="progress-xs" :value="73" variant="danger"></CProgress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Saturday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress  class="progress-xs" :value="53" variant="info"></CProgress>
                  <CProgress  class="progress-xs" :value="82" variant="danger"></CProgress>
                </div>
              </div>
              <div class="progress-group mb-4">
                <div class="progress-group-prepend">
                  <span class="progress-group-text">
                    Sunday
                  </span>
                </div>
                <div class="progress-group-bars">
                  <CProgress  class="progress-xs" :value="9" variant="info"></CProgress>
                  <CProgress  class="progress-xs" :value="69" variant="danger"></CProgress>
                </div>
              </div>
              <div class="legend text-center">
                <small>
                  <sup><CBadge pill variant="info">&nbsp;</CBadge></sup>
                  New clients
                  &nbsp;&nbsp;
                  <sup><CBadge pill variant="danger">&nbsp;</CBadge></sup>
                  Recurring clients
                </small>
              </div>
            </CCol>
            <CCol sm="12" lg="6">
              <CRow>
                <CCol sm="6">
                  <CCallout variant="warning">
                    <small class="text-muted">Pageviews</small><br>
                    <strong class="h4">78,623</strong>
                    <!-- <div :style="{ top: '-10px'}">
                      <CalloutChartExample :data="[35, 23, 56, 22, 97, 23, 64]" variant="#f8cb00" width="80" height="30"/>
                    </div> -->
                  </CCallout>
                </CCol>
                <CCol sm="6">
                  <CCallout variant="success">
                    <small class="text-muted">Organic</small><br>
                    <strong class="h4">49,123</strong>
                    <!-- <div :style="{ top: '-10px'}">
                      <CalloutChartExample :data="[65, 59, 84, 84, 51, 55, 40]" variant="#4dbd74" width="80" height="30" />
                    </div> -->
                  </CCallout>
                </CCol>
              </CRow>
              <hr class="mt-0">
              <ul class="horizontal-bars type-2">
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-user progress-group-icon"></i>
                    <span class="title">Male</span>
                    <span class="ml-auto font-weight-bold">43%</span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress  class="progress-xs" :value="43" variant="warning"></CProgress>
                  </div>
                </div>
                <div class="progress-group mb-5">
                  <div class="progress-group-header">
                    <i class="icon-user-female progress-group-icon"></i>
                    <span class="title">Female</span>
                    <span class="ml-auto font-weight-bold">37%</span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress  class="progress-xs" :value="37" variant="warning"></CProgress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-globe progress-group-icon"></i>
                    <span class="title">Organic Search</span>
                    <span class="ml-auto font-weight-bold">191,235 <span class="text-muted small">(56%)</span></span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress  class="progress-xs" :value="56" variant="success"></CProgress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-social-facebook progress-group-icon"></i>
                    <span class="title">Facebook</span>
                    <span class="ml-auto font-weight-bold">51,223 <span class="text-muted small">(15%)</span></span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress  class="progress-xs" :value="15" variant="success"></CProgress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-social-twitter progress-group-icon"></i>
                    <span class="title">Twitter</span>
                    <span class="ml-auto font-weight-bold">37,564 <span class="text-muted small">(11%)</span></span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress  class="progress-xs" :value="11" variant="success"></CProgress>
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <i class="icon-social-linkedin progress-group-icon"></i>
                    <span class="title">LinkedIn</span>
                    <span class="ml-auto font-weight-bold">27,319 <span class="text-muted small">&nbsp;(8%)</span></span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress  class="progress-xs" :value="8" variant="success"></CProgress>
                  </div>
                </div>
                <div class="divider text-center">
                  <CButton variant="link" size="sm" class="text-muted"><i class="icon-options"></i></CButton>
                </div>
              </ul>
            </CCol>
          </CRow>
          <br/>
          <CTable class="mb-0 table-outline"
                   hover
                   :items="tableItems"
                   :fields="tableFields"
                   head-variant="light"
                   noSorting
          >
            <!-- <div slot="activity-header">
              A tu nic
            </div> -->
            <td slot="avatar" class="text-center" slot-scope="{item}">
              <div class="avatar">
                <img :src="item.avatar.url" class="img-avatar" alt="">
                <span class="avatar-status"
                      :class="item.avatar.status ?
                      `bg-${item.avatar.status}` :
                      'bg-secondary'"
                ></span>
              </div>
            </td>
            <td slot="user" slot-scope="{item}">
              <div>{{item.user.name}}</div>
              <div class="small text-muted">
                <span>
                  <template v-if="item.user.new">New</template>
                  <template v-else>Recurring</template>
                </span> | Registered: {{item.user.registered}}
              </div>
            </td>
            <td slot="country"
                slot-scope="{item}"
                class="text-center"
            >
              <i class="h4 mb-0"
                 :class="flag(item.country.flag)"
                 :title="item.country.flag"
                 :id="item.country.flag"
              ></i>
            </td>
            <!-- <i class="flag-icon flag-icon-pw h1" title="pw" id="pw"></i> -->
            <td slot="usage" slot-scope="{item}">
              <div class="clearfix">
                <div class="float-left">
                  <strong>{{item.usage.value}}%</strong>
                </div>
                <div class="float-right">
                  <small class="text-muted">{{item.usage.period}}</small>
                </div>
              </div>
              <CProgress  class="progress-xs" v-model="item.usage.value"

              :variant="variant(item.usage.value)"></CProgress>
            </td>
            <td slot="payment"
                slot-scope="{item}"
                class="text-center"
            >
              <i :class="item.payment.icon"
                 style="font-size:24px"
               ></i>
            </td>
            <td slot="activity" slot-scope="{item}">
              <div class="small text-muted">Last login</div>
              <strong>{{item.activity}}</strong>
            </td>
          </CTable>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDropdown from './widgets/WidgetsDropdown'
import WidgetsSocial from './widgets/WidgetsSocial'
import CalloutChartExample from './charts/CalloutChartExample'
import CChartLineSimple from './charts/CChartLineSimple'


export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    CalloutChartExample,
    WidgetsDropdown,
    WidgetsSocial,
    CChartLineSimple
  },
  data: function () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'fa fa-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: [
        { key: 'avatar', label: '<i class="icon-people"></i>',},
        { key: 'user' },
        { key: 'country' },
        { key: 'usage' },
        { key: 'payment', label: 'Payment method' },
        { key: 'activity' },
      ]
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    },
    flag (value) {
      return 'flag-icon flag-icon-' + value
    }
  }
}
</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>
