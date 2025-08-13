import { TeamMemberController } from '@/controller/team-member-controller';
import { ensureAuthenticated } from '@/middleware/ensure-authenticated';
import { verifyUserAuthentication } from '@/middleware/verify-user-authentication';
import { Router } from 'express';

const teamMemberRoutes = Router();
const teamMemberController = new TeamMemberController();

teamMemberRoutes.use(ensureAuthenticated, verifyUserAuthentication(['admin']));

teamMemberRoutes.post('/', teamMemberController.create);
teamMemberRoutes.get('/', teamMemberController.show);
teamMemberRoutes.delete('/:id', teamMemberController.remove);

export { teamMemberRoutes };
