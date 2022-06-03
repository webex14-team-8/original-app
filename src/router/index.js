import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import PostView from "../views/PostView.vue"
import ShowView from "../views/ShowView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/post",
    name: "post",
    component: PostView,
  },
  {
    path: "/show",
    name: "show",
    component: ShowView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
