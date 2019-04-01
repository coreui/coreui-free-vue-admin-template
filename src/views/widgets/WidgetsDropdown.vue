<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown header="9.823" text="Members online">
        <template #dropdown>
          <CDropdown
            class="float-right"
            variant="transparent p-0"
            placement="bottom-end"
            buttonHtml="<i class='icon-settings'></i>"
          >
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <CSimplePointedChart
          class="px-3"
          :data="[65, 59, 84, 84, 51, 55, 40]"
          :labels="months"
          style="height:70px"
          label="Members"
          pointHoverColor="primary"
        />
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown variant="info" header="9.823" text="Members online">
        <template #dropdown>
          <CDropdown
            class="float-right"
            variant="transparent p-0"
            placement="bottom-end"
            noCaret
            buttonHtml="<i class='icon-location-pin'></i>"
          >
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <CSimplePointedChart
          class="px-3"
          :data="[1, 18, 9, 17, 34, 22, 11]"
          :labels="months"
          style="height:70px"
          label="Members"
          :options="{ elements: { line: { tension: 0.00001 }}}"
          pointHoverColor="info"
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
            class="float-right"
            variant="transparent p-0"
            placement="bottom-end"
            buttonHtml="<i class='icon-settings'></i>"
          >
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>

        <CSimpleLineChart
          chartId="CWidgetDropdown_3"
          :data="[78, 81, 80, 45, 34, 12, 40]"
          :labels="months"
          style="height:70px"
          color="rgba(255,255,255,.2)"
          label="Members"
          :options="{elements: {line: {borderWidth: 2.5}}}"
          pointHoverColor="warning"
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
            class="float-right"
            variant="transparent p-0"
            placement="bottom-end"
            buttonHtml="<i class='icon-settings'></i>"
          >
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>

        <CSimpleBarChart
          chartId="CWidgetDropdown_4"
          :data="[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]"
          label="Members"
          color="rgb(250, 152, 152)"
          style="height:70px"
        />
      </CWidgetDropdown>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'WidgetsDropdown',
  data () {
    return {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    }
  }
}
</script>
