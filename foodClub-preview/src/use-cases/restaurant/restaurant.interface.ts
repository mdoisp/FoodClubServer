import { DishInterface } from "../dish/dish.interface";

export interface RestaurantInterface {
    id: number;
    restaurant_name: string;
    cnpj?: string;
    street?: string;
    number?: string;
    zip_code?: string;
    city?: string;
    state?: string;
    dishes?: DishInterface[];
}