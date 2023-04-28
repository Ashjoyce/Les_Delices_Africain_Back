import { Test, TestingModule } from '@nestjs/testing';
import { BmenuController } from './bmenu.controller';

describe('BmenuController', () => {
  let controller: BmenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BmenuController],
    }).compile();

    controller = module.get<BmenuController>(BmenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
