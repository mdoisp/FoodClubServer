import { Module } from '@nestjs/common';

import { DishController } from '../../../interfaces/http/controllers/dish.controller';
import { ListDishesService } from './list-dishes.service';
import { GetDishByIdService } from './get-dish-byid.service';
import { CreateDishService } from './create-dish.service';
import { UpdateDishService } from './update-dish.service';
import { DeleteDishService } from './delete-dish.service';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { dishProvider } from 'src/infrastructure/providers/dish.provider';

@Module({
  imports: [InfrastructureModule],
  controllers: [DishController],
  providers: [
    ...dishProvider,
    ListDishesService, 
    GetDishByIdService, 
    CreateDishService, 
    UpdateDishService, 
    DeleteDishService
  ],
  exports: [
    ListDishesService, 
    GetDishByIdService, 
    CreateDishService, 
    UpdateDishService, 
    DeleteDishService
  ]
})
export class DishModule {}
