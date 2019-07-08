<template functional>
  <div class="c-wrapper">
    <div>
      <CRow>
        <CCol md="12" lg="9" >
          <CCard>
            <CCardHeader>
              <i class="fa fa-align-justify"></i>
              <strong> Bootstrap Carousel</strong>
              <!-- <div class="card-header-actions">
                <a
                  href="https://bootstrap-vue.js.org/docs/components/carousel"
                  class="card-header-action"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <small class="text-muted">docs</small>
                </a>
              </div> -->
            </CCardHeader>
            <CCardBody>
              <CCarousel
                arrows
                indicators
                animate
                height="400px"
              >
                <CCarouselItem
                  caption="First Slide"
                  image="https://lorempixel.com/1024/480/technics/2/"
                  text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                />
                <CCarouselItem
                  caption="Blank page"
                  :image="{ blankColor: 'grey' }"
                  text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                />
                <CCarouselItem
                 image="https://lorempixel.com/1024/480/technics/8/"
                />
              </CCarousel>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'carousels'
}
</script>
