import { Injectable } from '@nestjs/common';
import { OrderInterface } from '../order.interface';
import { OrderRepository } from 'src/database/repositories/order.repository';

@Injectable()
export class GetOrderByIdService {
  constructor(private orderRepository: OrderRepository){}
  execute(id: number): Promise<OrderInterface> {
    return this.orderRepository.getById(id);
  }
}
