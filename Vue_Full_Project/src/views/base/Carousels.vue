<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card
            header-tag="header"
            footer-tag="footer">
            <div slot="header">
              <i class="fa fa-align-justify"></i> <strong>Bootstrap Carousel</strong>
              <div class="card-actions">
                <a href="https://bootstrap-vue.js.org/docs/components/carousel" target="_blank"><small class="text-muted">docs</small></a>
              </div>
            </div>
            <div>
              <b-carousel id="carousel1"
                          style="text-shadow: 1px 1px 2px #333;"
                          controls
                          indicators
                          background="#ababab"
                          :interval="4000"
                          img-width="1024"
                          img-height="480"
                          v-model="slide"
                          @sliding-start="onSlideStart"
                          @sliding-end="onSlideEnd"
              >

                <!-- Text slides with image -->
                <b-carousel-slide caption="First slide"
                                  text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                                  img-src="https://lorempixel.com/1024/480/technics/2/"
                ></b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/4/">
                  <h1>Hello world!</h1>
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide img-src="https://lorempixel.com/1024/480/technics/8/">
                </b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                  <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                       src="https://lorempixel.com/1024/480/technics/5/" alt="image slot">
                </b-carousel-slide>

                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                    ut lacus vel interdum.
                  </p>
                </b-carousel-slide>

              </b-carousel>

              <p class="mt-4">
                Slide #: {{ slide }}<br>
                Sliding: {{ sliding }}
              </p>

            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'carousels',
    data () {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    }
  }
</script>

