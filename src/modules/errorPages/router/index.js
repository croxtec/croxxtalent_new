const Home = () => import("../pages/pageNotFound.vue");

const routes = [
  {
    path: "/page-not-found",
    name: "page-not-found",
    component: Home,
    meta: {
      layout: "AppDefaultLayout",
    },
  },
];

export default routes;
