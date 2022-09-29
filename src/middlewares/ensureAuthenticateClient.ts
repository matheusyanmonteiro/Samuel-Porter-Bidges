import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { IPayloadEnsureAuthenticate } from '../payload/IPayloads';
async function EnsureAuthenticateClient(
  request: Request,
  response: Response,
  nextFunction: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token missing',
    });
  }

  const [bearer, token] = authHeader.split(' ');

  try {
    const { sub } = verify(
      token,
      `${process.env.RASHMD5CLIENT}`
    ) as IPayloadEnsureAuthenticate;

    request.id_client = sub;

    return nextFunction();
  } catch (error) {
    return response.status(401).json({
      message: 'Invalid Token',
    });
  }
}

export { EnsureAuthenticateClient };
