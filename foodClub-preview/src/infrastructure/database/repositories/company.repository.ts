import { Inject, Injectable } from '@nestjs/common';
import { CompanyEntity } from '../entities/company.entity';
import { CompanyEntityInterface } from '../interfaces/company.interface';

@Injectable()
export class CompanyRepository {
  constructor(
    @Inject('COMPANY_ENTITY')
    private readonly companyEntity: typeof CompanyEntity,
  ) {}

  async create(company: Omit<CompanyEntityInterface, 'id'>): Promise<CompanyEntityInterface> {
    return await this.companyEntity.create(company);
  }

  async update(
    id: number,
    companyData: Partial<Omit<CompanyEntityInterface, 'id'>>,
  ): Promise<CompanyEntityInterface> {
    const company = await this.companyEntity.findByPk(id);
    return await company.update(companyData);
  }

  async getById(id: number): Promise<CompanyEntityInterface> {
    const company = await this.companyEntity.findByPk(id);
    return company;
  }

  async list(): Promise<CompanyEntityInterface[]> {
    return await this.companyEntity.findAll();
  }

  async delete(id: number): Promise<void> {
    const company = await this.companyEntity.findByPk(id);
    await company.destroy();
  }
}