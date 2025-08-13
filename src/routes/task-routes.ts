import { TaskController } from '@/controller/task-controller';
import { ensureAuthenticated } from '@/middleware/ensure-authenticated';
import { verifyUserAuthentication } from '@/middleware/verify-user-authentication';
import { Router } from 'express';

const taskRoutes = Router();
const taskController = new TaskController();

taskRoutes.use(ensureAuthenticated);

taskRoutes.post('/', verifyUserAuthentication(['admin']), taskController.create);
taskRoutes.get('/', verifyUserAuthentication(['admin']), taskController.index);
taskRoutes.get('/user', verifyUserAuthentication(['member']), taskController.show);
taskRoutes.patch('/:id', verifyUserAuthentication(['admin', 'member']), taskController.update);
taskRoutes.delete('/:id', verifyUserAuthentication(['admin']), taskController.remove);

export { taskRoutes };
