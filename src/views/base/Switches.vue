<template>
  <div class="animated fadeIn">

    <CRow>
      <CCol xs="12" md="6">
        <CCard v-if="true">
          <CCardHeader>
            <h5>
               Radio switches
              <CBadge :variant="radio" class="mr-auto">{{radio}}</CBadge>
              <CBadge variant="danger" class="float-right">NEW</CBadge>
            </h5>
          </CCardHeader>
          <CCardBody>
            <!-- <CSwitch class="mx-1" variant="primary" shape="3d" outline="alt" v-bind="labelIcon" type="radio" name="radio" checked.sync="radio" trueValue="primary"/> -->
            <CSwitch class="mx-1"
                     :key="key"
                     :variant="variant"
                     shape="3d"
                     outline="alt"
                     v-bind="labelIcon"
                     type="radio"
                     name="radio"
                     :checked.sync="radio"
                     :value="variant"
                     v-for="(variant, key) in ['primary','secondary','warning','success','info','danger','light','dark']"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch default
            <CBadge variant="primary">{{checker}}</CBadge>
          </CCardHeader>
          <CCardBody>
            <CSwitch
              class="mx-1"
              variant="primary"
              name="switch1"
              :checked.sync="checker"
              trueValue="yes"
              falseValue="no"
            />
            <CSwitch class="mx-1"
                     :variant="variant"
                     checked
                     :key="key"
                     v-for="(variant, key) in ['secondary', 'success','warning','info','danger','light','dark']"
            />
            <CSwitch class="mx-1" variant="primary" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch pills
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked  shape="pill"/>
            <CSwitch class="mx-1" variant="secondary" checked  shape="pill" />
            <CSwitch class="mx-1" variant="success" checked  shape="pill" />
            <CSwitch class="mx-1" variant="warning" checked  shape="pill" />
            <CSwitch class="mx-1" variant="info" checked  shape="pill" />
            <CSwitch class="mx-1" variant="danger" checked  shape="pill" />
            <CSwitch class="mx-1" variant="light" checked  shape="pill" />
            <CSwitch class="mx-1" variant="dark" checked  shape="pill" />
            <CSwitch class="mx-1" variant="primary" disabled  shape="pill" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked   shape="3d" />
            <CSwitch class="mx-1" variant="secondary" checked   shape="3d" />
            <CSwitch class="mx-1" variant="success" checked   shape="3d" />
            <CSwitch class="mx-1" variant="warning" checked   shape="3d" />
            <CSwitch class="mx-1" variant="info" checked   shape="3d" />
            <CSwitch class="mx-1" variant="danger" checked   shape="3d" />
            <CSwitch class="mx-1" variant="light" checked   shape="3d" />
            <CSwitch class="mx-1" variant="dark" checked   shape="3d" />
            <CSwitch class="mx-1" variant="primary" disabled   shape="3d" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch <small><code>disabled</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked shape="3d" disabled />
            <CSwitch class="mx-1" variant="secondary" checked shape="3d" disabled />
            <CSwitch class="mx-1" variant="success" checked shape="3d" disabled />
            <CSwitch class="mx-1" variant="warning" checked shape="3d" disabled />
            <CSwitch class="mx-1" variant="info" checked shape="3d" disabled />
            <CSwitch class="mx-1" variant="danger" checked shape="3d" disabled />
            <CSwitch class="mx-1" variant="light" checked shape="3d" disabled />
            <CSwitch class="mx-1" variant="dark" checked shape="3d" disabled />
            <CSwitch class="mx-1" variant="primary" disabled shape="3d" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch <small><code>outline="alt"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="secondary" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="success" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="warning" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="info" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="danger" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="light" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="dark" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="primary" disabled   shape="3d" outline="alt" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch <small><code>label</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" shape="3d" checked v-bind="labelIcon"/>
            <CSwitch class="mx-1" variant="secondary" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="success" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="warning" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="info" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="danger" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="light" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="dark" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="primary" disabled shape="3d" v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch <small><code>outline="alt"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked   shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="secondary" checked   shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="success" checked   shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="warning" checked   shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="info" checked   shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="danger" checked   shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="light" checked   shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="dark" checked   shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="primary" disabled   shape="3d" outline="alt" v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch <small><code>outline="alt"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="secondary" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="success" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="warning" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="info" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="danger" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="light" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="dark" checked   shape="3d" outline="alt" />
            <CSwitch class="mx-1" variant="primary" disabled   shape="3d" outline="alt" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked outline />
            <CSwitch class="mx-1" variant="secondary" checked outline />
            <CSwitch class="mx-1" variant="success" checked outline />
            <CSwitch class="mx-1" variant="warning" checked outline />
            <CSwitch class="mx-1" variant="info" checked outline />
            <CSwitch class="mx-1" variant="danger" checked outline />
            <CSwitch class="mx-1" variant="light" checked outline />
            <CSwitch class="mx-1" variant="dark" checked outline />
            <CSwitch class="mx-1" variant="primary" outline disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>outline  shape="pill"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked outline  shape="pill"/>
            <CSwitch class="mx-1" variant="secondary" checked outline  shape="pill" />
            <CSwitch class="mx-1" variant="success" checked outline  shape="pill" />
            <CSwitch class="mx-1" variant="warning" checked outline  shape="pill" />
            <CSwitch class="mx-1" variant="info" checked outline  shape="pill" />
            <CSwitch class="mx-1" variant="danger" checked outline  shape="pill" />
            <CSwitch class="mx-1" variant="light" checked outline  shape="pill" />
            <CSwitch class="mx-1" variant="dark" checked outline  shape="pill" />
            <CSwitch class="mx-1" variant="primary" outline  shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>outline="alt"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked outline="alt" />
            <CSwitch class="mx-1" variant="secondary" checked outline="alt" />
            <CSwitch class="mx-1" variant="success" checked outline="alt" />
            <CSwitch class="mx-1" variant="warning" checked outline="alt" />
            <CSwitch class="mx-1" variant="info" checked outline="alt" />
            <CSwitch class="mx-1" variant="danger" checked outline="alt" />
            <CSwitch class="mx-1" variant="light" checked outline="alt" />
            <CSwitch class="mx-1" variant="dark" checked outline="alt" />
            <CSwitch class="mx-1" variant="primary" outline="alt" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>outline="alt"  shape="pill"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked outline="alt" shape="pill"/>
            <CSwitch class="mx-1" variant="secondary" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="success" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="warning" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="info" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="danger" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="light" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="dark" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="primary" outline="alt" shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked />
            <CSwitch class="mx-1" variant="secondary" checked />
            <CSwitch class="mx-1" variant="success" checked />
            <CSwitch class="mx-1" variant="warning" checked />
            <CSwitch class="mx-1" variant="info" checked />
            <CSwitch class="mx-1" variant="danger" checked />
            <CSwitch class="mx-1" variant="light" checked />
            <CSwitch class="mx-1" variant="dark" checked />
            <CSwitch class="mx-1" variant="primary" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label  shape="pill"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked shape="pill" />
            <CSwitch class="mx-1" variant="secondary" checked shape="pill" />
            <CSwitch class="mx-1" variant="success" checked shape="pill" />
            <CSwitch class="mx-1" variant="warning" checked shape="pill" />
            <CSwitch class="mx-1" variant="info" checked shape="pill" />
            <CSwitch class="mx-1" variant="danger" checked shape="pill" />
            <CSwitch class="mx-1" variant="light" checked shape="pill" />
            <CSwitch class="mx-1" variant="dark" checked shape="pill" />
            <CSwitch class="mx-1" variant="primary" shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked outline />
            <CSwitch class="mx-1" variant="secondary" checked outline />
            <CSwitch class="mx-1" variant="success" checked outline />
            <CSwitch class="mx-1" variant="warning" checked outline />
            <CSwitch class="mx-1" variant="info" checked outline />
            <CSwitch class="mx-1" variant="danger" checked outline />
            <CSwitch class="mx-1" variant="light" checked outline />
            <CSwitch class="mx-1" variant="dark" checked outline />
            <CSwitch class="mx-1" variant="primary" outline disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked outline shape="pill" />
            <CSwitch class="mx-1" variant="secondary" checked outline shape="pill" />
            <CSwitch class="mx-1" variant="success" checked outline shape="pill" />
            <CSwitch class="mx-1" variant="warning" checked outline shape="pill" />
            <CSwitch class="mx-1" variant="info" checked outline shape="pill" />
            <CSwitch class="mx-1" variant="danger" checked outline shape="pill" />
            <CSwitch class="mx-1" variant="light" checked outline shape="pill" />
            <CSwitch class="mx-1" variant="dark" checked outline shape="pill" />
            <CSwitch class="mx-1" variant="primary" outline shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked outline="alt" />
            <CSwitch class="mx-1" variant="secondary" checked outline="alt" />
            <CSwitch class="mx-1" variant="success" checked outline="alt" />
            <CSwitch class="mx-1" variant="warning" checked outline="alt" />
            <CSwitch class="mx-1" variant="info" checked outline="alt" />
            <CSwitch class="mx-1" variant="danger" checked outline="alt" />
            <CSwitch class="mx-1" variant="light" checked outline="alt" />
            <CSwitch class="mx-1" variant="dark" checked outline="alt" />
            <CSwitch class="mx-1" variant="primary" outline="alt" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="secondary" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="success" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="warning" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="info" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="danger" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="light" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="dark" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" variant="primary" outline="alt" shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked dataOn="" dataOff=""/>
            <CSwitch class="mx-1" variant="secondary" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="success" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="warning" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="info" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="danger" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="light" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="dark" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="primary" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>shape
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label  shape="pill"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="secondary" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="success" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="warning" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="info" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="danger" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="light" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="dark" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="primary" shape="pill" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="secondary" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="success" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="warning" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="info" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="danger" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="light" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="dark" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="primary" outline disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="secondary" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="success" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="warning" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="info" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="danger" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="light" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="dark" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="primary" outline shape="pill" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="secondary" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="success" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="warning" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="info" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="danger" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="light" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="dark" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="primary" outline="alt" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" variant="primary" checked outline="alt" shape="pill" v-bind="labelTxt" />
            <CSwitch class="mx-1" variant="secondary" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="success" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="warning" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="info" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="danger" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="light" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="dark" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" variant="primary" outline="alt" shape="pill" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol md="12">
        <CCard>
          <CCardHeader>
            Sizes
          </CCardHeader>
          <CCardBody class="p-0">
            <CTable
              hover
              striped
              class="table-align-middle mb-0"
              :items="items"
              :fields="fields"
              noSorting
            >
              <template #example="{item}">
                <td>
                  <CSwitch
                    :shape="item.example.shape"
                    :variant="item.example.variant"
                    :size="item.example.size"
                    :checked="item.example.checked"
                  />
                </td>
              </template>
              <template #size_prop="{item}">
                <td>
                  <span v-html="item.size_prop"></span>
                </td>
              </template>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'switches',
  data () {
    return {
      fields: [
        {key: 'size'},
        {key: 'example'},
        {key: 'size_prop', label: 'Size prop'}
      ],
      items: [
        {size: 'Large', example: {shape: '3d', variant: 'primary', size: 'lg', checked: true}, size_prop: 'Add following prop <code>size="lg"</code>'},
        {size: 'Normal', example: {shape: '3d', variant: 'primary', size: '', checked: true}, size_prop: '-'},
        {size: 'Small', example: {shape: '3d', variant: 'primary', size: 'sm', checked: true}, size_prop: 'Add following prop <code>size="sm"</code>'}
      ],
      checker: 'yes',
      radio: 'primary',
      labelIcon: {
        dataOn: '\u2713',
        dataOff: '\u2715'
      },
      labelTxt: {
        dataOn: 'yes',
        dataOff: 'no'
      }
    }
  }
}
</script>
