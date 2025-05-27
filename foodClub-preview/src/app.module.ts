import { Module } from '@nestjs/common';
import { DishModule } from './application/use-cases/dish/dish.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DishController } from './interfaces/http/controllers/dish.controller';
import { CompanyModule } from './application/use-cases/company/company.module';
import { EmployeeModule } from './application/use-cases/employee/employee.module';
import { OrderModule } from './application/use-cases/order/order.module';
import { RestaurantModule } from './application/use-cases/restaurant/restaurant.module';
import { EmployeeController } from './interfaces/http/controllers/employee.controller';
// import { OrderController } from './use-cases/order/order.controller';
import { RestaurantController } from './interfaces/http/controllers/restaurant.controller';
import { CompanyController } from './interfaces/http/controllers/company.controller';
import { UserController } from './interfaces/http/controllers/user.controller';
import { UserModule } from './application/use-cases/user/user.module';
@Module({
  imports: [CompanyModule, DishModule, InfrastructureModule, EmployeeModule/*, OrderModule*/, RestaurantModule, UserModule],
  controllers: [CompanyController, DishController, EmployeeController/*, OrderController*/, RestaurantController,UserController],
  providers: [],
})
export class AppModule {}
