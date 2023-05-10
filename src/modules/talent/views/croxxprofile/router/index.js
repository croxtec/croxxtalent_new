const Home = () => import("../pages/indexView.vue");
const ProfileDetail = () => import("../pages/ProfileDetail.vue");

const routes = [
  {
    path: "/profile",
    name: "profile",
    component: Home,
    meta: {
      layout: "AppDashboardLayout",
      header: "Profile",
    },
  },

  {
    path: "/profile/:id",
    name: "profile-detail",
    component: ProfileDetail,
    meta: {
      layout: "AppDashboardLayout",
      header: "Experiences", //
    },
  }
];
export default routes;
