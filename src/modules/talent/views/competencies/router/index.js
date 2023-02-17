const Home = () => import("../pages/indexView.vue");
const userExperience = () => import("../components/userExperience.vue")


const routes = [
  {
  path: "/competencies",
  name: "competencies",
  component: Home,
  children: [
    {
      path: '/experience',
      name: 'Experience',
      component: userExperience,
      meta: {
        layout: "AppDashboardLayout",
        header: "competencies",
      },
    }
  ],
  meta: {
    layout: "AppDashboardLayout",
    header: "competencies",
  },
},
]
export default routes;