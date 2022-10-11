import { Router } from 'express';
import { EnsureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { FindAllDeliveriesController } from '../modules/deliveryman/findAllDeliveries/FindAllDeliveriesController';
import { CreateDeliverymanController } from '../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const deliverymanRoutes = Router();
const createDeliverymanController = new CreateDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController();

deliverymanRoutes.post('/', createDeliverymanController.handle);

deliverymanRoutes.get(
  '/deliveries',
  EnsureAuthenticateDeliveryman,
  findAllDeliveriesController.handle
);

export { deliverymanRoutes };
