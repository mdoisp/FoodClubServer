import { Module } from '@nestjs/common';
import { DishRepository } from './repositories/dish.repository';
import { databaseProvider } from './database.provider';
import { dishProvider } from './providers/dish.provider';
import { employeeProvider } from './providers/employee.provider';
import { orderProvider } from './providers/order.provider';
import { EmployeeRepository } from './repositories/employee.repository';
import { CompanyRepository } from './repositories/company.repository';
import { OrderRepository } from './repositories/order.repository';
import { RestaurantRepository } from './repositories/restaurant.repository';
import { companyProvider } from './providers/company.provider';
import { restaurantProvider } from './providers/restaurant.provider';
import { UserRepository } from './repositories/user.repository';
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
export class DatabaseModule {}
