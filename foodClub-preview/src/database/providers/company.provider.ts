import { CompanyEntity } from "../entities/company.entity";
import { CompanyRepository } from '../repositories/company.repository';

export const companyProvider = [
  {
    provide: 'COMPANY_ENTITY',
    useValue: CompanyEntity,
  },
  {
    provide: 'COMPANY_REPOSITORY',
    useClass: CompanyRepository,
  },
];