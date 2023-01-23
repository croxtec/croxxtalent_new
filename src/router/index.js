import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import HomeRoutes from "@/modules/landing/router";
import errorRoutes from "@/modules/errorPages/router";
import AuthRoutes from "@/modules/auth/router";

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat(HomeRoutes, errorRoutes, AuthRoutes),
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
