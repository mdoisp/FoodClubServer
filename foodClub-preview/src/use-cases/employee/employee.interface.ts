import { CompanyEntityInterface } from "src/database/interfaces/company.interface";

export interface EmployeeInterface {
    id: number;
    employee_name: string;
    company_id?: CompanyEntityInterface;
}