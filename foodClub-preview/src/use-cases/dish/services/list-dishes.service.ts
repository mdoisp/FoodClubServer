import { Inject, Injectable } from '@nestjs/common';
import { DishInterface } from '../dish.interface';
import { DishRepository } from '../../../database/repositories/dish.repository';

@Injectable()
export class ListDishesService {
  constructor(
    @Inject('DISH_REPOSITORY')
    private readonly dishRepository: DishRepository
  ) {}
  async execute(): Promise<DishInterface[]>{
    return await this.dishRepository.list();
  }
}
