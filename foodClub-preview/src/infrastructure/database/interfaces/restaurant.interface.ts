import { DishEntityInterface } from './dish.interface';

export interface RestaurantEntityInterface {
  id: number;
  restaurant_name: string;
  cnpj?: string;
  street?: string;
  number?: string;
  zip_code?: string;
  city?: string;
  state?: string;
  dishes?: DishEntityInterface[];
}