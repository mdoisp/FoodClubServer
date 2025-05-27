import { EmployeeEntityInterface } from "./employee.interface";

export interface CompanyEntityInterface {
  id: number;
  company_name: string;
  street?: string;
  cnpj?: string;
  zip_code?: string;
  number?: string;
  city?: string;
  state?: string;
  employees?: EmployeeEntityInterface[];
}