// import Vue from "vue";
// import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage";
// Vue.use(VueRouter);
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/photo",
      component: () => import("./pages/PhotoPage"),
    },
  ],
  history: createWebHistory(),
});
