import { EmployeeOrderEntity } from "../database/entities/employee-order.entity";
import { EmployeeOrderRepository } from '../database/repositories/employee-order.repository';

export const employeeOrderProvider = [
  {
    provide: 'EMPLOYEE_ORDER_ENTITY',
    useValue: EmployeeOrderEntity,
  },
  {
    provide: 'EMPLOYEE_ORDER_REPOSITORY',
    useClass: EmployeeOrderRepository,
  },
];