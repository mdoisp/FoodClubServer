import { Module } from '@nestjs/common';

// import { OrderController } from './order.controller';
import { ListOrdersService } from './list-orders.service';
import { GetOrderByIdService } from './get-order-byid.service';
import { CreateOrderService } from './create-order.service';
import { UpdateOrderService } from './update-order.service';
import { DeleteOrderService } from './delete-order.service';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { orderProvider } from 'src/infrastructure/providers/order.provider';
import { OrderRepository } from 'src/infrastructure/database/repositories/order.repository';

@Module({
  imports: [InfrastructureModule],
  controllers: [],
  providers: [
    ...orderProvider,
    OrderRepository,
    ListOrdersService, 
    GetOrderByIdService, 
    CreateOrderService, 
    UpdateOrderService, 
    DeleteOrderService
  ],
  exports: [
    ListOrdersService, 
    GetOrderByIdService, 
    CreateOrderService, 
    UpdateOrderService, 
    DeleteOrderService
  ]
})
export class OrderModule {}
