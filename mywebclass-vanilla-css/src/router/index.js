import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Content from "../views/Content.vue";
const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "content",
    path: "/content",
    component: Content,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
