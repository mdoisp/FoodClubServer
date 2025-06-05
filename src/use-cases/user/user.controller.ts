import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { CreateUserService } from './services/create-user.service';
import { DeleteUserService } from './services/delete-user.service';
import { GetUserByIdService } from './services/get-user-byid.service';
import { ListUsersService } from './services/list-users.service';
import { UpdateUserService } from './services/update-user.service';
import { Response } from 'express';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ListUserDtoResponse } from 'src/interfaces/http/dtos/response/listUserDtoResponse';
import { CreateUserDto } from 'src/interfaces/http/dtos/request/createUserDto';
import { Http400 } from 'src/interfaces/http/dtos/response/http400';
import { Http404 } from 'src/interfaces/http/dtos/response/http404';
import { UserInterface, UpdateUserDto } from './user.interface';

@ApiTags('User API')
@Controller('user')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly getUserByIdService: GetUserByIdService,
    private readonly listUsersService: ListUsersService,
    private readonly updateUserService: UpdateUserService,
    private readonly deleteUserService: DeleteUserService
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Consulta realizada com sucesso',
    isArray: true,
    type: ListUserDtoResponse,
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor',
  })
  async list(): Promise<UserInterface[]> {
    const userList = await this.listUsersService.execute();
    return userList;
  }
  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'ID do usuário',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado',
    type: ListUserDtoResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado',
    type: Http404,
  })
  async getById(@Param('id') id: string, @Res() res: Response): Promise<UserInterface> {
    const user = await this.getUserByIdService.execute(Number(id));
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'Usuário não encontrado',
      });
      return;
    }
    res.status(200).json(user);
  }
  @Post()
  @HttpCode(201)
  @ApiBody({
    description: 'Dados do usuário',
    type: CreateUserDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Usuário criado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao criar usuário',
    type: Http400,
  })
  async create(@Body() user: UserInterface, @Res() res: Response): Promise<void> {
    const { email, password, userType } = user;
    if (!(email && password && userType)) {
      res.status(400).json({
        success: false,
        message: 'Todos os campos são obrigatórios',
      });
      return;
    }
    const createdUser = await this.createUserService.execute(user);
    res.status(201).json(createdUser);
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    description: 'ID do usuário',
  })
  @ApiBody({
    description: 'Dados do usuário a serem atualizados',
    type: CreateUserDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário atualizado com sucesso',
  })
  @ApiResponse({
    status: 400,
    description: 'Erro ao atualizar usuário',
    type: Http400,
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado',
    type: Http404,
  })
  async update(
    @Param('id') id: string,
    @Body() userData: UpdateUserDto,
    @Res() res: Response
  ): Promise<UserInterface> {
    const expectedFields = ['userType', 'email', 'password'];
    const receivedFields = Object.keys(userData);
    const invalidFields = receivedFields.filter(field => !expectedFields.includes(field));

    if (invalidFields.length > 0) {
      res.status(400).json({
        success: false,
        message: 'Campos inválidos',
      });
      return;
    }

    const user = await this.updateUserService.execute(Number(id), userData);
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'Usuário não encontrado',
      });
      return;
    }

    res.status(200).json(user);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'ID do usuário',
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário deletado com sucesso',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuário não encontrado',
    type: Http404,
  })
  async delete(@Param('id') id: string, @Res() res: Response): Promise<void> {
    const user = await this.getUserByIdService.execute(Number(id));
    if (!user) {
      res.status(404).json({
        success: false,
        message: 'Usuário não encontrado',
      });
      return;
    }
    const deleted = await this.deleteUserService.execute(Number(id));
    if (!deleted) {
      res.status(404).json({
        success: false,
        message: 'Usuário não encontrado',
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: 'Usuário deletado com sucesso',
    });
  }
}
