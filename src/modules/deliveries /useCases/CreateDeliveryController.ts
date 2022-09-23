import { Request, Response } from 'express';
import { CreateDeliveryUseCase } from './CreateDeliveryUseCase';
import { ICreateDeliveryRequest } from './ICreateDeliveryRequest';

class CreateDeliveryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_client, item_name }: ICreateDeliveryRequest = request.body;

    const createDeliveryUseCase = new CreateDeliveryUseCase();

    const result = await createDeliveryUseCase.execute({
      id_client,
      item_name,
    });

    return response.json(result);
  }
}

export { CreateDeliveryController };
