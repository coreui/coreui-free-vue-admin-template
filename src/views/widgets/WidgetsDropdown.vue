<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown header="9.823" text="Members online">
        <template #dropdown>
          <CDropdown
            class="c-float-right"
            variant="transparent c-p-0"
            placement="bottom-end"
            buttonHtml="<i class='cui-settings'></i>"
          >
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <CChartLineSimple
          pointed
          class="c-px-3"
          style="height:70px"
          :dataPoints="[65, 59, 84, 84, 51, 55, 40]"
          backgroundColor="primary"
          label="Members"
          labels="months"
        />
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown variant="info" header="9.823" text="Members online">
        <template #dropdown>
          <CDropdown
            class="c-float-right"
            variant="transparent c-p-0"
            placement="bottom-end"
            noCaret
            buttonHtml="<i class='cui-location-pin'></i>"
          >
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <CChartLineSimple
          pointed
          class="c-px-3"
          style="height:70px"
          :dataPoints="[1, 18, 9, 17, 34, 22, 11]"
          backgroundColor="info"
          :options="{ elements: { line: { tension: 0.00001 }}}"
          label="Members"
          labels="months"
        />
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        variant="warning"
        header="9.823"
        text="Members online"
      >

        <template #dropdown>
          <CDropdown
            class="c-float-right"
            variant="transparent c-p-0"
            placement="bottom-end"
            buttonHtml="<i class='cui-settings'></i>"
          >
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
          <CChartLineSimple
            style="height:70px"
            backgroundColor="rgba(255,255,255,.2)"
            :dataPoints="[78, 81, 80, 45, 34, 12, 40]"
            :options="{ elements: { line: { borderWidth: 2.5 }}}"
            pointHoverBackgroundColor="warning"
            label="Members"
            labels="months"
          />
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        variant="danger"
        header="9.823"
        text="Members online"
      >

        <template #dropdown>
          <CDropdown
            class="c-float-right"
            variant="transparent c-p-0"
            placement="bottom-end"
            buttonHtml="<i class='cui-settings'></i>"
          >
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <CChartBarSimple
          style="height:70px"
          backgroundColor="rgb(250, 152, 152)"
          label="Members"
          labels="months"
        />
      </CWidgetDropdown>
    </CCol>
  </CRow>
</template>

<script>
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'

export default {
  name: 'WidgetsDropdown',
  // data () {
  //   return {
  //     months: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  //   }
  // },
  components: { CChartLineSimple, CChartBarSimple }
}
</script>
