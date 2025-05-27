import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { RestaurantEntityInterface } from '../interfaces/restaurant.interface';
import { DishEntity } from './dish.entity';
import { RestaurantDishEntity } from './restaurant-dish.entity';

@Table({ tableName: 'restaurant', timestamps: false })
export class RestaurantEntity extends Model implements RestaurantEntityInterface {
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
  restaurant_name: string;

  @Column({ type: DataType.STRING(20), unique: true })
  cnpj: string;

  @Column({ type: DataType.STRING(100) })
  street: string;

  @Column({ type: DataType.STRING(10) })
  number: string;

  @Column({ type: DataType.STRING(10) })
  zip_code: string;

  @Column({ type: DataType.STRING(50) })
  city: string;

  @Column({ type: DataType.STRING(2) })
  state: string;

  @BelongsToMany(() => DishEntity, () => RestaurantDishEntity)
  dishes: DishEntity[];
}