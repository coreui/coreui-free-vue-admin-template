<template>
  <div>
    <CRow>
      <CCol xs="12" md="6">
        <CCard v-if="true">
          <CCardHeader>
            Radio switches
            <CBadge :color="radio" class="mr-auto">{{radio}}</CBadge>
            <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/3.0/components/Switch" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <CSwitch
              v-for="(color, key) in colors"
              :key="'radio' + key"
              class="mx-1"
              :color="color"
              shape="3d"
              outline="alt"
              v-bind="labelIcon"
              type="radio"
              name="radio"
              :checked="key === 2"
              @update:checked="(val) => val ? radio = color : null"
              :value="color"
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
            <CBadge color="primary">{{checker}}</CBadge>
          </CCardHeader>
          <CCardBody>
            <CSwitch
              class="mx-1"
              color="primary"
              name="switch1"
              :checked.sync="checker"
            />
            <CSwitch
              class="mx-1"
              :color="color"
              checked
              :key="key"
              v-for="(color, key) in ['secondary', 'success','warning','info','danger','light','dark']"
            />
            <CSwitch class="mx-1" color="primary" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch pills
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked shape="pill"/>
            <CSwitch class="mx-1" color="secondary" checked shape="pill" />
            <CSwitch class="mx-1" color="success" checked shape="pill" />
            <CSwitch class="mx-1" color="warning" checked shape="pill" />
            <CSwitch class="mx-1" color="info" checked shape="pill" />
            <CSwitch class="mx-1" color="danger" checked shape="pill" />
            <CSwitch class="mx-1" color="light" checked shape="pill" />
            <CSwitch class="mx-1" color="dark" checked shape="pill" />
            <CSwitch class="mx-1" color="primary" disabled shape="pill" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked  shape="3d" />
            <CSwitch class="mx-1" color="secondary" checked  shape="3d" />
            <CSwitch class="mx-1" color="success" checked  shape="3d" />
            <CSwitch class="mx-1" color="warning" checked  shape="3d" />
            <CSwitch class="mx-1" color="info" checked  shape="3d" />
            <CSwitch class="mx-1" color="danger" checked  shape="3d" />
            <CSwitch class="mx-1" color="light" checked  shape="3d" />
            <CSwitch class="mx-1" color="dark" checked  shape="3d" />
            <CSwitch class="mx-1" color="primary" disabled  shape="3d" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch <small><code>disabled</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked shape="3d" disabled />
            <CSwitch class="mx-1" color="secondary" checked shape="3d" disabled />
            <CSwitch class="mx-1" color="success" checked shape="3d" disabled />
            <CSwitch class="mx-1" color="warning" checked shape="3d" disabled />
            <CSwitch class="mx-1" color="info" checked shape="3d" disabled />
            <CSwitch class="mx-1" color="danger" checked shape="3d" disabled />
            <CSwitch class="mx-1" color="light" checked shape="3d" disabled />
            <CSwitch class="mx-1" color="dark" checked shape="3d" disabled />
            <CSwitch class="mx-1" color="primary" disabled shape="3d" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch <small><code>outline="alt"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="secondary" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="success" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="warning" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="info" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="danger" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="light" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="dark" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="primary" disabled  shape="3d" outline="alt" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch <small><code>label</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" shape="3d" checked v-bind="labelIcon"/>
            <CSwitch class="mx-1" color="secondary" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked shape="3d" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" disabled shape="3d" v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch <small><code>outline="alt"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked  shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="secondary" checked  shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked  shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked  shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked  shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked  shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked  shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked  shape="3d" outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" disabled  shape="3d" outline="alt" v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            3d Switch <small><code>outline="alt"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="secondary" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="success" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="warning" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="info" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="danger" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="light" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="dark" checked  shape="3d" outline="alt" />
            <CSwitch class="mx-1" color="primary" disabled  shape="3d" outline="alt" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked outline />
            <CSwitch class="mx-1" color="secondary" checked outline />
            <CSwitch class="mx-1" color="success" checked outline />
            <CSwitch class="mx-1" color="warning" checked outline />
            <CSwitch class="mx-1" color="info" checked outline />
            <CSwitch class="mx-1" color="danger" checked outline />
            <CSwitch class="mx-1" color="light" checked outline />
            <CSwitch class="mx-1" color="dark" checked outline />
            <CSwitch class="mx-1" color="primary" outline disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>outline  shape="pill"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked outline shape="pill"/>
            <CSwitch class="mx-1" color="secondary" checked outline shape="pill" />
            <CSwitch class="mx-1" color="success" checked outline shape="pill" />
            <CSwitch class="mx-1" color="warning" checked outline shape="pill" />
            <CSwitch class="mx-1" color="info" checked outline shape="pill" />
            <CSwitch class="mx-1" color="danger" checked outline shape="pill" />
            <CSwitch class="mx-1" color="light" checked outline shape="pill" />
            <CSwitch class="mx-1" color="dark" checked outline shape="pill" />
            <CSwitch class="mx-1" color="primary" outline shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>outline="alt"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked outline="alt" />
            <CSwitch class="mx-1" color="secondary" checked outline="alt" />
            <CSwitch class="mx-1" color="success" checked outline="alt" />
            <CSwitch class="mx-1" color="warning" checked outline="alt" />
            <CSwitch class="mx-1" color="info" checked outline="alt" />
            <CSwitch class="mx-1" color="danger" checked outline="alt" />
            <CSwitch class="mx-1" color="light" checked outline="alt" />
            <CSwitch class="mx-1" color="dark" checked outline="alt" />
            <CSwitch class="mx-1" color="primary" outline="alt" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>outline="alt"  shape="pill"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked outline="alt" shape="pill"/>
            <CSwitch class="mx-1" color="secondary" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="success" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="warning" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="info" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="danger" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="light" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="dark" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="primary" outline="alt" shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked />
            <CSwitch class="mx-1" color="secondary" checked />
            <CSwitch class="mx-1" color="success" checked />
            <CSwitch class="mx-1" color="warning" checked />
            <CSwitch class="mx-1" color="info" checked />
            <CSwitch class="mx-1" color="danger" checked />
            <CSwitch class="mx-1" color="light" checked />
            <CSwitch class="mx-1" color="dark" checked />
            <CSwitch class="mx-1" color="primary" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label  shape="pill"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked shape="pill" />
            <CSwitch class="mx-1" color="secondary" checked shape="pill" />
            <CSwitch class="mx-1" color="success" checked shape="pill" />
            <CSwitch class="mx-1" color="warning" checked shape="pill" />
            <CSwitch class="mx-1" color="info" checked shape="pill" />
            <CSwitch class="mx-1" color="danger" checked shape="pill" />
            <CSwitch class="mx-1" color="light" checked shape="pill" />
            <CSwitch class="mx-1" color="dark" checked shape="pill" />
            <CSwitch class="mx-1" color="primary" shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked outline />
            <CSwitch class="mx-1" color="secondary" checked outline />
            <CSwitch class="mx-1" color="success" checked outline />
            <CSwitch class="mx-1" color="warning" checked outline />
            <CSwitch class="mx-1" color="info" checked outline />
            <CSwitch class="mx-1" color="danger" checked outline />
            <CSwitch class="mx-1" color="light" checked outline />
            <CSwitch class="mx-1" color="dark" checked outline />
            <CSwitch class="mx-1" color="primary" outline disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked outline shape="pill" />
            <CSwitch class="mx-1" color="secondary" checked outline shape="pill" />
            <CSwitch class="mx-1" color="success" checked outline shape="pill" />
            <CSwitch class="mx-1" color="warning" checked outline shape="pill" />
            <CSwitch class="mx-1" color="info" checked outline shape="pill" />
            <CSwitch class="mx-1" color="danger" checked outline shape="pill" />
            <CSwitch class="mx-1" color="light" checked outline shape="pill" />
            <CSwitch class="mx-1" color="dark" checked outline shape="pill" />
            <CSwitch class="mx-1" color="primary" outline shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked outline="alt" />
            <CSwitch class="mx-1" color="secondary" checked outline="alt" />
            <CSwitch class="mx-1" color="success" checked outline="alt" />
            <CSwitch class="mx-1" color="warning" checked outline="alt" />
            <CSwitch class="mx-1" color="info" checked outline="alt" />
            <CSwitch class="mx-1" color="danger" checked outline="alt" />
            <CSwitch class="mx-1" color="light" checked outline="alt" />
            <CSwitch class="mx-1" color="dark" checked outline="alt" />
            <CSwitch class="mx-1" color="primary" outline="alt" disabled />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="secondary" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="success" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="warning" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="info" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="danger" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="light" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="dark" checked outline="alt" shape="pill" />
            <CSwitch class="mx-1" color="primary" outline="alt" shape="pill" disabled />
          </CCardBody>
        </CCard>
      </CCol>

      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked v-bind="labelIcon"/>
            <CSwitch class="mx-1" color="secondary" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>shape
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label  shape="pill"</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="secondary" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" shape="pill" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" color="secondary" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked outline v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" outline disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="secondary" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked outline shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" outline shape="pill" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="secondary" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked outline="alt" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" outline="alt" disabled v-bind="labelIcon" />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" md="6">
        <CCard>
          <CCardHeader>
            Switch <small><code>label outline</code></small>
          </CCardHeader>
          <CCardBody>
            <CSwitch class="mx-1" color="primary" checked outline="alt" shape="pill" v-bind="labelTxt" />
            <CSwitch class="mx-1" color="secondary" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="success" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="warning" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="info" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="danger" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="light" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="dark" checked outline="alt" shape="pill" v-bind="labelIcon" />
            <CSwitch class="mx-1" color="primary" outline="alt" shape="pill" disabled v-bind="labelIcon" />
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
              no-sorting
            >
              <template #example="{item}">
                <td>
                  <CSwitch
                    :shape="item.example.shape"
                    :color="item.example.color"
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
  name: 'Switches',
  data () {
    return {
      colors: [
        'primary','secondary','warning','success','info','danger','light','dark'
      ],
      fields: [
        { key: 'size' },
        { key: 'example' },
        { key: 'size_prop', label: 'Size prop' }
      ],
      items: [
        {
          size: 'Large', 
          example: { shape: '3d', color: 'primary', size: 'lg', checked: true }, 
          size_prop: 'Add following prop <code>size="lg"</code>'
        },
        {
          size: 'Normal', 
          example: { shape: '3d', color: 'primary', size: '', checked: true }, 
          size_prop: '-'
        },
        {
          size: 'Small', 
          example: {shape: '3d', color: 'primary', size: 'sm', checked: true}, 
          size_prop: 'Add following prop <code>size="sm"</code>'
        }
      ],
      checker: true,
      radio: 'warning',
      labelIcon: {
        labelOn: '\u2713',
        labelOff: '\u2715'
      },
      labelTxt: {
        labelOn: 'yes',
        labelOff: 'no'
      }
    }
  }
}
</script>
