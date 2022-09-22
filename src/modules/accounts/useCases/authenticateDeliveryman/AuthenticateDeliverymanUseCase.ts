import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { prisma } from '../../../../database/PrismaClient';
import { IAuthenticateDeliverymanRequest } from './IAuthenticateDeliveryRequest';

class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliverymanRequest) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error('USERNAME OR PASSWORD INVALID!!!');
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error('USERNAME OR PASSWORD INVALID!!!');
    }

    const token = sign({ username }, `${process.env.RASHMD5DELIVERYMAN}`, {
      subject: deliveryman.id,
      expiresIn: '1d',
    });

    return {
      token,
    };
  }
}

export { AuthenticateDeliverymanUseCase };
