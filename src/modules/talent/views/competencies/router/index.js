const Home = () => import("../pages/indexView.vue");
const Competences = () => import("../pages/competenciesPage.vue");
const Experience = () => import("../components/experienceData.vue");
const Managers = () => import("../components/managerData.vue");

const routes = [
  // {
  //   path: "/competencies",
  //   name: "competencies",
  //   component: Home,
   
  //   meta: {
  //     layout: "AppDashboardLayout",
  //     header: "competencies",
  //   },
  // },

  {
    path: "/competencies",
    name: "competencies",
    component: Competences,
    meta: {
      layout: "AppDashboardLayout",
      header: "competencies",
    },
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience,
    meta: {
      layout: "AppDashboardLayout",
      header: "experience",
    },
  },

  {
    path: "/manager",
    name: "Managers",
    component: Managers,
    meta: {
      layout: "AppDashboardLayout",
      header: "managers",
    },
  },
];
export default routes;
