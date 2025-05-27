import { CompanyEntityInterface } from './company.interface';
import { CompanyOrderDishEntityInterface } from './company-order-dish.interface';

export interface CompanyOrderEntityInterface {
  id: number;
  order_number: string;
  company_id: number;
  company?: CompanyEntityInterface;
  dishes?: CompanyOrderDishEntityInterface[];
}