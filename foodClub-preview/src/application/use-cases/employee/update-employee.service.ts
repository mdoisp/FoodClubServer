import { Inject, Injectable } from '@nestjs/common';
import { Employee } from 'src/domain/models/employee.model';
import { EmployeeRepository } from 'src/infrastructure/database/repositories/employee.repository';

@Injectable()
export class UpdateEmployeeService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private readonly employeeRepository: EmployeeRepository
  ) {}
  async execute(id: number, employeeData: Employee): Promise<Employee> {
    return await this.employeeRepository.update(id, employeeData);
  }
}