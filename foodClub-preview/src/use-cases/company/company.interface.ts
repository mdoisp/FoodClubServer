import { EmployeeInterface } from "../employee/employee.interface";

export interface CompanyInterface {
    id: number;
    company_name: string;
    street?: string;
    cnpj?: string;
    zip_code?: string;
    number?: string;
    city?: string;
    state?: string;
    employees?: EmployeeInterface[];
}
