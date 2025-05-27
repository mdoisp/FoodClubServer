import { Inject, Injectable } from '@nestjs/common';
import { Employee } from 'src/domain/models/employee.model';
import { EmployeeRepository } from 'src/infrastructure/database/repositories/employee.repository';

@Injectable()
export class GetEmployeeByIdService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: EmployeeRepository
  ) {}
  async execute(id: number): Promise<Employee> {
    return await this.employeeRepository.getById(id);
  }
}
