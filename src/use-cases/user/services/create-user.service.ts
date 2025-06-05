import { Inject, Injectable } from '@nestjs/common';
import { UserEntityInterface } from '../../../database/interfaces/user.interface';
import { UserRepository } from '../../../database/repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: UserRepository
  ) {}

  async execute(user: Omit<UserEntityInterface, 'id'>): Promise<UserEntityInterface> {
    return await this.userRepository.create(user);
  }
}
