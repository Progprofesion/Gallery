// Components
import App from "./App.vue";
import { router } from "@/router";
import axios from "axios";
// Composables
import { createApp } from "vue";
// Plugins
import { registerPlugins } from "@/plugins";

const app = createApp(App);
app.config.globalProperties.$axios = axios;
registerPlugins(app);
app.use(router);
app.mount("#app");
