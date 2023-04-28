import { Test, TestingModule } from '@nestjs/testing';
import { DmenuController } from './dmenu.controller';

describe('DmenuController', () => {
  let controller: DmenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DmenuController],
    }).compile();

    controller = module.get<DmenuController>(DmenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
