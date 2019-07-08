<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown header="9.823" text="Members online">
        <template #default>
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
        <template #footer>
          <CChartLineSimple
            pointed
            class="c-px-3"
            style="height:70px"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            background-color="primary"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown variant="info" header="9.823" text="Members online">
        <template #default>
          <CDropdown
            class="c-float-right"
            variant="transparent c-p-0"
            placement="bottom-end"
            no-caret
            buttonHtml="<i class='cui-location-pin'></i>"
          >
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="c-px-3"
            style="height:70px"
            :data-points="[1, 18, 9, 17, 34, 22, 11]"
            background-color="info"
            :options="{ elements: { line: { tension: 0.00001 }}}"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        variant="warning"
        header="9.823"
        text="Members online"
      >
        <template #default>
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
        <template #footer>
          <CChartLineSimple
            style="height:70px"
            background-color="rgba(255,255,255,.2)"
            :data-points="[78, 81, 80, 45, 34, 12, 40]"
            :options="{ elements: { line: { borderWidth: 2.5 }}}"
            point-hover-background-color="warning"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        variant="danger"
        header="9.823"
        text="Members online"
      >
        <template #default>
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
        <template #footer>
          <CChartBarSimple
            style="height:70px"
            background-color="rgb(250, 152, 152)"
            label="Members"
            labels="months"
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
