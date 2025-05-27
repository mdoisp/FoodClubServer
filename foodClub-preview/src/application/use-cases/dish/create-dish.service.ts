import { Inject, Injectable } from '@nestjs/common';
import { DishRepository } from '../../../infrastructure/database/repositories/dish.repository';
import { Dish } from 'src/domain/models/dish.model';

@Injectable()
export class CreateDishService {
    constructor(
        @Inject('DISH_REPOSITORY')
        private readonly dishRepository: DishRepository
    ){}
    async execute(dish: Omit<Dish, 'id'>): Promise<Dish> {
        return await this.dishRepository.create(dish);
    }
}
