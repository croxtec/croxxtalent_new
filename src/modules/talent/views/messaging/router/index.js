const NotificationPage = () => import("../pages/Notifications.vue");
const MessagesPage = () => import("../pages/Messages.vue");

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

  {
    path: "/messages",
    name: "messages",
    component: MessagesPage,
    meta: {
      layout: "AppDashboardLayout",
      header: "messages",
    },
  }
];
export default routes;
