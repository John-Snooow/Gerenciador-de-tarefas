import { TaskHistoryController } from '@/controller/task-history';
import { ensureAuthenticated } from '@/middleware/ensure-authenticated';
import { verifyUserAuthentication } from '@/middleware/verify-user-authentication';
import { Router } from 'express';

const taskHistoriesRoutes = Router();
const taskHistoryController = new TaskHistoryController();

taskHistoriesRoutes.use(ensureAuthenticated, verifyUserAuthentication(['admin']));

taskHistoriesRoutes.get('/', taskHistoryController.index);

export { taskHistoriesRoutes };
