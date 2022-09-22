import { Router } from 'express';
import { CreateDeliverymanController } from '../modules/deliveryman/useCases/CreateDeliverymanController';

const deliveryRoutes = Router();
const createDeliverymanController = new CreateDeliverymanController();

deliveryRoutes.post('/', createDeliverymanController.handle);

export { deliveryRoutes };
