import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot() {
    return {
      status: 'online',
      message: 'FoodClub API está funcionando!',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    };
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
