import { ApiProperty } from "@nestjs/swagger";

export class CreateDishDto {
  @ApiProperty({
    type: 'string',
    description: 'Nome do prato',
    example: 'Pizza',
    })
  dish_name: string;

    @ApiProperty({
        type: 'string',
        description: 'Descrição do prato',
        example: 'Pizza de calabresa',
    })
  dish_description?: string;

    @ApiProperty({
        type: 'number',
        description: 'Preço do prato',
        example: 29.99,
    })
  price: number;
}