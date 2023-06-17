const Settings = () => import("../pages/index.vue");


const routes = [
  {
    path: "/settings",
    name: "settings",
    component: Settings,
    meta: {
      layout: "AppDashboardLayout",
      // header: "assessment",
    },
  },
];
export default routes;