import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { prisma } from '../../../../database/PrismaClient';
import { IAuthenticateClientRequest } from './IAuthenticateClientRequest';

class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClientRequest) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error('USERNAME OR PASSWORD INVALID!!!');
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error('USERNAME OR PASSWORD INVALID!!!');
    }

    const token = sign({ username }, `${process.env.RASHMD5CLIENT}`, {
      subject: client.id,
      expiresIn: '1d',
    });

    return {
      token,
    };
  }
}

export { AuthenticateClientUseCase };
