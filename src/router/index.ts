import { createRouter, createWebHistory } from "vue-router";
import Login from "../page/Login.vue";
import IG from "../page/IG.vue";
import Task from "../page/Task.vue";
import Query from "../page/Query.vue";
import DefaultLayout from "../layout/index.vue";

const routes = [
  { path: "/", component: Login },
  {
    path: "/ig",
    component: DefaultLayout,
    children: [{ path: "", component: IG }],
  },
  {
    path: "/task",
    component: DefaultLayout,
    children: [{ path: "", component: Task }],
  },
  {
    path: "/query",
    component: DefaultLayout,
    children: [{ path: "", component: Query }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
