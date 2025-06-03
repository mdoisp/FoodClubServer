import { Inject, Injectable } from "@nestjs/common";
import { DishRatingEntityInterface } from "src/database/interfaces/dish-rating.interface";
import { DishRatingRepository } from "src/database/repositories/dish-rating.repository";


@Injectable()
export class CreateDishRatingService{
    constructor(
        @Inject('DISH_RATING_REPOSITORY')
        private readonly dishRatingRepository: DishRatingRepository
    ) {}
    
    async execute(dishRating: Omit<DishRatingEntityInterface,'id'>): Promise<DishRatingEntityInterface> {
        return await this.dishRatingRepository.create(dishRating);
    }    
}