import { EmployeeEntity } from "../database/entities/employee.entity";
import { EmployeeRepository } from '../database/repositories/employee.repository';

export const employeeProvider = [
  {
    provide: 'EMPLOYEE_ENTITY',
    useValue: EmployeeEntity,
  },
  {
    provide: 'EMPLOYEE_REPOSITORY',
    useClass: EmployeeRepository,
  },
];