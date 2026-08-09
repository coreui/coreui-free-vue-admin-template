<template>
  <CRow :xs="{ gutter: 4 }">
    <CCol :sm="6" :lg="4">
      <CWidgetStatsD
        style="--cui-card-cap-bg: #3b5998"
        :values="[
          { title: 'friends', value: '89k' },
          { title: 'feeds', value: '459' },
        ]"
      >
        <template #icon><CIcon icon="cib-facebook" height="52" class="my-4 text-white" /></template>
      </CWidgetStatsD>
    </CCol>
    <CCol :sm="6" :lg="4">
      <CWidgetStatsD
        style="--cui-card-cap-bg: #ff0132"
        :values="[
          { title: 'subscribers', value: '973k' },
          { title: 'new comments', value: '1.792' },
        ]"
      >
        <template #icon><CIcon icon="cib-youtube" height="52" class="my-4 text-white" /></template>
      </CWidgetStatsD>
    </CCol>
    <CCol :sm="6" :lg="4">
      <CWidgetStatsD
        style="--cui-card-cap-bg: #4875b4"
        :values="[
          { title: 'contacts', value: '500+' },
          { title: 'feeds', value: '292' },
        ]"
      >
        <template #icon><CIcon icon="cib-linkedin" height="52" class="my-4 text-white" /></template>
      </CWidgetStatsD>
    </CCol>
  </CRow>
</template>
