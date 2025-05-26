import { UserEntity } from "../entities/user.entity";
import { UserRepository } from '../repositories/user.repository';

export const userProvider = [
  {
    provide: 'USER_ENTITY',
    useValue: UserEntity,
  },
  {
    provide: 'USER_REPOSITORY',
    useClass: UserRepository,
  },
];