import { LogEntity } from "../entities/log.entity";
import { LogRepository } from '../repositories/log.repository';

export const logProvider = [
  {
    provide: 'LOG_ENTITY',
    useValue: LogEntity,
  },
  {
    provide: 'LOG_REPOSITORY',
    useClass: LogRepository,
  },
];