<template>
  <CRow>
    <CCol :xs="12">
      <DocsComponents href="components/breadcrumb.html" />
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Breadcrumb</strong>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            The breadcrumb navigation provides links back to each previous page the user navigated
            through and shows the current location in a website or an application. You don’t have to
            add separators, because they automatically added in CSS through
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">
              <code>::before</code>
            </a>
            and
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content">
              <code>content</code>
            </a>
            .
          </p>
          <DocsExample href="components/breadcrumb.html">
            <CBreadcrumb>
              <CBreadcrumbItem>
                <CLink href="#">Home</CLink>
              </CBreadcrumbItem>
              <CBreadcrumbItem active>Library</CBreadcrumbItem>
            </CBreadcrumb>
            <CBreadcrumb>
              <CBreadcrumbItem>
                <CLink href="#">Home</CLink>
              </CBreadcrumbItem>
              <CBreadcrumbItem>
                <CLink href="#">Library</CLink>
              </CBreadcrumbItem>
              <CBreadcrumbItem active>Data</CBreadcrumbItem>
            </CBreadcrumb>
            <CBreadcrumb>
              <CBreadcrumbItem>
                <CLink href="#">Home</CLink>
              </CBreadcrumbItem>
              <CBreadcrumbItem>
                <CLink href="#">Library</CLink>
              </CBreadcrumbItem>
              <CBreadcrumbItem>
                <CLink href="#">Data</CLink>
              </CBreadcrumbItem>
              <CBreadcrumbItem active>Bootstrap</CBreadcrumbItem>
            </CBreadcrumb>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
