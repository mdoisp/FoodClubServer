import { Controller, Post, Get, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CreateEmployeeWeeklyOrderDto } from 'src/interfaces/http/dtos/request/createEmployeeWeeklyOrderDto';
import { EmployeeWeeklyOrderResponse } from 'src/interfaces/http/dtos/response/employeeWeeklyOrderResponse';
import { CreateOrUpdateWeeklyOrderService } from './services/create-or-update-weekly-order.service'; 
import { GetWeeklyOrdersByEmployeeService } from './services/get-weekly-orders-by-employee.service';
import { DeleteWeeklyOrderService } from './services/delete-weekly-order.service';
import { EmployeeWeeklyOrdersEntityInterface } from 'src/database/interfaces/employee-weekly-orders.interface';
import { OrderItemEntityInterface } from 'src/database/interfaces/order-item.interface';

@ApiTags('Pedidos Semanais dos Funcionários')
@Controller('employee-weekly-orders')
export class EmployeeWeeklyOrdersController {
  constructor(
    private readonly createOrUpdateWeeklyOrderService: CreateOrUpdateWeeklyOrderService,
    private readonly getWeeklyOrdersByEmployeeService: GetWeeklyOrdersByEmployeeService,
    private readonly deleteWeeklyOrderService: DeleteWeeklyOrderService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({
    description: 'Dados do pedido semanal a serem criados',
    type: CreateEmployeeWeeklyOrderDto,
  })
  @ApiResponse({ 
    status: HttpStatus.CREATED, 
    description: 'Pedido semanal criado/atualizado com sucesso',
    type: CreateEmployeeWeeklyOrderDto
  })
  async createOrUpdateWeeklyOrder(
    @Body() employeeWeeklyOrder: EmployeeWeeklyOrdersEntityInterface
  ): Promise<EmployeeWeeklyOrdersEntityInterface> {
    return await this.createOrUpdateWeeklyOrderService.execute(employeeWeeklyOrder);
  }

  @Get('employee/:employeeId')
  @ApiOperation({ summary: 'Buscar pedidos semanais por funcionário' })
  @ApiParam({ name: 'employeeId', description: 'ID do funcionário' })
  @ApiResponse({ 
    status: HttpStatus.OK, 
    description: 'Lista de pedidos semanais do funcionário',
    type: [EmployeeWeeklyOrderResponse] 
  })
  async getWeeklyOrdersByEmployee(
    @Param('employeeId') employeeId: number,
  ): Promise<EmployeeWeeklyOrderResponse[]> {
    return await this.getWeeklyOrdersByEmployeeService.execute(employeeId);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Excluir pedido semanal' })
  @ApiParam({ name: 'id', description: 'ID do pedido semanal' })
  @ApiResponse({ 
    status: HttpStatus.NO_CONTENT, 
    description: 'Pedido semanal excluído com sucesso' 
  })
  async deleteWeeklyOrder(@Param('id') id: number): Promise<void> {
    await this.deleteWeeklyOrderService.execute(id);
  }
} 