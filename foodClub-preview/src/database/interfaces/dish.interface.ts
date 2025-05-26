import { RestaurantEntityInterface } from './restaurant.interface';

export interface DishEntityInterface {
  id: number;
  dish_name: string;
  dish_description?: string;
  price: number;
}