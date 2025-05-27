import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { GetCompanyByIdService } from './services/get-company-byid.service';
import { CreateCompanyService } from './services/create-company.service';
import { UpdateCompanyService } from './services/update-company.service';
import { DeleteCompanyService } from './services/delete-company.service';
import { DatabaseModule } from 'src/database/database.module';
import { CompanyRepository } from 'src/database/repositories/company.repository';
import { companyProvider } from './../../database/providers/company.provider';
import { ListCompaniesService } from './services/list-companies.service';


@Module({
  imports: [DatabaseModule],
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