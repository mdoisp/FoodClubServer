import { Injectable } from "@nestjs/common";
import { RestaurantInterface } from "../restaurant.interface";
import { RestaurantRepository } from 'src/database/repositories/restaurant.repository';

@Injectable()
export class CreateRestaurantService {
    constructor(private restaurantRepository: RestaurantRepository){}
    execute(restaurant: RestaurantInterface): void {
        this.restaurantRepository.create(restaurant);
    }
}