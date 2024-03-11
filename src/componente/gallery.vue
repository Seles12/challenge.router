<template>
  <div>
    <!-- first page  -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="black"
      img-width="800"
      img-height="900"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First Page"
        img-src="https://picsum.photos/1024/480/?image=62"
      >
        <div class="card1">
          <!-- first card -->
          <b-card
            title="Castle"
            img-src="https://picsum.photos/600/300/?image=193"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-1>Click</b-button>
            <b-modal id="modal-1" title="Castle">
              <b-card-img
                src="https://fastly.picsum.photos/id/193/600/300.jpg?hmac=DuQ11SK8H71wegqxrYW4VRcbXzYHTHwRbs29pBhTtZU"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- second card  -->
          <b-card
            title="Foot"
            img-src="https://picsum.photos/600/300/?image=31"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-2>Click</b-button>
            <b-modal id="modal-2" title="Foot">
              <b-card-img
                src="https://fastly.picsum.photos/id/31/600/300.jpg?hmac=aaCQNvolme7b9-NRQsXVNu8brB-nyIWSxHDJwIknjGE"
                alt="Image"
                class="foot"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- 3 card  -->
          <b-card
            title="Bridge"
            img-src="https://picsum.photos/600/300/?image=84"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-3>Click</b-button>
            <b-modal id="modal-3" title="Bridge">
              <b-card-img
                src="https://fastly.picsum.photos/id/84/600/300.jpg?hmac=yiNgm5FHr7WPip0fiKXecbodGcKX3Y1zq69b6sUHiyA"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- 4 card  -->
          <b-card
            title="Play control"
            img-src="https://picsum.photos/600/300/?image=96"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-4>Click</b-button>
            <b-modal id="modal-4" title="Play control">
              <b-card-img
                src="https://fastly.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- 5 card -->
          <b-card
            title="Bike"
            img-src="https://picsum.photos/600/300/?image=146"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-5>Click</b-button>
            <b-modal id="modal-5" title="Bike">
              <b-card-img
                src="https://fastly.picsum.photos/id/146/5000/3333.jpg?hmac=xdlFnzoavokA3U-bzo35Vk4jTBKx8C9fqH5IuCPXj2U"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- 6 card  -->
          <b-card
            title="Phone"
            img-src="https://picsum.photos/600/300/?image=160"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-6>Click</b-button>
            <b-modal id="modal-6" title="Phone">
              <b-card-img
                src="https://fastly.picsum.photos/id/160/600/300.jpg?hmac=KxJup50ARvwfn07Rknl6q7LlbhwkC20csDwNjXaSxiE"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- 7 card  -->
          <b-card
            title="Clock"
            img-src="https://picsum.photos/600/300/?image=175"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-7>Click</b-button>
            <b-modal id="modal-7" title="Clock">
              <b-card-img
                src="https://fastly.picsum.photos/id/175/2896/1944.jpg?hmac=djMSfAvFgWLJ2J3cBulHUAb4yvsQk0d4m4xBJFKzZrs"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- 8 card  -->
          <b-card
            title="Dog"
            img-src="https://picsum.photos/600/300/?image=237"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-8>Click</b-button>
            <b-modal id="modal-8" title="Dog">
              <b-card-img
                src="https://fastly.picsum.photos/id/237/3500/2095.jpg?hmac=y2n_cflHFKpQwLOL1SSCtVDqL8NmOnBzEW7LYKZ-z_o"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
        </div>
      </b-carousel-slide>
      <!-- second page  -->
      <b-carousel-slide
        caption="Second Page"
        img-src="https://picsum.photos/1024/480/?image=52"
      >
        <div class="card1">
          <!-- first card -->
          <b-card
            title="Computer"
            img-src="https://picsum.photos/600/300/?image=180"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-9>Click</b-button>
            <b-modal id="modal-9" title="Computer">
              <b-card-img
                src="https://fastly.picsum.photos/id/180/600/300.jpg?hmac=kzJcsKtYkehQ6V0aLHsx1c7sipS7p_rkSw8saszkADU"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- second card  -->
          <b-card
            title="New York"
            img-src="https://picsum.photos/600/300/?image=274"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-10>Click</b-button>
            <b-modal id="modal-10" title="New York">
              <b-card-img
                src="https://fastly.picsum.photos/id/274/3824/2520.jpg?hmac=OOl_w8LX_psogyruUe1z986AuqeS_TY7rLxAFgG4wrc"
                alt="Image"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- 3 card  -->
          <b-card
            title="Tea"
            img-src="https://picsum.photos/600/300/?image=326"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-11>Click</b-button>
            <b-modal id="modal-11" title="Tea">
              <b-card-img
                src="https://fastly.picsum.photos/id/326/4928/3264.jpg?hmac=lJA_LBhuSUZpPbFFE6vjjSjIWzpaqjZpR9vV9MkZfJw"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- 4 card  -->
          <b-card
            title="Locker"
            img-src="https://picsum.photos/600/300/?image=336"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-12>Click</b-button>
            <b-modal id="modal-12" title="Locker">
              <b-card-img
                src="https://fastly.picsum.photos/id/336/1600/1060.jpg?hmac=V0ApxMul9odmMOXCPn6z_NHFnFT_-SmbQfpzughJahU"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- 5 card -->
          <b-card
            title="Taxi"
            img-src="https://picsum.photos/600/300/?image=376"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-13>Click</b-button>
            <b-modal id="modal-13" title="Taxi">
              <b-card-img
                src="https://fastly.picsum.photos/id/376/5000/3324.jpg?hmac=YsGSzJMjAbs9Y95mgDvjlhJ28wfLdf55oWsN7pOhytY"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- 6 card  -->
          <b-card
            title="Maps"
            img-src="https://picsum.photos/600/300/?image=442"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-14>Click</b-button>
            <b-modal id="modal-14" title="Maps">
              <b-card-img
                src="https://fastly.picsum.photos/id/442/1909/1262.jpg?hmac=x2Y_bIJcLoz2hP7l1F8uZcrAC0eMggHKccKwVgXW7mM"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- 7 card  -->
          <b-card
            title="Library"
            img-src="https://picsum.photos/600/300/?image=444"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-15>Click</b-button>
            <b-modal id="modal-15" title="Library">
              <b-card-img
                src="https://fastly.picsum.photos/id/444/4288/2848.jpg?hmac=kD9xrks5MLlLUO0Zlyl9zkvJr5uV0yrtlQxqJE3kE4A"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
          <!-- 8 card  -->
          <b-card
            title="Motel"
            img-src="https://picsum.photos/600/300/?image=451"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text> <strong> Click Full Picture </strong> </b-card-text>
            <b-button v-b-modal.modal-16>Click</b-button>
            <b-modal id="modal-16" title="Motel">
              <b-card-img
                src="https://fastly.picsum.photos/id/451/1545/1024.jpg?hmac=tLtjfTi0fCQtC-GwbCWif4z_9EI0OB0lOssXplCOdB8"
                class="rounded-0"
              ></b-card-img>
            </b-modal>
          </b-card>
        </div>
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
.card1 {
  flex-wrap: wrap;
  justify-content: space-between;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(4, auto);
  margin-left: -64px;
}
</style>
