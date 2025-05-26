import { RestaurantInterface } from '../restaurant/restaurant.interface';

export interface DishInterface {
  id: number;
  dish_name: string;
  dish_description?: string;
  price: number;
}