import { Inject, Injectable } from '@nestjs/common';
import { EmployeeInterface } from '../employee.interface';
import { EmployeeRepository } from 'src/database/repositories/employee.repository';

@Injectable()
export class UpdateEmployeeService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private readonly employeeRepository: EmployeeRepository
  ) {}
  async execute(id: number, employeeData: EmployeeInterface): Promise<EmployeeInterface> {
    return await this.employeeRepository.update(id, employeeData);
  }
}