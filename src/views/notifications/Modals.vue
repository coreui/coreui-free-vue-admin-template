<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Modals</strong>
        </CCardHeader>
        <CCardBody>
            <h4 class="mt-4">Example</h4>
            <Example href="components/modal.html#modal-components">
                <CModal class="show d-block position-static" :backdrop="false" :keyboard="false" visible>
                    <CModalHeader dismiss>
                        <CModalTitle>Modal title</CModalTitle>
                    </CModalHeader>
                    <CModalBody>Modal body text goes here.</CModalBody>
                    <CModalFooter>
                        <CButton color="secondary">Close</CButton>
                        <CButton color="primary">Save changes</CButton>
                    </CModalFooter>
                </CModal>
            </Example>

            <h4 class="mt-4">Live demo</h4>
            <Example href="components/modal.html#live-demo">
                <CButton color="primary" @click="() => { visibleLiveDemo = true }">Launch demo modal</CButton>
                <CModal :visible="visibleLiveDemo" @dismiss="() => { visibleLiveDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { visibleLiveDemo = false }">
                        <CModalTitle>Modal title</CModalTitle>
                    </CModalHeader>
                    <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" @click="() => { visibleLiveDemo = false }">
                            Close
                        </CButton>
                        <CButton color="primary">Save changes</CButton>
                    </CModalFooter>
                </CModal>
            </Example>

            <h4 class="mt-4">Static backdrop</h4>
            <Example href="components/modal.html#static-backdrop">
                <CButton color="primary" @click="() => { visibleStaticBackdropDemo = true }">Launch demo modal</CButton>
                <CModal backdrop="static" :visible="visibleStaticBackdropDemo" @dismiss="() => { visibleStaticBackdropDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { visibleStaticBackdropDemo = false }">
                        <CModalTitle>Modal title</CModalTitle>
                    </CModalHeader>
                    <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" @click="() => { visibleStaticBackdropDemo = false }">
                            Close
                        </CButton>
                        <CButton color="primary">Save changes</CButton>
                    </CModalFooter>
                </CModal>
            </Example>


            <h4 class="mt-4">Scrolling long content</h4>
            <Example href="components/modal.html#scrolling-long-content">
                <CButton color="primary" @click="() => { visibleScrollingLongContentDemo = true }">Launch demo modal</CButton>
                <CModal :visible="visibleScrollingLongContentDemo" @dismiss="() => { visibleScrollingLongContentDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { visibleScrollingLongContentDemo = false }">
                        <CModalTitle>Modal title</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                    </CModalBody>
                </CModal>
            </Example>


            <h4 class="mt-4">Visible scrollable</h4>
            <Example href="components/modal.html#scrolling-long-content">
                <CButton color="primary" @click="() => { visibleScrollableDemo = true }">Launch demo modal</CButton>
                <CModal scrollable :visible="visibleScrollableDemo" @dismiss="() => { visibleScrollableDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { visibleScrollableDemo = false }">
                        <CModalTitle>Modal title</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                            at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </p>
                    </CModalBody>
                </CModal>
            </Example>

            <h4 class="mt-4">Vertically centered</h4>
            <Example href="components/modal.html#vertically-centered">
                <CButton color="primary" @click="() => { visibleVerticallyCenteredDemo = true }">Launch demo modal</CButton>
                <CModal alignment="center" :visible="visibleVerticallyCenteredDemo" @dismiss="() => { visibleVerticallyCenteredDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { visibleVerticallyCenteredDemo = false }">
                        <CModalTitle>Modal title</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" @click="() => { visibleVerticallyCenteredDemo = false }">
                            Close
                        </CButton>
                        <CButton color="primary">Save changes</CButton>
                    </CModalFooter>
                </CModal>
            </Example>

            <h4 class="mt-4">Vertically scrollable demo</h4>
            <Example href="components/modal.html#vertically-centered">
                <CButton color="primary" @click="() => { visibleVerticallyCenteredScrollableDemo = true }">Vertically centered scrollable modal</CButton>
                <CModal alignment="center" scrollable :visible="visibleVerticallyCenteredScrollableDemo" @dismiss="() => { visibleVerticallyCenteredScrollableDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { visibleVerticallyCenteredScrollableDemo = false }">
                        <CModalTitle>Modal title</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" @click="() => { visibleVerticallyCenteredScrollableDemo = false }">
                            Close
                        </CButton>
                        <CButton color="primary">Save changes</CButton>
                    </CModalFooter>
                </CModal>
            </Example>

            <h4 class="mt-4">Tooltips and popovers</h4>
            <Example href="components/modal.html#tooltips-and-popovers">
                <CButton color="primary" @click="() => { tooltipsAndPopoversDemo = true }">Launch demo modal</CButton>
                <CModal :visible="tooltipsAndPopoversDemo" @dismiss="() => { tooltipsAndPopoversDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { tooltipsAndPopoversDemo = false }">
                        <CModalTitle>Modal title</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <h5>Popover in a modal</h5>
                        <p>This <CButton color="secondary" v-c-popover="{header: 'Popover title', content: 'Popover body content is set in this property.'}">button</CButton></p>
                        <hr/>
                        <h5>Tooltips in a modal</h5>
                        <p>
                            <CLink v-c-tooltip="'Tooltip'">This link</CLink> and <CLink v-c-tooltip="'Tooltip'">that link</CLink> have tooltips on hover.
                        </p>
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" @click="() => { tooltipsAndPopoversDemo = false }">
                            Close
                        </CButton>
                        <CButton color="primary">Save changes</CButton>
                    </CModalFooter>
                </CModal>
            </Example>


            <h4 class="mt-4">Optional sizes</h4>
            <Example href="components/modal.html#optional-sizes">
                <CButton color="primary" @click="() => { xlDemo = true }">Extra large modal</CButton>
                <CButton color="primary" @click="() => { lgDemo = true }">Large modal</CButton>
                <CButton color="primary" @click="() => { smDemo = true }">Small modal</CButton>
                <CModal size="xl" :visible="xlDemo" @dismiss="() => { xlDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { xlDemo = false }">
                        <CModalTitle>Extra large modal</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        ...
                    </CModalBody>
                </CModal>
                <CModal size="lg" :visible="lgDemo" @dismiss="() => { lgDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { lgDemo = false }">
                        <CModalTitle>Large modal</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        ...
                    </CModalBody>
                </CModal>
                <CModal size="sm" :visible="smDemo" @dismiss="() => { smDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { smDemo = false }">
                        <CModalTitle>Small modal</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        ...
                    </CModalBody>
                </CModal>
            </Example>

            <h4 class="mt-4">Fullscreen Modal</h4>
            <Example href="components/modal.html#fullscreen-modal">
                <CButton color="primary" @click="() => { fullscreenDemo = true }">Full screen</CButton>
                <CButton color="primary" @click="() => { fullscreenSmDemo = true }">Full screen below sm</CButton>
                <CButton color="primary" @click="() => { fullscreenMdDemo = true }">Full screen below md</CButton>
                <CButton color="primary" @click="() => { fullscreenLgDemo = true }">Full screen below lg</CButton>
                <CButton color="primary" @click="() => { fullscreenXlDemo = true }">Full screen below xl</CButton>
                <CButton color="primary" @click="() => { fullscreenXxlDemo = true }">Full screen below xxl</CButton>
                <CModal fullscreen :visible="fullscreenDemo" @dismiss="() => { fullscreenDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { xlDemo = false }">
                        <CModalTitle>Full screen</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        ...
                    </CModalBody>
                </CModal>
                <CModal fullscreen="sm" :visible="fullscreenSmDemo" @dismiss="() => { fullscreenSmDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { fullscreenSmDemo = false }">
                        <CModalTitle>Full screen below sm</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        ...
                    </CModalBody>
                </CModal>
                <CModal fullscreen="md" :visible="fullscreenMdDemo" @dismiss="() => { fullscreenMdDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { fullscreenMdDemo = false }">
                        <CModalTitle>Full screen below md</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        ...
                    </CModalBody>
                </CModal>
                <CModal fullscreen="lg" :visible="fullscreenLgDemo" @dismiss="() => { fullscreenLgDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { fullscreenLgDemo = false }">
                        <CModalTitle>Full screen below lg</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        ...
                    </CModalBody>
                </CModal>
                <CModal fullscreen="xl" :visible="fullscreenXlDemo" @dismiss="() => { fullscreenXlDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { fullscreenXlDemo = false }">
                        <CModalTitle>Full screen below xl</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        ...
                    </CModalBody>
                </CModal>
                <CModal fullscreen="xxl" :visible="fullscreenXxlDemo" @dismiss="() => { fullscreenXxlDemo = false }">
                    <CModalHeader dismiss @dismiss="() => { fullscreenXxlDemo = false }">
                        <CModalTitle>Full screen below xxl</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        ...
                    </CModalBody>
                </CModal>
            </Example>

        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
    name: "Modals",
    data: function(){
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
  }
};
</script>