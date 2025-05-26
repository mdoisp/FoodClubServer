import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { EmployeeEntity } from './employee.entity';
import { UserEntity } from './user.entity';

@Table({ tableName: 'employee_user', timestamps: false })
export class EmployeeUserEntity extends Model {
  @ForeignKey(() => EmployeeEntity)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  employee_id: number;

  @ForeignKey(() => UserEntity)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  user_id: number;
}