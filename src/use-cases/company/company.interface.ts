import { CompanyAffiliateRestaurantEntityInterface } from 'src/database/interfaces/company-affiliate-restaurant.interface';
import { EmployeeEntityInterface } from 'src/database/interfaces/employee.interface';

export interface CompanyInterface {
  id: number;
  userId: number;
  name: string;
  cnpj: string;
  cep: string;
  number: string;
  employees?: EmployeeEntityInterface[];
  affiliateRestaurants?: CompanyAffiliateRestaurantEntityInterface[];
}
