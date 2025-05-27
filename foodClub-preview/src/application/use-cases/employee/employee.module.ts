import { Module } from '@nestjs/common';

import { EmployeeController } from '../../../interfaces/http/controllers/employee.controller';
import { ListEmployeesService } from './list-employees.service';
import { GetEmployeeByIdService } from './get-employee-byid.service';
import { CreateEmployeeService } from './create-employee.service';
import { UpdateEmployeeService } from './update-employee.service';
import { DeleteEmployeeService } from './delete-employee.service';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { employeeProvider } from 'src/infrastructure/providers/employee.provider';
import { EmployeeRepository } from '../../../infrastructure/database/repositories/employee.repository';

@Module({
  imports: [InfrastructureModule],
  controllers: [EmployeeController],
  providers: [
    ...employeeProvider,
    EmployeeRepository, 
    ListEmployeesService,
    GetEmployeeByIdService,
    CreateEmployeeService,
    UpdateEmployeeService,
    DeleteEmployeeService
  ],
  exports: [
    ListEmployeesService,
    GetEmployeeByIdService,
    CreateEmployeeService,
    UpdateEmployeeService,
    DeleteEmployeeService
  ]
})
export class EmployeeModule {}