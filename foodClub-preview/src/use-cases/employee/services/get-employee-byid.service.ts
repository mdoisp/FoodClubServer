import { Inject, Injectable } from '@nestjs/common';
import { EmployeeInterface } from '../employee.interface';
import { EmployeeRepository } from 'src/database/repositories/employee.repository';

@Injectable()
export class GetEmployeeByIdService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: EmployeeRepository
  ) {}
  async execute(id: number): Promise<EmployeeInterface> {
    return await this.employeeRepository.getById(id);
  }
}
