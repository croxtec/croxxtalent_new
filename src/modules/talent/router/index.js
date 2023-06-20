import DashboardRoutes from "../views/dashboard/router";
import ResumeRoutes from "../views/resume/router";
import CompetenciesRoutes from "../views/competencies/router";
import AssessmentRoutes from "../views/assessment/router";
import JobsRoutes from "../views/jobs/router";
import CroxxProfile from "../views/croxxprofile/router";
import TrainingRoutes from "../views/training/router"
import Messaging from "../views/messaging/router"
import Settings from "../views/settings/router"

const routes = [];

const router = routes.concat(
  DashboardRoutes,
  ResumeRoutes,
  CompetenciesRoutes,
  AssessmentRoutes,
  JobsRoutes,
  CroxxProfile,
  TrainingRoutes,
  Messaging,
  Settings
);

export default router;
