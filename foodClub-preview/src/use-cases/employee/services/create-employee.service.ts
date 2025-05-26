import { Inject, Injectable } from "@nestjs/common";
import { EmployeeInterface } from "../employee.interface";
import { EmployeeRepository } from 'src/database/repositories/employee.repository';

@Injectable()
export class CreateEmployeeService {
    constructor(
        @Inject('EMPLOYEE_REPOSITORY')
        private readonly employeeRepository: EmployeeRepository){}
    execute(employee: EmployeeInterface): void {
        this.employeeRepository.create(employee);
    }
}