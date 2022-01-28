<template>
  <div class="testimonials">
    <h1>Testimonials</h1>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/IMG_20220125_114624.jpg"
            class="d-block"
            alt="..."
            height="150px"
            width="150px"
          />
          <h2>Muneeb Davids</h2>
          <h3>Colleague</h3>
          <p>
            <span class="stuff">"</span> Yaaseen is a person that is drivven by
            succes and he is always puts in the hardwork.<span class="stuff"
              >"</span
            >
          </p>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/IMG_20220125_114624.jpg"
            class="d-block"
            alt="..."
            height="150px"
            width="150px"
          />
          <h2>Na-aim Fredericks</h2>
          <h3>Colleague</h3>
          <p>
            <span class="stuff">"</span>
              Yaaseen 
            <span class="stuff">"</span>
          </p>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/IMG_20220125_114624.jpg"
            class="d-block"
            alt="..."
            height="150px"
            width="150px"
          />
          <h2>Mugammad Breda</h2>
          <h3>Colleague</h3>
          <p>
            <span class="stuff">"</span>
           Yaaseen designs are pleasing to the eye and he is always enthusiastic<span class="stuff">"</span>
          </p>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/IMG_20220125_114624.jpg"
            class="d-block"
            alt="..."
            height="150px"
            width="150px"
          />
          <h2>Nadeem Jhonsons</h2>
          <h3>Colleague</h3>
          <p>
            <span class="stuff">"</span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            consequatur corrupti, numquam explicabo quidem iusto. Alias in
            quibusdam, non natus sapiente eius tenetur, quos temporibus laborum
            voluptas ipsam quod facilis.<span class="stuff">"</span>
          </p>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/IMG_20220125_114624.jpg"
            class="d-block"
            alt="..."
            height="150px"
            width="150px"
          />
          <h2>Alex Sexwale</h2>
          <h3>Lecturer</h3>
          <p>
            <span class="stuff">"</span>
            Yaaseen takes prive in the work he produces. When he puts his mind
            to it he is able to archieve greatness<span class="stuff">"</span>
          </p>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.testimonials {
  margin: 40px;
  padding: 40px;
  height: fit-content;
  background-color: rgb(13, 13, 13);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
img {
  margin: auto;
  border-radius: 50%;
}
p {
  text-align: center;
  width: 50%;
  margin: auto;
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  height: 150px;
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
</style>
