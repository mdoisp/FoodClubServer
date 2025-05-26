import { CompanyEntityInterface } from './company.interface';

export interface EmployeeEntityInterface {
  id: number;
  employee_name: string;
  companies?: CompanyEntityInterface[];
}