import { ApiProperty } from "@nestjs/swagger";

export class ListEmployeeDtoResponse {
    @ApiProperty({
        description: 'Nome do funcionário',
        type: String,
        example: 'João Silva',
    })
    employee_name: string;
    
    @ApiProperty({
        description: 'ID da empresa',
        type: Number,
        example: 1,
    })
    company_id: number;
}