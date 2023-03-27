const Home = () => import("../pages/indexView.vue");
const userExperience = () => import("../components/userExperience.vue");
const Competences = () => import("../pages/competenciesPage.vue");

const routes = [
  // {
  //   path: "/competencies",
  //   name: "competencies",
  //   component: Home,
  //   children: [
  //     {
  //       path: "/experience",
  //       name: "Experience",
  //       component: userExperience,
  //       meta: {
  //         layout: "AppDashboardLayout",
  //         header: "competencies",
  //       },
  //     },
  //   ],
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
];
export default routes;
