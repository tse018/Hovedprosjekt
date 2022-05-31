import { createApp } from "vue";
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import routes from "../routes.js";
import store from "../store.js";

const app_store = createStore(store);

const router = createRouter({
   routes: routes,
   history: createWebHistory(),
   scrollBehavior(to, from, savedPosition) {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "smooth",
      });
   },
});

createApp(App)
   .use(app_store)
   .use(router)
   .mount("#app");
