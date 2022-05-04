import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import PhosphorVue from "phosphor-vue";
import "./assets/base.css";

const app = createApp(App);

app.use(createPinia());
app.use(PhosphorVue);
app.use(router);

app.mount("#app");
