import { Inject, Injectable } from '@nestjs/common';
import { EmployeeEntity } from '../entities/employee.entity';
import { EmployeeEntityInterface } from '../interfaces/employee.interface';

@Injectable()
export class EmployeeRepository {
  constructor(
    @Inject('EMPLOYEE_ENTITY')
    private readonly employeeEntity: typeof EmployeeEntity,
  ) {}

  async create(employee: Omit<EmployeeEntityInterface, 'id'>): Promise<EmployeeEntityInterface> {
    return await this.employeeEntity.create(employee);
  }

  async update(
    id: number,
    employeeData: Partial<Omit<EmployeeEntityInterface, 'id'>>,
  ): Promise<EmployeeEntityInterface> {
    const employee = await this.employeeEntity.findByPk(id);
    return await employee.update(employeeData);
  }

  async getById(id: number): Promise<EmployeeEntityInterface> {
    const employee = await this.employeeEntity.findByPk(id);
    return employee;
  }

  async list(): Promise<EmployeeEntityInterface[]> {
    return await this.employeeEntity.findAll();
  }

  async delete(id: number): Promise<void> {
    const employee = await this.employeeEntity.findByPk(id);
    await employee.destroy();
  }
}