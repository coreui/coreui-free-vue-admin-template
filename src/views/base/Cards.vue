<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Cards</strong>
        </CCardHeader>
        <CCardBody>
            <h4>Standard</h4>
            <Example href="components/cards.html#example">
                <CCard style="width: 18rem">
                <CCardImage component="svg" orientation="top" class="docs-placeholder-img" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></CCardImage>
                <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
                </CCardBody>
                </CCard>
            </Example>
            <h4 class="mt-4">Horizontal</h4>
            <Example href="components/cards.html#horizontal">
                <CCard class="mb-3" style="max=width: 540px">
                <CRow class="g-0">
                    <CCol :md="4">
                    <CCardImage component="svg" class="docs-placeholder-img rounded-0" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></CCardImage>
                    </CCol>
                    <CCol :md="8">
                    <CCardBody>
                        <CCardTitle>Card title</CCardTitle>
                        <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
                        <CCardText><small class="text-muted">Last updated 3 mins ago</small></CCardText>
                    </CCardBody>
                    </CCol>
                </CRow>
                </CCard>
            </Example>            

            <h4 class="mt-4">Styles</h4>
            <Example href="components/cards.html#card-styles">
                <CRow>
                    <template v-for="(item) in [
                    { color: 'primary', textColor: 'white' },
                    { color: 'secondary', textColor: 'white' },
                    { color: 'success', textColor: 'white' },
                    { color: 'danger', textColor: 'white' },
                    { color: 'warning' },
                    { color: 'info', textColor: 'white' },
                    { color: 'light' },
                    { color: 'dark', textColor: 'white' }
                    ]">
                    <CCol lg="2" md="3" sm="4" xs="6">
                        <CCard :color="item.color" :textColor="item.textColor" class="mb-3" style="max-width: 18rem">
                            <CCardHeader>Header</CCardHeader>
                            <CCardBody>
                            <CCardTitle>{{item.color}} card title</CCardTitle>
                            <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    </template>
                    <template v-for="(item) in [
                    { color: 'primary', textColor: 'primary' },
                    { color: 'secondary', textColor: 'secondary' },
                    { color: 'success', textColor: 'success' },
                    { color: 'danger', textColor: 'danger' },
                    { color: 'warning', textColor: 'warning' },
                    { color: 'info', textColor: 'info' },
                    { color: 'light'},
                    { color: 'dark'}
                    ]">
                    <CCol lg="2" md="3" sm="4" xs="6">
                        <CCard :textColor="item.textColor" class="mb-3" :class="'border-' + item.color" style="max-width: 18rem">
                            <CCardHeader>Header</CCardHeader>
                            <CCardBody>
                            <CCardTitle>{{item.color}} card title</CCardTitle>
                            <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    </template>
                    <template v-for="(item) in [
                    { color: 'primary', textColor: 'primary' },
                    { color: 'secondary', textColor: 'secondary' },
                    { color: 'success', textColor: 'success' },
                    { color: 'danger', textColor: 'danger' },
                    { color: 'warning', textColor: 'warning' },
                    { color: 'info', textColor: 'info' },
                    { color: 'light'},
                    { color: 'dark'}
                    ]">
                    <CCol lg="2" md="3" sm="4" xs="6">
                        <CCard :textColor="item.textColor" class="mb-3 border-top-3" :class="'border-top-' + item.color" style="max-width: 18rem">
                            <CCardHeader>Header</CCardHeader>
                            <CCardBody>
                            <CCardTitle>{{item.color}} card title</CCardTitle>
                            <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    </template>
                </CRow>
            </Example>  
            <h4 class="mt-4">Card groups</h4>
            <Example href="components/cards.html#card-groups">
                <CCardGroup>
                <CCard>
                    <CCardImage component="svg" orientation="top" class="docs-placeholder-img" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></CCardImage>
                    <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CCardText>
                    </CCardBody>
                    <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
                </CCard>
                <CCard>
                    <CCardImage component="svg" orientation="top" class="docs-placeholder-img" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></CCardImage>
                    <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>This card has supporting text below as a natural lead-in to additional content.</CCardText>
                    </CCardBody>
                    <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
                </CCard>
                <CCard>
                    <CCardImage component="svg" orientation="top" class="docs-placeholder-img" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></CCardImage>
                    <CCardBody>
                    <CCardTitle>Card title</CCardTitle>
                    <CCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CCardText>
                    </CCardBody>
                    <CCardFooter><small class="text-muted">Last updated 3 mins ago</small></CCardFooter>
                </CCard>
                </CCardGroup>
            </Example>

        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Cards",
};
</script>