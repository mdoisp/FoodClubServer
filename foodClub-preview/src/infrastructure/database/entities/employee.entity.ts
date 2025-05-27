import { Table, Model, Column, DataType, BelongsToMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { EmployeeEntityInterface } from '../interfaces/employee.interface';
import { CompanyEntity } from './company.entity';
import { CompanyEmployeeEntity } from './company-employee.entity';

@Table({ tableName: 'employee', timestamps: false })
export class EmployeeEntity extends Model implements EmployeeEntityInterface {
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
  employee_name: string;

  @ForeignKey(() => CompanyEntity)
  @Column({ type: DataType.INTEGER, allowNull: true })
  company_id: number;

  @BelongsTo(() => CompanyEntity)
  company: CompanyEntity;

  @BelongsToMany(() => CompanyEntity, () => CompanyEmployeeEntity)
  companies: CompanyEntity[];
}