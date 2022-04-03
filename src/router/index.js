import Vue from "vue";
import Router from "vue-router";

const Home = () => import("views/home/Home.vue");
const Movie = () => import("views/movie/Movie.vue");
const Book = () => import("views/book/Book.vue");
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/movie",
      component: Movie,
    },
    {
      path: "/book",
      component: Book,
    },
  ],
  mode: "history",
});
export default router;
