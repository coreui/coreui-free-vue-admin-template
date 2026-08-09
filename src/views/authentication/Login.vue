<script setup>
import { RouterLink } from 'vue-router'

import { apple } from '@/assets/brand/apple'
import { google } from '@/assets/brand/google'
import { logo } from '@/assets/brand/logo'
import { eye } from '@/assets/icons/eye'
</script>

<template>
  <div class="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8" :lg="6" :xl="5">
          <div class="d-flex flex-column gap-4">
            <div class="text-center">
              <CIcon :icon="logo" :height="48" />
            </div>
            <CCard class="p-4">
              <CCardBody class="d-flex flex-column gap-4">
                <h2 class="h5 text-center mb-0">Login to your account</h2>
                <CForm class="row gy-3">
                  <CCol :xs="12">
                    <CFormLabel for="email">Email address</CFormLabel>
                    <CFormInput
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      autocomplete="email"
                    />
                  </CCol>
                  <CCol :xs="12">
                    <div class="d-flex justify-content-between">
                      <CFormLabel for="password">Password</CFormLabel>
                      <RouterLink to="/authentication/reset-password">
                        I forgot password
                      </RouterLink>
                    </div>
                    <CInputGroup>
                      <CFormInput
                        id="password"
                        type="password"
                        placeholder="Your password"
                        autocomplete="current-password"
                      />
                      <CInputGroupText>
                        <CTooltip content="Show password">
                          <template #toggler="{ id, on }">
                            <CButton
                              type="button"
                              color="link"
                              class="p-0 link-secondary"
                              aria-label="Show password"
                              :aria-describedby="id"
                              v-on="on"
                            >
                              <CIcon :icon="eye" size="sm" />
                            </CButton>
                          </template>
                        </CTooltip>
                      </CInputGroupText>
                    </CInputGroup>
                  </CCol>
                  <CCol :xs="12">
                    <CFormCheck id="rememberMe" label="Remember me on this device" />
                  </CCol>
                  <CCol :xs="12">
                    <CButton color="primary" type="submit" class="w-100"> Sign in </CButton>
                  </CCol>
                </CForm>
                <div class="position-relative">
                  <hr />
                  <div
                    class="position-absolute top-50 start-50 translate-middle bg-body px-2 text-body-tertiary text-uppercase small"
                  >
                    or
                  </div>
                </div>
                <CRow>
                  <CCol>
                    <CButton type="button" variant="outline" class="w-100">
                      <CIcon :icon="google" class="me-1" />
                      Login with Google
                    </CButton>
                  </CCol>
                  <CCol>
                    <CButton type="button" variant="outline" class="w-100">
                      <CIcon :icon="apple" class="me-1" />
                      Login with Apple
                    </CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
            <div class="text-center text-body-secondary">
              Need an account? <RouterLink to="/authentication/register">Sign up</RouterLink>
            </div>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
