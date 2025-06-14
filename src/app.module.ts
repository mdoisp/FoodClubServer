import { Module } from '@nestjs/common';
import { DishModule } from './use-cases/dish/dish.module';
import { DatabaseModule } from './database/database.module';
import { DishController } from './use-cases/dish/dish.controller';
import { CompanyModule } from './use-cases/company/company.module';
import { EmployeeModule } from './use-cases/employee/employee.module';
// import { OrderModule } from './use-cases/order/order.module';
import { RestaurantModule } from './use-cases/restaurant/restaurant.module';
import { EmployeeController } from './use-cases/employee/employee.controller';
// import { OrderController } from './use-cases/order/order.controller';
import { RestaurantController } from './use-cases/restaurant/restaurant.controller';
import { CompanyController } from './use-cases/company/company.controller';
import { UserController } from './use-cases/user/user.controller';
import { UserModule } from './use-cases/user/user.module';
import { DishRatingControlller } from './use-cases/dish-rating/dish-rating.controller';
import { DishRatingModule } from './use-cases/dish-rating/dish-rating.module';
import { AuthModule } from './use-cases/user/auth.module';
import { EmployeeWeeklyOrdersModule } from './use-cases/employee-weekly-orders/employee-weekly-orders.module';
import { EmployeeWeeklyOrdersController } from './use-cases/employee-weekly-orders/employee-weekly-orders.controller';
@Module({
  imports: [CompanyModule, DishModule, DatabaseModule, EmployeeModule, DishRatingModule,
            RestaurantModule, UserModule, AuthModule, EmployeeWeeklyOrdersModule],
  controllers: [CompanyController, DishController, EmployeeController, DishRatingControlller,
                RestaurantController,UserController, EmployeeWeeklyOrdersController],
  providers: [],
})
export class AppModule {}
