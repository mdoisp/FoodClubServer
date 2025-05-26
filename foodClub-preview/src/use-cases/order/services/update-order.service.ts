import { Injectable } from '@nestjs/common';
import { OrderInterface } from '../order.interface';
import { OrderRepository } from 'src/database/repositories/order.repository';

@Injectable()
export class UpdateOrderService {
  constructor(private orderRepository: OrderRepository) {}
  execute(id: number, orderData: OrderInterface): Promise<OrderInterface> {
    return this.orderRepository.update(id, orderData);
  }
}