import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import layout from "../layout/layout.vue";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/home",
    name: "layout",
    component: layout,
    children: [
      {path: 'home', name: '首页', component: Home,
      children: [
        {path: 'home', name: '首页', component: Home,},
        {path: 'home', name: '首页', component: Home,},
        {path: 'home', name: '首页', component: Home,}
      ]},
      {path: 'home', name: '首页', component: Home,},
      {path: 'home', name: '首页', component: Home,}
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
