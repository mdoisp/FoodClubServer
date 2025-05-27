import { Dish } from "./dish.model";

export interface Restaurant {
    id: number;
    restaurant_name: string;
    cnpj?: string;
    street?: string;
    number?: string;
    zip_code?: string;
    city?: string;
    state?: string;
    dishes?: Dish[];
}