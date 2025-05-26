import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';

import { GetDishByIdService } from './services/get-dish-byid.service';
import { DishInterface } from './dish.interface';
import { CreateDishService } from './services/create-dish.service';
import { UpdateDishService } from './services/update-dish.service';
import { DeleteDishService } from './services/delete-dish.service';
import { Response } from 'express';
import { DishEntityInterface } from 'src/database/interfaces/dish.interface';
import { ListDishesService } from './services/list-dishes.service';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListDishDtoResponse } from 'src/interfaces/http/dtos/response/listDishDtoResponse';
import { Http404 } from 'src/interfaces/http/dtos/response/http404';
import { CreateDishDto } from 'src/interfaces/http/dtos/request/createDishDto';
import { Http400 } from 'src/interfaces/http/dtos/response/http400';

@ApiTags('Dish API')
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
  @ApiResponse({
    status: 200,
    description: 'Consulta realizada com sucesso',
    isArray: true,
    type: ListDishDtoResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor',
  })
  async list(): Promise<DishEntityInterface[]> {
    const dishList = await this.listDishesService.execute();

    return dishList;
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'ID do prato',
  })
  @ApiResponse({
    status: 200,
    description: 'Consulta realizada com sucesso',
    type: ListDishDtoResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Prato não encontrado',
    type: Http404,
  })
  async getById(@Param('id') id: string, @Res() res: Response): Promise<DishInterface> {
    const dish = await this.getDishByIdService.execute(Number(id));
    if (!dish) {
      res.status(404).json({
        success: false,
        message: 'Empresa não encontrada',
      });
      return;
    }

    res.status(200).json(dish);
  }

  @Post()
  @HttpCode(201)
  @ApiBody({
    description: 'Dados do prato a serem criados',
    type: CreateDishDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Prato criado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao criar prato',
    type: Http400,
  })
  create(
    @Body() dish: DishInterface, @Res() res: Response) {
    const { dish_name, price, dish_description } = dish;
    if(!(dish_name && price && dish_description)){
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
  @ApiParam({
    name: 'id',
    description: 'ID do prato',
  })
  @ApiBody({
    description: 'Dados do prato a serem atualizados',
    type: CreateDishDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Prato atualizado com sucesso',
    type: ListDishDtoResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Prato não encontrado',
    type: Http404,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao atualizar prato',
    type: Http400,
  })
  async update(@Param('id') id: string, @Body() dishData: DishInterface, @Res() res: Response): Promise<DishInterface> {
    const expectedFields = ['dish_name', 'price', 'dish_description'];
    const receivedFields = Object.keys(dishData);
    const invalidFields = receivedFields.filter(field => !expectedFields.includes(field));
    const dish = await this.updateDishService.execute(Number(id), dishData);

    if (invalidFields.length > 0) {
      res.status(400).json({
        success: false,
        message: `Campos inválidos: ${invalidFields.join(', ')}`,
      });
      return;
    }
    if (!dish) {
      res.status(404).json({
        success: false,
        message: 'Prato não encontrado',
      });
      return;
    }
    res.status(200).json(dish);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'ID do prato a ser deletado',
  })
  @ApiResponse({
    status: 200,
    description: 'Prato deletado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Prato não encontrado',
    type: Http404,
  })
  async delete(@Param('id') id: string, @Res() res: Response): Promise<void> {
  const dish = await this.getDishByIdService.execute(Number(id));
  if (!dish) {
      res.status(404).json({
        success: false,
        message: 'Prato não encontrado',
      });
      return;
    }
    this.deleteDishService.execute(Number(id));
    res.status(200).json({
      success: true,
      message: 'Prato deletado com sucesso',
    });
  }
}