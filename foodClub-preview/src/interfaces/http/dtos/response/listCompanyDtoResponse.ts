import { ApiProperty } from "@nestjs/swagger";

export class ListCompanyDtoResponse {
    @ApiProperty({
    type: 'number',
    description: 'ID da empresa',
    example: 1,
    })
  id: number;
    @ApiProperty({
        type: 'string',
        description: 'Nome da empresa',
        example: 'Food Club',
        })
  company_name: string;
    @ApiProperty({
        type: 'string',
        description: 'Nome da empresa',
        example: 'Rua das Flores',
        })
  street?: string;
    @ApiProperty({
        type: 'string',
        description: 'CNPJ da empresa',
        example: '12.345.678/0001-90',
        })
  cnpj?: string;
    @ApiProperty({
        type: 'string',
        description: 'CEP da empresa',
        example: '12345-678',
        })
  zip_code?: string;
    @ApiProperty({
        type: 'string',
        description: 'Número da empresa',
        example: '123',
        })
  number?: string;
    @ApiProperty({
        type: 'string',
        description: 'Cidade da empresa',
        example: 'São Paulo',
        })
  city?: string;
    @ApiProperty({
        type: 'string',
        description: 'Estado da empresa',
        example: 'SP',
        })
  state?: string;
}