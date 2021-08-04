<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Progress Bar</strong>
        </CCardHeader>
        <CCardBody>
            <h4 class="mt-4">Progress bar example</h4>
            <Example href="components/progress.html#basic-usage">
                <CProgress class="mb-3">
                    <CProgressBar :value="0"/>
                </CProgress>
                <CProgress class="mb-3">
                    <CProgressBar :value="25"/>
                </CProgress>
                <CProgress class="mb-3">
                    <CProgressBar :value="50"/>
                </CProgress>
                <CProgress class="mb-3">
                    <CProgressBar :value="75"/>
                </CProgress>
                <CProgress class="mb-3">
                    <CProgressBar :value="100"/>
                </CProgress>
            </Example>

            <h4 class="mt-4">Progress bar with labels</h4>
            <Example href="components/progress.html#labels">
                <CProgress class="mb-3">
                    <CProgressBar :value="25">25%</CProgressBar>
                </CProgress>
            </Example>

            <h4 class="mt-4">Progress bar with set height</h4>
            <Example href="components/progress.html#height">
                <CProgress height="1" class="mb-3">
                    <CProgressBar :value="25"></CProgressBar>
                </CProgress>
                <CProgress height="20" class="mb-3">
                    <CProgressBar :value="25"></CProgressBar>
                </CProgress>
            </Example>

            <h4 class="mt-4">Progress bar color</h4>
            <Example href="components/progress.html#backgrounds">
                <CProgress class="mb-3">
                    <CProgressBar color="success" :value="25"/>
                </CProgress>
                <CProgress class="mb-3">
                    <CProgressBar color="info" :value="50"/>
                </CProgress>
                <CProgress class="mb-3">
                    <CProgressBar color="warning" :value="75"/>
                </CProgress>
                <CProgress class="mb-3">
                    <CProgressBar color="danger" :value="100"/>
                </CProgress>
            </Example>

            <h4 class="mt-4">Progress bar multiple bars</h4>
            <Example href="components/progress.html#multiple-bars">
                <CProgress class="mb-3">
                    <CProgressBar :value="15"/>
                    <CProgressBar color="success" :value="30"/>
                    <CProgressBar color="info" :value="20"/>
                </CProgress>
            </Example>

            <h4 class="mt-4">Progress bar striped</h4>
            <Example href="components/progress.html#striped">
                <CProgress class="mb-3">
                    <CProgressBar color="success" variant="striped" :value="25"/>
                </CProgress>
                <CProgress class="mb-3">
                    <CProgressBar color="info" variant="striped" :value="50"/>
                </CProgress>
                <CProgress class="mb-3">
                    <CProgressBar color="warning" variant="striped" :value="75"/>
                </CProgress>
                <CProgress class="mb-3">
                    <CProgressBar color="danger" variant="striped" :value="100"/>
                </CProgress>
            </Example>          

            <h4 class="mt-4">Progress bar animated stripes</h4>
            <Example href="components/progress.html#animated-stripes">
                <CProgress class="mb-3">
                    <CProgressBar color="success" variant="striped" animated :value="25"/>
                </CProgress>
                <CProgress class="mb-3">
                    <CProgressBar color="info" variant="striped" animated :value="50"/>
                </CProgress>
                <CProgress class="mb-3">
                    <CProgressBar color="warning" variant="striped" animated :value="75"/>
                </CProgress>
                <CProgress class="mb-3">
                    <CProgressBar color="danger" variant="striped" animated :value="100"/>
                </CProgress>
            </Example>      

        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Breadcrumbs",
};
</script>