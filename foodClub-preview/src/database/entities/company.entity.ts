import { Table, Model, Column, DataType, BelongsTo, HasMany } from 'sequelize-typescript';
import { UserEntity } from './user.entity';
import { EmployeeEntity } from './employee.entity';
import { CompanyAffiliateRestaurantEntity } from './restaurant-dish.entity';

@Table({ tableName: 'company', timestamps: false })
export class CompanyEntity extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'user_id',
  })
  userId: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
    unique: true,
  })
  cnpj: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  cep: string;

  @Column({
    type: DataType.STRING(10),
    allowNull: false,
  })
  number: string;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

  @HasMany(() => EmployeeEntity)
  employees: EmployeeEntity[];

  @HasMany(() => CompanyAffiliateRestaurantEntity)
  affiliateRestaurants: CompanyAffiliateRestaurantEntity[];
}