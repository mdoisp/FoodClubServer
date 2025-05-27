import { Module } from '@nestjs/common';

import { RestaurantController } from '../../../interfaces/http/controllers/restaurant.controller';
import { GetRestaurantByIdService } from './get-restaurant-byid.service';
import { CreateRestaurantService } from './create-restaurant.service';
import { UpdateRestaurantService } from './update-restaurant.service';
import { DeleteRestaurantService } from './delete-restaurant.service';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { restaurantProvider } from 'src/infrastructure/providers/restaurant.provider';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';
import { restaurantDishProvider } from 'src/infrastructure/providers/restaurant-dish.provider';

@Module({
  imports: [InfrastructureModule],
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

