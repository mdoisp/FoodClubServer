import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { UserEntity } from './user.entity';
import { LogEntity } from './log.entity';

@Table({ tableName: 'user_log', timestamps: false })
export class UserLogEntity extends Model {
  @ForeignKey(() => UserEntity)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  user_id: number;

  @ForeignKey(() => LogEntity)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  log_id: number;
}