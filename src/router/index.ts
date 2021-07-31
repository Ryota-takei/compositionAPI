import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import RocketList from "../views/RocketList.vue";
import Rockets from "../views/Rockets.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "RocketList",
    component: RocketList,
  },
  {
    path: "/rockets/:id",
    name: "Rockets",
    component: Rockets,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
