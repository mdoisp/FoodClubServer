import { Injectable } from '@nestjs/common';
import { Restaurant } from 'src/domain/models/restaurant.model';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';

@Injectable()
export class UpdateRestaurantService {
  constructor(private restaurantRepository: RestaurantRepository) {}
  execute(id: number, restaurantData: Restaurant): Promise<Restaurant> {
    return this.restaurantRepository.update(id, restaurantData);
  }
}