import { Inject, Injectable } from '@nestjs/common';
import { EmployeeOrderEntity } from '../entities/employee-order.entity';
import { EmployeeOrderEntityInterface } from '../interfaces/employee-order.interface';

@Injectable()
export class EmployeeOrderRepository {
  constructor(
    @Inject('EMPLOYEE_ORDER_ENTITY')
    private readonly employeeOrderEntity: typeof EmployeeOrderEntity,
  ) {}

  async create(order: Omit<EmployeeOrderEntityInterface, 'id'>): Promise<EmployeeOrderEntityInterface> {
    return await this.employeeOrderEntity.create(order);
  }

  async getById(id: number): Promise<EmployeeOrderEntityInterface> {
    const order = await this.employeeOrderEntity.findByPk(id);
    if (!order) throw new Error('Employee order not found!');
    return order;
  }

  async list(): Promise<EmployeeOrderEntityInterface[]> {
    return await this.employeeOrderEntity.findAll();
  }

  async listByEmployee(employeeId: number): Promise<EmployeeOrderEntityInterface[]> {
    return await this.employeeOrderEntity.findAll({ where: { employee_id: employeeId } });
  }
}