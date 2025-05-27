import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { CompanyOrderEntity } from './company-order.entity';
import { DishEntity } from './dish.entity';

@Table({ tableName: 'company_order_dish', timestamps: false })
export class CompanyOrderDishEntity extends Model {
  @ForeignKey(() => CompanyOrderEntity)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  company_order_id: number;

  @ForeignKey(() => DishEntity)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  dish_id: number;
}