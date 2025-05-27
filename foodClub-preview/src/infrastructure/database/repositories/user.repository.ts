import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UserEntityInterface } from '../interfaces/user.interface';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER_ENTITY')
    private readonly userEntity: typeof UserEntity,
  ) {}

  async create(user: Omit<UserEntityInterface, 'id'>): Promise<UserEntityInterface> {
    return await this.userEntity.create(user);
  }

  async update(
    id: number,
    userData: Partial<Omit<UserEntityInterface, 'id'>>,
  ): Promise<UserEntityInterface> {
    const user = await this.userEntity.findByPk(id);
    return await user.update(userData);
  }

  async getById(id: number): Promise<UserEntityInterface> {
    const user = await this.userEntity.findByPk(id);
    return user;
  }

  async getByEmail(email: string): Promise<UserEntityInterface | null> {
    return await this.userEntity.findOne({ where: { email } });
  }

  async list(): Promise<UserEntityInterface[]> {
    return await this.userEntity.findAll();
  }

  async delete(id: number): Promise<void> {
    const user = await this.userEntity.findByPk(id);
    await user.destroy();
  }
}