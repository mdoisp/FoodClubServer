import { EmployeeEntity } from "../entities/employee.entity";
import { EmployeeRepository } from '../repositories/employee.repository';

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