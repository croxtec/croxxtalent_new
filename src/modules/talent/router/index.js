import DashboardRoutes from "../views/dashboard/router";
import ResumeRoutes from "../views/resume/router";
import CompetenciesRoutes from "../views/competencies/router";
import AssessmentRoutes from "../views/assessment/router";
import JobsRoutes from "../views/jobs/router";
import userProfilePage from "../views/userProfilePage/router";
import TrainingRoutes from "../views/training/router"

const routes = [];
const router = routes.concat(
  DashboardRoutes,
  ResumeRoutes,
  CompetenciesRoutes,
  AssessmentRoutes,
  JobsRoutes,
  userProfilePage,
  TrainingRoutes
);

export default router;
