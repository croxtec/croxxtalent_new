import DashboardRoutes from "../views/dashboard/router";
import ResumeRoutes from "../views/resume/router";

const routes = [];
const router = routes.concat(DashboardRoutes, ResumeRoutes);

export default router;
