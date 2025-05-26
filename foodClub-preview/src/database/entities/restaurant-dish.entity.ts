import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { RestaurantEntity } from './restaurant.entity';
import { DishEntity } from './dish.entity';

@Table({ tableName: 'restaurant_dish', timestamps: false })
export class RestaurantDishEntity extends Model {
    @ForeignKey(() => RestaurantEntity)
    @Column({ type: DataType.INTEGER, primaryKey: true })
    restaurant_id: number;

    @ForeignKey(() => DishEntity)
    @Column({ type: DataType.INTEGER, primaryKey: true })
    dish_id: number;
}