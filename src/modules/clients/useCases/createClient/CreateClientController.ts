import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';
import { ICreateClientRequest } from './ICreateClientRequest';

class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password }: ICreateClientRequest = request.body;

    const createClientUseCase = new CreateClientUseCase();

    const result = await createClientUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}

export { CreateClientController };
