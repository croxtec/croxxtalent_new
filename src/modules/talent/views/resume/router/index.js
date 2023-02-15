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
      parent: "resume",
    },
    children: [
      {
        path: "",
        name: "create-cv",
        component: CreateCVTitle,
        meta: {
          layout: "AppDashboardLayout",
          header: "Cv Previewer",
          parent: "resume",
        },
      },
      {
        path: "work-history",
        name: "work-history",
        component: CreateCVTitle,
        meta: {
          layout: "AppDashboardLayout",
          header: "Cv Previewer",
          parent: "resume",
        },
      },
      {
        path: "contact-information",
        name: "contact-information",
        component: CreateCVTitle,
        meta: {
          layout: "AppDashboardLayout",
          header: "Cv Previewer",
          parent: "resume",
        },
      },
      {
        path: "educational-details",
        name: "educational-details",
        component: CreateCVTitle,
        meta: {
          layout: "AppDashboardLayout",
          header: "Cv Previewer",
          parent: "resume",
        },
      },
      {
        path: "competency",
        name: "competency",
        component: CreateCVTitle,
        meta: {
          layout: "AppDashboardLayout",
          header: "Cv Previewer",
          parent: "resume",
        },
      },
      {
        path: "professional-summary",
        name: "professional-summary",
        component: CreateCVTitle,
        meta: {
          layout: "AppDashboardLayout",
          header: "Cv Previewer",
          parent: "resume",
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
      parent: "resume",
    },
    children: [
      {
        path: "",
        name: "upload-cv",
        component: UploadCVHome,
        meta: {
          layout: "AppDashboardLayout",
          header: "Cv Previewer",
          parent: "resume",
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
