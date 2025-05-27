import { Inject, Injectable } from '@nestjs/common';
import { RestaurantEntity } from '../entities/restaurant.entity';
import { RestaurantEntityInterface } from '../interfaces/restaurant.interface';

@Injectable()
export class RestaurantRepository {
  constructor(
    @Inject('RESTAURANT_ENTITY')
    private readonly restaurantEntity: typeof RestaurantEntity,
  ) {}

  async create(restaurant: Omit<RestaurantEntityInterface, 'id'>): Promise<RestaurantEntityInterface> {
    return await this.restaurantEntity.create(restaurant);
  }

  async update(
    id: number,
    restaurantData: Partial<Omit<RestaurantEntityInterface, 'id'>>,
  ): Promise<RestaurantEntityInterface> {
    const restaurant = await this.restaurantEntity.findByPk(id);
    return await restaurant.update(restaurantData);
  }

  async getById(id: number): Promise<RestaurantEntityInterface> {
    const restaurant = await this.restaurantEntity.findByPk(id);
    return restaurant;
  }

  async list(): Promise<RestaurantEntityInterface[]> {
    return await this.restaurantEntity.findAll();
  }

  async delete(id: number): Promise<void> {
    const restaurant = await this.restaurantEntity.findByPk(id);
    await restaurant.destroy();
  }
}