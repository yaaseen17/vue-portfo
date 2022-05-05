<template>
  <div class="testimonials">
    <h1>Testimonials</h1>
    <div
      id="webshop-hero-carousel"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="'testimonial-' + testimonial.id"
          :class="{ 'carousel-item': true, active: index === active }"
        >
          <div class="container">
            <div class="" style="margin: auto">
              <div class="d-flex align-items-center">
                <div class="" style="margin: auto">
                  <img :src="testimonial.img" alt="" />
                  <h2>{{ testimonial.name }}</h2>
                  <h3>{{ testimonial.status }}</h3>
                  <p class="h2">{{ testimonial.testamonial }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        class="carousel-control-prev text-decoration-none w-auto ps-3"
        href="#webshop-hero-carousel"
        role="button"
        data-bs-slide="prev"
        @click="setActive(active - 1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </a>
      <a
        class="carousel-control-next text-decoration-none w-auto pe-3"
        href="#webshop-hero-carousel"
        role="button"
        data-bs-slide="next"
        @click="setActive(active + 1)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </a>
      <ul class="carousel-indicators">
        <li
          v-for="(testimonial, index) in testimonials"
          :key="'testimonial-' + testimonial.id"
          :class="{ active: index === active }"
          data-bs-target="#webshop-hero-carousel"
          :data-bs-slide-to="index"
          @click="setActive((active = index))"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [],
      active: 0,
    };
  },
  methods: {
    setActive(index) {
      let active = index;

      if (index === this.testimonials.length) active = 0;
      else if (index === -1) active = this.testimonials.length - 1;

      this.active = active;
    },
  },
  mounted() {
    fetch("https://nodejs-1new.herokuapp.com/testimonials")
      .then((res) => res.json())
      .then((data) => {
        this.testimonials = data;
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.testimonials {
  margin: 40px;
  padding: 40px;
  height: fit-content;
  background-color: rgb(34, 34, 34);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.control-prev {
  margin-left: 100px;
}
img {
  margin: 0 auto 30px;
  border-radius: 50%;
  height: 150px;
  width: 150px;
}
svg {
  color: white;
}
p {
  text-align: center;
  width: 50%;
  margin: 30px auto 0px;
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  height: 150px;
  font-size: 15px;
  font-weight: 100;
}
.carousel-control-next,
.carousel-control-prev {
  width: 5%;
}
.carousel-item {
  align-items: center;
}
h1 {
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
}
h2 {
  color: white;
  font-family: "Courier New", Courier, monospace;
  margin-bottom: 0%;
}
.carousel-indicators {
  position: relative;
  margin-top: 20px;
}
h3 {
  color: rgb(172, 172, 172);
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 25px;
}
.stuff {
  font-size: 40px;
}
@media screen and (max-width: 500px) {
  h1 {
    font-size: 30px;
  }
  .testimonials {
    margin-right: 0%;
    margin-left: 0%;
  }
}
svg:hover {
  color: rgb(66, 66, 66);
}

@media screen and (max-width: 600px) {
  h1 {
    font-size: 40px;
  }
  svg {
    width: 20px;
  }
}
</style>
