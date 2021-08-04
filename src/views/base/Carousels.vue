<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Carousels</strong>
        </CCardHeader>
        <CCardBody>
            <h4>Slides only</h4>
            <Example href="components/carousel.html#slides-only">
                <CCarousel>
                    <CCarouselItem>
                        <img class="d-block w-100" src="/images/vue.jpg" alt="slide 1"/>
                    </CCarouselItem>
                    <CCarouselItem>
                        <img class="d-block w-100" src="/images/react.jpg" alt="slide 2"/>
                    </CCarouselItem>
                    <CCarouselItem>
                        <img class="d-block w-100" src="/images/angular.jpg" alt="slide 3"/>
                    </CCarouselItem>
                </CCarousel>
            </Example>
            <h4 class="mt-4">With controls</h4>
            <Example href="components/carousel.html#with-controls">
                <CCarousel controls>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/vue.jpg" alt="slide 1"/>
                </CCarouselItem>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/react.jpg" alt="slide 2"/>
                </CCarouselItem>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/angular.jpg" alt="slide 3"/>
                </CCarouselItem>
                </CCarousel>
            </Example>
            <h4 class="mt-4">With indicators</h4>
            <Example href="components/carousel.html#with-indicators">
                <CCarousel controls indicators>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/vue.jpg" alt="slide 1"/>
                </CCarouselItem>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/react.jpg" alt="slide 2"/>
                </CCarouselItem>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/angular.jpg" alt="slide 3"/>
                </CCarouselItem>
                </CCarousel>
            </Example>
            <h4 class="mt-4">With caption</h4>
            <Example href="components/carousel.html#with-captions">
                <CCarousel controls indicators>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/vue.jpg" alt="slide 1"/>
                    <CCarouselCaption class="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/react.jpg" alt="slide 2"/>
                    <CCarouselCaption class="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/angular.jpg" alt="slide 3"/>
                    <CCarouselCaption class="d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    </CCarouselCaption>
                </CCarouselItem>
                </CCarousel>
            </Example>
            <h4 class="mt-4">With caption</h4>
            <Example href="components/carousel.html#crossfade">
                <CCarousel controls indicators transition="crossfade">
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/vue.jpg" alt="slide 1"/>
                </CCarouselItem>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/react.jpg" alt="slide 2"/>
                </CCarouselItem>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/angular.jpg" alt="slide 3"/>
                </CCarouselItem>
                </CCarousel>
            </Example>
            <h4 class="mt-4">Dark variant</h4>
            <Example href="components/carousel.html#dark-variant">
                <CCarousel controls indicators dark>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/vue.jpg" alt="slide 1"/>
                </CCarouselItem>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/react.jpg" alt="slide 2"/>
                </CCarouselItem>
                <CCarouselItem>
                    <img class="d-block w-100" src="/images/angular.jpg" alt="slide 3"/>
                </CCarouselItem>
                </CCarousel>
            </Example>

        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Carousels",
};
</script>