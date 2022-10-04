import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { IPayloadEnsureAuthenticate } from '../payload/IPayloads';
async function EnsureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  nextFunction: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'token missing',
    });
  }

  const [bearer, token] = authHeader.split(' ');

  try {
    const { sub } = verify(
      token,
      `${process.env.RASHMD5DELIVERYMAN}`
    ) as IPayloadEnsureAuthenticate;

    request.id_deliveryman = sub;

    return nextFunction();
  } catch (error) {
    return response.status(401).json({
      message: 'Invalid Token',
    });
  }
}

export { EnsureAuthenticateDeliveryman };
