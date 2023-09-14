const AffiliatePage = () => import('../pages/AffiliatePage.vue');

const routes = [
  {
    path: '/affiliate',
    name: 'affiliate',
    component: AffiliatePage,
    meta: {
      layout: 'AppDashboardLayout',
      header: 'affiliate'
    }
  }
];
export default routes;
