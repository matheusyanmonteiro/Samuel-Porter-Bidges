import { prisma } from '../../../../database/PrismaClient';
import { hash } from 'bcrypt';

import { ICreateDeliverymanRequest } from './ICreateDeliverymanRequest';

class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliverymanRequest) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });


    if (deliverymanExists) {
      throw new Error('Deliveryman already exists');
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
