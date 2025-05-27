import { Sequelize } from "sequelize-typescript"
import { DishEntity } from "../database/entities/dish.entity";
import { CompanyEntity } from "../database/entities/company.entity";
import { EmployeeEntity } from "../database/entities/employee.entity";
import { OrderEntity } from "../database/entities/order.entity";
import { RestaurantEntity } from "../database/entities/restaurant.entity";
import { RestaurantDishEntity } from "../database/entities/restaurant-dish.entity";
import { CompanyEmployeeEntity } from "../database/entities/company-employee.entity";
import { UserEntity } from "../database/entities/user.entity";

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                storage: './database.sqlite',
                dialect: 'sqlite'
            });

            sequelize.addModels([DishEntity, CompanyEntity, EmployeeEntity, OrderEntity, RestaurantEntity, UserEntity, RestaurantDishEntity, CompanyEmployeeEntity]);
            return sequelize;
        }
    }
]