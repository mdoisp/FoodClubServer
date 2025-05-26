import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { OrderStatusEntity, OrderEntityInterface } from '../interfaces/order.interface';
import { EmployeeEntity as EmployeeEntity } from './employee.entity';
import { DishEntity as DishEntity } from './dish.entity';

@Table({ tableName: 'Orders',
  timestamps: false })
export class OrderEntity extends Model implements OrderEntityInterface{
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  idPedido: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW
  })
  date: Date;

  @Column({
    type: DataType.ENUM(...Object.values(OrderStatusEntity)),
    allowNull: false,
    defaultValue: OrderStatusEntity.PENDING
  })
  status: OrderStatusEntity;

  @Column(DataType.TEXT)
  comments: string;

  @ForeignKey(() => EmployeeEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'idFuncionario'
  })
  employeeId: number;

  @ForeignKey(() => DishEntity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'idPrato'
  })
  dishId: number;

  @BelongsTo(() => EmployeeEntity)
  employee: EmployeeEntity;

  @BelongsTo(() => DishEntity)
  dish: DishEntity;
}