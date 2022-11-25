<template>
  <CRow>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Checkbox</strong>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="forms/checks-radios.html">
            <CFormCheck id="flexCheckDefault" label="Default checkbox" />
            <CFormCheck
              id="flexCheckChecked"
              label="Checked checkbox"
              checked
            />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Checkbox</strong> <small>Disabled</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add the <code>disabled</code> attribute and the associated
            <code>&lt;label&gt;</code>s are automatically styled to match with a
            lighter color to help indicate the input&#39;s state.
          </p>
          <DocsExample href="forms/checks-radios.html#disabled">
            <CFormCheck label="Disabled checkbox" disabled />
            <CFormCheck label="Disabled checked checkbox" checked disabled />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Radio</strong>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add the <code>disabled</code> attribute and the associated
            <code>&lt;label&gt;</code>s are automatically styled to match with a
            lighter color to help indicate the input&#39;s state.
          </p>
          <DocsExample href="forms/checks-radios.html#radios">
            <CFormCheck
              id="flexRadioDefault1"
              type="radio"
              name="flexRadioDefault"
              label="Default radio"
            />
            <CFormCheck
              id="flexRadioDefault2"
              type="radio"
              name="flexRadioDefault"
              label="Checked radio"
              checked
            />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Radio</strong> <small>Disabled</small>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="forms/checks-radios.html#disabled-1">
            <CFormCheck
              id="flexRadioDisabled"
              type="radio"
              name="flexRadioDisabled"
              label="Disabled radio"
              disabled
            />
            <CFormCheck
              id="flexRadioCheckedDisabled"
              type="radio"
              name="flexRadioDisabled"
              label="Disabled checked radio"
              checked
              disabled
            />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Switches</strong>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            A switch has the markup of a custom checkbox but uses the
            <code>switch</code> boolean properly to render a toggle switch.
            Switches also support the <code>disabled</code> attribute.
          </p>
          <DocsExample href="forms/checks-radios.html#switches">
            <CFormSwitch
              id="formSwitchCheckDefault"
              label="Default switch checkbox input"
            />
            <CFormSwitch
              id="formSwitchCheckChecked"
              label="Checked switch checkbox input"
              checked
            />
            <CFormSwitch
              id="formSwitchCheckDisabled"
              label="Disabled switch checkbox input"
              disabled
            />
            <CFormSwitch
              id="formSwitchCheckCheckedDisabled"
              label="Disabled checked switch checkbox input"
              checked
              disabled
            />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Switches</strong> <small>Sizes</small>
        </CCardHeader>
        <CCardBody>
          <DocsExample href="forms/checks-radios.html#sizes">
            <CFormSwitch
              id="formSwitchCheckDefault"
              label="Default switch checkbox input"
            />
            <CFormSwitch
              id="formSwitchCheckDefaultLg"
              size="lg"
              label="Large switch checkbox input"
            />
            <CFormSwitch
              id="formSwitchCheckDefaultXL"
              size="xl"
              label="Extra large switch checkbox input"
            />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Checks and Radios</strong>
          <small>Default layout (stacked)</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            By default, any number of checkboxes and radios that are immediate
            sibling will be vertically stacked and appropriately spaced.
          </p>
          <DocsExample href="forms/checks-radios.html#default-stacked">
            <CFormCheck id="defaultCheck1" label="Default checkbox" />
            <CFormCheck id="defaultCheck2" label="Disabled checkbox" disabled />
          </DocsExample>
          <DocsExample href="forms/checks-radios.html#default-stacked">
            <CFormCheck
              id="exampleRadios1"
              type="radio"
              name="exampleRadios"
              value="option1"
              label="Default radio"
              checked
            />
            <CFormCheck
              id="exampleRadios2"
              type="radio"
              name="exampleRadios"
              value="option2"
              label="Second default radio"
            />
            <CFormCheck
              id="exampleRadios3"
              type="radio"
              name="exampleRadios"
              value="option3"
              label="Disabled radio"
              disabled
            />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Checks and Radios</strong> <small>Inline</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Group checkboxes or radios on the same horizontal row by adding
            <code>inline</code> boolean property to any
            <code>&lt;CFormCheck&gt;</code>.
          </p>
          <DocsExample href="forms/checks-radios.html#inline">
            <CFormCheck id="inlineCheckbox1" inline value="option1" label="1" />
            <CFormCheck id="inlineCheckbox2" inline value="option2" label="2" />
            <CFormCheck
              id="inlineCheckbox3"
              inline
              value="option3"
              label="3 (disabled)"
              disabled
            />
          </DocsExample>
          <DocsExample href="forms/checks-radios.html#inline">
            <CFormCheck
              id="inlineCheckbox1"
              inline
              type="radio"
              name="inlineRadioOptions"
              value="option1"
              label="1"
            />
            <CFormCheck
              id="inlineCheckbox2"
              inline
              type="radio"
              name="inlineRadioOptions"
              value="option2"
              label="2"
            />
            <CFormCheck
              id="inlineCheckbox3"
              inline
              type="radio"
              name="inlineRadioOptions"
              value="option3"
              label="3 (disabled)"
              disabled
            />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Checks and Radios</strong> <small>Without labels</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Remember to still provide some form of accessible name for assistive
            technologies (for instance, using <code>aria-label</code>).
          </p>
          <DocsExample href="forms/checks-radios.html#without-labels">
            <div>
              <CFormCheck id="checkboxNoLabel" value="" aria-label="..." />
            </div>
            <div>
              <CFormCheck
                id="radioNoLabel"
                type="radio"
                name="radioNoLabel"
                value=""
                aria-label="..."
              />
            </div>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Toggle buttons</strong>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Create button-like checkboxes and radio buttons by using
            <code>button</code> boolean property on the
            <code>&lt;CFormCheck&gt;</code> component. These toggle buttons can
            further be grouped in a button group if needed.
          </p>
          <DocsExample href="forms/checks-radios.html#toggle-buttons">
            <CFormCheck
              id="btn-check"
              :button="{ color: 'primary' }"
              autocomplete="off"
              label="Single toggle"
            />
          </DocsExample>
          <DocsExample href="forms/checks-radios.html#toggle-buttons">
            <CFormCheck
              id="btn-check-2"
              :button="{ color: 'primary' }"
              autocomplete="off"
              label="Checked"
              checked
            />
          </DocsExample>
          <DocsExample href="forms/checks-radios.html#toggle-buttons">
            <CFormCheck
              id="btn-check-3"
              :button="{ color: 'primary' }"
              autocomplete="off"
              label="Disabled"
              disabled
            />
          </DocsExample>
          <h3>Radio toggle buttons</h3>
          <DocsExample href="forms/checks-radios.html#toggle-buttons">
            <CFormCheck
              id="option1"
              :button="{ color: 'secondary' }"
              type="radio"
              name="options"
              autocomplete="off"
              label="Checked"
              checked
            />
            <CFormCheck
              id="option2"
              :button="{ color: 'secondary' }"
              type="radio"
              name="options"
              autocomplete="off"
              label="Radio"
            />
            <CFormCheck
              id="option3"
              :button="{ color: 'secondary' }"
              type="radio"
              name="options"
              autocomplete="off"
              label="Radio"
              disabled
            />
            <CFormCheck
              id="option4"
              :button="{ color: 'secondary' }"
              type="radio"
              name="options"
              autocomplete="off"
              label="Radio"
            />
          </DocsExample>
          <h3>Outlined styles</h3>
          <p class="text-medium-emphasis small">
            Different variants of button, such at the various outlined styles,
            are supported.
          </p>
          <DocsExample href="forms/checks-radios.html#toggle-buttons">
            <div>
              <CFormCheck
                id="btn-check-outlined"
                :button="{ color: 'primary', variant: 'outline' }"
                autocomplete="off"
                label="Single toggle"
              />
            </div>
            <div>
              <CFormCheck
                id="btn-check-2-outlined"
                :button="{ color: 'secondary', variant: 'outline' }"
                autocomplete="off"
                label="Checked"
                checked
              />
            </div>
            <div>
              <CFormCheck
                id="success-outlined"
                :button="{ color: 'success', variant: 'outline' }"
                type="radio"
                name="options-outlined"
                autocomplete="off"
                label="Radio"
                checked
              />
              <CFormCheck
                id="danger-outlined"
                :button="{ color: 'danger', variant: 'outline' }"
                type="radio"
                name="options-outlined"
                autocomplete="off"
                label="Radio"
              />
            </div>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'ChecksRadios',
}
</script>
