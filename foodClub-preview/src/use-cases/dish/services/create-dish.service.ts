import { Inject, Injectable } from '@nestjs/common';
import { DishRepository } from '../../../database/repositories/dish.repository';
import { DishInterface } from '../dish.interface';

@Injectable()
export class CreateDishService {
    constructor(
        @Inject('DISH_REPOSITORY')
        private readonly dishRepository: DishRepository
    ){}
    async execute(dish: Omit<DishInterface, 'id'>): Promise<DishInterface> {
        return await this.dishRepository.create(dish);
    }
}
