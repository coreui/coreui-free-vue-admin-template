<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Breadcrumb</strong>
        </CCardHeader>
        <CCardBody>
          <Example href="breadcrumbs">
            <CBreadcrumb>
              <CBreadcrumbItem active>Home</CBreadcrumbItem>
            </CBreadcrumb>
            <CBreadcrumb>
              <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
              <CBreadcrumbItem active>Library</CBreadcrumbItem>
            </CBreadcrumb>
            <CBreadcrumb>
              <CBreadcrumbItem href="#">Home</CBreadcrumbItem>
              <CBreadcrumbItem href="#">Library</CBreadcrumbItem>
              <CBreadcrumbItem active>Data</CBreadcrumbItem>
            </CBreadcrumb>
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
