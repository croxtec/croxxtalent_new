/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Vue from "vue";
import VueRouter from "vue-router";

// Error Page Components
import NotFoundComponent from "@/modules/errorPages/pages/errorPage404.vue";

// Routes
import HomeRoutes from "@/modules/landing/router";
import errorRoutes from "@/modules/errorPages/router";
import AuthRoutes from "@/modules/auth/router";
import TalentRoutes from "@/modules/talent/router";

Vue.use(VueRouter);

const routes = [
  // Make sure it's your last route definition
  { path: "*", component: NotFoundComponent },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat(HomeRoutes, errorRoutes, AuthRoutes, TalentRoutes),
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
