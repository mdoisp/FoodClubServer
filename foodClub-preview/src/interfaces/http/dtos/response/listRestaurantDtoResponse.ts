import { ApiProperty } from "@nestjs/swagger";
import { DishInterface } from "src/use-cases/dish/dish.interface";

export class ListRestaurantDtoResponse {
    @ApiProperty({
    type: 'number',
    description: 'ID do restaurante',
    example: 1,
    })
    id: number;

    @ApiProperty({
        type: 'string',
        description: 'Nome do restaurante',
        example: 'Pizzaria do João',
    })
    restaurant_name: string;

    @ApiProperty({
        type: 'string',
        description: 'CNPJ do restaurante',
        example: '12.345.678/0001-90',
    })
    cnpj?: string;

    @ApiProperty({
        type: 'string',
        description: 'Rua do restaurante',
        example: 'Rua das Flores',
    })
    street?: string;

    @ApiProperty({
        type: 'string',
        description: 'Número do restaurante',
        example: '123',
    })
    number?: string;

    @ApiProperty({
        type: 'string',
        description: 'CEP do restaurante',
        example: '12345-678',
    })
    zip_code?: string;

    @ApiProperty({
        type: 'string',
        description: 'Cidade do restaurante',
        example: 'São Paulo',
    })
    city?: string;

    @ApiProperty({
        type: 'string',
        description: 'Estado do restaurante',
        example: 'SP',
    })
    state?: string;

    @ApiProperty({
        type: 'array',
        items: { type: 'object' },
        description: 'Lista de pratos do restaurante',
    })
    dishes?: DishInterface[];
}