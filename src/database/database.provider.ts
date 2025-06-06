import { Sequelize } from "sequelize-typescript"
import { DishEntity } from "./entities/dish.entity";
import { CompanyEntity } from "./entities/company.entity";
import { EmployeeEntity } from "./entities/employee.entity";
import { RestaurantEntity } from "./entities/restaurant.entity";
import { UserEntity } from "./entities/user.entity";
import { DishRatingEntity } from "./entities/dish-rating.entity";
import { OrderItemEntity } from "./entities/order-item.entity";
import { CompanyAffiliateRestaurantEntity } from "./entities/company-affiliate-restaurant.entity";
import { IndividualOrderEntity } from "./entities/individual-order.entity";
import { EmployeeWeeklyOrdersEntity } from "./entities/employee-weekly-orders.entity";
import { CompanyOrderEntity } from "./entities/company-order.entity";
import * as config from './config';

export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            let sequelize: Sequelize;
            
            if (process.env.NODE_ENV === 'production') {
                sequelize = new Sequelize(process.env.DATABASE_URL, {
                    dialect: 'postgres',
                    dialectOptions: {
                        ssl: {
                            require: true,
                            rejectUnauthorized: false
                        }
                    }
                });
            } else {
                sequelize = new Sequelize({
                    dialect: 'sqlite',
                    storage: './database.sqlite'
                });
            }

            sequelize.addModels([
                DishEntity, 
                CompanyEntity, 
                EmployeeEntity, 
                RestaurantEntity, 
                UserEntity, 
                DishRatingEntity, 
                OrderItemEntity,
                CompanyAffiliateRestaurantEntity, 
                IndividualOrderEntity, 
                EmployeeWeeklyOrdersEntity, 
                CompanyOrderEntity
            ]);

            // Sincroniza os modelos com o banco de dados em desenvolvimento
            if (process.env.NODE_ENV !== 'production') {
                await sequelize.sync();
            }

            return sequelize;
        }
    }
];