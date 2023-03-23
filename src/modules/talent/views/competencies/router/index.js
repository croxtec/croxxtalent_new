const Home = () => import("../pages/indexView.vue");
const userExperience = () => import("../components/userExperience.vue");
const Competences = () => import("../pages/competenciesPage");

const routes = [
  {
    path: "/competencies",
    name: "competencies",
    component: Home,
    children: [
      {
        path: "/experience",
        name: "Experience",
        component: userExperience,
        meta: {
          layout: "AppDashboardLayout",
          header: "competencies",
        },
      },
    ],
    meta: {
      layout: "AppDashboardLayout",
      header: "competencies",
    },
  },

  {
    path: "/competencies2",
    name: "competencies2",
    component: Competences,
    meta: {
      layout: "AppDashboardLayout",
      header: "competencies",
    },
  },
];
export default routes;
