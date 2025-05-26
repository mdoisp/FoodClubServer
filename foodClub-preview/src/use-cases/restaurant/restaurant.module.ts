import { Module } from '@nestjs/common';

import { RestaurantController } from './restaurant.controller';
import { GetRestaurantByIdService } from './services/get-restaurant-byid.service';
import { CreateRestaurantService } from './services/create-restaurant.service';
import { UpdateRestaurantService } from './services/update-restaurant.service';
import { DeleteRestaurantService } from './services/delete-restaurant.service';
import { DatabaseModule } from 'src/database/database.module';
import { restaurantProvider } from 'src/database/providers/restaurant.provider';
import { RestaurantRepository } from 'src/database/repositories/restaurant.repository';
import { restaurantDishProvider } from 'src/database/providers/restaurant-dish.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [RestaurantController],
  providers: [
    ...restaurantProvider,
    ...restaurantDishProvider,
    RestaurantRepository,
    GetRestaurantByIdService, 
    CreateRestaurantService, 
    UpdateRestaurantService, 
    DeleteRestaurantService
  ],
  exports: [
    GetRestaurantByIdService, 
    CreateRestaurantService, 
    UpdateRestaurantService, 
    DeleteRestaurantService
  ]
})
export class RestaurantModule {}

