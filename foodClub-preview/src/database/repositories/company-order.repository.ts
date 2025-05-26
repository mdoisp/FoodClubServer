import { Inject, Injectable } from '@nestjs/common';
import { CompanyOrderEntity } from '../entities/company-order.entity';
import { CompanyOrderEntityInterface } from '../interfaces/company-order.interface';

@Injectable()
export class CompanyOrderRepository {
  constructor(
    @Inject('COMPANY_ORDER_ENTITY')
    private readonly companyOrderEntity: typeof CompanyOrderEntity,
  ) {}

  async create(order: Omit<CompanyOrderEntityInterface, 'id'>): Promise<CompanyOrderEntityInterface> {
    return await this.companyOrderEntity.create(order);
  }

  async getById(id: number): Promise<CompanyOrderEntityInterface> {
    const order = await this.companyOrderEntity.findByPk(id);
    if (!order) throw new Error('Company order not found!');
    return order;
  }

  async list(): Promise<CompanyOrderEntityInterface[]> {
    return await this.companyOrderEntity.findAll();
  }

  async listByCompany(companyId: number): Promise<CompanyOrderEntityInterface[]> {
    return await this.companyOrderEntity.findAll({ where: { company_id: companyId } });
  }
}