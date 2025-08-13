import { Router } from 'express';
import { sessionRoutes } from './session-routes';
import { taskHistoriesRoutes } from './task-history';
import { taskRoutes } from './task-routes';
import { teamMemberRoutes } from './team-member-routes';
import { teamRoutes } from './team-routes';
import { userRoutes } from './user-routes';

const routes = Router();
routes.use('/users', userRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/teams', teamRoutes);
routes.use('/team-members', teamMemberRoutes);
routes.use('/tasks', taskRoutes);
routes.use('/task-histories', taskHistoriesRoutes);

export { routes };
