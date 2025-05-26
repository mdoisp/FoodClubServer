import { Injectable } from '@nestjs/common';
import { RestaurantInterface } from '../restaurant.interface';
import { RestaurantRepository } from 'src/database/repositories/restaurant.repository';

@Injectable()
export class GetRestaurantByIdService {
  constructor(private restaurantRepository: RestaurantRepository){}
  execute(id: number): Promise<RestaurantInterface> {
    return this.restaurantRepository.getById(id);
  }
}
