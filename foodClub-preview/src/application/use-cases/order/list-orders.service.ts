import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/infrastructure/database/repositories/order.repository';
import { OrderEntityInterface } from 'src/infrastructure/database/interfaces/order.interface';

@Injectable()
export class ListOrdersService {
  constructor(private orderRepository: OrderRepository) {}
  execute(): Promise<OrderEntityInterface[]>{
    return this.orderRepository.list();
  }
}
