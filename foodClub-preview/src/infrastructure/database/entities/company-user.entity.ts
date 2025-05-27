import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { CompanyEntity } from './company.entity';
import { UserEntity } from './user.entity';

@Table({ tableName: 'company_user', timestamps: false })
export class CompanyUserEntity extends Model {
  @ForeignKey(() => CompanyEntity)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  company_id: number;

  @ForeignKey(() => UserEntity)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  user_id: number;
}