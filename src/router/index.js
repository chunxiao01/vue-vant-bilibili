/*
 * @Author: chunxiao
 * @Github: https://github.com/chunxiao01
 * @Version: V-0.0.1
 * @License: MIT
 * @Date: 2021-10-18 11:21:57
 * @LastEditTime: 2021-10-19 21:28:12
 * @LastEditors: chunxiao
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/Home.vue")
  },
  {
    path: "/homesearch/",
    name: "homesearch",
    component: () => import("@/views/home/HomeSearch.vue")
  },
  {
    path: "/category/",
    name: "category",
    component: () => import("@/views/category/Category.vue")
  },
  {
    path: "/profile/",
    name: "profile",
    component: () => import("@/views/profile/Profile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
