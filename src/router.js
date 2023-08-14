import Vue from "vue";
import Router from "vue-router";
import home from "./componente/home.vue";
import register from "./componente/register.vue";
import services from "./componente/services.vue";
// import barra from "./componente/footer.vue";
// import { component } from "vue/types/umd";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      component: home,
    },
    {
      path: "/register",
      component: register,
    },
    {
      path: "/services",
      component: services,
    },
  ],
});
