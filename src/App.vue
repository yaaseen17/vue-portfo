<template>
  <Header id="home" />
  <nav role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <a href="#home"><li>Home</li></a>
        <a href="#about"><li>About</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#resume"><li>Resume</li></a>
        <a href="#testamonials"><li>Testimonials</li></a>
        <a href="#contact"><li>Contact</li></a>
      </ul>
    </div>
  </nav>
  <a href="#home" class="bck"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      class="bi bi-chevron-bar-up"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M3.646 11.854a.5.5 0 0 0 .708 0L8 8.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 0 0 0-.8H2.8a.4.4 0 0 0-.4.4z"
      /></svg
  ></a>
  <section id="about"><About /></section>
  <section id="projects"><Projects /></section>
  <section id="resume"><Resume /></section>
  <section id="testamonials"><Testimonials /></section>
  <section id="contact"><Contact /></section>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Projects from "./components/Projects.vue";
import Testimonials from "./components/Testimonials.vue";
import Resume from "./components/Resume.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    About,
    Contact,
    Projects,
    Testimonials,
    Resume,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(131, 131, 131);
}

#home {
  padding-top: 100px;
  padding-bottom: 100px;
}
#about {
  padding-top: 100px;
  padding-bottom: 100px;
}
#contact {
  padding-top: 100px;
  padding-bottom: 100px;
}
#projects {
  padding-top: 100px;
  padding-bottom: 100px;
}
#resume {
  padding-top: 100px;
  padding-bottom: 100px;
  position: sticky;
}
#testamonial {
  padding-top: 100px;
  padding-bottom: 100px;
  position: sticky;
}

#menuToggle {
  display: block;
  position: fixed;
  top: 50px;
  left: 50px;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
}
.bck {
  text-decoration: none;
  position: sticky;
  top: 0;
  float: right;
  margin-right: 50px;
  color: white;
}
#menuToggle a {
  text-decoration: none;
  color: #232323;

  transition: color 0.3s ease;
}

#menuToggle a:hover {
  color: tomato;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #cdcdcd;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu {
  position: absolute;
  width: 300px;
  height: 100vh;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  opacity: 0.5;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul {
  transform: none;
}
@media screen and (max-width: 500px) {
  section {
    margin-right: 0%;
    margin-left: 0%;
  }
}
</style>
