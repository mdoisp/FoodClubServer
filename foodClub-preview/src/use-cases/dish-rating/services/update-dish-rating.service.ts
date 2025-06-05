import { Inject, Injectable } from "@nestjs/common";
import { DishRatingEntityInterface } from "src/database/interfaces/dish-rating.interface";
import { DishRatingRepository } from "src/database/repositories/dish-rating.repository";

@Injectable()
export class UpdateDishRatingService {
    constructor(
        @Inject('DISH_RATING_REPOSITORY')
        private readonly dishRatingRepository: DishRatingRepository
    ) {}

    async execute(id: number, ratingData: Partial<Omit<DishRatingEntityInterface, 'id'>>): Promise<DishRatingEntityInterface> {
        return await this.dishRatingRepository.update(id, ratingData);
    }
} 