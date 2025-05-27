import { Inject, Injectable } from '@nestjs/common';
import { DishRepository } from '../../../infrastructure/database/repositories/dish.repository';
import { Dish } from 'src/domain/models/dish.model';

@Injectable()
export class ListDishesService {
  constructor(
    @Inject('DISH_REPOSITORY')
    private readonly dishRepository: DishRepository
  ) {}
  async execute(): Promise<Dish[]>{
    return await this.dishRepository.list();
  }
}
