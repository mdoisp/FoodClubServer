import { Injectable } from '@nestjs/common';
import { OrderRepository } from 'src/database/repositories/order.repository';

@Injectable()
export class DeleteOrderService {
  constructor(private orderRepository: OrderRepository) {}
  execute(id: number): void {
    this.orderRepository.delete(id);
  }
}