import { Inject, Injectable } from '@nestjs/common';
import { DishEntity } from '../entities/dish.entity';
import { DishEntityInterface } from '../interfaces/dish.interface';

@Injectable()
export class DishRepository {
  constructor(
    @Inject('DISH_ENTITY')
    private readonly dishEntity: typeof DishEntity,
  ) {}

  async create(dish: Omit<DishEntityInterface, 'id'>): Promise<DishEntityInterface> {
    return await this.dishEntity.create(dish);
  }

  async update(
    id: number,
    dishData: Partial<Omit<DishEntityInterface, 'id'>>,
  ): Promise<DishEntityInterface> {
    const dish = await this.dishEntity.findByPk(id);
    if (!dish) throw new Error('Dish not found!');
    return await dish.update(dishData);
  }

  async getById(id: number): Promise<DishEntityInterface> {
    const dish = await this.dishEntity.findByPk(id);
    if (!dish) throw new Error('Dish not found!');
    return dish;
  }

  async list(): Promise<DishEntityInterface[]> {
    return await this.dishEntity.findAll();
  }

  async delete(id: number): Promise<void> {
    const dish = await this.dishEntity.findByPk(id);
    if (!dish) throw new Error('Dish not found!');
    await dish.destroy();
  }
}

// import { Inject, Injectable } from '@nestjs/common';
// import { DishEntity } from '../entities/dish.entity';
// import { DishEntityInterface } from '../interfaces/dish.interface';
// import { DishInterface } from '../../use-cases/dish/dish.interface';

// @Injectable()
// export class DishRepository {
//   constructor(
//     @Inject('DISH_ENTITY')
//     private readonly dishEntity: typeof DishEntity,
//   ) {}

//   async create(dish: Omit<DishEntityInterface, 'idDish'>): Promise<DishEntityInterface> {
//     return await this.dishEntity.create(dish);
//   }

//   async update(
//     id: number,
//     dishData: Partial<Omit<DishEntityInterface, 'idDish'>>,
//   ): Promise<DishEntityInterface> {
//     const dish = await this.dishEntity.findByPk(id);
//     if (!dish) throw new Error('Prato não encontrado!');
    
//     return await dish.update(dishData);
//   }

//   async getById(id: number): Promise<DishEntityInterface> {
//     const dish = await this.dishEntity.findByPk(id);
//     if (!dish) throw new Error('Prato não encontrado!');
//     return dish;
//   }

//   async list(): Promise<DishEntityInterface[]> {
//     return await this.dishEntity.findAll();
//   }

//   async delete(id: number): Promise<void> {
//     const dish = await this.dishEntity.findByPk(id);
//     if (!dish) throw new Error('Prato não encontrado!');
//     await dish.destroy();
//   }
// }