import { createRouter, createWebHistory } from "@ionic/vue-router";
import Tabs from "../components/tabs/Tabs.vue";

const routes = [
  {
    path: "/",
    redirect: "/tabs/home",
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "",
        redirect: "/tabs/home",
      },
      {
        path: "home",
        name: "Home",
        component: () => import("../pages/HomePage.vue"),
      },
      {
        path: "leaderboard",
        name: "Leaderboard",
        component: () => import("../pages/LeaderboardPage.vue"),
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("../pages/ProfilePage.vue"),
      },
    ],
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("../pages/GamePage.vue"),
  },
  {
    path: "/learn",
    name: "Learn",
    component: () => import("../pages/LearnPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
