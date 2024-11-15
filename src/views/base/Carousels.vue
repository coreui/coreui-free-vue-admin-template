<script setup>
import AngularImg from '@/assets/images/angular.jpg'
import ReactImg from '@/assets/images/react.jpg'
import VueImg from '@/assets/images/vue.jpg'
</script>

<template>
  <CRow>
    <CCol :xs="12">
      <DocsComponents href="components/carousel.html" />
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Carousels</strong> <small>Slide only</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Here’s a carousel with slides
          </p>
          <DocsExample href="components/carousel.html#slides-only">
            <CCarousel>
              <CCarouselItem>
                <img class="d-block w-100" :src="VueImg" alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <img class="d-block w-100" :src="ReactImg" alt="slide 2" />
              </CCarouselItem>
              <CCarouselItem>
                <img class="d-block w-100" :src="AngularImg" alt="slide 3" />
              </CCarouselItem>
            </CCarousel>
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Carousels</strong> <small>With controls</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Adding in the previous and next controls by
            <code>controls</code> property.
          </p>
          <DocsExample href="components/carousel.html#with-controls">
            <CCarousel controls>
              <CCarouselItem>
                <img class="d-block w-100" :src="VueImg" alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <img class="d-block w-100" :src="ReactImg" alt="slide 2" />
              </CCarouselItem>
              <CCarouselItem>
                <img class="d-block w-100" :src="AngularImg" alt="slide 3" />
              </CCarouselItem>
            </CCarousel>
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Carousels</strong> <small>With indicators</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            You can attach the indicators to the carousel, lengthwise the
            controls, too.
          </p>
          <DocsExample href="components/carousel.html#with-indicators">
            <CCarousel controls indicators>
              <CCarouselItem>
                <img class="d-block w-100" :src="VueImg" alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <img class="d-block w-100" :src="ReactImg" alt="slide 2" />
              </CCarouselItem>
              <CCarouselItem>
                <img class="d-block w-100" :src="AngularImg" alt="slide 3" />
              </CCarouselItem>
            </CCarousel>
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Carousels</strong> <small>With captions</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            You can add captions to slides with the
            <code>&lt;CCarouselCaption&gt;</code> element within any
            <code>&lt;CCarouselItem&gt;</code>. They can be immediately hidden
            on smaller viewports, as shown below, with optional
            <a href="https://coreui.io/docs/utilities/display"
              >display utilities</a
            >. We hide them with <code>.d-none</code> and draw them back on
            medium-sized devices with <code>.d-md-block</code>.
          </p>
          <DocsExample href="components/carousel.html#with-captions">
            <CCarousel controls indicators>
              <CCarouselItem>
                <img class="d-block w-100" :src="VueImg" alt="slide 1" />
                <CCarouselCaption class="d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <img class="d-block w-100" :src="ReactImg" alt="slide 2" />
                <CCarouselCaption class="d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </CCarouselCaption>
              </CCarouselItem>
              <CCarouselItem>
                <img class="d-block w-100" :src="AngularImg" alt="slide 3" />
                <CCarouselCaption class="d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </CCarouselCaption>
              </CCarouselItem>
            </CCarousel>
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Carousels</strong> <small>Crossfade</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Add <code>transition=&#34;crossfade&#34;</code> to your carousel to
            animate slides with a fade transition instead of a slide.
          </p>
          <DocsExample href="components/carousel.html#crossfade">
            <CCarousel controls indicators transition="crossfade">
              <CCarouselItem>
                <img class="d-block w-100" :src="VueImg" alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <img class="d-block w-100" :src="ReactImg" alt="slide 2" />
              </CCarouselItem>
              <CCarouselItem>
                <img class="d-block w-100" :src="AngularImg" alt="slide 3" />
              </CCarouselItem>
            </CCarousel>
          </DocsExample>
        </CCardBody>
      </CCard>
      <CCard class="mb-4">
        <CCardHeader>
          <strong>Vue Carousels</strong> <small>Dark variant</small>
        </CCardHeader>
        <CCardBody>
          <p class="text-body-secondary small">
            Add <code>dark</code> property to the <code>CCarousel</code> for
            darker controls, indicators, and captions. Controls have been
            inverted from their default white fill with the
            <code>filter</code> CSS property. Captions and controls have
            additional Sass variables that customize the <code>color</code> and
            <code>background-color</code>.
          </p>
          <DocsExample href="components/carousel.html#dark-variant">
            <CCarousel controls indicators dark>
              <CCarouselItem>
                <img class="d-block w-100" :src="VueImg" alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <img class="d-block w-100" :src="ReactImg" alt="slide 2" />
              </CCarouselItem>
              <CCarouselItem>
                <img class="d-block w-100" :src="AngularImg" alt="slide 3" />
              </CCarouselItem>
            </CCarousel>
          </DocsExample>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>
