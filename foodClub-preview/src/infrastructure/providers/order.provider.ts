import { OrderEntity } from "../database/entities/order.entity";
import { OrderRepository } from "../database/repositories/order.repository";

export const orderProvider = [{
    provide: 'ORDER_ENTITY',
    useValue: OrderEntity
  },
  {
    provide: 'ORDER_REPOSITORY', 
    useClass: OrderRepository 
  }
]