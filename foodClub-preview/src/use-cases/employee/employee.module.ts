import { Module } from '@nestjs/common';

import { EmployeeController } from './employee.controller';
import { ListEmployeesService } from './services/list-employees.service';
import { GetEmployeeByIdService } from './services/get-employee-byid.service';
import { CreateEmployeeService } from './services/create-employee.service';
import { UpdateEmployeeService } from './services/update-employee.service';
import { DeleteEmployeeService } from './services/delete-employee.service';
import { DatabaseModule } from 'src/database/database.module';
import { employeeProvider } from 'src/database/providers/employee.provider';
import { EmployeeRepository } from '../../database/repositories/employee.repository';

@Module({
  imports: [DatabaseModule],
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