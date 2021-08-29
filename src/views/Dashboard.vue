<template>
  <div>
    <WidgetsStatsA />
    <CRow>
      <CCol md="12">
        <CCard class="mb-4">
          <CCardBody>
            <CRow>
              <CCol sm="5">
                <h4 id="traffic" class="card-title mb-0">Traffic</h4>
                <div class="small text-medium-emphasis">January 2021</div>
              </CCol>
              <CCol sm="7" class="d-none d-md-block">
                <CButton color="primary" class="float-end">
                  <CIcon icon="cil-cloud-download" />
                </CButton>
                <CButtonGroup
                  class="float-end me-3"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <CButton color="secondary" variant="outline">Day</CButton>
                  <CButton color="secondary" variant="outline" active
                    >Month</CButton
                  >
                  <CButton color="secondary" variant="outline">Year</CButton>
                </CButtonGroup>
              </CCol>
            </CRow>
            <CRow>
              <MainChartExample
                style="height: 300px; max-height: 300px; margin-top: 40px"
              />
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CRow :xs="{ cols: 1 }" :md="{ cols: 5 }" class="text-center">
              <CCol class="mb-sm-2 mb-0">
                <div class="text-medium-emphasis">Visits</div>
                <strong>29.703 Users (40%)</strong>
                <CProgress
                  class="mt-2"
                  color="success"
                  thin
                  :precision="1"
                  :value="40"
                />
              </CCol>
              <CCol class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-medium-emphasis">Unique</div>
                <strong>24.093 Users (20%)</strong>
                <CProgress
                  class="mt-2"
                  color="info"
                  thin
                  :precision="1"
                  :value="20"
                />
              </CCol>
              <CCol class="mb-sm-2 mb-0">
                <div class="text-medium-emphasis">Pageviews</div>
                <strong>78.706 Views (60%)</strong>
                <CProgress
                  class="mt-2"
                  color="warning"
                  thin
                  :precision="1"
                  :value="60"
                />
              </CCol>
              <CCol class="mb-sm-2 mb-0">
                <div class="text-medium-emphasis">New Users</div>
                <strong>22.123 Users (80%)</strong>
                <CProgress
                  class="mt-2"
                  color="danger"
                  thin
                  :precision="1"
                  :value="80"
                />
              </CCol>
              <CCol class="mb-sm-2 mb-0 d-md-down-none">
                <div class="text-medium-emphasis">Bounce Rate</div>
                <strong>Average Rate (40.15%)</strong>
                <CProgress class="mt-2" :value="40" thin :precision="1" />
              </CCol>
            </CRow>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
    <WidgetsStatsD />
    <CRow>
      <CCol md="12">
        <CCard class="mb-4">
          <CCardHeader> Traffic &amp; Sales </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12" lg="6">
                <CRow>
                  <CCol sm="6">
                    <div
                      class="
                        border-start border-start-4 border-start-info
                        py-1
                        px-3
                        mb-3
                      "
                    >
                      <div class="text-medium-emphasis small">New Clients</div>
                      <div class="fs-5 fw-semibold">9,123</div>
                    </div>
                  </CCol>
                  <CCol sm="6">
                    <div
                      class="
                        border-start border-start-4 border-start-danger
                        py-1
                        px-3
                        mb-3
                      "
                    >
                      <div class="text-medium-emphasis small">
                        Recurring Clients
                      </div>
                      <div class="fs-5 fw-semibold">22,643</div>
                    </div>
                  </CCol>
                </CRow>
                <hr class="mt-0" />
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Monday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin color="info" :value="34" />
                    <CProgress thin color="danger" :value="78" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Tuesday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="56" color="info" />
                    <CProgress thin :value="94" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Wednesday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="12" color="info" />
                    <CProgress thin :value="67" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Thursday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="43" color="info" />
                    <CProgress thin :value="91" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Friday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="22" color="info" />
                    <CProgress thin :value="73" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Saturday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="53" color="info" />
                    <CProgress thin :value="82" color="danger" />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text"> Sunday </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="9" color="info" />
                    <CProgress thin :value="69" color="danger" />
                  </div>
                </div>
              </CCol>
              <CCol sm="12" lg="6">
                <CRow>
                  <CCol sm="6">
                    <div
                      class="
                        border-start border-start-4 border-start-warning
                        py-1
                        px-3
                        mb-3
                      "
                    >
                      <div class="text-medium-emphasis small">Pageviews</div>
                      <div class="fs-5 fw-semibold">78,623</div>
                    </div>
                  </CCol>
                  <CCol sm="6">
                    <div
                      class="
                        border-start border-start-4 border-start-success
                        py-1
                        px-3
                        mb-3
                      "
                    >
                      <div class="text-medium-emphasis small">Organic</div>
                      <div class="fs-5 fw-semibold">49,123</div>
                    </div>
                  </CCol>
                </CRow>
                <hr class="mt-0" />
                <div class="progress-group">
                  <div class="progress-group-header">
                    <CIcon icon="cil-user" class="me-2" size="lg" />
                    <span class="title">Male</span>
                    <span class="ms-auto font-weight-bold">43%</span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="43" color="warning" />
                  </div>
                </div>
                <div class="progress-group mb-5">
                  <div class="progress-group-header">
                    <CIcon icon="cil-user-female" class="me-2" size="lg" />
                    <span class="title">Female</span>
                    <span class="ms-auto font-weight-bold">37%</span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="37" color="warning" />
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <CIcon icon="cil-globe-alt" class="me-2" size="lg" />
                    <span class="title">Organic Search</span>
                    <span class="ms-auto font-weight-bold">
                      191,235
                      <span class="text-medium-emphasis small">(56%)</span>
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="56" color="success" />
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <CIcon
                      icon="cib-facebook"
                      height="17"
                      class="me-2"
                      size="lg"
                    />
                    <span class="title">Facebook</span>
                    <span class="ms-auto font-weight-bold">
                      51,223
                      <span class="text-medium-emphasis small">(15%)</span>
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="15" color="success" />
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <CIcon
                      icon="cib-twitter"
                      height="17"
                      class="me-2"
                      size="lg"
                    />
                    <span class="title">Twitter</span>
                    <span class="ms-auto font-weight-bold">
                      37,564
                      <span class="text-medium-emphasis small">(11%)</span>
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="11" color="success" />
                  </div>
                </div>
                <div class="progress-group">
                  <div class="progress-group-header">
                    <CIcon
                      icon="cib-linkedin"
                      height="17"
                      class="me-2"
                      size="lg"
                    />
                    <span class="title">LinkedIn</span>
                    <span class="ms-auto font-weight-bold">
                      27,319
                      <span class="text-medium-emphasis small">&nbsp;(8%)</span>
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress thin :value="8" color="success" />
                  </div>
                </div>
              </CCol>
            </CRow>
            <br />
            <CTable align="middle" class="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell class="text-center">
                    <CIcon name="cil-people" />
                  </CTableHeaderCell>
                  <CTableHeaderCell>User</CTableHeaderCell>
                  <CTableHeaderCell class="text-center"
                    >Country</CTableHeaderCell
                  >
                  <CTableHeaderCell>Usage</CTableHeaderCell>
                  <CTableHeaderCell class="text-center"
                    >Payment Method</CTableHeaderCell
                  >
                  <CTableHeaderCell>Activity</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="item in tableItems" :key="item.name">
                  <CTableDataCell class="text-center">
                    <CAvatar
                      size="md"
                      :src="item.avatar.src"
                      :status="item.avatar.status"
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{{ item.user.name }}</div>
                    <div class="small text-medium-emphasis">
                      <span>{{ item.user.new ? "New" : "Recurring" }}</span> |
                      {{ item.user.registered }}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CIcon
                      size="xl"
                      :name="item.country.flag"
                      :title="item.country.name"
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div class="clearfix">
                      <div class="float-start">
                        <strong>{{ item.usage.value }}%</strong>
                      </div>
                      <div class="float-end">
                        <small class="text-medium-emphasis">
                          {{ item.usage.period }}
                        </small>
                      </div>
                    </div>
                    <CProgress
                      thin
                      :color="item.usage.color"
                      :value="item.usage.value"
                    />
                  </CTableDataCell>
                  <CTableDataCell class="text-center">
                    <CIcon size="xl" :name="item.payment.icon" />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div class="small text-medium-emphasis">Last login</div>
                    <strong>{{ item.activity }}</strong>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow> </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import avatar1 from "./../assets/images/avatars/1.jpg";
import avatar2 from "./../assets/images/avatars/2.jpg";
import avatar3 from "./../assets/images/avatars/3.jpg";
import avatar4 from "./../assets/images/avatars/4.jpg";
import avatar5 from "./../assets/images/avatars/5.jpg";
import avatar6 from "./../assets/images/avatars/6.jpg";
import MainChartExample from "./charts/MainChartExample";
import WidgetsStatsA from './widgets/WidgetsStatsTypeA.vue'
import WidgetsStatsD from './widgets/WidgetsStatsTypeD.vue'
export default {
  name: "Dashboard",
  components: {
    MainChartExample,
    WidgetsStatsA,
    WidgetsStatsD,
  },
  data() {
    return {
      selected: "Month",
      tableItems: [
        {
          avatar: { src: avatar1, status: "success" },
          user: {
            name: "Yiorgos Avraamu",
            new: true,
            registered: "Jan 1, 2021",
          },
          country: { name: "USA", flag: "cif-us" },
          usage: {
            value: 50,
            period: "Jun 11, 2021 - Jul 10, 2021",
            color: "success",
          },
          payment: { name: "Mastercard", icon: "cib-cc-mastercard" },
          activity: "10 sec ago",
        },
        {
          avatar: { src: avatar2, status: "danger" },
          user: {
            name: "Avram Tarasios",
            new: false,
            registered: "Jan 1, 2021",
          },
          country: { name: "Brazil", flag: "cif-br" },
          usage: {
            value: 22,
            period: "Jun 11, 2021 - Jul 10, 2021",
            color: "info",
          },
          payment: { name: "Visa", icon: "cib-cc-visa" },
          activity: "5 minutes ago",
        },
        {
          avatar: { src: avatar3, status: "warning" },
          user: { name: "Quintin Ed", new: true, registered: "Jan 1, 2021" },
          country: { name: "India", flag: "cif-in" },
          usage: {
            value: 74,
            period: "Jun 11, 2021 - Jul 10, 2021",
            color: "warning",
          },
          payment: { name: "Stripe", icon: "cib-cc-stripe" },
          activity: "1 hour ago",
        },
        {
          avatar: { src: avatar4, status: "secondary" },
          user: { name: "Enéas Kwadwo", new: true, registered: "Jan 1, 2021" },
          country: { name: "France", flag: "cif-fr" },
          usage: {
            value: 98,
            period: "Jun 11, 2021 - Jul 10, 2021",
            color: "danger",
          },
          payment: { name: "PayPal", icon: "cib-cc-paypal" },
          activity: "Last month",
        },
        {
          avatar: { src: avatar5, status: "success" },
          user: {
            name: "Agapetus Tadeáš",
            new: true,
            registered: "Jan 1, 2021",
          },
          country: { name: "Spain", flag: "cif-es" },
          usage: {
            value: 22,
            period: "Jun 11, 2021 - Jul 10, 2021",
            color: "primary",
          },
          payment: { name: "Google Wallet", icon: "cib-cc-apple-pay" },
          activity: "Last week",
        },
        {
          avatar: { src: avatar6, status: "danger" },
          user: {
            name: "Friderik Dávid",
            new: true,
            registered: "Jan 1, 2021",
          },
          country: { name: "Poland", flag: "cif-pl" },
          usage: {
            value: 43,
            period: "Jun 11, 2021 - Jul 10, 2021",
            color: "success",
          },
          payment: { name: "Amex", icon: "cib-cc-amex" },
          activity: "Last week",
        },
      ],
      tableFields: [
        { key: "avatar", label: "", _classes: "text-center" },
        { key: "user" },
        { key: "country", _classes: "text-center" },
        { key: "usage" },
        { key: "payment", label: "Payment method", _classes: "text-center" },
        { key: "activity" },
      ],
    };
  },
  methods: {
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "success";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "danger";
      }
      return $color;
    },
  },
};
</script>
