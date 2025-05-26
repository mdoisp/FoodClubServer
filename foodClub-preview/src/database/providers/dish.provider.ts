import { DishEntity } from "../entities/dish.entity";
import { DishRepository } from '../repositories/dish.repository';

export const dishProvider = [
  {
    provide: 'DISH_ENTITY',
    useValue: DishEntity,
  },
  {
    provide: 'DISH_REPOSITORY',
    useClass: DishRepository,
  },
];