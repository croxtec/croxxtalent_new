const NotificationPage = () => import("../pages/Notifications.vue");

const routes = [

  {
    path: "/notifications",
    name: "notifications",
    component: NotificationPage,
    meta: {
      layout: "AppDashboardLayout",
      header: "notifications",
    },
  },

];
export default routes;
