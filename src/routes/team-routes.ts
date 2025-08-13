import { TeamController } from '@/controller/team-controller';
import { ensureAuthenticated } from '@/middleware/ensure-authenticated';
import { verifyUserAuthentication } from '@/middleware/verify-user-authentication';
import { Router } from 'express';

const teamRoutes = Router();
const teamController = new TeamController();

teamRoutes.use(ensureAuthenticated, verifyUserAuthentication(['admin']));

teamRoutes.post('/', teamController.create);
teamRoutes.put('/:id', teamController.update);

export { teamRoutes };
