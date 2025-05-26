import { Inject, Injectable } from "@nestjs/common";
import { UserEntityInterface } from "../../../database/interfaces/user.interface";
import { UserRepository } from '../../../database/repositories/user.repository';

@Injectable()
export class GetUserByIdService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: UserRepository
    ) {}

    async execute(id: number): Promise<UserEntityInterface> {
        return await this.userRepository.getById(id);
    }
}