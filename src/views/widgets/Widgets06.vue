<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidget06 header="9.823" text="Members online">

        <template #dropdown>
          <CDropdown
            class="float-right"
            variant="transparent p-0"
            placement="bottom-end"
            buttonContent="<i class='icon-settings'></i>"
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
      </CWidget06>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidget06 variant="info" header="9.823" text="Members online">
        <template #dropdown>
          <CDropdown
            class="float-right"
            variant="transparent p-0"
            placement="bottom-end"
            noCaret
            buttonContent="<i class='icon-location-pin'></i>"
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
      </CWidget06>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidget06
        variant="warning"
        header="9.823"
        text="Members online"
      >

        <template #dropdown>
          <CDropdown
            class="float-right"
            variant="transparent p-0"
            placement="bottom-end"
            buttonContent="<i class='icon-settings'></i>"
          >
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>

        <CSimpleLineChart
          chartId="CWidget06_3"
          :data="[78, 81, 80, 45, 34, 12, 40]"
          :labels="months"
          style="height:70px"
          color="rgba(255,255,255,.2)"
          label="Members"
          :options="{elements: {line: {borderWidth: 2.5}}}"
          pointHoverColor="warning"
        />
      </CWidget06>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidget06
        variant="danger"
        header="9.823"
        text="Members online"
      >

        <template #dropdown>
          <CDropdown
            class="float-right"
            variant="transparent p-0"
            placement="bottom-end"
            buttonContent="<i class='icon-settings'></i>"
          >
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>

        <CSimpleBarChart
          chartId="CWidget06_4"
          :data="[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]"
          label="Members"
          color="rgb(250, 152, 152)"
          style="height:70px"
        />
      </CWidget06>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Widgets06',
  props: {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  }
}
</script>
