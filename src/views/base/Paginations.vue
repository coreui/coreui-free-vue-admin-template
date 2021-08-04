<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Paginations</strong>
        </CCardHeader>
        <CCardBody>
            <h4 class="mt-4">Basic example</h4>
            <Example href="components/pagination.html#overview">
                <CPagination aria-label="Page navigation example">
                    <CPaginationItem href="#">Previous</CPaginationItem>
                    <CPaginationItem href="#">1</CPaginationItem>
                    <CPaginationItem href="#">2</CPaginationItem>
                    <CPaginationItem href="#">3</CPaginationItem>
                    <CPaginationItem href="#">Next</CPaginationItem>
                </CPagination>
            </Example>

            <h4 class="mt-4">Vue pagination with icons</h4>
            <Example href="components/pagination.html#working-with-icons">
                <CPagination aria-label="Page navigation example">
                    <CPaginationItem aria-label="Previous" href="#"><span aria-hidden="true">&laquo;</span></CPaginationItem>
                    <CPaginationItem href="#">1</CPaginationItem>
                    <CPaginationItem href="#">2</CPaginationItem>
                    <CPaginationItem href="#">3</CPaginationItem>
                    <CPaginationItem aria-label="Next" href="#"><span aria-hidden="true">&raquo;</span></CPaginationItem>
                </CPagination>
            </Example>

            <h4 class="mt-4">Pagination disabled and active states</h4>
            <Example href="components/pagination.html#disabled-and-active-states">
                <CPagination aria-label="Page navigation example">
                    <CPaginationItem aria-label="Previous" href="#" disabled><span aria-hidden="true">&laquo;</span></CPaginationItem>
                    <CPaginationItem href="#" active>1</CPaginationItem>
                    <CPaginationItem href="#">2</CPaginationItem>
                    <CPaginationItem href="#">3</CPaginationItem>
                    <CPaginationItem aria-label="Next" href="#"><span aria-hidden="true">&raquo;</span></CPaginationItem>
                </CPagination>
            </Example>

            <h4 class="mt-4">Pagination sizing</h4>
            <Example href="components/pagination.html#sizing">
                <CPagination size="lg" aria-label="Page navigation example">
                    <CPaginationItem href="#">Previous</CPaginationItem>
                    <CPaginationItem href="#">1</CPaginationItem>
                    <CPaginationItem href="#">2</CPaginationItem>
                    <CPaginationItem href="#">3</CPaginationItem>
                    <CPaginationItem href="#">Next</CPaginationItem>
                </CPagination>
            </Example>
            <Example href="components/pagination.html#sizing">
                <CPagination size="sm" aria-label="Page navigation example">
                    <CPaginationItem href="#">Previous</CPaginationItem>
                    <CPaginationItem href="#">1</CPaginationItem>
                    <CPaginationItem href="#">2</CPaginationItem>
                    <CPaginationItem href="#">3</CPaginationItem>
                    <CPaginationItem href="#">Next</CPaginationItem>
                </CPagination>
            </Example>


            <h4 class="mt-4">Vue pagination alignment</h4>
            <p>Pagination alignment enter</p>
            <Example href="components/pagination.html#alignment">
                <CPagination class="justify-content-center" aria-label="Page navigation example">
                    <CPaginationItem disabled>Previous</CPaginationItem>
                    <CPaginationItem href="#">1</CPaginationItem>
                    <CPaginationItem href="#">2</CPaginationItem>
                    <CPaginationItem href="#">3</CPaginationItem>
                    <CPaginationItem href="#">Next</CPaginationItem>
                </CPagination>
            </Example>
            <p>Pagination alignment end</p>
            <Example href="components/pagination.html#alignment">
                <CPagination class="justify-content-center" aria-label="Page navigation example">
                    <CPaginationItem disabled>Previous</CPaginationItem>
                    <CPaginationItem href="#">1</CPaginationItem>
                    <CPaginationItem href="#">2</CPaginationItem>
                    <CPaginationItem href="#">3</CPaginationItem>
                    <CPaginationItem href="#">Next</CPaginationItem>
                </CPagination>
            </Example>

        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Paginations",
};
</script>