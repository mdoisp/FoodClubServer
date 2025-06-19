import { DishEntityInterface } from "src/domain/repositories/dish.interface";
import { CompanyOrderEntityInterface } from "src/domain/repositories/company-order.interface";
import { RestaurantRatingInterface } from './restaurant-rating.interface';

export interface RestaurantInterface {
    id: number;
    userId: number;
    name: string;
    cnpj: string;
    cep: string;
    number: string;
    image?: string;
    dishes?: DishEntityInterface[];
    companyOrders?: CompanyOrderEntityInterface[];
    restaurantRatings?: RestaurantRatingInterface[];
}