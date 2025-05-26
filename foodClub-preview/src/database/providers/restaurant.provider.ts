import { RestaurantEntity } from "../entities/restaurant.entity";
import { RestaurantRepository } from '../repositories/restaurant.repository';

export const restaurantProvider = [
  {
    provide: 'RESTAURANT_ENTITY',
    useValue: RestaurantEntity,
  },
  {
    provide: 'RESTAURANT_REPOSITORY',
    useClass: RestaurantRepository,
  },
];