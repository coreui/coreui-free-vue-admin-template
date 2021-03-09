<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="primary" header="9.823" text="Members online">
        <template #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
          >
            <template #toggler-content>
              <CIcon name="cil-settings"/>
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartLineSimple
            color="#321fdb"
            type="spline"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="info" header="9.823" text="Members online">
        <template #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
            :caret="false"
          >
            <template #toggler-content>
              <CIcon name="cil-location-pin"/>
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
           <CChartLineSimple
            color="#39f"
            type="line"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="warning"
        header="9.823"
        text="Members online"
      >
        <template #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
          >
            <template #toggler-content>
              <CIcon name="cil-settings"/>
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartLineSimple
            color="#f9b115"
            type="line"
            :marker="false"
            :boxPadding="-21"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="danger"
        header="9.823"
        text="Members online"
      >
        <template #default>
          <CDropdown
            color="transparent p-0"
            placement="bottom-end"
          >
            <template #toggler-content>
             <CIcon name="cil-settings"/>
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartBarSimple
            style="height:87px"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
  </CRow>
</template>

<script>
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'
export default {
  name: 'WidgetsDropdown',
  components: { CChartLineSimple, CChartBarSimple }
}
</script>
