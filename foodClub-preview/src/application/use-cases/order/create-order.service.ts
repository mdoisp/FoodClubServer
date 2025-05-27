import { Injectable } from "@nestjs/common";
import { Order } from "sequelize";
import { OrderEntityInterface } from "src/infrastructure/database/interfaces/order.interface";
import { OrderRepository } from 'src/infrastructure/database/repositories/order.repository';

@Injectable()
export class CreateOrderService {
    constructor(private orderRepository: OrderRepository){}
    execute(order: OrderEntityInterface): void {
        this.orderRepository.create(order);
    }
}