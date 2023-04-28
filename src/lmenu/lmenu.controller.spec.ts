import { Test, TestingModule } from '@nestjs/testing';
import { LmenuController } from './lmenu.controller';

describe('LmenuController', () => {
  let controller: LmenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LmenuController],
    }).compile();

    controller = module.get<LmenuController>(LmenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
