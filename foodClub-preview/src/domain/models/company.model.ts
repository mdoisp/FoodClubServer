import { Employee } from "./employee.model";

export interface Company {
    id: number;
    company_name: string;
    street?: string;
    cnpj?: string;
    zip_code?: string;
    number?: string;
    city?: string;
    state?: string;
    employees?: Employee[];
}
