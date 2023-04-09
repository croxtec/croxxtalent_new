const Home = () => import("../pages/indexView.vue");

const routes = [
  {
    path: "/profile",
    name: "profile",
    component: Home,
    meta: {
      layout: "AppDashboardLayout",
      // header: "assessment",
    },
  }
];
export default routes;
