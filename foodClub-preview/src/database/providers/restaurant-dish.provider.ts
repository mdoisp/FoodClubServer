import { RestaurantDishEntity } from "../entities/restaurant-dish.entity";


export const restaurantDishProvider = [
  {
    provide: 'RESTAURANT_DISH_REPOSITORY',
    useValue: RestaurantDishEntity,
  },
];