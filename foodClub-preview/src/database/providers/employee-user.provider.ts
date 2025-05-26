import { EmployeeUserEntity } from "../entities/employee-user.entity";
import { EmployeeUserRepository } from '../repositories/employee-user.repository';

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