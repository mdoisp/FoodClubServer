import { Module } from '@nestjs/common';

import { RestaurantController } from './controllers/restaurant.controller';
import { GetRestaurantByIdService } from '../../application/use-cases/get-restaurant-byid.service';
import { CreateRestaurantService } from '../../application/use-cases/create-restaurant.service';
import { UpdateRestaurantService } from '../../application/use-cases/update-restaurant.service';
import { DeleteRestaurantService } from '../../application/use-cases/delete-restaurant.service';
import { DatabaseModule } from 'src/infrastructure/database/database.module';
import { restaurantProvider } from 'src/infrastructure/providers/restaurant.provider';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';
import { ListRestaurantService } from '../../application/use-cases/list-restaurant.service';
import { ListDishesByRestaurantService } from 'src/application/use-cases/list-dishes-by-restaurant.service';
import { dishProvider } from 'src/infrastructure/providers/dish.provider';
import { restaurantRatingProvider } from 'src/infrastructure/providers/restaurant-rating.provider';
import { dishRatingProvider } from 'src/infrastructure/providers/dish-rating.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [RestaurantController],
  providers: [
    ...restaurantProvider,
    ...dishProvider,
    ...restaurantRatingProvider,
    ...dishRatingProvider,
    RestaurantRepository,
    ListRestaurantService,
    GetRestaurantByIdService, 
    CreateRestaurantService, 
    UpdateRestaurantService, 
    DeleteRestaurantService,
    ListDishesByRestaurantService
  ],
  exports: [
    ListRestaurantService,
    GetRestaurantByIdService, 
    CreateRestaurantService, 
    UpdateRestaurantService, 
    DeleteRestaurantService,
    ListDishesByRestaurantService
  ]
})
export class RestaurantModule {}

