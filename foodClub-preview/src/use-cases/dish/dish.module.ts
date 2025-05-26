import { Module } from '@nestjs/common';

import { DishController } from './dish.controller';
import { ListDishesService } from './services/list-dishes.service';
import { GetDishByIdService } from './services/get-dish-byid.service';
import { CreateDishService } from './services/create-dish.service';
import { UpdateDishService } from './services/update-dish.service';
import { DeleteDishService } from './services/delete-dish.service';
import { DatabaseModule } from 'src/database/database.module';
import { dishProvider } from 'src/database/providers/dish.provider';

@Module({
  imports: [DatabaseModule],
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
