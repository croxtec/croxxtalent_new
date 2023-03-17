const Home = () => import("../pages/indexView.vue");
const quiz = () => import("../components/quiz.vue")

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
        component: quiz
      }
];
export default routes;
