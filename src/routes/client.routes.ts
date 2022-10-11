import { Router } from 'express';
import { FindAllDeliveriesController } from '../modules/clients/useCases/deliveries/FindAllDeliveriesController';
import { CreateClientController } from '../modules/clients/useCases/createClient/CreateClientController';
import { EnsureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';

const clientRoutes = Router();
const createClientController = new CreateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();

clientRoutes.post('/', createClientController.handle);

clientRoutes.get(
  '/deliveries',
  EnsureAuthenticateClient,
  findAllDeliveriesController.handle
);

export { clientRoutes };
