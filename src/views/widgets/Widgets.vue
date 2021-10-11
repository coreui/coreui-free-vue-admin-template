<template>
  <CRow>
    <CCol>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Widgets</strong>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="">
            <WidgetsStatsA />
          </DocsExample>
          <DocsExample href="">
            <CRow>
              <CCol :xs="3">
                <CWidgetStatsB
                  class="mb-3"
                  :progress="{ color: 'success', value: 75 }"
                >
                  <template #text>Widget helper text</template>
                  <template #title>Widget title</template>
                  <template #value>89.9%</template>
                </CWidgetStatsB>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsB
                  class="mb-3"
                  :progress="{ color: 'info', value: 75 }"
                  text="Widget helper text"
                  title="Widget title"
                  value="12.124"
                />
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsB
                  class="mb-3"
                  :progress="{ color: 'warning', value: 75 }"
                  text="Widget helper text"
                  title="Widget title"
                  value="$98.111,00"
                />
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsB
                  class="mb-3"
                  :progress="{ color: 'primary', value: 75 }"
                  text="Widget helper text"
                  title="Widget title"
                  value="2TB"
                />
              </CCol>
            </CRow>
          </DocsExample>
          <DocsExample href="">
            <CRow>
              <CCol :xs="3">
                <CWidgetStatsB
                  class="mb-3"
                  color="success"
                  inverse
                  :progress="{ value: 75 }"
                >
                  <template #text>Widget helper text</template>
                  <template #title>Widget title</template>
                  <template #value>89.9%</template>
                </CWidgetStatsB>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsB
                  class="mb-3"
                  color="info"
                  inverse
                  :progress="{ value: 75 }"
                  text="Widget helper text"
                  title="Widget title"
                  value="12.124"
                />
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsB
                  class="mb-3"
                  color="warning"
                  inverse
                  :progress="{ value: 75 }"
                  text="Widget helper text"
                  title="Widget title"
                  value="$98.111,00"
                />
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsB
                  class="mb-3"
                  color="primary"
                  inverse
                  :progress="{ value: 75 }"
                  text="Widget helper text"
                  title="Widget title"
                  value="2TB"
                />
              </CCol>
            </CRow>
          </DocsExample>

          <DocsExample href="">
            <CRow>
              <CCol :xs="2">
                <CWidgetStatsE title="title" value="1,123">
                  <CChart
                    class="mx-auto"
                    type="bar"
                    style="height: 40px; width: 80px"
                    :data="{
                      labels: widgetStatsE.labels,
                      datasets: [
                        {
                          backgroundColor: getStyle('--cui-danger'),
                          borderColor: 'transparent',
                          borderWidth: 1,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }"
                    :options="widgetStatsE.optionsBar"
                  />
                </CWidgetStatsE>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsE title="title" value="1,123">
                  <CChart
                    class="mx-auto"
                    type="bar"
                    style="height: 40px; width: 80px"
                    :data="{
                      labels: widgetStatsE.labels,
                      datasets: [
                        {
                          backgroundColor: getStyle('--cui-primary'),
                          borderColor: 'transparent',
                          borderWidth: 1,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }"
                    :options="widgetStatsE.optionsBar"
                  />
                </CWidgetStatsE>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsE title="title" value="1,123">
                  <CChart
                    class="mx-auto"
                    type="bar"
                    style="height: 40px; width: 80px"
                    :data="{
                      labels: widgetStatsE.labels,
                      datasets: [
                        {
                          backgroundColor: getStyle('--cui-warning'),
                          borderColor: 'transparent',
                          borderWidth: 1,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }"
                    :options="widgetStatsE.optionsBar"
                  />
                </CWidgetStatsE>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsE title="title" value="1,123">
                  <CChart
                    class="mx-auto"
                    type="line"
                    style="height: 40px; width: 80px"
                    :data="{
                      labels: widgetStatsE.labels,
                      datasets: [
                        {
                          backgroundColor: 'transparent',
                          borderColor: getStyle('--cui-success'),
                          borderWidth: 2,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }"
                    :options="widgetStatsE.optionsLine"
                  />
                </CWidgetStatsE>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsE title="title" value="1,123">
                  <CChart
                    class="mx-auto"
                    type="line"
                    style="height: 40px; width: 80px"
                    :data="{
                      labels: widgetStatsE.labels,
                      datasets: [
                        {
                          backgroundColor: 'transparent',
                          borderColor: getStyle('--cui-warning'),
                          borderWidth: 2,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }"
                    :options="widgetStatsE.optionsLine"
                  />
                </CWidgetStatsE>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsE title="title" value="1,123">
                  <CChart
                    class="mx-auto"
                    type="line"
                    style="height: 40px; width: 80px"
                    :data="{
                      labels: widgetStatsE.labels,
                      datasets: [
                        {
                          backgroundColor: 'transparent',
                          borderColor: getStyle('--cui-info'),
                          borderWidth: 2,
                          data: [
                            41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67,
                            45, 47,
                          ],
                        },
                      ],
                    }"
                    :options="widgetStatsE.optionsLine"
                  />
                </CWidgetStatsE>
              </CCol>
            </CRow>
          </DocsExample>
          <DocsExample href="">
            <CRow>
              <CCol :xs="3">
                <CWidgetStatsF color="primary" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-settings" size="xl" />
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF color="info" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-user" size="xl" />
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF color="warning" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-moon" size="xl" />
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF color="danger" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-bell" size="xl" />
                  </template>
                </CWidgetStatsF>
              </CCol>
            </CRow>
          </DocsExample>
          <DocsExample href="">
            <CRow>
              <CCol :xs="3">
                <CWidgetStatsF color="primary" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-settings" size="xl" />
                  </template>
                  <template #footer>
                    <CLink
                      class="fw-semibold font-xs text-medium-emphasis"
                      href="https://coreui.io/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      View more
                      <CIcon
                        icon="cil-arrow-right"
                        class="ms-auto"
                        width="16"
                      />
                    </CLink>
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF color="info" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-user" size="xl" />
                  </template>
                  <template #footer>
                    <CLink
                      class="fw-semibold font-xs text-medium-emphasis"
                      href="https://coreui.io/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      View more
                      <CIcon
                        icon="cil-arrow-right"
                        class="ms-auto"
                        width="16"
                      />
                    </CLink>
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF color="warning" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-moon" size="xl" />
                  </template>
                  <template #footer>
                    <CLink
                      class="fw-semibold font-xs text-medium-emphasis"
                      href="https://coreui.io/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      View more
                      <CIcon
                        icon="cil-arrow-right"
                        class="ms-auto"
                        width="16"
                      />
                    </CLink>
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF color="danger" title="Title" value="$1.999,50">
                  <template #icon>
                    <CIcon icon="cil-bell" size="xl" />
                  </template>
                  <template #footer>
                    <CLink
                      class="fw-semibold font-xs text-medium-emphasis"
                      href="https://coreui.io/"
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      View more
                      <CIcon
                        icon="cil-arrow-right"
                        class="ms-auto"
                        width="16"
                      />
                    </CLink>
                  </template>
                </CWidgetStatsF>
              </CCol>
            </CRow>
          </DocsExample>
          <DocsExample href="">
            <CRow>
              <CCol :xs="3">
                <CWidgetStatsF
                  color="primary"
                  :padding="false"
                  title="Title"
                  value="$1.999,50"
                >
                  <template #icon>
                    <CIcon icon="cil-settings" size="xl" />
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF
                  color="info"
                  :padding="false"
                  title="Title"
                  value="$1.999,50"
                >
                  <template #icon>
                    <CIcon icon="cil-user" size="xl" />
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF
                  color="warning"
                  :padding="false"
                  title="Title"
                  value="$1.999,50"
                >
                  <template #icon>
                    <CIcon icon="cil-moon" size="xl" />
                  </template>
                </CWidgetStatsF>
              </CCol>
              <CCol :xs="3">
                <CWidgetStatsF
                  color="danger"
                  :padding="false"
                  title="Title"
                  value="$1.999,50"
                >
                  <template #icon>
                    <CIcon icon="cil-bell" size="xl" />
                  </template>
                </CWidgetStatsF>
              </CCol>
            </CRow>
          </DocsExample>
          <DocsExample href="">
            <WidgetsStatsD />
          </DocsExample>
          <DocsExample href="">
            <CCardGroup>
              <CWidgetStatsC
                class="mb-3"
                :progress="{ color: 'info', value: 75 }"
                title="Visitors"
                value="87.500"
              >
                <template #icon
                  ><CIcon icon="cil-people" height="36"
                /></template>
              </CWidgetStatsC>
              <CWidgetStatsC
                class="mb-3"
                :progress="{ color: 'success', value: 75 }"
                title="New Clients"
                value="385"
              >
                <template #icon
                  ><CIcon icon="cil-user-follow" height="36"
                /></template>
              </CWidgetStatsC>
              <CWidgetStatsC
                class="mb-3"
                :progress="{ color: 'warning', value: 75 }"
                title="Products sold"
                value="1238"
              >
                <template #icon
                  ><CIcon icon="cil-basket" height="36"
                /></template>
              </CWidgetStatsC>
              <CWidgetStatsC
                class="mb-3"
                :progress="{ color: 'primary', value: 75 }"
                title="Returning Visitors"
                value="28%"
              >
                <template #icon
                  ><CIcon icon="cil-chart-pie" height="36"
                /></template>
              </CWidgetStatsC>
              <CWidgetStatsC
                class="mb-3"
                :progress="{ color: 'danger', value: 75 }"
                title="Avg. Time"
                value="5:34:11"
              >
                <template #icon
                  ><CIcon icon="cil-speedometer" height="36"
                /></template>
              </CWidgetStatsC>
            </CCardGroup>
          </DocsExample>
          <DocsExample href="">
            <CRow>
              <CCol :xs="2">
                <CWidgetStatsC
                  class="mb-3"
                  :progress="{ color: 'info', value: 75 }"
                  title="Visitors"
                  value="87.500"
                >
                  <template #icon
                    ><CIcon icon="cil-people" height="36"
                  /></template>
                </CWidgetStatsC>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsC
                  class="mb-3"
                  :progress="{ color: 'success', value: 75 }"
                  title="New Clients"
                  value="385"
                >
                  <template #icon
                    ><CIcon icon="cil-user-follow" height="36"
                  /></template>
                </CWidgetStatsC>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsC
                  class="mb-3"
                  :progress="{ color: 'warning', value: 75 }"
                  title="Products sold"
                  value="1238"
                >
                  <template #icon
                    ><CIcon icon="cil-basket" height="36"
                  /></template>
                </CWidgetStatsC>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsC
                  class="mb-3"
                  :progress="{ color: 'primary', value: 75 }"
                  title="Returning Visitors"
                  value="28%"
                >
                  <template #icon
                    ><CIcon icon="cil-chart-pie" height="36"
                  /></template>
                </CWidgetStatsC>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsC
                  class="mb-3"
                  :progress="{ color: 'danger', value: 75 }"
                  title="Avg. Time"
                  value="5:34:11"
                >
                  <template #icon
                    ><CIcon icon="cil-speedometer" height="36"
                  /></template>
                </CWidgetStatsC>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsC
                  class="mb-3"
                  :progress="{ color: 'info', value: 75 }"
                  title="Comments"
                  value="972"
                >
                  <template #icon
                    ><CIcon icon="cil-speech" height="36"
                  /></template>
                </CWidgetStatsC>
              </CCol>
            </CRow>
          </DocsExample>
          <DocsExample href="">
            <CRow>
              <CCol :xs="2">
                <CWidgetStatsC
                  class="mb-3"
                  color="info"
                  inverse
                  :progress="{ value: 75 }"
                  title="Visitors"
                  value="87.500"
                >
                  <template #icon
                    ><CIcon icon="cil-people" height="36"
                  /></template>
                </CWidgetStatsC>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsC
                  class="mb-3"
                  color="success"
                  inverse
                  :progress="{ value: 75 }"
                  title="New Clients"
                  value="385"
                >
                  <template #icon
                    ><CIcon icon="cil-user-follow" height="36"
                  /></template>
                </CWidgetStatsC>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsC
                  class="mb-3"
                  color="warning"
                  inverse
                  :progress="{ value: 75 }"
                  title="Products sold"
                  value="1238"
                >
                  <template #icon
                    ><CIcon icon="cil-basket" height="36"
                  /></template>
                </CWidgetStatsC>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsC
                  class="mb-3"
                  color="primary"
                  inverse
                  :progress="{ value: 75 }"
                  title="Returning Visitors"
                  value="28%"
                >
                  <template #icon
                    ><CIcon icon="cil-chart-pie" height="36"
                  /></template>
                </CWidgetStatsC>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsC
                  class="mb-3"
                  color="danger"
                  inverse
                  :progress="{ value: 75 }"
                  title="Avg. Time"
                  value="5:34:11"
                >
                  <template #icon
                    ><CIcon icon="cil-speedometer" height="36"
                  /></template>
                </CWidgetStatsC>
              </CCol>
              <CCol :xs="2">
                <CWidgetStatsC
                  class="mb-3"
                  color="info"
                  inverse
                  :progress="{ value: 75 }"
                  title="Comments"
                  value="972"
                >
                  <template #icon
                    ><CIcon icon="cil-speech" height="36"
                  /></template>
                </CWidgetStatsC>
              </CCol>
            </CRow>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { getStyle } from '@coreui/utils'
import { CChart } from '@coreui/vue-chartjs'
import WidgetsStatsA from './WidgetsStatsTypeA.vue'
import WidgetsStatsD from './WidgetsStatsTypeD.vue'
export default {
  name: 'Widgets',
  components: {
    CChart,
    WidgetsStatsA,
    WidgetsStatsD,
  },
  setup() {
    const widgetStatsE = {
      labels: [
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S',
        'M',
      ],
      optionsBar: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
      optionsLine: {
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.4,
          },
          point: {
            radius: 0,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          },
        },
      },
    }

    return {
      getStyle,
      widgetStatsE,
      widgetProgressIconItems: [
        { color: 'primary', icon: 'cil-puzzle' },
        { color: 'success', icon: 'cil-speedometer' },
        { color: 'danger', icon: 'cil-cursor' },
        { color: 'info', icon: 'cil-drop' },
        { color: 'secondary', icon: 'cil-pencil' },
      ],
    }
  },
}
</script>
