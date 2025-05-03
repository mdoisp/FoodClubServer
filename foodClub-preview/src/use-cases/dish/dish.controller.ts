import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';

import { GetDishByIdService } from './services/get-dish-byid.service';
import { DishInterface } from './dish.interface';
import { CreateDishService } from './services/create-dish.service';
import { UpdateDishService } from './services/update-dish.service';
import { DeleteDishService } from './services/delete-dish.service';
import { Response } from 'express';
import { ProductEntityInterface } from 'src/database/entities/product.interface';
import { ListDishesService } from './services/list-dishes.service';

@Controller('Dish')
export class DishController {
  constructor(
    private listDishesService: ListDishesService,
    private getDishByIdService: GetDishByIdService,
    private createDishService: CreateDishService,
    private updateDishService: UpdateDishService,
    private deleteDishService: DeleteDishService
  ) {}

  @Get()
  async list(): Promise<ProductEntityInterface[]> {
    const productList = await this.listDishesService.execute();

    return productList;
  }

  @Get(':id')
  getById(@Param('id') id: string): DishInterface {
    const product = this.getDishByIdService.execute(Number(id));

    return product;
  }

  @Post()
  @HttpCode(201)
  create(
    @Body() dish: DishInterface, @Res() res: Response) {
    const { name, price, description, ingredients, restaurantId, isAvailable } = dish;
    if(!(name && price && description && ingredients && restaurantId && isAvailable)){
      res.status(400).json({
        sucess: false,
        message: 'Todos os campos são obrigatórios'
      });
      return;
    }
    this.createDishService.execute(dish);
    res.send();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dishData: DishInterface): DishInterface {
    return this.updateDishService.execute(Number(id), dishData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.deleteDishService.execute(Number(id));
  }
}