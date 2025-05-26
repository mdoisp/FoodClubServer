import { Injectable, Inject } from '@nestjs/common';
import { EmployeeEntityInterface } from 'src/database/interfaces/employee.interface';
import { EmployeeRepository } from 'src/database/repositories/employee.repository';

@Injectable()
export class ListEmployeesService {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private readonly employeeRepository: EmployeeRepository
  ) {}

  execute(): Promise<EmployeeEntityInterface[]> {
    return this.employeeRepository.list();
  }
}