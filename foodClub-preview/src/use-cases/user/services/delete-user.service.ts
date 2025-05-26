import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from '../../../database/repositories/user.repository';

@Injectable()
export class DeleteUserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: UserRepository
    ) {}

    async execute(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}