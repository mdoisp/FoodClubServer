import { Module } from '@nestjs/common';
import { DishRepository } from './database/repositories/dish.repository';
import { databaseProvider } from './providers/database.provider';
import { dishProvider } from './providers/dish.provider';
import { employeeProvider } from './providers/employee.provider';
import { orderProvider } from './providers/order.provider';
import { EmployeeRepository } from './database/repositories/employee.repository';
import { CompanyRepository } from './database/repositories/company.repository';
import { OrderRepository } from './database/repositories/order.repository';
import { RestaurantRepository } from './database/repositories/restaurant.repository';
import { companyProvider } from './providers/company.provider';
import { restaurantProvider } from './providers/restaurant.provider';
import { UserRepository } from './database/repositories/user.repository';
import { userProvider } from './providers/user.provider';

@Module({
    providers:[
        CompanyRepository, 
        DishRepository, 
        EmployeeRepository, 
        OrderRepository, 
        RestaurantRepository, 
        UserRepository,
        ...companyProvider, 
        ...databaseProvider, 
        ...dishProvider, 
        ...employeeProvider, 
        ...orderProvider, 
        ...restaurantProvider,
        ...userProvider
    ],
    exports:[
        CompanyRepository, 
        DishRepository, 
        EmployeeRepository, 
        OrderRepository, 
        RestaurantRepository,
        UserRepository,
    ]
})
export class InfrastructureModule {}
