import { Inject, Injectable } from "@nestjs/common";
import { CompanyEntityInterface } from "../../../database/interfaces/company.interface";
import { CompanyRepository } from '../../../database/repositories/company.repository';

@Injectable()
export class CreateCompanyService {
    constructor(
        @Inject('COMPANY_REPOSITORY')
        private readonly companyRepository: CompanyRepository
    ) {}

    async execute(company: Omit<CompanyEntityInterface, 'id'>): Promise<CompanyEntityInterface> {
        return await this.companyRepository.create(company);
    }
}