const Home = () => import("../pages/indexView.vue");
const Quiz = () => import("../components/quizPage.vue");

const routes = [
  {
    path: "/assessment/:id",
    name: "assessment",
    component: Home,
    meta: {
      layout: "AppDashboardLayout",
      // header: "assessment",
    },
  },
  {
    path: "/quiz",
    name: "quiz",
    component: Quiz,
  },

  // Manager

  {
    path: "/summary/:id",
    name: "mark-assessment",
    component: Home,
    meta: {
      layout: "AppDashboardLayout",
      // header: "assessment",
    },
  },
  {
    path: "/summary",
    name: "summary",
    component: Quiz,
  },

];
export default routes;
