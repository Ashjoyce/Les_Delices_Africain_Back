import { Test, TestingModule } from '@nestjs/testing';
import { LmenuService } from './lmenu.service';

describe('LmenuService', () => {
  let service: LmenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LmenuService],
    }).compile();

    service = module.get<LmenuService>(LmenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
