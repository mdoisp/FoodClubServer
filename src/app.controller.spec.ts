import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return API status', () => {
      const result = appController.getRoot();
      expect(result).toHaveProperty('status', 'online');
      expect(result).toHaveProperty('message', 'FoodClub API está funcionando!');
      expect(result).toHaveProperty('timestamp');
      expect(result).toHaveProperty('version', '1.0.0');
    });
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      jest.spyOn(appService, 'getHello').mockReturnValue('Hello World!');
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
