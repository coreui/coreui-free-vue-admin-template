<template>
  <div>
    <WidgetsDropdown/>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="5">
            <h4 id="traffic" class="c-card-title c-mb-0">Traffic</h4>
            <div class="c-small c-text-muted">November 2017</div>
          </CCol>
          <CCol sm="7" class="c-d-none c-d-md-block">
            <CButton variant="primary" class="c-float-right">
              <i class="cui-cloud-download"></i>
            </CButton>
            <CButtonGroup class="c-float-right c-mr-3">
              <CButton
                variant="outline-secondary"
                v-for="(value, key) in ['Day', 'Month', 'Year']"
                :key="key"
                class="c-mx-0"
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
        <CRow class="c-text-center">
          <CCol md sm="12" class="c-mb-sm-2 c-mb-0">
            <div class="c-text-muted">Visits</div>
            <strong>29.703 Users (40%)</strong>
            <CProgress
              class="c-progress-xs c-mt-2"
              :precision="1"
              variant="success"
              :value="40"
            />
          </CCol>
          <CCol md sm="12" class="c-mb-sm-2 c-mb-0 c-d-md-down-none">
            <div class="c-text-muted">Unique</div>
            <strong>24.093 Users (20%)</strong>
            <CProgress
              class="c-progress-xs c-mt-2"
              :precision="1"
              variant="info"
              :value="20"
            />
          </CCol>
          <CCol md sm="12" class="c-mb-sm-2 c-mb-0">
            <div class="c-text-muted">Pageviews</div>
            <strong>78.706 Views (60%)</strong>
            <CProgress
              class="c-progress-xs c-mt-2"
              :precision="1"
              variant="warning"
              :value="60"
            />
          </CCol>
          <CCol md sm="12" class="c-mb-sm-2 c-mb-0">
            <div class="c-text-muted">New Users</div>
            <strong>22.123 Users (80%)</strong>
            <CProgress
              class="c-progress-xs c-mt-2"
              :precision="1"
              variant="danger"
              :value="80"
            />
          </CCol>
          <CCol md sm="12" class="c-mb-sm-2 c-mb-0 c-d-md-down-none">
            <div class="c-text-muted">Bounce Rate</div>
            <strong>Average Rate (40.15%)</strong>
            <CProgress
              class="c-progress-xs c-mt-2"
              :precision="1"
              :value="40"
            />
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
    <WidgetsBrand/>
    <CRow>
      <CCol md="12">
        <CCard header-html="Traffic &amp; Sales" body-wrapper>
          <CRow>
            <CCol sm="12" lg="6">
              <CRow>
                <CCol sm="6">
                  <CCallout variant="info">
                    <small class="c-text-muted">New Clients</small><br>
                    <strong class="c-h4">9,123</strong>
                  </CCallout>
                </CCol>
                <CCol sm="6">
                  <CCallout variant="danger">
                    <small class="c-text-muted">Recurring Clients</small><br>
                    <strong class="c-h4">22,643</strong>
                  </CCallout>
                </CCol>
              </CRow>
              <hr class="c-mt-0">
              <div class="c-progress-group c-mb-4">
                <div class="c-progress-group-prepend">
                  <span class="c-progress-group-text">
                    Monday
                  </span>
                </div>
                <div class="c-progress-group-bars">
                  <CProgress
                    class="c-progress-xs"
                    variant="info"
                    :value="34"
                  />
                  <CProgress
                    class="c-progress-xs"
                    variant="danger"
                    :value="78"
                  />
                </div>
              </div>
              <div class="c-progress-group c-mb-4">
                <div class="c-progress-group-prepend">
                  <span class="c-progress-group-text">
                    Tuesday
                  </span>
                </div>
                <div class="c-progress-group-bars">
                  <CProgress
                    class="c-progress-xs"
                    :value="56"
                    variant="info"
                  />
                  <CProgress
                    class="c-progress-xs"
                    :value="94"
                    variant="danger"
                  />
                </div>
              </div>
              <div class="c-progress-group c-mb-4">
                <div class="c-progress-group-prepend">
                  <span class="c-progress-group-text">
                    Wednesday
                  </span>
                </div>
                <div class="c-progress-group-bars">
                  <CProgress
                    class="c-progress-xs"
                    :value="12"
                    variant="info"
                  />
                  <CProgress
                    class="c-progress-xs"
                    :value="67"
                    variant="danger"
                  />
                </div>
              </div>
              <div class="c-progress-group c-mb-4">
                <div class="c-progress-group-prepend">
                  <span class="c-progress-group-text">
                    Thursday
                  </span>
                </div>
                <div class="c-progress-group-bars">
                  <CProgress
                    class="c-progress-xs"
                    :value="43"
                    variant="info"
                  />
                  <CProgress
                    class="c-progress-xs"
                    :value="91"
                    variant="danger"
                  />
                </div>
              </div>
              <div class="c-progress-group mb-4">
                <div class="c-progress-group-prepend">
                  <span class="c-progress-group-text">
                    Friday
                  </span>
                </div>
                <div class="c-progress-group-bars">
                  <CProgress
                    class="c-progress-xs"
                    :value="22"
                    variant="info"
                  />
                  <CProgress
                    class="c-progress-xs"
                    :value="73"
                    variant="danger"
                  />
                </div>
              </div>
              <div class="c-progress-group c-mb-4">
                <div class="c-progress-group-prepend">
                  <span class="c-progress-group-text">
                    Saturday
                  </span>
                </div>
                <div class="c-progress-group-bars">
                  <CProgress
                    class="c-progress-xs"
                    :value="53"
                    variant="info"
                  />
                  <CProgress
                    class="c-progress-xs"
                    :value="82"
                    variant="danger"
                  />
                </div>
              </div>
              <div class="c-progress-group c-mb-4">
                <div class="c-progress-group-prepend">
                  <span class="c-progress-group-text">
                    Sunday
                  </span>
                </div>
                <div class="c-progress-group-bars">
                  <CProgress
                    class="c-progress-xs"
                    :value="9"
                    variant="info"
                  />
                  <CProgress
                    class="c-progress-xs"
                    :value="69"
                    variant="danger"
                  />
                </div>
              </div>
              <div class="c-legend c-text-center">
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
                    <small class="c-text-muted">Pageviews</small><br>
                    <strong class="c-h4">78,623</strong>
                  </CCallout>
                </CCol>
                <CCol sm="6">
                  <CCallout variant="success">
                    <small class="c-text-muted">Organic</small><br>
                    <strong class="c-h4">49,123</strong>
                  </CCallout>
                </CCol>
              </CRow>
              <hr class="c-mt-0">
              <ul class="c-horizontal-bars c-type-2">
                <div class="c-progress-group">
                  <div class="c-progress-group-header">
                    <i class="cui-user c-progress-group-icon"></i>
                    <span class="c-title">Male</span>
                    <span class="c-ml-auto c-font-weight-bold">43%</span>
                  </div>
                  <div class="c-progress-group-bars">
                    <CProgress
                      class="c-progress-xs"
                      :value="43"
                      variant="warning"
                    />
                  </div>
                </div>
                <div class="c-progress-group c-mb-5">
                  <div class="c-progress-group-header">
                    <i class="cui-user-female c-progress-group-icon"></i>
                    <span class="c-title">Female</span>
                    <span class="c-ml-auto c-font-weight-bold">37%</span>
                  </div>
                  <div class="c-progress-group-bars">
                    <CProgress
                      class="c-progress-xs"
                      :value="37"
                      variant="warning"
                    />
                  </div>
                </div>
                <div class="c-progress-group">
                  <div class="c-progress-group-header">
                    <i class="cui-globe c-progress-group-icon"></i>
                    <span class="c-title">Organic Search</span>
                    <span class="c-ml-auto c-font-weight-bold">
                      191,235<span class="text-muted small">(56%)</span>
                    </span>
                  </div>
                  <div class="c-progress-group-bars">
                    <CProgress
                      class="c-progress-xs"
                      :value="56"
                      variant="success"
                    />
                  </div>
                </div>
                <div class="c-progress-group">
                  <div class="c-progress-group-header">
                    <CIcon
                      name="socialFacebook"
                      height="17"
                      class="c-progress-group-icon"
                    />
                    <span class="c-title">Facebook</span>
                    <span class="c-ml-auto c-font-weight-bold">
                      51,223 <span class="c-text-muted small">(15%)</span>
                    </span>
                  </div>
                  <div class="c-progress-group-bars">
                    <CProgress
                      class="c-progress-xs"
                      :value="15"
                      variant="success"
                    />
                  </div>
                </div>
                <div class="c-progress-group">
                  <div class="c-progress-group-header">
                    <CIcon
                      name="socialTwitter"
                      height="17"
                      class="c-progress-group-icon"
                    />
                    <span class="c-title">Twitter</span>
                    <span class="c-ml-auto c-font-weight-bold">
                      37,564 <span class="c-text-muted c-small">(11%)</span>
                    </span>
                  </div>
                  <div class="c-progress-group-bars">
                    <CProgress
                      class="c-progress-xs"
                      :value="11"
                      variant="success"
                    />
                  </div>
                </div>
                <div class="c-progress-group">
                  <div class="c-progress-group-header">
                    <CIcon
                      name="socialLinkedin"
                      height="17"
                      class="c-progress-group-icon"
                    />
                    <span class="c-title">LinkedIn</span>
                    <span class="c-ml-auto c-font-weight-bold">
                      27,319 <span class="c-text-muted small">&nbsp;(8%)</span>
                    </span>
                  </div>
                  <div class="c-progress-group-bars">
                    <CProgress
                      class="c-progress-xs"
                      :value="8"
                      variant="success"
                    />
                  </div>
                </div>
                <div class="c-divider c-text-center">
                  <CButton variant="link" size="sm" class="c-text-muted">
                    <i class="cui-options"></i>
                  </CButton>
                </div>
              </ul>
            </CCol>
          </CRow>
          <br/>
          <CTable
            class="c-mb-0 c-table-outline"
            hover
            :items="tableItems"
            :fields="tableFields"
            head-variant="light"
            no-sorting
          >
            <td slot="avatar" class="c-text-center" slot-scope="{item}">
              <div class="c-avatar">
                <img :src="item.avatar.url" class="c-img-avatar" alt="">
                <span
                  class="c-avatar-status"
                  :class="`c-bg-${item.avatar.status || 'secondary'}`"
                ></span>
              </div>
            </td>
            <td slot="user" slot-scope="{item}">
              <div>{{item.user.name}}</div>
              <div class="c-small c-text-muted">
                <span>
                  <template v-if="item.user.new">New</template>
                  <template v-else>Recurring</template>
                </span> | Registered: {{item.user.registered}}
              </div>
            </td>
            <td
              slot="country"
              slot-scope="{item}"
              class="c-text-center"
            >
              <CIcon
                :name="item.country.flag"
                height="25"
              />
            </td>
            <td slot="usage" slot-scope="{item}">
              <div class="c-clearfix">
                <div class="c-float-left">
                  <strong>{{item.usage.value}}%</strong>
                </div>
                <div class="c-float-right">
                  <small class="c-text-muted">{{item.usage.period}}</small>
                </div>
              </div>
              <CProgress
                class="c-progress-xs"
                v-model="item.usage.value"
                :variant="variant(item.usage.value)"
              />
            </td>
            <td
              slot="payment"
              slot-scope="{item}"
              class="c-text-center"
            >
              <CIcon
                :name="item.payment.icon"
                height="25"
              />
            </td>
            <td slot="activity" slot-scope="{item}">
              <div class="c-small c-text-muted">Last login</div>
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
import WidgetsBrand from './widgets/WidgetsBrand'

export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand
  },
  data () {
    return {
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'US' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'BR' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'IN' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'FR' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'ES' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'google-wallet' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'PL' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: [
        { key: 'avatar', label: '', _classes: 'c-text-center' },
        { key: 'user' },
        { key: 'country', _classes: 'c-text-center' },
        { key: 'usage' },
        { key: 'payment', label: 'Payment method', _classes: 'c-text-center' },
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
