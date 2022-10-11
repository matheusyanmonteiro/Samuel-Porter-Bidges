import { Request, Response } from 'express';
import { FindAllDeliveriesUseCase } from './FindAllDeliveriesUseCase';

class FindAllDeliveriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_client } = request;

    const findAllDeliveriesUseCae = new FindAllDeliveriesUseCase();

    const deliveries = await findAllDeliveriesUseCae.execute(id_client);

    return response.json(deliveries);
  }
}

export { FindAllDeliveriesController };
