import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { clientRoutes } from './client.routes';
import { deliveryRoutes } from './deliveries.routes';
import { deliverymanRoutes } from './deliveryman.routes';

const routes = Router();

routes.use('/clients', clientRoutes);
routes.use('/authenticate', authenticateRoutes);
routes.use('/deliveryman', deliverymanRoutes);
routes.use('/deliveries', deliveryRoutes);

export { routes };
