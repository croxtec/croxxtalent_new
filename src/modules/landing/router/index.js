const Dashboard = () => import("../pages/indexPage.vue");

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    beforeEnter: guardMyroute,
    meta: {
      layout: "AppDashboardLayout",
    },
  },
];

function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("token")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next({
      name: "login",
      query: { redirectFrom: to.fullPath },
    });
    // go to '/login';
  }
}

export default routes;
