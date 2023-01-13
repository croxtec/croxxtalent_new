const Home = () => import("../pages/indexPage.vue");
const Talents = () => import("../pages/talentsPage.vue");
const Employers = () => import("../pages/employersPage.vue");
const Contact = () => import("../pages/contactPage.vue");
const PrivacyPolicy = () => import("../pages/privacyPolicy.vue");
const FrequentlyAskedQuestions = () =>
  import("../pages/frequentlyAskedQuestions");
const AboutUs = () => import("../pages/aboutUs.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layout: "AppHomeLayout",
    },
  },

  {
    path: "/employers",
    name: "home",
    component: Employers,
    meta: {
      layout: "AppHomeLayout",
    },
  },

  {
    path: "/talents",
    name: "talents",
    component: Talents,
    meta: {
      layout: "AppHomeLayout",
    },
  },

  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: {
      layout: "AppHomeLayout",
    },
  },

  {
    path: "/about-us",
    name: "about-us",
    component: AboutUs,
    meta: {
      layout: "AppHomeLayout",
    },
  },

  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: PrivacyPolicy,
    meta: {
      layout: "AppHomeLayout",
    },
  },

  {
    path: "/frequently-asked-questions",
    name: "frequently-asked-questions",
    component: FrequentlyAskedQuestions,
    meta: {
      layout: "AppHomeLayout",
    },
  },
];

// function guardMyroute(to, from, next) {
//   var isAuthenticated = false;
//   if (localStorage.getItem("token")) isAuthenticated = true;
//   else isAuthenticated = false;
//   if (isAuthenticated) {
//     next();
//   } else {
//     next({
//       name: "login",
//       query: { redirectFrom: to.fullPath },
//     });
//   }
// }

export default routes;
