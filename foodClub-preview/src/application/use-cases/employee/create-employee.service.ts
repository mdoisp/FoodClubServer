import { Inject, Injectable } from "@nestjs/common";
import { Employee } from "src/domain/models/employee.model";
import { EmployeeRepository } from 'src/infrastructure/database/repositories/employee.repository';

@Injectable()
export class CreateEmployeeService {
    constructor(
        @Inject('EMPLOYEE_REPOSITORY')
        private readonly employeeRepository: EmployeeRepository){}
    execute(employee: Employee): void {
        this.employeeRepository.create(employee);
    }
}