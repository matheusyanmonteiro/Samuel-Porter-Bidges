import { Request, Response } from 'express';
import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';
import { IAuthenticateClientRequest } from './IAuthenticateClientRequest';

class AuthenticateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password }: IAuthenticateClientRequest = request.body;

    const authenticateClientUseCase = new AuthenticateClientUseCase();
    const result = await authenticateClientUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}

export { AuthenticateClientController };
