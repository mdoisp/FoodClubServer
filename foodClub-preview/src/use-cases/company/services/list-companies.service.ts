import { Inject, Injectable } from "@nestjs/common";
import { CompanyEntityInterface } from "../../../database/interfaces/company.interface";
import { CompanyRepository } from '../../../database/repositories/company.repository';

@Injectable()
export class ListCompaniesService {
    constructor(
        @Inject('COMPANY_REPOSITORY')
        private readonly companyRepository: CompanyRepository
    ) {}

    async execute(): Promise<CompanyEntityInterface[]> {
        return await this.companyRepository.list();
    }
}