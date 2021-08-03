import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import RocketList from "../views/RocketList.vue";
import Rockets from "../views/Rockets.vue";
import Local from "../views/Local.vue";

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
    props: true
  },
  {
    path: "/local",
    name: "Local",
    component: Local,
    props: true
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
