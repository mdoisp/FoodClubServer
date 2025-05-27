import { Module } from '@nestjs/common';
import { CompanyController } from '../../../interfaces/http/controllers/company.controller';
import { GetCompanyByIdService } from './get-company-byid.service';
import { CreateCompanyService } from './create-company.service';
import { UpdateCompanyService } from './update-company.service';
import { DeleteCompanyService } from './delete-company.service';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { companyProvider } from '../../../infrastructure/providers/company.provider';
import { ListCompaniesService } from './list-companies.service';
import { CompanyRepository } from 'src/infrastructure/database/repositories/company.repository';


@Module({
  imports: [InfrastructureModule],
  controllers: [CompanyController],
  providers: [
    ...companyProvider, 
    CompanyRepository,
    ListCompaniesService,
    GetCompanyByIdService, 
    CreateCompanyService, 
    UpdateCompanyService, 
    DeleteCompanyService
  ],
  exports: [
    ListCompaniesService,
    GetCompanyByIdService,
    CreateCompanyService,
    UpdateCompanyService,
    DeleteCompanyService
  ]
})
export class CompanyModule {}