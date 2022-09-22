import { Request, Response } from 'express';
import { AuthenticateDeliverymanUseCase } from './AuthenticateDeliverymanUseCase';
import { IAuthenticateDeliverymanRequest } from './IAuthenticateDeliveryRequest';

class AuthenticateDeliveryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password }: IAuthenticateDeliverymanRequest =
      request.body;

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();
    const result = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}

export { AuthenticateDeliveryController };
