import { Router } from 'express';
import { AuthenticateDeliveryController } from '../modules/accounts/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { AuthenticateClientController } from '../modules/accounts/useCases/authenticateClient/AuthenticateClientController';

const authenticateRoutes = Router();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliveryController();

authenticateRoutes.post('/client', authenticateClientController.handle);
authenticateRoutes.post(
  '/deliveryman',
  authenticateDeliverymanController.handle
);

export { authenticateRoutes };
