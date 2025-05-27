import { Table, Model, Column, DataType, BelongsTo } from 'sequelize-typescript';
import { EmployeeEntity } from './employee.entity';
import { IndividualOrderEntity } from './individual-order.entity';

@Table({ tableName: 'employee_weekly_orders', timestamps: false })
export class EmployeeWeeklyOrdersEntity extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'employee_id',
  })
  employeeId: number;

  @Column({
    type: DataType.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'),
    allowNull: false,
    field: 'day_of_week',
  })
  dayOfWeek: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    field: 'individual_order_id',
  })
  individualOrderId: number;

  @BelongsTo(() => EmployeeEntity)
  employee: EmployeeEntity;

  @BelongsTo(() => IndividualOrderEntity, 'individual_order_id')
  individualOrder: IndividualOrderEntity;
}