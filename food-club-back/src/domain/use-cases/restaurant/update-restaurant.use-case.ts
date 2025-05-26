import { Restaurant } from '../../entities/restaurant.entity';
import { RestaurantRepository } from '../../repositories/restaurant.repository';

export class UpdateRestaurantUseCase {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async execute(id: string, restaurantData: Partial<Restaurant>): Promise<Restaurant | null> {
    return this.restaurantRepository.update(id, restaurantData);
  }
}

export class DeleteRestaurantUseCase {
  constructor(private readonly restaurantRepository: RestaurantRepository) {}

  async execute(id: string): Promise<boolean> {
    return this.restaurantRepository.delete(id);
  }
}