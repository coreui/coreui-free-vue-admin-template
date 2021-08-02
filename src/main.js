import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import CoreuiVue from "@coreui/vue";
import { CIcon } from "@coreui/icons-vue";
import { iconsSet as icons } from "@/assets/icons/icons.js";
import Example from "@/components/Example";


const app = createApp(App);
app.use(store);
app.use(router);
app.use(CoreuiVue);
app.provide('icons', icons);
app.component("CIcon", CIcon);
app.component("Example", Example);

app.mount("#app");
