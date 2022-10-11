import { prisma } from '../../../../database/PrismaClient';
import { IUpdateEndDateRequest } from './IUpdateEndDateRequest';

class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateEndDateRequest) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        end_at: new Date(),
      },
    });

    return result;
  }
}

export { UpdateEndDateUseCase };
