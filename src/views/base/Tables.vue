<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Tables</strong>
        </CCardHeader>
        <CCardBody>
            <h4 class="mt-4">Vue table basic example</h4>
            <Example href="components/table.html#overview">
                <CTable>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>


            <h4 class="mt-4">Vue table variants</h4>
            <Example href="components/table.html#variants">
                <CTable>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">Default</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="primary">
                        <CTableHeaderCell scope="row">Primary</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="secondary">
                        <CTableHeaderCell scope="row">Secondary</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="success">
                        <CTableHeaderCell scope="row">Success</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="danger">
                        <CTableHeaderCell scope="row">Danger</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="warning">
                        <CTableHeaderCell scope="row">Warning</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="info">
                        <CTableHeaderCell scope="row">Info</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="light">
                        <CTableHeaderCell scope="row">Light</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow color="dark">
                        <CTableHeaderCell scope="row">Dark</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>


            <h4 class="mt-4">Vue table striped rows</h4>
            <Example href="components/table.html#striped-rows">
                <CTable striped>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
            <Example href="components/table.html#striped-rows">
                <CTable color="dark" striped>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
            <Example href="components/table.html#striped-rows">
                <CTable color="success" striped>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>

            <h4 class="mt-4">Vue table hoverable rows</h4>
            <Example href="components/table.html#hoverable-rows">
                <CTable hover>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
            <Example href="components/table.html#hoverable-rows">
                <CTable color="dark" hover>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
            <Example href="components/table.html#hoverable-rows">
                <CTable striped hover>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>


            <h4 class="mt-4">Highlight a table row or cell</h4>
            <Example href="components/table.html#active-tables">
                <CTable>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow active>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2" active>Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
            <Example href="components/table.html#active-tables">
                <CTable color="dark">
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow active>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2" active>Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>


            <h4 class="mt-4">Bordered tables</h4>
            <Example href="components/table.html#bordered-tables">
                <CTable bordered>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
            <Example href="components/table.html#bordered-tables">
                <CTable bordered borderColor="primary">
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>


            <h4 class="mt-4">Tables without borders</h4>
            <Example href="components/table.html#tables-without-borders">
                <CTable borderless>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
            <Example href="components/table.html#tables-without-borders">
                <CTable color="dark" borderless>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>

            <h4 class="mt-4">Small tables</h4>
            <Example href="components/table.html#small-tables">
                <CTable small>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>


            <h4 class="mt-4">Vertical alignment</h4>
            <Example href="components/table.html#vertical-alignment">
                <CTable align="middle" reponsive>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col" class="w-25">Heading 1</CTableHeaderCell>
                            <CTableHeaderCell scope="col" class="w-25">Heading 2</CTableHeaderCell>
                            <CTableHeaderCell scope="col" class="w-25">Heading 3</CTableHeaderCell>
                            <CTableHeaderCell scope="col" class="w-25">Heading 4</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                            <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
                            <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
                            <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
                            <CTableDataCell>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells.</CTableDataCell>
                        </CTableRow>
                        <CTableRow align="bottom">
                            <CTableDataCell>This cell inherits <code>vertical-align: bottom;</code> from the table row</CTableDataCell>
                            <CTableDataCell>This cell inherits <code>vertical-align: bottom;</code> from the table row</CTableDataCell>
                            <CTableDataCell>This cell inherits <code>vertical-align: bottom;</code> from the table row</CTableDataCell>
                            <CTableDataCell>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells.</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                            <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
                            <CTableDataCell>This cell inherits <code>vertical-align: middle;</code> from the table</CTableDataCell>
                            <CTableDataCell align="top">This cell is aligned to the top.</CTableDataCell>
                            <CTableDataCell>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonsCTableRowate how the vertical alignment works in the preceding cells.</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable> 
            </Example>

            <h4 class="mt-4">Nesting tables</h4>
            <Example href="components/table.html#nesting">
                <CTable striped>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell colspan="4">
                            <CTable>
                            <CTableHead>
                                <CTableRow>
                                <CTableHeaderCell scope="col">Header</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Header</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Header</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                <CTableHeaderCell scope="row">A</CTableHeaderCell>
                                <CTableDataCell>First</CTableDataCell>
                                <CTableDataCell>Last</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                <CTableHeaderCell scope="row">B</CTableHeaderCell>
                                <CTableDataCell>First</CTableDataCell>
                                <CTableDataCell>Last</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                <CTableHeaderCell scope="row">C</CTableHeaderCell>
                                <CTableDataCell>First</CTableDataCell>
                                <CTableDataCell>Last</CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                            </CTable>
                        </CTableHeaderCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>

            <h4 class="mt-4">Color table head</h4>
            <Example href="components/table.html#table-head">
                <CTable>
                    <CTableHead color="light">
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell>Larry</CTableDataCell>
                        <CTableDataCell>the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable> 
            </Example>
            <Example href="components/table.html#table-head">
                <CTable>
                    <CTableHead color="dark">
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>


            <h4 class="mt-4">Table foot</h4>
            <Example href="components/table.html#table-foot">
                <CTable>
                    <CTableHead color="light">
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                    <CTableHead>
                        <CTableRow>
                        <CTableDataCell>Footer</CTableDataCell>
                        <CTableDataCell>Footer</CTableDataCell>
                        <CTableDataCell>Footer</CTableDataCell>
                        <CTableDataCell>Footer</CTableDataCell>
                        </CTableRow>
                    </CTableHead>
                </CTable>
            </Example>

            <h4 class="mt-4">Captions in table</h4>
            <Example href="components/table.html#captions">
                <CTable>
                    <CTableCaption>List of users</CTableCaption>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell>Larry</CTableDataCell>
                        <CTableDataCell>the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
            <Example href="components/table.html#captions">
                <CTable caption="top">
                    <CTableCaption>List of users</CTableCaption>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell>Larry</CTableDataCell>
                        <CTableDataCell>the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>

            <h4 class="mt-4">Responsive tables</h4>
            <Example href="components/table.html#responsive-tables">
                <CTable responsive>
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
            <Example href="components/table.html#responsive-tables">
                <CTable responsive="sm">
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
            <Example href="components/table.html#responsive-tables">
                <CTable responsive="md">
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
            <Example href="components/table.html#responsive-tables">
                <CTable responsive="lg">
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
            <Example href="components/table.html#responsive-tables">
                <CTable responsive="xl">
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
            <Example href="components/table.html#responsive-tables">
                <CTable responsive="xxl">
                    <CTableHead>
                        <CTableRow>
                        <CTableHeaderCell scope="col">#</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                        <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        <CTableDataCell>Cell</CTableDataCell>
                        </CTableRow>
                    </CTableBody>
                </CTable>
            </Example>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Tables",
};
</script>