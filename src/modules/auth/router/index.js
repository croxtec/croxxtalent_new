const Login = () => import("../pages/loginPage.vue");

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      layout: "AppAuthLayout",
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
