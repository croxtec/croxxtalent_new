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
      header: "CV Previewer",
      isBackground: true,
    },
  },

  {
    path: "/create-cv",
    name: "",
    component: CreateCV,
    meta: {
      layout: "AppDashboardLayout",
      header: "CV Previewer",
      parent: "resume",
      isBackground: true,
    },
    children: [
      {
        path: "",
        name: "create-cv",
        component: CreateCVTitle,
        meta: {
          layout: "AppDashboardLayout",
          header: "CV Previewer",
          parent: "resume",
          isBackground: true,
        },
      },
      {
        path: "work-history",
        name: "work-history",
        component: CreateCVTitle,
        meta: {
          layout: "AppDashboardLayout",
          header: "CV Previewer",
          parent: "resume",
          isBackground: true,
        },
      },
      {
        path: "contact-information",
        name: "contact-information",
        component: CreateCVTitle,
        meta: {
          layout: "AppDashboardLayout",
          header: "CV Previewer",
          parent: "resume",
          isBackground: true,
        },
      },
      {
        path: "educational-details",
        name: "educational-details",
        component: CreateCVTitle,
        meta: {
          layout: "AppDashboardLayout",
          header: "CV Previewer",
          parent: "resume",
          isBackground: true,
        },
      },
      {
        path: "competency",
        name: "competency",
        component: CreateCVTitle,
        meta: {
          layout: "AppDashboardLayout",
          header: "CV Previewer",
          parent: "resume",
          isBackground: true,
        },
      },
      {
        path: "professional-summary",
        name: "professional-summary",
        component: CreateCVTitle,
        meta: {
          layout: "AppDashboardLayout",
          header: "CV Previewer",
          parent: "resume",
          isBackground: true,
        },
      },
    ],
  },

  {
    path: "/upload-cv",
    component: UploadCV,
    meta: {
      layout: "AppDashboardLayout",
      header: "CV Previewer",
      parent: "resume",
      isBackground: true,
    },
    children: [
      {
        path: "",
        name: "upload-cv",
        component: UploadCVHome,
        meta: {
          layout: "AppDashboardLayout",
          header: "CV Previewer",
          parent: "resume",
          isBackground: true,
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
