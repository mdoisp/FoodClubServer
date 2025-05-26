import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';

import { GetRestaurantByIdService } from './services/get-restaurant-byid.service'
import { CreateRestaurantService } from './services/create-restaurant.service';
import { UpdateRestaurantService } from './services/update-restaurant.service';
import { DeleteRestaurantService } from './services/delete-restaurant.service';
import { Response } from 'express';
import { RestaurantInterface } from './restaurant.interface';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListRestaurantDtoResponse } from 'src/interfaces/http/dtos/response/listRestaurantDtoResponse';
import { Http404 } from 'src/interfaces/http/dtos/response/http404';
import { CreateRestaurantDto } from 'src/interfaces/http/dtos/request/createRestaurantDto';
import { Http400 } from 'src/interfaces/http/dtos/response/http400';

@ApiTags('Restaurant API')
@Controller('Restaurant')
export class RestaurantController {
  constructor(
    private getRestaurantByIdService: GetRestaurantByIdService,
    private createRestaurantService: CreateRestaurantService,
    private updateRestaurantService: UpdateRestaurantService,
    private deleteRestaurantService: DeleteRestaurantService
  ) {}

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'ID do restaurante',
  })
  @ApiResponse({
    status: 200,
    description: 'Consulta realizada com sucesso',
    type: ListRestaurantDtoResponse,
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
    const { restaurant_name, zip_code, street, number, city, cnpj, state} = restaurant;
    if(!(restaurant_name && zip_code && street && number && city && cnpj && state)){
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
    const expectedFields = ['restaurant_name', 'zip_code', 'street', 'number', 'city', 'cnpj', 'state'];
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