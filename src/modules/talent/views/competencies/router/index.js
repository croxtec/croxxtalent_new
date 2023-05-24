const Home = () => import("../pages/indexView.vue");
const Competences = () => import("../pages/competenciesPage.vue");
const Experience = () => import("../components/experienceData.vue");
const Managers = () => import("../components/managerData.vue");
const ManageAssesment = () => import("../components/ManageAssesment.vue");

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

  {
    path: "/manage-assessment",
    component: ManageAssesment,
    name: "manage-assessment",
    meta: {
      layout: "AppDashboardLayout",
      header: "Surface Cementing (Lv1) - Assessment"
    },
  },
];
export default routes;
