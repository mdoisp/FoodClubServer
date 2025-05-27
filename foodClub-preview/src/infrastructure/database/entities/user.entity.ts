import { Table, Model, Column, DataType } from 'sequelize-typescript';
import { UserEntityInterface } from '../interfaces/user.interface';

@Table({ tableName: 'user', timestamps: false })
export class UserEntity extends Model implements UserEntityInterface {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  user_type: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING(100),
    unique: true,
    allowNull: false,
  })
  email: string;
}