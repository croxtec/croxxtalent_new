import DashboardRoutes from "../views/dashboard/router";
import ResumeRoutes from "../views/resume/router";
import CompetenciesRoutes from "../views/competencies/router";
import AssessmentRoutes from "../views/assessment/router";

const routes = [];
const router = routes.concat(
  DashboardRoutes,
  ResumeRoutes,
  CompetenciesRoutes,
  AssessmentRoutes
);

export default router;
