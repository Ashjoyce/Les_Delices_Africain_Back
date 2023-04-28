import { Test, TestingModule } from '@nestjs/testing';
import { BooktableController } from './booktable.controller';

describe('BooktableController', () => {
  let controller: BooktableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooktableController],
    }).compile();

    controller = module.get<BooktableController>(BooktableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
