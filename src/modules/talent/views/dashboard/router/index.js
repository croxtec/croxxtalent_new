const Home = () => import("../pages/indexView.vue");

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Home,
    meta: {
      layout: "AppDashboardLayout",
      header: "Home",
    },
  },
];

// function guardMyroute(to, from, next) {
//   var isAuthenticated = false;
//   if (localStorage.getItem("token")) isAuthenticated = true;
//   else isAuthenticated = false;
//   if (isAuthenticated) {
//     next();
//   } else {
//     next({
//       name: "login",
//       query: { redirectFrom: to.fullPath },
//     });
//   }
// }

export default routes;
