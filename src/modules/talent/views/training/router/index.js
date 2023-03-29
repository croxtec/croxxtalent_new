const Home = () => import("../pages/indexView.vue");

import store from "@/store"; // import Vuex store logics

const routes = [
  {
    path: "/training",
    name: "training",
    component: Home,
    beforeEnter: guardMyroute,
    meta: {
      requiresAuth: true,
      layout: "AppDashboardLayout",
      header: "Training",
      isBackground: true,
    },
    acl: {
      allowedUserTypes: ["talent"],
      allowedPermissions: ["*"],
    },
  },
];

function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  if (store.getters["auth/isLoggedIn"]) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next();
  } else {
    next({
      name: "login",
      query: { redirectFrom: to.fullPath },
    });
  }
}

// Router event config

export default routes;
