const Home = () => import("../pages/indexView.vue");
const Recommended = () => import("../components/recommended.vue")
const MyJobs = () => import("../pages/myJobs.vue");
const Rows = () => import("../components/rows.vue")
const JobDetails = () => import("../components/jobSinglePage.vue")

const routes = [
  {
    path: "/jobs",
    name: "jobs",
    component: Home,
    meta: {
      layout: "AppDashboardLayout",
      // header: "assessment",
    },
  },
  {
    path: "/recommended",
    name: "recommended",
    component: Recommended,
    meta: {
      layout: "AppDashboardLayout",
      // header: "assessment",
    },
  },
  {
    path: "/myjobs",
    name: "my-jobs",
    component: MyJobs,
    meta: {
      layout: "AppDashboardLayout",
      // header: "assessment",
    },
  },
  {
    path: "/job-details",
    name: "job-Details",
    component: JobDetails,
    meta: {
      layout: "AppDashboardLayout",
      // header: "assessment",
    },
  },
  {
    path: "/rows",
    name: "rows",
    component: Rows,
    meta: {
      layout: "AppDashboardLayout",
      // header: "assessment",
    },
  },
];
export default routes;
