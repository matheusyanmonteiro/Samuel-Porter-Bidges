import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { clientRoutes } from './client.routes';
import { deliveryRoutes } from './deliveryman.routes';

const routes = Router();

routes.use('/clients', clientRoutes);
routes.use('/authenticate', authenticateRoutes);
routes.use('/deliveryman', deliveryRoutes);

export { routes };
