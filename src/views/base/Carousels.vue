<template functional>
  <div class="c-wrapper">
    <div class="c-animated c-fadeIn">
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
              >
                <CCarouselItem
                  caption="First Slide"
                  imgSrc="https://lorempixel.com/1024/480/technics/2/"
                  text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                />
                <CCarouselItem
                  active
                  imgSrc="https://lorempixel.com/1024/480/technics/4/"
                />
                <CCarouselItem
                  imgSrc="https://lorempixel.com/1024/480/technics/8/"
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
