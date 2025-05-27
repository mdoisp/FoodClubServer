import { Inject, Injectable } from '@nestjs/common';
import { DishRepository } from '../../../infrastructure/database/repositories/dish.repository';
import { Dish } from 'src/domain/models/dish.model';

@Injectable()
export class GetDishByIdService {
  constructor(
    @Inject('DISH_REPOSITORY')
    private readonly dishRepository: DishRepository
  ){}
  async execute(id: number): Promise<Dish> {
    return await this.dishRepository.getById(id);
  }
}
