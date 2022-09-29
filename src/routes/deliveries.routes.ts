import { Router } from 'express';
import { EnsureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { CreateDeliveryController } from '../modules/deliveries /useCases/CreateDeliveryController';

const createDeliveryController = new CreateDeliveryController();

const deliveryRoutes = Router();

deliveryRoutes.post(
  '/',
  EnsureAuthenticateClient,
  createDeliveryController.handle
);

export { deliveryRoutes };
