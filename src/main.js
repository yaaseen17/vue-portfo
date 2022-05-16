import { createApp } from "vue";
import App from "./App.vue";
import "aos/dist/aos.css";
import AOS from "aos";
app.AOS = new AOS.init({ disable: "phone" });
createApp(App).mount("#app");
