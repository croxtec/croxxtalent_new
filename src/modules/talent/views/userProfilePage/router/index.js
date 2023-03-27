const Home = () => import("../pages/indexView.vue");

const routes = [
  {
    path: "/userProfilePage",
    name: "userProfilePage",
    component: Home,
    meta: {
      layout: "AppDashboardLayout",
      // header: "assessment",
    },
  }
];
export default routes;
