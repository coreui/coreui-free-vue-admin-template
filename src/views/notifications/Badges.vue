<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Badges</strong>
        </CCardHeader>
        <CCardBody>
            <h4 class="mt-4">Basic usage</h4>
            <Example href="components/badge.html#basic-usage">
                <h1>Example heading <CBadge color="secondary">New</CBadge></h1>
                <h2>Example heading <CBadge color="secondary">New</CBadge></h2>
                <h3>Example heading <CBadge color="secondary">New</CBadge></h3>
                <h4>Example heading <CBadge color="secondary">New</CBadge></h4>
                <h5>Example heading <CBadge color="secondary">New</CBadge></h5>
                <h6>Example heading <CBadge color="secondary">New</CBadge></h6>
            </Example>
            <Example href="components/badge.html#basic-usage">
                <CButton color="primary">
                    Notifications <CBadge color="secondary">4</CBadge>
                </CButton>
                <br>
                <CButton color="primary">
                    Profile <CBadge color="secondary">9</CBadge>
                    <span class="visually-hidden">unread messages</span>
                </CButton>

            </Example>

            <h4 class="mt-4">Contextual variations</h4>
            <Example href="components/badge.html#contextual-variations">
                <CBadge color="primary">primary</CBadge>
                <CBadge color="success">success</CBadge>
                <CBadge color="danger">danger</CBadge>
                <CBadge color="warning">warning</CBadge>
                <CBadge color="info">info</CBadge>
                <CBadge color="light">light</CBadge>
                <CBadge color="dark">dark</CBadge>
            </Example>

            <h4 class="mt-4">Pill badges</h4>
            <Example href="components/badge.html#pill-badges">
                <CBadge color="primary" shape="rounded-pill">primary</CBadge>
                <CBadge color="success" shape="rounded-pill">success</CBadge>
                <CBadge color="danger" shape="rounded-pill">danger</CBadge>
                <CBadge color="warning" shape="rounded-pill">warning</CBadge>
                <CBadge color="info" shape="rounded-pill">info</CBadge>
                <CBadge color="light" shape="rounded-pill">light</CBadge>
                <CBadge color="dark" shape="rounded-pill">dark</CBadge>
            </Example>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Badges",
};
</script>