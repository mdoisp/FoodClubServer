import { Inject, Injectable } from '@nestjs/common';
import { DishInterface } from '../dish.interface';
import { DishRepository } from '../../../database/repositories/dish.repository';

@Injectable()
export class UpdateDishService {
  constructor(
    @Inject('DISH_REPOSITORY')
    private readonly dishRepository: DishRepository
  ) {}
  async execute(id: number, productData: DishInterface): Promise<DishInterface> {
    return await this.dishRepository.update(id, productData);
  }
}