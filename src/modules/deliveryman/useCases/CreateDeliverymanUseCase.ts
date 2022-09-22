import { prisma } from '../../../database/PrismaClient';
import { hash } from 'bcrypt';

import { ICreateDeliverymanRequest } from './ICreateDeliverymanRequest';

class CreateDeliverymanUseCase {
  async execute({ password, username }: ICreateDeliverymanRequest) {
    const clientExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          mode: 'insensitive',
        },
      },
    });

    if (clientExist) {
      throw new Error('Client already exists');
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
