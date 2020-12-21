import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/home",
  },
  {
    path: "/tabs/",
    component: () => import("@/components/Tabs.vue"),
    children: [
      {
        path: "",
        redirect: "/tabs/home",
      },
      {
        path: "home",
        component: () => import("@/views/Home.vue"),   
      },
      {
        path: "leaderboard",
        component: () => import("@/views/Leaderboard.vue"),
      },
      {
        path: "profile",
        component: () => import("@/views/Profile.vue"),
      },
    ],
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("@/views/Game.vue")
  },
  {
    path: "/learn",
    name: "Learn",
    component: () => import("@/views/Learn.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
