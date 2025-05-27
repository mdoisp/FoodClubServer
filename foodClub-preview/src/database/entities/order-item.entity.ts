import { Table, Model, Column, DataType, BelongsTo } from 'sequelize-typescript';
import { IndividualOrderEntity } from './individual-order.entity';
import { DishEntity } from './dish.entity';

@Table({ tableName: 'order_item', timestamps: false })
export class OrderItemEntity extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'individual_order_id',
  })
  individualOrderId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'dish_id',
  })
  dishId: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 1,
  })
  quantity: number;

  @BelongsTo(() => IndividualOrderEntity)
  individualOrder: IndividualOrderEntity;

  @BelongsTo(() => DishEntity)
  dish: DishEntity;
}