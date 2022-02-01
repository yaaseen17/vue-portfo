<template>
  <div v-if="projects.length" class="cd">
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
            <button class="btn text-secondary" style="border: 2px solid">
              Github
            </button>
          </a>
          <a
            :href="project.netlify"
            class="card-link text-dark"
            target="_blank"
          >
            <button class="btn btn-secondary text-dark">Netlify</button>
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
      projects: [
        {
          title: "Calculator",
          img: "https://i.postimg.cc/t48vZBBb/Screenshot-2.png",
          github: "https://github.com/yaaseen17/calculators",
          netlify: "https://practical-colden-47f4f4.netlify.app",
          id: 1,
        },
        {
          title: "Bmi",
          img: "https://i.postimg.cc/KYzcjvpw/Screenshot-6.png",
          github: "https://github.com/yaaseen17/bmi",
          netlify: "https://dreamy-easley-032281.netlify.app",
          id: 2,
        },
        {
          title: "Store",
          img: "https://i.postimg.cc/CLz4GjBx/Screenshot-3.png",
          github: "https://github.com/yaaseen17/store",
          netlify: "https://cocky-franklin-7c5ff4.netlify.app",
          id: 3,
        },
        {
          title: "Pokemon",
          img: "https://i.postimg.cc/bYKRRZQ0/Screenshot-5.png",
          github: "https://github.com/yaaseen17/pokemon",
          netlify: "https://lucid-panini-5dd88b.netlify.app",
          id: 4,
        },
      ],
    };
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
@media screen and (max-width: 460px) {
  .card {
    width: 15rem;
    margin: auto;
  }
}
</style>
