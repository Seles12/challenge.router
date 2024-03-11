import Vue from "vue";
import Router from "vue-router";
import gallery from "./componente/gallery.vue";
import home from "./componente/home.vue";
import about from "./componente/about.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home,
    },
    {
      path: "/home",
      component: home,
    },
    {
      path: "/gallery",
      component: gallery,
    },
    {
      path: "/about",
      component: about,
    },
  ],
});
