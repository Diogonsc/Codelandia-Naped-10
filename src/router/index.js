import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/series",
    name: "Series",
    component: () =>
      import("../views/Series"),
  },
  {
    path: "/filmes",
    name: "Filmes",
    component: () =>
      import("../page/NotFound"),
  },
  {
    path: "/animes",
    name: "Animes",
    component: () =>
      import("../views/Animes"),
  },
  {
    path: "/games",
    name: "Games",
    component: () =>
      import("../views/Games"),
  },
  {
    path: "/noticias",
    name: "Noticias",
    component: () =>
       import("../page/Noticias"),
  }
];

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0}),
  routes,
});

export default router;
