import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import { CompanyEntityInterface } from '../interfaces/company.interface';
import { EmployeeEntity } from './employee.entity';

@Table({ tableName: 'company',
  timestamps: false,
 })
export class CompanyEntity extends Model implements CompanyEntityInterface {
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
  company_name: string;

  @Column({ type: DataType.STRING(100) })
  street: string;

  @Column({ type: DataType.STRING(20), unique: true })
  cnpj: string;

  @Column({ type: DataType.STRING(10) })
  zip_code: string;

  @Column({ type: DataType.STRING(10) })
  number: string;

  @Column({ type: DataType.STRING(50) })
  city: string;

  @Column({ type: DataType.STRING(2) })
  state: string;

  @HasMany(() => EmployeeEntity)
  employees: EmployeeEntity[];
}