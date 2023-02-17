import DashboardRoutes from "../views/dashboard/router";
import ResumeRoutes from "../views/resume/router";
import CompetenciesRoutes from "../views/competencies/router";

const routes = [];
const router = routes.concat(DashboardRoutes, ResumeRoutes, CompetenciesRoutes);

export default router;
