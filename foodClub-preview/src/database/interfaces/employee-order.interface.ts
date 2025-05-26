import { EmployeeEntityInterface } from './employee.interface';
import { EmployeeOrderDishEntityInterface } from './employee-order-dish.interface';

export interface EmployeeOrderEntityInterface {
  id: number;
  order_value: number;
  employee_id: number;
  employee?: EmployeeEntityInterface;
  dishes?: EmployeeOrderDishEntityInterface[];
}