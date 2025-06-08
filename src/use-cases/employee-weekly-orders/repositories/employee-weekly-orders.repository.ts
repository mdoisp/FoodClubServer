import { Inject, Injectable } from "@nestjs/common";
import { EmployeeWeeklyOrdersEntity } from "src/database/entities/employee-weekly-orders.entity";
import { DayOfWeek, EmployeeWeeklyOrdersEntityInterface } from "src/database/interfaces/employee-weekly-orders.interface";

 @Injectable()
 export class EmployeeWeeklyOrdersRepository {
    constructor(
        @Inject('EMPLOYEE_WEEKLY_ORDERS_ENTITY')
        private readonly employeeWeeklyOrdersEntity: typeof EmployeeWeeklyOrdersEntity,
    ) {}

    async create(employeeWeeklyOrders: Omit<EmployeeWeeklyOrdersEntityInterface, 'id'>): Promise<EmployeeWeeklyOrdersEntityInterface> {
        return await this.employeeWeeklyOrdersEntity.create(employeeWeeklyOrders);
    }

    async update(id: number, employeeWeeklyOrders: Partial<Omit<EmployeeWeeklyOrdersEntityInterface, 'id'>>): Promise<EmployeeWeeklyOrdersEntityInterface> {
        const employeeWeeklyOrder = await this.employeeWeeklyOrdersEntity.findByPk(id);
        return await employeeWeeklyOrder.update(employeeWeeklyOrders);
    }

    async findByEmployeeAndDay(employeeId: number, dayOfWeek: DayOfWeek): Promise<EmployeeWeeklyOrdersEntityInterface | null> {
        return await this.employeeWeeklyOrdersEntity.findOne({
            where: { employeeId, dayOfWeek },
        });
    }
 }
