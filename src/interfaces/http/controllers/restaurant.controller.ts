import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';

import { GetRestaurantByIdService } from '../../../application/use-cases/get-restaurant-byid.use-cases'
import { CreateRestaurantService } from '../../../application/use-cases/create-restaurant.use-cases';
import { UpdateRestaurantService } from '../../../application/use-cases/update-restaurant.use-cases';
import { DeleteRestaurantService } from '../../../application/use-cases/delete-restaurant.use-cases';
import { Response } from 'express';
import { RestaurantInterface } from 'src/domain/models/restaurant.model';
import { ApiBody, ApiExtraModels, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListRestaurantDtoResponse } from 'src/interfaces/http/dtos/response/listRestaurant.dto';
import { Http404 } from 'src/interfaces/http/dtos/response/http404';
import { CreateRestaurantDto } from 'src/interfaces/http/dtos/request/createRestaurant.dto';
import { Http400 } from 'src/interfaces/http/dtos/response/http400';
import { ListRestaurantService } from '../../../application/use-cases/list-restaurant.use-cases';
import { RestaurantDetailDtoResponse, RestaurantDetailDishDto, RestaurantDetailRatingDto } from 'src/interfaces/http/dtos/response/restaurant-detail.dto';

@ApiTags('Restaurant API')
@ApiExtraModels(RestaurantDetailDtoResponse, RestaurantDetailDishDto, RestaurantDetailRatingDto)
@Controller('Restaurant')
export class RestaurantController {
  constructor(
    private listRestaurantService: ListRestaurantService,
    private getRestaurantByIdService: GetRestaurantByIdService,
    private createRestaurantService: CreateRestaurantService,
    private updateRestaurantService: UpdateRestaurantService,
    private deleteRestaurantService: DeleteRestaurantService
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Consulta realizada com sucesso',
    isArray: true,
    type: ListRestaurantDtoResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor',
  })
  async list(): Promise<RestaurantInterface[]> {
    const restaurantList = await this.listRestaurantService.execute();
    return restaurantList;
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'ID do restaurante',
  })
  @ApiResponse({
    status: 200,
    description: 'Consulta realizada com sucesso',
    type: RestaurantDetailDtoResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Restaurante não encontrado',
    type: Http404,
  })
  async getById(@Param('id') id: string, @Res() res: Response): Promise<RestaurantInterface> {
    const product = await this.getRestaurantByIdService.execute(Number(id));
    if (!product) {
      res.status(404).json({
        success: false,
        message: 'Empresa não encontrada',
      });
      return;
    }

    res.status(200).json(product);
  }

  @Post()
  @HttpCode(201)
  @ApiBody({
    type: CreateRestaurantDto,
    description: 'Dados do restaurante',
  })
  @ApiResponse({
    status: 201,
    description: 'Restaurante criado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao criar restaurante',
    type: Http400,
  })
  create(
    @Body() restaurant: RestaurantInterface, @Res() res: Response) {
    const { userId, name, cnpj, cep, number} = restaurant;
    if(!(userId && name && cnpj && cep && number)) {
      res.status(400).json({
        sucess: false,
        message: 'Todos os campos são obrigatórios'
      });
      return;
    }
    this.createRestaurantService.execute(restaurant);
    res.send();
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    description: 'ID do restaurante',
  })
  @ApiBody({
    description: 'Dados do restaurante a serem atualizados',
    type: CreateRestaurantDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Restaurante atualizado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Restaurante não encontrado',
    type: Http404,
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao atualizar restaurante',
    type: Http400,
  })
  async update(@Param('id') id: string, @Body() restaurantData: RestaurantInterface,@Res() res: Response): Promise<RestaurantInterface> {
    const expectedFields = ['userId', 'name', 'cnpj', 'cep', 'number', 'image'];
    const receivedFields = Object.keys(restaurantData);
    const invalidFields = receivedFields.filter(field => !expectedFields.includes(field));
    const restaurant = await this.updateRestaurantService.execute(Number(id), restaurantData);
    if (!restaurant) {
      res.status(404).json({
        success: false,
        message: 'Restaurante não encontrado',
      });
      return;
    }
    if (invalidFields.length > 0) {
      res.status(400).json({
        success: false,
        message: `Os seguintes campos são inválidos: ${invalidFields.join(', ')}`,
      });
      return;
    }
    res.status(200).json(restaurant);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response): Promise<void> {
    const restaurant = await this.getRestaurantByIdService.execute(Number(id));
    if (!restaurant) {
      res.status(404).json({
        success: false,
        message: 'Restaurante não encontrado',
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: 'Restaurante deletado com sucesso',
    });
    
    this.deleteRestaurantService.execute(Number(id));
  }
}