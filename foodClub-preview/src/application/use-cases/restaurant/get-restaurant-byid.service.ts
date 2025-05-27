import { Injectable } from '@nestjs/common';
import { Restaurant } from 'src/domain/models/restaurant.model';
import { RestaurantRepository } from 'src/infrastructure/database/repositories/restaurant.repository';

@Injectable()
export class GetRestaurantByIdService {
  constructor(private restaurantRepository: RestaurantRepository){}
  execute(id: number): Promise<Restaurant> {
    return this.restaurantRepository.getById(id);
  }
}
