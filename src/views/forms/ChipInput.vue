<template>
  <CRow>
    <CCol :xs="12">
      <DocsComponents href="forms/chip-input/" />
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Chip Input</strong> <small>Basic example</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Chip input lets users enter multiple values in one field. Use the
            <code>CChipInput</code> component with props like <code>placeholder</code> and
            <code>defaultValue</code>.
          </p>
          <DocsExample href="forms/chip-input/#basic-example">
            <CChipInput
              label="Skills:"
              name="skills"
              placeholder="Add a skill..."
              :defaultValue="['JavaScript', 'TypeScript', 'Accessibility']"
            />
          </DocsExample>
        </CCardBody>
      </CCard>

      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Chip Input</strong> <small>Variants</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Use the <code>chipClassName</code> prop to apply contextual chip styles, which is handy
            for labels, issue types, or priorities.
          </p>
          <DocsExample href="forms/chip-input/#variants">
            <CChipInput
              name="issues"
              placeholder="Add label..."
              :defaultValue="['Feature', 'Approved', 'Needs review', 'Blocking']"
              :chipClassName="getChipClassName"
            />
          </DocsExample>
        </CCardBody>
      </CCard>

      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Chip Input</strong> <small>Sizes</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Use the <code>size</code> prop with <code>"sm"</code> or <code>"lg"</code> to align the
            field with surrounding form controls.
          </p>
          <DocsExample href="forms/chip-input/#sizes">
            <CChipInput
              label="Small"
              size="sm"
              placeholder="Add small tag..."
              :defaultValue="['HTML']"
              class="mb-3"
            />
            <CChipInput
              label="Default"
              placeholder="Add default tag..."
              :defaultValue="['JavaScript']"
              class="mb-3"
            />
            <CChipInput
              label="Large"
              size="lg"
              placeholder="Add large tag..."
              :defaultValue="['TypeScript']"
            />
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>

    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Chip Input</strong> <small>Empty state and label</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            You can start with an empty field or use a separate <code>CFormLabel</code> for clearer
            form structure and accessibility.
          </p>
          <DocsExample href="forms/chip-input/#empty-state">
            <CChipInput name="tags" placeholder="Start typing tags..." class="mb-3" />
            <div class="mb-0">
              <CFormLabel for="techStackInput">Tech stack</CFormLabel>
              <CChipInput
                id="techStackInput"
                name="techStack"
                placeholder="Add package..."
                :defaultValue="['Vue', 'Vite']"
              />
              <CFormText>Press Enter or comma to add a value.</CFormText>
            </div>
          </DocsExample>
        </CCardBody>
      </CCard>

      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Chip Input</strong> <small>Disabled and readonly</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Use the <code>disabled</code> prop to block interaction entirely, or
            <code>readOnly</code> to keep values visible while preventing changes.
          </p>
          <DocsExample href="forms/chip-input/#disabled">
            <CChipInput
              disabled
              :removable="false"
              placeholder="Input disabled"
              :defaultValue="['Read only', 'Locked']"
              class="mb-3"
            />
            <CChipInput
              readOnly
              placeholder="Read-only values"
              :defaultValue="['JavaScript', 'TypeScript']"
            />
          </DocsExample>
        </CCardBody>
      </CCard>

      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Chip Input</strong> <small>Form-friendly examples</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            The component integrates well with ordinary forms, including helper text and predefined
            values.
          </p>
          <DocsExample href="forms/chip-input/#with-label">
            <form class="row g-3">
              <div class="col-12">
                <CFormLabel for="recipientsInput">Recipients</CFormLabel>
                <CChipInput
                  id="recipientsInput"
                  name="recipients"
                  placeholder="Add email..."
                  :defaultValue="['olivia@coreui.io', 'ethan@coreui.io']"
                />
                <CFormText>Add one address at a time and press Enter.</CFormText>
              </div>
              <div class="col-12">
                <CFormLabel for="categoriesInput">Categories</CFormLabel>
                <CChipInput
                  id="categoriesInput"
                  name="categories"
                  placeholder="Add category..."
                  :defaultValue="['Product', 'Design', 'Docs']"
                  chipClassName="chip-outline"
                />
              </div>
            </form>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'ChipInput',
  setup() {
    const getChipClassName = (value) => {
      const colorMap = {
        Feature: 'chip-primary',
        Approved: 'chip-success',
        'Needs review': 'chip-warning',
        Blocking: 'chip-danger',
      }
      return colorMap[value] || ''
    }

    return {
      getChipClassName,
    }
  },
}
</script>
