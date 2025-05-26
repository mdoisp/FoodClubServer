import { Module } from '@nestjs/common';

// import { OrderController } from './order.controller';
import { ListOrdersService } from './services/list-orders.service';
import { GetOrderByIdService } from './services/get-order-byid.service';
import { CreateOrderService } from './services/create-order.service';
import { UpdateOrderService } from './services/update-order.service';
import { DeleteOrderService } from './services/delete-order.service';
import { DatabaseModule } from 'src/database/database.module';
import { orderProvider } from 'src/database/providers/order.provider';
import { OrderRepository } from 'src/database/repositories/order.repository';

@Module({
  imports: [DatabaseModule],
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
