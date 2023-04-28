import { Test, TestingModule } from '@nestjs/testing';
import { BmenuService } from './bmenu.service';

describe('BmenuService', () => {
  let service: BmenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BmenuService],
    }).compile();

    service = module.get<BmenuService>(BmenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
