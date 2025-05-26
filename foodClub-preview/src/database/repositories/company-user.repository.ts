import { Inject, Injectable } from '@nestjs/common';
import { CompanyUserEntity } from '../entities/company-user.entity';
import { CompanyUserEntityInterface } from '../interfaces/company-user.interface';

@Injectable()
export class CompanyUserRepository {
  constructor(
    @Inject('COMPANY_USER_ENTITY')
    private readonly companyUserEntity: typeof CompanyUserEntity,
  ) {}

  async create(relation: Omit<CompanyUserEntityInterface, 'company_id'>): Promise<CompanyUserEntityInterface> {
    return await this.companyUserEntity.create(relation);
  }

  async getCompanyUsers(companyId: number): Promise<CompanyUserEntityInterface[]> {
    return await this.companyUserEntity.findAll({ where: { company_id: companyId } });
  }

  async getUserCompanies(userId: number): Promise<CompanyUserEntityInterface[]> {
    return await this.companyUserEntity.findAll({ where: { user_id: userId } });
  }

  async delete(companyId: number, userId: number): Promise<void> {
    await this.companyUserEntity.destroy({ 
      where: { 
        company_id: companyId, 
        user_id: userId 
      } 
    });
  }
}