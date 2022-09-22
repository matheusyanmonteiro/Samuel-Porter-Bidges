import { Request, Response } from 'express';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';
import { ICreateDeliverymanRequest } from './ICreateDeliverymanRequest';

class CreateDeliverymanController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password }: ICreateDeliverymanRequest = request.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();
    const result = await createDeliverymanUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}

export { CreateDeliverymanController };
