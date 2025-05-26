import { Injectable } from '@nestjs/common';
import { RestaurantInterface } from '../restaurant.interface';
import { RestaurantRepository } from 'src/database/repositories/restaurant.repository';

@Injectable()
export class UpdateRestaurantService {
  constructor(private restaurantRepository: RestaurantRepository) {}
  execute(id: number, restaurantData: RestaurantInterface): Promise<RestaurantInterface> {
    return this.restaurantRepository.update(id, restaurantData);
  }
}