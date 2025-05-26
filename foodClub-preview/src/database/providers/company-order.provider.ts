import { CompanyOrderEntity } from "../entities/company-order.entity";
import { CompanyOrderRepository } from '../repositories/company-order.repository';

export const companyOrderProvider = [
  {
    provide: 'COMPANY_ORDER_ENTITY',
    useValue: CompanyOrderEntity,
  },
  {
    provide: 'COMPANY_ORDER_REPOSITORY',
    useClass: CompanyOrderRepository,
  },
];