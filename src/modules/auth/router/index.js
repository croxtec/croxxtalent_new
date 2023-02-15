const Login = () => import("../pages/loginPage.vue");
const forgetPassword = () => import("../components/login/forgetPassword.vue");
const newPassword = () => import("../components/login/newPassword.vue");
const passwordCode = () => import("../components/login/passwordCode.vue");
const Register = () => import("../pages/registerPage.vue");
const RegisterOptions = () => import("../pages/views/registerOptions.vue");
const TalentRegister = () => import("../pages/views/talentRegister.vue");
const EmployerRegister = () => import("../pages/views/employerRegister.vue");

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      layout: "AppAuthLayout",
    },
  },
  {
    path: "/forget-password",
    name: "forget-password",
    component: forgetPassword,
    meta: {
      layout: "AppAuthLayout",
    },
  },
  {
    path: "/password-resetcode",
    name: "password-resetcode",
    component: passwordCode,
    meta: {
      layout: "AppAuthLayout",
    },
  },
  {
    path: "/new-password",
    name: "new-password",
    component: newPassword,
    meta: {
      layout: "AppAuthLayout",
    },
  },

  {
    path: "/register",
    component: Register,
    meta: {
      layout: "AppAuthLayout",
    },
    children: [
      {
        path: "",
        name: "register",
        component: RegisterOptions,
        meta: {
          layout: "AppAuthLayout",
        },
      },
      {
        path: "talent-register",
        name: "talent-register",
        component: TalentRegister,
        meta: {
          layout: "AppAuthLayout",
        },
      },
      {
        path: "employer-register",
        name: "employer-register",
        component: EmployerRegister,
        meta: {
          layout: "AppAuthLayout",
        },
      },
    ],
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
