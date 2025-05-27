import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { LogEntityInterface } from '../interfaces/log.interface';

@Table({ tableName: 'log', timestamps: false })
export class LogEntity extends Model implements LogEntityInterface {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  action_type: string;
}