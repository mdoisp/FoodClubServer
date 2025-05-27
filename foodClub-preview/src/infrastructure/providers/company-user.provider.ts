import { CompanyUserEntity } from "../database/entities/company-user.entity";
import { CompanyUserRepository } from '../database/repositories/company-user.repository';

export const companyUserProvider = [
  {
    provide: 'COMPANY_USER_ENTITY',
    useValue: CompanyUserEntity,
  },
  {
    provide: 'COMPANY_USER_REPOSITORY',
    useClass: CompanyUserRepository,
  },
];