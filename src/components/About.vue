<template>
  <div class="about box">
    <div class="grid-container">
      <div class="grid-item">
        <img
          src="../assets/Yaseen3_9_11zon-min-removebg-preview.png"
          width="200px"
          height="200px"
        />
        <h3>About me</h3>
        <p>
          I am a highly motivated, creative and ambitious individual who thrives
          off problem solving and challenging my capabilities. I am extremely
          enthusiastic about introducing fresh ideas as well as learning new
          methods or skills that will satisfy any entity I may represent.
        </p>
      </div>
      <div class="grid-item-right">
        <ul>
          <h4>Info</h4>
          <span class="line">...................</span>
          <li class="text-secondary">Name: <span class="ans">Yaaseen</span></li>
          <li class="text-secondary">
            Surname: <span class="ans">Davids</span>
          </li>
          <li class="text-secondary">
            DOB: <span class="ans">17/05/2002</span>
          </li>
          <li class="text-secondary">
            Location: <span class="ans">Cape town</span>
          </li>
          <li class="text-secondary">
            Nationality: <span class="ans">South Africa</span>
          </li>
          <li class="text-secondary">
            Phone: <span class="ans">066 267 7072</span>
          </li>
        </ul>
        <button class="btn btn-secondary" @click="toggleModal">
          My Skills
        </button>
        <a
          href="https://www.canva.com/design/DAFBhHKulLY/BxD4D-g2gBUc_8fXRramYg/view?utm_content=DAFBhHKulLY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          target="_blank"
        >
          <button class="btn btn-secondary">My CV</button></a
        >
      </div>
    </div>
  </div>
  <div v-if="ShowModal">
    <Modal @close="toggleModal" />
  </div>
</template>
<script>
import Modal from "./Modal.vue";
export default {
  data() {
    return {
      ShowModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.ShowModal = !this.ShowModal;
      console.log(this.ShowModal);
    },
  },
  components: {
    Modal,
  },
};
</script>
<style scoped>
.about {
  margin: 40px;
  padding: 40px;
  height: fit-content;
  background-color: rgb(34, 34, 34);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.grid-container {
  display: flex;
  justify-content: space-evenly;
  margin: 0%;
}
.grid-item {
  width: 40%;
}
img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 2px solid rgb(128, 128, 128);
}
li {
  list-style: none;
  font-size: 20px;
  text-align: start;
}
.btn {
  margin-top: 50px;
  margin-left: 10px;
  color: black;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.btn:hover {
  background-color: transparent;
  color: white;
}
h4 {
  margin: 0%;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 30px;
}
.line {
  margin: 0%;
  margin-bottom: 20px;
  color: white;
}
.ans {
  color: white;
  font-size: 15px;
}
.about p {
  padding: 20px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}
.about h3 {
  padding-top: 20px;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 40px;
}
@media screen and (max-width: 650px) {
  img {
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .about {
    margin-right: 0%;
    margin-left: 0%;
  }
  .grid-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .grid-item {
    margin-right: 45%;
  }
  p {
    width: 250px;
  }
  h3 {
    font-size: 30px;
    width: 200px;
  }
}
</style>
