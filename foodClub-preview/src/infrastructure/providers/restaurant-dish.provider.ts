import { RestaurantDishEntity } from "../database/entities/restaurant-dish.entity";


export const restaurantDishProvider = [
  {
    provide: 'RESTAURANT_DISH_REPOSITORY',
    useValue: RestaurantDishEntity,
  },
];