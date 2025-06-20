import { Inject, Injectable } from "@nestjs/common";
import { UserEntityInterface } from "../../domain/repositories/user.repository.interface";
import { UserRepository } from '../../infrastructure/database/repositories/user.repository';

@Injectable()
export class UpdateUserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: UserRepository
    ) {}

    async execute(
        id: number,
        userData: Partial<Omit<UserEntityInterface, 'id'>>
    ): Promise<UserEntityInterface> {
        return await this.userRepository.update(id, userData);
    }
}