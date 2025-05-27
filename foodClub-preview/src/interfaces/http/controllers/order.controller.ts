// import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';

// import { GetOrderByIdService } from './services/get-order-byid.service';
// import { OrderInterface } from './order.interface';
// import { CreateOrderService } from './services/create-order.service';
// import { UpdateOrderService } from './services/update-order.service';
// import { DeleteOrderService } from './services/delete-order.service';
// import { Response } from 'express';
// import { OrderEntityInterface } from 'src/database/interfaces/order.interface';
// import { ListOrdersService } from './services/list-orders.service';

// // @Controller('Order')
// export class OrderController {
//   constructor(
//     private listOrdersService: ListOrdersService,
//     private getOrderByIdService: GetOrderByIdService,
//     private createOrderService: CreateOrderService,
//     private updateOrderService: UpdateOrderService,
//     private deleteOrderService: DeleteOrderService
//   ) {}

//   @Get()
//   async list(): Promise<OrderEntityInterface[]> {
//     const orderList = await this.listOrdersService.execute();

//     return orderList;
//   }

//   @Get(':id')
//   getById(@Param('id') id: string): Promise<OrderInterface> {
//     const order = this.getOrderByIdService.execute(Number(id));

//     return order;
//   }

//   @Post()
//   @HttpCode(201)
//   create(
//     @Body() order: OrderInterface, @Res() res: Response) {
//     const { employeeId, dishId, date, status } = order;
//     if(!(employeeId && dishId && date && status)){
//       res.status(400).json({
//         sucess: false,
//         message: 'Todos os campos são obrigatórios'
//       });
//       return;
//     }
//     this.createOrderService.execute(order);
//     res.send();
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() orderData: OrderInterface): Promise<OrderInterface> {
//     return this.updateOrderService.execute(Number(id), orderData);
//   }

//   @Delete(':id')
//   delete(@Param('id') id: string): void {
//     this.deleteOrderService.execute(Number(id));
//   }
// }