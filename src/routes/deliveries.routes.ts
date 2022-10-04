import { Router } from 'express';
import { FindAllWithoutEndDateController } from '../modules/deliveries/useCases/findAllWithoutEndDate/FindAllWithoutEndDateController';
import { EnsureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';

const createDeliveryController = new CreateDeliveryController();
const findAllDeliveriesController = new FindAllWithoutEndDateController();

const deliveryRoutes = Router();

deliveryRoutes.post(
  '/',
  EnsureAuthenticateClient,
  createDeliveryController.handle
);

deliveryRoutes.get('/available', findAllDeliveriesController.handle);

export { deliveryRoutes };
