import { Restaurant } from '../../entities/restaurant.entity';
import { RestaurantRepository } from '../../repositories/restaurant.repository';

export class GetRestaurantUseCase {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async execute(id: string): Promise<Restaurant | null> {
    return this.restaurantRepository.findById(id);
  }
}

export class GetAllRestaurantsUseCase {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async execute(): Promise<Restaurant[]> {
    return this.restaurantRepository.findAll();
  }
}