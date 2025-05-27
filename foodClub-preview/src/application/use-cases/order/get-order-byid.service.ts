import { Injectable } from '@nestjs/common';
import { Order } from 'src/domain/models/order.model';
import { OrderRepository } from 'src/infrastructure/database/repositories/order.repository';

@Injectable()
export class GetOrderByIdService {
  constructor(private orderRepository: OrderRepository){}
  execute(id: number): Promise<Order> {
    return this.orderRepository.getById(id);
  }
}
