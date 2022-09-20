import { hash } from 'bcrypt';

import { prisma } from '../../../database/PrismaClient';
import { ICreateClientRequest } from './ICreateClientRequest';

class CreateClientUseCase {
  async execute({ password, username }: ICreateClientRequest) {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    });

    if (clientExist) {
      throw new Error('Client Already Exists!');
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return client;
  }
}

export { CreateClientUseCase };
