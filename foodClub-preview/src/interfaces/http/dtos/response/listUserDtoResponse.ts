import { ApiProperty } from "@nestjs/swagger";

export class ListUserDtoResponse {
    @ApiProperty({
        type: 'number',
        description: 'ID do usuário',
        example: 1,
    })
  id: number;

    @ApiProperty({
        type: 'string',
        description: 'Tipo de usuário',
        example: 'admin',
    })
  user_type: string;

    @ApiProperty({
        type: 'string',
        description: 'Senha do usuário',
        example: 'password123',
    })
  password: string;

    @ApiProperty({
        type: 'string',
        description: 'Email do usuário',
        example: 'admin@tech.com',
    })
  email: string;
}