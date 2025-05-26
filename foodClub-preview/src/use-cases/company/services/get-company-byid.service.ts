import { Inject, Injectable } from "@nestjs/common";
import { CompanyEntityInterface } from "../../../database/interfaces/company.interface";
import { CompanyRepository } from '../../../database/repositories/company.repository';

@Injectable()
export class GetCompanyByIdService {
    constructor(
        @Inject('COMPANY_REPOSITORY')
        private readonly companyRepository: CompanyRepository
    ) {}

    async execute(id: number): Promise<CompanyEntityInterface> {
        const company = await this.companyRepository.getById(id);
        return company;
    }
}