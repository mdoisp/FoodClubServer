import { CompanyEntityInterface } from "src/infrastructure/database/interfaces/company.interface";

export interface Employee {
    id: number;
    employee_name: string;
    company_id?: CompanyEntityInterface;
}