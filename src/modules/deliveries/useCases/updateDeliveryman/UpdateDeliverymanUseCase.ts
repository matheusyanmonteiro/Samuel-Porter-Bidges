import { prisma } from '../../../../database/PrismaClient';
import { IUpdateDeliverymanRequest } from './IUpdateDeliverymanRequest';

class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDeliverymanRequest) {
    const result = await prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman,
      },
    });

    return result;
  }
}

export { UpdateDeliverymanUseCase };
