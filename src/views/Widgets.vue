<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Widgets</strong>
        </CCardHeader>
        <CCardBody>
          <h4 class="mt-4">Simple Widgets</h4>
          <Example href="">
            <CRow>
              <CCol class="mt-4" md="4">
                <CWidgetSimple title="Lorem" value="3,141"/>
              </CCol>
              <CCol class="mt-4" md="4">
                <CWidgetSimple title="Ipsum" value="5,926"/>
              </CCol>
              <CCol class="mt-4" md="4">
                <CWidgetSimple title="Dolor" value="5,358"/>
              </CCol>
            </CRow>
            <CRow>
              <CCol class="mt-4" md="6">
                <CWidgetSimple title="Lorem" value="3,141"/>
              </CCol>
              <CCol class="mt-4" md="6">
                <CWidgetSimple title="Ipsum" value="5,926"/>
              </CCol>
            </CRow>
          </Example>

          <h4 class="mt-4">Brand Widgets</h4>
          <Example href="">
            <CRow>
              <CCol class="mt-4" md="4">
                <CWidgetBrand color="primary" :values="[['Lorem', '3,141'], ['Dolor', '5,926']]"/>
              </CCol>
              <CCol class="mt-4" md="4">
                <CWidgetBrand color="success" :values="[['Lorem', '3,141'], ['Dolor', '5,926']]"/>
              </CCol>
              <CCol class="mt-4" md="4">
                <CWidgetBrand color="danger" :values="[['Lorem', '3,141'], ['Dolor', '5,926']]"/>
              </CCol>
            </CRow>
            <CRow>
              <CCol class="mt-4" md="6">
                <CWidgetBrand color="info" :values="[['Lorem', '3,141'], ['Dolor', '5,926']]"/>
              </CCol>
              <CCol class="mt-4" md="6">
                <CWidgetBrand color="secondary" :values="[['Lorem', '3,141'], ['Dolor', '5,926']]"/>
              </CCol>
            </CRow>
          </Example>

          <h4 class="mt-4">Dropdown Widgets</h4>
          <Example href="">
            <CRow>
              <CCol class="mt-4" v-for="(item, index) in ['primary', 'success', 'danger', 'info', 'secondary']" :md="index<3 ? 4 : 6">
                <CWidgetDropdown :color="item">
                  <template #value>
                    3,141
                  </template>
                  <template #change>
                    Dolor emit
                  </template>
                  <template #title>
                    <p>Lorem ipsum</p>
                  </template>
                  <template #action>
                    <CDropdown>
                      <CDropdownToggle :color="item" class="text-white">Dropdown Button</CDropdownToggle>
                      <CDropdownMenu>
                          <CDropdownItem href="#">Action</CDropdownItem>
                          <CDropdownItem href="#">Another action</CDropdownItem>
                          <CDropdownItem href="#">Something else here</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </template>
                </CWidgetDropdown>
              </CCol>
            </CRow>
          </Example>

          <h4 class="mt-4">Brand Widgets</h4>
          <Example href="">
            <CRow>
              <CCol class="mt-4" md="4">
                <CWidgetIcon color="primary" title="Lorem ipsum" value="3,141">
                  <template #default>
                    <CIcon name="cil-puzzle" size="lg"/>
                  </template>
                </CWidgetIcon>
              </CCol>
              <CCol class="mt-4" md="4">
                <CWidgetIcon color="success" title="Lorem ipsum" value="5,926">
                  <template #default>
                    <CIcon name="cil-speedometer" size="lg"/>
                  </template>
                </CWidgetIcon>
              </CCol>
              <CCol class="mt-4" md="4">
                <CWidgetIcon color="danger" title="Lorem ipsum" value="5,358">
                  <template #default>
                    <CIcon name="cil-cursor" size="lg"/>
                  </template>
                </CWidgetIcon>
              </CCol>
              <CCol class="mt-4" md="6">
                <CWidgetIcon color="info" title="Lorem ipsum" value="3,141">
                  <template #default>
                    <CIcon name="cil-drop" size="lg"/>
                  </template>
                </CWidgetIcon>
              </CCol>
              <CCol class="mt-4" md="6">
                <CWidgetIcon color="secondary" title="Lorem ipsum" value="5,926">
                  <template #default>
                    <CIcon name="cil-pencil" size="lg"/>
                  </template>
                </CWidgetIcon>
              </CCol>
            </CRow>
          </Example>

          <h4 class="mt-4">Progress Widgets</h4>
          <Example href="">
            <CRow>
              <CCol class="mt-4" v-for="(item, index) in ['primary', 'success', 'danger', 'info', 'secondary']" :md="index<3 ? 4 : 6">
                <CWidgetProgress :color="item" progressValue="70" text="Lorem ipsum" title="Dolor cet emit" value="3,141" inverse/>
              </CCol>
            </CRow>
          </Example>

          <h4 class="mt-4">Progress Icon Widgets</h4>
          <Example href="">
            <CRow>
              <CCol class="mt-4" v-for="(item, index) in widgetProgressIconItems" :md="index<3 ? 4 : 6">
                <CWidgetProgressIcon :color="item.color" progressValue="70" text="Lorem ipsum" title="Dolor cet emit" value="3,141" inverse>
                  <template #icon>
                    <CIcon :name="item.icon" size="lg"/>
                  </template>
                </CWidgetProgressIcon>
              </CCol>
            </CRow>
          </Example>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Widgets",
  data: function(){
    return {
      widgetProgressIconItems: [
        { color: 'primary', icon: 'cil-puzzle'}, 
        { color: 'success', icon: 'cil-speedometer'}, 
        { color: 'danger', icon: 'cil-cursor'}, 
        { color: 'info', icon: 'cil-drop'}, 
        { color: 'secondary', icon: 'cil-pencil'}, 
      ]
    }
  }
};
</script>