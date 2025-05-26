import { Inject, Injectable } from '@nestjs/common';
import { OrderEntity } from '../entities/order.entity';
import { OrderEntityInterface } from '../interfaces/order.interface';
import { OrderInterface } from '../../use-cases/order/order.interface';

@Injectable()
export class OrderRepository {
  constructor(
    @Inject('ORDER_ENTITY')
    private readonly orderEntity: typeof OrderEntity,
  ) {}

  async create(order: Omit<OrderInterface, 'id'>): Promise<OrderEntityInterface> {
    return await this.orderEntity.create(order);
  }

  async update(
    id: number,
    orderData: Partial<Omit<OrderInterface, 'id'>>,
  ): Promise<OrderEntityInterface> {
    const order = await this.orderEntity.findByPk(id);
    if (!order) throw new Error('Pedido não encontrado!');
    
    return await order.update(orderData);
  }

  async getById(id: number): Promise<OrderEntityInterface> {
    const order = await this.orderEntity.findByPk(id);
    if (!order) throw new Error('Pedido não encontrado!');
    return order;
  }

  async list(): Promise<OrderEntityInterface[]> {
    return await this.orderEntity.findAll();
  }

  async delete(id: number): Promise<void> {
    const order = await this.orderEntity.findByPk(id);
    if (!order) throw new Error('Pedido não encontrado!');
    await order.destroy();
  }
}