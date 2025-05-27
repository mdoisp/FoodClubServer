import { EmployeeUserEntity } from "../database/entities/employee-user.entity";
import { EmployeeUserRepository } from '../database/repositories/employee-user.repository';

export const employeeUserProvider = [
  {
    provide: 'EMPLOYEE_USER_ENTITY',
    useValue: EmployeeUserEntity,
  },
  {
    provide: 'EMPLOYEE_USER_REPOSITORY',
    useClass: EmployeeUserRepository,
  },
];