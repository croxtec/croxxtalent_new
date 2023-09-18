const MessagesPage = () => import("../pages/Messages.vue");

const routes = [

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