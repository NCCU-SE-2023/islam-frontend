import { createRouter, createWebHistory } from "vue-router";
import Login from "../page/Login.vue";
import Index from "../page/Index.vue";
import Cookie from "../page/Cookie.vue";
import DefaultLayout from "../layout/index.vue";

const routes = [
  { path: "/login", component: Login },
  { path: "/cookie", component: Cookie },
  {
    path: "/",
    component: DefaultLayout,
    children: [{ path: "", component: Index }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
