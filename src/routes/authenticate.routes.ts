import { Router } from 'express';
import { AuthenticateClientController } from '../modules/accounts/useCases/authenticateClient/AuthenticateClientController';

const authenticateRoutes = Router();
const authenticateClientController = new AuthenticateClientController();

authenticateRoutes.post('/', authenticateClientController.handle);

export { authenticateRoutes };
