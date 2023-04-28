import { Module } from '@nestjs/common';
import { BooktableService } from './booktable.service';
import { BooktableController } from './booktable.controller';

@Module({
  providers: [BooktableService],
  controllers: [BooktableController]
})
export class BooktableModule {}
