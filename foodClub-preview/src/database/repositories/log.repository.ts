import { Inject, Injectable } from '@nestjs/common';
import { LogEntity } from '../entities/log.entity';
import { LogEntityInterface } from '../interfaces/log.interface';

@Injectable()
export class LogRepository {
  constructor(
    @Inject('LOG_ENTITY')
    private readonly logEntity: typeof LogEntity,
  ) {}

  async create(log: Omit<LogEntityInterface, 'id'>): Promise<LogEntityInterface> {
    return await this.logEntity.create(log);
  }

  async list(): Promise<LogEntityInterface[]> {
    return await this.logEntity.findAll();
  }
}