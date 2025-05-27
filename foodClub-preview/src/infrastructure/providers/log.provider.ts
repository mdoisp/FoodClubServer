import { LogEntity } from "../database/entities/log.entity";
import { LogRepository } from '../database/repositories/log.repository';

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