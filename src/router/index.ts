import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/baseballTeamList",
    component: () => import("../views/BaseballTeamList.vue"),
  },
  {
    path: "/baseballTeamDetail/:id",
    component: () => import("../views/BaseballTeamDetail.vue"),
    // component: () => import("../views/Ex01Detail.vue"),
  },
  {
    path: "/searchHotel",
    component: () => import("../views/SearchHotel.vue"),
    // component: () => import("../views/Ex01Detail.vue"),
  },
  {
    path: "/ex03",
    component: () => import("../views/Ex03.vue"),
    // component: () => import("../views/Ex01Detail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
