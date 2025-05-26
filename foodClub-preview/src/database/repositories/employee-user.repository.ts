import { Inject, Injectable } from '@nestjs/common';
import { EmployeeUserEntity } from '../entities/employee-user.entity';
import { EmployeeUserEntityInterface } from '../interfaces/employee-user.interface';

@Injectable()
export class EmployeeUserRepository {
  constructor(
    @Inject('EMPLOYEE_USER_ENTITY')
    private readonly employeeUserEntity: typeof EmployeeUserEntity,
  ) {}

  async create(relation: Omit<EmployeeUserEntityInterface,'employee_id'>): Promise<EmployeeUserEntityInterface> {
    return await this.employeeUserEntity.create(relation);
  }

  async getEmployeeUsers(employeeId: number): Promise<EmployeeUserEntityInterface[]> {
    return await this.employeeUserEntity.findAll({ where: { employee_id: employeeId } });
  }

  async getUserEmployees(userId: number): Promise<EmployeeUserEntityInterface[]> {
    return await this.employeeUserEntity.findAll({ where: { user_id: userId } });
  }

  async delete(employeeId: number, userId: number): Promise<void> {
    await this.employeeUserEntity.destroy({ 
      where: { 
        employee_id: employeeId, 
        user_id: userId 
      } 
    });
  }
}