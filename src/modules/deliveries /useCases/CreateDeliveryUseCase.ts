import { prisma } from '../../../database/PrismaClient';
import { ICreateDeliveryRequest } from './ICreateDeliveryRequest';

class CreateDeliveryUseCase {
  async execute({ item_name, id_client }: ICreateDeliveryRequest) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });

    return delivery;
  }
}

export { CreateDeliveryUseCase };
