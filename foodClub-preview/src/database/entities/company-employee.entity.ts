import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { CompanyEntity } from './company.entity';
import { EmployeeEntity } from './employee.entity';

@Table({ tableName: 'company_employee', timestamps: false })
export class CompanyEmployeeEntity extends Model {
  @ForeignKey(() => CompanyEntity)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  company_id: number;

  @ForeignKey(() => EmployeeEntity)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  employee_id: number;
}