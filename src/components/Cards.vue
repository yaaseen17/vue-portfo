<template>
  <div class="cd">
    <span
      v-show="loading"
      class="spinner-border spinner-border-sm"
      style="width: 70px; height: 70px; color: white"
    ></span>
    <div v-for="project in projects" :key="project.id">
      <div class="card">
        <img class="card-img-top" :src="project.img" />
        <div class="card-body">
          <h3>{{ project.title }}</h3>
        </div>
        <div class="card-body">
          <a
            :href="project.github"
            class="card-link text-secondary"
            target="_blank"
          >
            <button class="btn text-secondary hovers" style="border: 2px solid">
              Github
            </button>
          </a>
          <a
            :href="project.netlify"
            class="card-link text-dark"
            target="_blank"
          >
            <button
              class="btn btn-secondary text-dark"
              style="border: 2px solid"
            >
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    fetch("https://nodejs-1new.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => {
        this.projects = data;
        this.loading = false;
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
h2 {
  color: rgb(255, 255, 255);
}
h3 {
  color: white;
}
.card-body {
  border-radius: 10px;
}
.cd {
  display: flex;
  flex-wrap: wrap;
}
.card {
  margin: 20px;
  border-radius: 10px;
  background-color: transparent;
  border: 3px solid rgb(131, 131, 131);
  position: unset;
  width: 18rem;
}

.card-img-top {
  border-radius: 10px;
  height: 250px;
}
.card-link {
  text-decoration: none;
}
.btn {
  margin: 15px;
  font-weight: bolder;
}
.btn-secondary:hover {
  background: transparent;
}
.hovers:hover {
  background-color: gray;
}

@media screen and (max-width: 460px) {
  .card {
    width: 15rem;
    margin: auto;
  }
}
@media screen and (max-width: 500px) {
  .cd {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
