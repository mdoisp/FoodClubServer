import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { DishEntityInterface } from '../interfaces/dish.interface';
import { RestaurantEntity } from './restaurant.entity';
import { RestaurantDishEntity } from './restaurant-dish.entity';

@Table({ tableName: 'dish', timestamps: false })
export class DishEntity extends Model implements DishEntityInterface {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  dish_name: string;

  @Column({ type: DataType.TEXT })
  dish_description: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price: number;

  @BelongsToMany(() => RestaurantEntity, () => RestaurantDishEntity)
  restaurants: RestaurantEntity[];
}