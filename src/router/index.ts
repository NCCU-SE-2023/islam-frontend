import { createRouter, createWebHistory } from "vue-router";
import Login from "../page/Login.vue";
import DefaultLayout from "../layout/index.vue";

const routes = [
  { path: "/login", component: Login },
  { path: "/", component: DefaultLayout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
