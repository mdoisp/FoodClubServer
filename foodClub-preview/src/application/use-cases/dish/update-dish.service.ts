import { Inject, Injectable } from '@nestjs/common';
import { DishRepository } from '../../../infrastructure/database/repositories/dish.repository';
import { Dish } from 'src/domain/models/dish.model';

@Injectable()
export class UpdateDishService {
  constructor(
    @Inject('DISH_REPOSITORY')
    private readonly dishRepository: DishRepository
  ) {}
  async execute(id: number, productData: Dish): Promise<Dish> {
    return await this.dishRepository.update(id, productData);
  }
}