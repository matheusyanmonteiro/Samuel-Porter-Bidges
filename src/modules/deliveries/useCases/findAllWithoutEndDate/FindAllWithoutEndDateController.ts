import { Request, Response } from 'express';
import { FindAllWithoutEndDateUseCase } from './FindAllWithoutEndDateUseCase';

class FindAllWithoutEndDateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllWithoutEndDateUseCase = new FindAllWithoutEndDateUseCase();

    const deliveries = await findAllWithoutEndDateUseCase.execute();

    return response.json(deliveries);
  }
}

export { FindAllWithoutEndDateController };
