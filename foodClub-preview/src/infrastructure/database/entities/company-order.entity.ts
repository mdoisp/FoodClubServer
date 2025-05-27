import { Table, Model, Column, DataType, BelongsTo, HasMany } from 'sequelize-typescript';
import { CompanyOrderEntityInterface } from '../interfaces/company-order.interface';
import { CompanyEntity } from './company.entity';
import { CompanyOrderDishEntity } from './company-order-dish.entity';

@Table({ tableName: 'company_order', timestamps: false })
export class CompanyOrderEntity extends Model implements CompanyOrderEntityInterface {
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
  order_number: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  company_id: number;

  @BelongsTo(() => CompanyEntity)
  company: CompanyEntity;

  @HasMany(() => CompanyOrderDishEntity)
  dishes: CompanyOrderDishEntity[];
}