<template>
  <CRow>
    <CCol md="12" lg="7">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong> Bootstrap Carousel</strong>
          <div class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/carousel" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <CCarousel
            arrows
            indicators
            animate
            height="400px"
          >
            <CCarouselItem
              captionHeader="First Slide"
              image="https://picsum.photos/1024/480/?image=52"
              captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
            />
            <CCarouselItem
              captionHeader="Blank page"
              :image="{ placeholderColor: 'grey' }"
              captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
            />
            <CCarouselItem
            image="https://picsum.photos/1024/480/?image=54"
            />
          </CCarousel>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Carousels'
}
</script>
