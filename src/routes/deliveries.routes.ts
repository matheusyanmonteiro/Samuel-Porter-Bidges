import { Router } from 'express';
import { FindAllWithoutEndDateController } from '../modules/deliveries/useCases/findAllWithoutEndDate/FindAllWithoutEndDateController';
import { EnsureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { EnsureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { UpdateDeliverymanController } from '../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { UpdateEndDateController } from '../modules/deliveries/useCases/updateEndDate/UpdateEndDateController';

const createDeliveryController = new CreateDeliveryController();
const findAllDeliveriesController = new FindAllWithoutEndDateController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

const deliveryRoutes = Router();

deliveryRoutes.post(
  '/',
  EnsureAuthenticateClient,
  createDeliveryController.handle
);

deliveryRoutes.get(
  '/available',
  EnsureAuthenticateDeliveryman,
  findAllDeliveriesController.handle
);

deliveryRoutes.put(
  '/updateDeliveryman/:id',
  EnsureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);

deliveryRoutes.put(
  '/updateEndDate/:id',
  EnsureAuthenticateDeliveryman,
  updateEndDateController.handle
);

export { deliveryRoutes };
