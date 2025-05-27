import { Injectable } from '@nestjs/common';
import { Order } from 'src/domain/models/order.model';
import { OrderRepository } from 'src/infrastructure/database/repositories/order.repository';

@Injectable()
export class UpdateOrderService {
  constructor(private orderRepository: OrderRepository) {}
  execute(id: number, orderData: Order): Promise<Order> {
    return this.orderRepository.update(id, orderData);
  }
}