import { Module } from '@nestjs/common';

import { RestaurantController } from './controllers/restaurant.controller';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { restaurantProvider } from 'src/infrastructure/providers/restaurant.provider';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';
import { dishProvider } from 'src/infrastructure/providers/dish.provider';
import { restaurantRatingProvider } from 'src/infrastructure/providers/restaurant-rating.provider';
import { dishRatingProvider } from 'src/infrastructure/providers/dish-rating.provider';
import { UpdateRestaurantService } from 'src/application/use-cases/update-restaurant.use-cases';
import { CreateRestaurantService } from 'src/application/use-cases/create-restaurant.use-cases';
import { DeleteRestaurantService } from 'src/application/use-cases/delete-restaurant.use-cases';
import { GetRestaurantByIdService } from 'src/application/use-cases/get-restaurant-byid.use-cases';
import { ListDishesByRestaurantService } from 'src/application/use-cases/list-dishes-by-restaurant.use-cases';
import { ListRestaurantService } from 'src/application/use-cases/list-restaurant.use-cases';
import { RestaurantRatingRepository } from 'src/infrastructure/database/repositories/restaurant-rating.repository';
import { ListOrdersByRestaurantUseCase } from 'src/application/use-cases/list-orders-by-restaurant.use-case';
import { SendOrdersUseCase } from 'src/application/use-cases/send-orders.use-case';
import { CreateCompanyOrderUseCase } from 'src/application/use-cases/create-company-order.use-case';
import { individualOrderProvider } from 'src/infrastructure/providers/individual-order.provider';
import { UpdateIndividualOrderStatusUseCase } from 'src/application/use-cases/update-individual-order-status.use-case';
import { UpdateCompanyOrderStatusUseCase } from 'src/application/use-cases/update-company-order-status.use-case';
import { GetOrderProgressUseCase } from 'src/application/use-cases/get-order-progress.use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [RestaurantController],
  providers: [
    ...restaurantProvider,
    ...dishProvider,
    ...restaurantRatingProvider,
    ...dishRatingProvider,
    ...individualOrderProvider,
    RestaurantRepository,
    RestaurantRatingRepository,
    ListRestaurantService,
    GetRestaurantByIdService, 
    CreateRestaurantService, 
    UpdateRestaurantService, 
    DeleteRestaurantService,
    ListDishesByRestaurantService,
    ListOrdersByRestaurantUseCase,
    SendOrdersUseCase,
    CreateCompanyOrderUseCase,
    UpdateIndividualOrderStatusUseCase,
    UpdateCompanyOrderStatusUseCase,
    GetOrderProgressUseCase
  ],
  exports: [
    RestaurantRepository,
    RestaurantRatingRepository,
    ListRestaurantService,
    GetRestaurantByIdService, 
    CreateRestaurantService, 
    UpdateRestaurantService, 
    DeleteRestaurantService,
    ListDishesByRestaurantService,
    ListOrdersByRestaurantUseCase,
    SendOrdersUseCase,
    CreateCompanyOrderUseCase,
    UpdateIndividualOrderStatusUseCase,
    UpdateCompanyOrderStatusUseCase,
    GetOrderProgressUseCase
  ]
})
export class RestaurantModule {}
