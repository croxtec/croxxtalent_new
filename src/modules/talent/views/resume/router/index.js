const Home = () => import("../pages/indexView.vue");
const CreateCV = () => import("../pages/createCV");
const UploadCV = () => import("../pages/uploadCV");
const CreateCVTitle = () => import("../components/cv/cv-buider/createCVTitle");
const UploadCVHome = () => import("../components/cv/cv-upload/uploadCV");

const routes = [
  {
    path: "/resume",
    name: "resume",
    component: Home,
    meta: {
      layout: "AppDashboardLayout",
      header: "Cv Previewer",
    },
  },

  {
    path: "/create-cv",
    name: "",
    component: CreateCV,
    meta: {
      layout: "AppDashboardLayout",
      header: "Cv Previewer",
    },
    children: [
      {
        path: "",
        name: "create-cv",
        component: CreateCVTitle,
        meta: {
          layout: "AppDashboardLayout",
          header: "Cv Previewer",
        },
      },
    ],
  },

  {
    path: "/upload-cv",
    component: UploadCV,
    meta: {
      layout: "AppDashboardLayout",
      header: "Cv Previewer",
    },
    children: [
      {
        path: "",
        name: "upload-cv",
        component: UploadCVHome,
        meta: {
          layout: "AppDashboardLayout",
          header: "Cv Previewer",
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
