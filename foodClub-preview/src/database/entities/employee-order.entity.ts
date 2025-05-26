import { Table, Model, Column, DataType, BelongsTo, HasMany } from 'sequelize-typescript';
import { EmployeeOrderEntityInterface } from '../interfaces/employee-order.interface';
import { EmployeeEntity } from './employee.entity';
import { EmployeeOrderDishEntity } from './employee-order-dish.entity';

@Table({ tableName: 'employee_order', timestamps: false })
export class EmployeeOrderEntity extends Model implements EmployeeOrderEntityInterface {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  order_value: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  employee_id: number;

  @BelongsTo(() => EmployeeEntity)
  employee: EmployeeEntity;

  @HasMany(() => EmployeeOrderDishEntity)
  dishes: EmployeeOrderDishEntity[];
}