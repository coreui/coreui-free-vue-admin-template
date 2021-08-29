<template>
  <CRow>
    <CCol :xs="12">
      <DocsCallout name="Modal" href="components/spinner" />
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Modals</strong>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Below is a static modal example (meaning its
            <code>position</code> and <code>display</code> have been
            overridden). Included are the modal header, modal body (required for
            <code>padding</code>), and modal footer (optional). We ask that you
            include modal headers with dismiss actions whenever possible, or
            provide another explicit dismiss action.
          </p>
          <DocsExample href="components/modal.html#modal-components">
            <CModal
              class="show d-block position-static"
              :backdrop="false"
              :keyboard="false"
              visible
            >
              <CModalHeader dismiss>
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>Modal body text goes here.</CModalBody>
              <CModalFooter>
                <CButton color="secondary">Close</CButton>
                <CButton color="primary">Save changes</CButton>
              </CModalFooter>
            </CModal>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Modal</strong> <small>Live demo</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Toggle a working modal demo by clicking the button below. It will
            slide down and fade in from the top of the page.
          </p>
          <DocsExample href="components/modal.html#live-demo">
            <CButton
              color="primary"
              @click="
                () => {
                  visibleLiveDemo = true
                }
              "
              >Launch demo modal</CButton
            >
            <CModal
              :visible="visibleLiveDemo"
              @dismiss="
                () => {
                  visibleLiveDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    visibleLiveDemo = false
                  }
                "
              >
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody
                >Woohoo, you're reading this text in a modal!</CModalBody
              >
              <CModalFooter>
                <CButton
                  color="secondary"
                  @click="
                    () => {
                      visibleLiveDemo = false
                    }
                  "
                >
                  Close
                </CButton>
                <CButton color="primary">Save changes</CButton>
              </CModalFooter>
            </CModal>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Modal</strong> <small>Static backdrop</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            If you don’t provide an <code>onDimsiss</code> handler to the Modal
            component, your modal will behave as though the backdrop is static,
            meaning it will not close when clicking outside it. Click the button
            below to try it.
          </p>
          <DocsExample href="components/modal.html#static-backdrop">
            <CButton
              color="primary"
              @click="
                () => {
                  visibleStaticBackdropDemo = true
                }
              "
              >Launch demo modal</CButton
            >
            <CModal
              backdrop="static"
              :visible="visibleStaticBackdropDemo"
              @dismiss="
                () => {
                  visibleStaticBackdropDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    visibleStaticBackdropDemo = false
                  }
                "
              >
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody
                >Woohoo, you're reading this text in a modal!</CModalBody
              >
              <CModalFooter>
                <CButton
                  color="secondary"
                  @click="
                    () => {
                      visibleStaticBackdropDemo = false
                    }
                  "
                >
                  Close
                </CButton>
                <CButton color="primary">Save changes</CButton>
              </CModalFooter>
            </CModal>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Modal</strong> <small>Scrolling long content</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            If you don’t provide an <code>onDimsiss</code> handler to the Modal
            component, your modal will behave as though the backdrop is static,
            meaning it will not close when clicking outside it. Click the button
            below to try it.
          </p>
          <DocsExample href="components/modal.html#scrolling-long-content">
            <CButton
              color="primary"
              @click="
                () => {
                  visibleScrollingLongContentDemo = true
                }
              "
              >Launch demo modal</CButton
            >
            <CModal
              :visible="visibleScrollingLongContentDemo"
              @dismiss="
                () => {
                  visibleScrollingLongContentDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    visibleScrollingLongContentDemo = false
                  }
                "
              >
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
              </CModalBody>
            </CModal>
          </DocsExample>
          <p class="text-medium-emphasis small">
            You can also create a scrollable modal that allows scroll the modal
            body by adding
            <code>scrollable</code> prop.
          </p>
          <DocsExample href="components/modal.html#scrolling-long-content">
            <CButton
              color="primary"
              @click="
                () => {
                  visibleScrollableDemo = true
                }
              "
              >Launch demo modal</CButton
            >
            <CModal
              scrollable
              :visible="visibleScrollableDemo"
              @dismiss="
                () => {
                  visibleScrollableDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    visibleScrollableDemo = false
                  }
                "
              >
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Vivamus sagittis lacus vel augue laoreet
                  rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                  fringilla.
                </p>
              </CModalBody>
            </CModal>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Modal</strong> <small>Vertically centered</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Add <code>alignment=&#34;center&#34;</code> to
            <code>&lt;CModal&gt;</code> to vertically center the modal.
          </p>
          <DocsExample href="components/modal.html#vertically-centered">
            <CButton
              color="primary"
              @click="
                () => {
                  visibleVerticallyCenteredDemo = true
                }
              "
              >Vertically centered modal</CButton
            >
            <CModal
              alignment="center"
              :visible="visibleVerticallyCenteredDemo"
              @dismiss="
                () => {
                  visibleVerticallyCenteredDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    visibleVerticallyCenteredDemo = false
                  }
                "
              >
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </CModalBody>
              <CModalFooter>
                <CButton
                  color="secondary"
                  @click="
                    () => {
                      visibleVerticallyCenteredDemo = false
                    }
                  "
                >
                  Close
                </CButton>
                <CButton color="primary">Save changes</CButton>
              </CModalFooter>
            </CModal>
          </DocsExample>

          <DocsExample href="components/modal.html#vertically-centered">
            <CButton
              color="primary"
              @click="
                () => {
                  visibleVerticallyCenteredScrollableDemo = true
                }
              "
              >Vertically centered scrollable modal</CButton
            >
            <CModal
              alignment="center"
              scrollable
              :visible="visibleVerticallyCenteredScrollableDemo"
              @dismiss="
                () => {
                  visibleVerticallyCenteredScrollableDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    visibleVerticallyCenteredScrollableDemo = false
                  }
                "
              >
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </CModalBody>
              <CModalFooter>
                <CButton
                  color="secondary"
                  @click="
                    () => {
                      visibleVerticallyCenteredScrollableDemo = false
                    }
                  "
                >
                  Close
                </CButton>
                <CButton color="primary">Save changes</CButton>
              </CModalFooter>
            </CModal>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Modal</strong> <small>Tooltips and popovers</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            <code>&lt;CTooltips&gt;</code> and
            <code>&lt;CPopovers&gt;</code> can be placed within modals as
            needed. When modals are closed, any tooltips and popovers within are
            also automatically dismissed.
          </p>
          <DocsExample href="components/modal.html#tooltips-and-popovers">
            <CButton
              color="primary"
              @click="
                () => {
                  tooltipsAndPopoversDemo = true
                }
              "
              >Launch demo modal</CButton
            >
            <CModal
              :visible="tooltipsAndPopoversDemo"
              @dismiss="
                () => {
                  tooltipsAndPopoversDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    tooltipsAndPopoversDemo = false
                  }
                "
              >
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <h5>Popover in a modal</h5>
                <p>
                  This
                  <CButton
                    color="secondary"
                    v-c-popover="{
                      header: 'Popover title',
                      content: 'Popover body content is set in this property.',
                    }"
                    >button</CButton
                  >
                </p>
                <hr />
                <h5>Tooltips in a modal</h5>
                <p>
                  <CLink v-c-tooltip="'Tooltip'">This link</CLink> and
                  <CLink v-c-tooltip="'Tooltip'">that link</CLink> have tooltips
                  on hover.
                </p>
              </CModalBody>
              <CModalFooter>
                <CButton
                  color="secondary"
                  @click="
                    () => {
                      tooltipsAndPopoversDemo = false
                    }
                  "
                >
                  Close
                </CButton>
                <CButton color="primary">Save changes</CButton>
              </CModalFooter>
            </CModal>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Modal</strong> <small>Optional sizes</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Modals have three optional sizes, available via modifier classes to
            be placed on a
            <code>&lt;CModal&gt;</code>. These sizes kick in at certain
            breakpoints to avoid horizontal scrollbars on narrower viewports.
          </p>
          <table class="table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Property size</th>
                <th>Modal max-width</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Small</td>
                <td>
                  <code>&#39;sm&#39;</code>
                </td>
                <td>
                  <code>300px</code>
                </td>
              </tr>
              <tr>
                <td>Default</td>
                <td class="text-medium-emphasis">None</td>
                <td>
                  <code>500px</code>
                </td>
              </tr>
              <tr>
                <td>Large</td>
                <td>
                  <code>&#39;lg&#39;</code>
                </td>
                <td>
                  <code>800px</code>
                </td>
              </tr>
              <tr>
                <td>Extra large</td>
                <td>
                  <code>&#39;xl&#39;</code>
                </td>
                <td>
                  <code>1140px</code>
                </td>
              </tr>
            </tbody>
          </table>
          <DocsExample href="components/modal.html#optional-sizes">
            <CButton
              color="primary"
              @click="
                () => {
                  xlDemo = true
                }
              "
              >Extra large modal</CButton
            >
            <CButton
              color="primary"
              @click="
                () => {
                  lgDemo = true
                }
              "
              >Large modal</CButton
            >
            <CButton
              color="primary"
              @click="
                () => {
                  smDemo = true
                }
              "
              >Small modal</CButton
            >
            <CModal
              size="xl"
              :visible="xlDemo"
              @dismiss="
                () => {
                  xlDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    xlDemo = false
                  }
                "
              >
                <CModalTitle>Extra large modal</CModalTitle>
              </CModalHeader>
              <CModalBody> ... </CModalBody>
            </CModal>
            <CModal
              size="lg"
              :visible="lgDemo"
              @dismiss="
                () => {
                  lgDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    lgDemo = false
                  }
                "
              >
                <CModalTitle>Large modal</CModalTitle>
              </CModalHeader>
              <CModalBody> ... </CModalBody>
            </CModal>
            <CModal
              size="sm"
              :visible="smDemo"
              @dismiss="
                () => {
                  smDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    smDemo = false
                  }
                "
              >
                <CModalTitle>Small modal</CModalTitle>
              </CModalHeader>
              <CModalBody> ... </CModalBody>
            </CModal>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol :xs="12">
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Modal</strong> <small>Fullscreen Modal</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-medium-emphasis small">
            Another override is the option to pop up a modal that covers the
            user viewport, available via property <code>fullscrean</code>.
          </p>
          <table class="table">
            <thead>
              <tr>
                <th>Property fullscrean</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>true</code>
                </td>
                <td>Always</td>
              </tr>
              <tr>
                <td>
                  <code>&#39;sm&#39;</code>
                </td>
                <td>Below <code>576px</code></td>
              </tr>
              <tr>
                <td>
                  <code>&#39;md&#39;</code>
                </td>
                <td>Below <code>768px</code></td>
              </tr>
              <tr>
                <td>
                  <code>&#39;lg&#39;</code>
                </td>
                <td>Below <code>992px</code></td>
              </tr>
              <tr>
                <td>
                  <code>&#39;xl&#39;</code>
                </td>
                <td>Below <code>1200px</code></td>
              </tr>
              <tr>
                <td>
                  <code>&#39;xxl&#39;</code>
                </td>
                <td>Below <code>1400px</code></td>
              </tr>
            </tbody>
          </table>
          <DocsExample href="components/modal.html#fullscreen-modal">
            <CButton
              color="primary"
              @click="
                () => {
                  fullscreenDemo = true
                }
              "
              >Full screen</CButton
            >
            <CButton
              color="primary"
              @click="
                () => {
                  fullscreenSmDemo = true
                }
              "
              >Full screen below sm</CButton
            >
            <CButton
              color="primary"
              @click="
                () => {
                  fullscreenMdDemo = true
                }
              "
              >Full screen below md</CButton
            >
            <CButton
              color="primary"
              @click="
                () => {
                  fullscreenLgDemo = true
                }
              "
              >Full screen below lg</CButton
            >
            <CButton
              color="primary"
              @click="
                () => {
                  fullscreenXlDemo = true
                }
              "
              >Full screen below xl</CButton
            >
            <CButton
              color="primary"
              @click="
                () => {
                  fullscreenXxlDemo = true
                }
              "
              >Full screen below xxl</CButton
            >
            <CModal
              fullscreen
              :visible="fullscreenDemo"
              @dismiss="
                () => {
                  fullscreenDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    xlDemo = false
                  }
                "
              >
                <CModalTitle>Full screen</CModalTitle>
              </CModalHeader>
              <CModalBody> ... </CModalBody>
            </CModal>
            <CModal
              fullscreen="sm"
              :visible="fullscreenSmDemo"
              @dismiss="
                () => {
                  fullscreenSmDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    fullscreenSmDemo = false
                  }
                "
              >
                <CModalTitle>Full screen below sm</CModalTitle>
              </CModalHeader>
              <CModalBody> ... </CModalBody>
            </CModal>
            <CModal
              fullscreen="md"
              :visible="fullscreenMdDemo"
              @dismiss="
                () => {
                  fullscreenMdDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    fullscreenMdDemo = false
                  }
                "
              >
                <CModalTitle>Full screen below md</CModalTitle>
              </CModalHeader>
              <CModalBody> ... </CModalBody>
            </CModal>
            <CModal
              fullscreen="lg"
              :visible="fullscreenLgDemo"
              @dismiss="
                () => {
                  fullscreenLgDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    fullscreenLgDemo = false
                  }
                "
              >
                <CModalTitle>Full screen below lg</CModalTitle>
              </CModalHeader>
              <CModalBody> ... </CModalBody>
            </CModal>
            <CModal
              fullscreen="xl"
              :visible="fullscreenXlDemo"
              @dismiss="
                () => {
                  fullscreenXlDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    fullscreenXlDemo = false
                  }
                "
              >
                <CModalTitle>Full screen below xl</CModalTitle>
              </CModalHeader>
              <CModalBody> ... </CModalBody>
            </CModal>
            <CModal
              fullscreen="xxl"
              :visible="fullscreenXxlDemo"
              @dismiss="
                () => {
                  fullscreenXxlDemo = false
                }
              "
            >
              <CModalHeader
                dismiss
                @dismiss="
                  () => {
                    fullscreenXxlDemo = false
                  }
                "
              >
                <CModalTitle>Full screen below xxl</CModalTitle>
              </CModalHeader>
              <CModalBody> ... </CModalBody>
            </CModal>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Modals',
  data: function () {
    return {
      visibleLiveDemo: false,
      visibleStaticBackdropDemo: false,
      visibleScrollingLongContentDemo: false,
      visibleScrollableDemo: false,
      visibleVerticallyCenteredDemo: false,
      visibleVerticallyCenteredScrollableDemo: false,
      xlDemo: false,
      lgDemo: false,
      smDemo: false,
      fullscreenDemo: false,
      fullscreenSmDemo: false,
      fullscreenMdDemo: false,
      fullscreenLgDemo: false,
      fullscreenXlDemo: false,
      fullscreenXxlDemo: false,
    }
  },
}
</script>
