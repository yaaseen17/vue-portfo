<template>
  <div class="projects">
    <h1>My Projects</h1>
    <Cards />
  </div>
</template>

<script>
import Cards from "./Cards.vue";
export default {
  components: {
    Cards,
  },
};
</script>

<style scoped>
h1 {
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
  margin-bottom: 50px;
}
.projects {
  margin: 40px;
  padding: 40px;
  height: fit-content;
  background-color: rgb(34, 34, 34);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
@media screen and (max-width: 460px) {
  h1 {
    font-size: 30px;
  }
}
@media screen and (max-width: 500px) {
  .projects  {
    margin-right: 0%;
    margin-left: 0%;
  }
}
</style>
