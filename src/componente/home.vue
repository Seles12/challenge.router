<template>
  <div class="home">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="600"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/500/?image=532">
        <h1>WELCOME</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/500/?image=60">
        <h1>We Hope!!! You Are Enjoying WEB.</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/500/?image=366">
        <h1>See You Soon!!!</h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style>
.home {
  flex-direction: row;
  justify-content: space-around;
  min-height: 10vh;
}
</style>
