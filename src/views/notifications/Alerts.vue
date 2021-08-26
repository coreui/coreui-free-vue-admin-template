<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Alerts</strong>
        </CCardHeader>
        <CCardBody>
            <h4 class="mt-4">Alerts examples</h4>
            <Example href="components/alert.html#examples">
                <CAlert color="primary">A simple primary alert—check it out!</CAlert>
                <CAlert color="secondary">A simple secondary alert—check it out!</CAlert>
                <CAlert color="success">A simple success alert—check it out!</CAlert>
                <CAlert color="danger">A simple danger alert—check it out!</CAlert>
                <CAlert color="warning">A simple warning alert—check it out!</CAlert>
                <CAlert color="info">A simple info alert—check it out!</CAlert>
                <CAlert color="light">A simple light alert—check it out!</CAlert>
                <CAlert color="dark">A simple dark alert—check it out!</CAlert>
            </Example>

            <h4 class="mt-4">Link color</h4>
            <Example href="components/alert.html#link-color">
                <CAlert color="primary">
                    A simple primary alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
                </CAlert>
                <CAlert color="secondary">
                    A simple secondary alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
                </CAlert>
                <CAlert color="success">
                    A simple success alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
                </CAlert>
                <CAlert color="danger">
                    A simple danger alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
                </CAlert>
                <CAlert color="warning">
                    A simple warning alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
                </CAlert>
                <CAlert color="info">
                    A simple info alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
                </CAlert>
                <CAlert color="light">
                    A simple light alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
                </CAlert>
                <CAlert color="dark">
                    A simple dark alert with <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you like.
                </CAlert>
            </Example>

            <h4 class="mt-4">Additional content</h4>
            <Example href="components/alert.html#additional-content">
                <CAlert color="success" v-bind:visible="true">
                    <CAlertHeading>Well done!</CAlertHeading>
                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                    <hr />
                    <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </CAlert>
            </Example>

            <h4 class="mt-4">Dismissing</h4>
            <Example href="components/alert.html#dismissing">
                <CAlert color="warning" dismissible @dismiss="alert">
                    <strong>Go right ahead</strong> and click that dimiss over there on the right.
                </CAlert>
            </Example>


        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
    name: "Alerts",
    methods: {
      alert: function(){
        alert("👋 Well, hi there! Thanks for dismissing me.")
      },
    }
};
</script>