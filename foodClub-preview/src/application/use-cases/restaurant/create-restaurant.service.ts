import { Injectable } from "@nestjs/common";
import { Restaurant } from "src/domain/models/restaurant.model";
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';

@Injectable()
export class CreateRestaurantService {
    constructor(private restaurantRepository: RestaurantRepository){}
    execute(restaurant: Restaurant): void {
        this.restaurantRepository.create(restaurant);
    }
}