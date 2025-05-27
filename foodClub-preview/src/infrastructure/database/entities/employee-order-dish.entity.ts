import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { EmployeeOrderEntity } from './employee-order.entity';
import { DishEntity } from './dish.entity';

@Table({ tableName: 'employee_order_dish', timestamps: false })
export class EmployeeOrderDishEntity extends Model {
  @ForeignKey(() => EmployeeOrderEntity)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  employee_order_id: number;

  @ForeignKey(() => DishEntity)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  dish_id: number;
}