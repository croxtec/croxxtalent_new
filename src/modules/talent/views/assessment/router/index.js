const Home = () => import("../pages/indexView.vue");
const Quiz = () => import("../components/quizPage.vue");

const routes = [
  {
    path: "/assessment",
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
];
export default routes;
