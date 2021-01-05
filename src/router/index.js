import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/learn",
    name: "Learn",
    component: () => import('../pages/LearnPage.vue')
  },
  // {
  //   path: "/game",
  //   name: "Game",
  //   component: () => import('../pages/GamePage.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
