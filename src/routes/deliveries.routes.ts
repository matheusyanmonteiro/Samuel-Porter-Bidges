import { Router } from 'express';
import { CreateDeliveryController } from '../modules/deliveries /useCases/CreateDeliveryController';

const createDeliveryController = new CreateDeliveryController();

const deliveryRoutes = Router();

deliveryRoutes.post('/', createDeliveryController.handle);

export { deliveryRoutes };
