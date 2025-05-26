import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        description: 'ID do usuário',
        type: Number,
        example: 1,
    })
    user_type: string;

    @ApiProperty({
        type: 'string',
        description: 'Senha do usuário',
        example: 'password123'
    })
    password: string;

    @ApiProperty({
        description: 'Email do usuário',
        type: String,
        example: 'admin@tech.com',
    })
    email: string;
}