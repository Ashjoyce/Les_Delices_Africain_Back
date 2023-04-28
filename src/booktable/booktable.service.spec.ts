import { Test, TestingModule } from '@nestjs/testing';
import { BooktableService } from './booktable.service';

describe('BooktableService', () => {
  let service: BooktableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooktableService],
    }).compile();

    service = module.get<BooktableService>(BooktableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
