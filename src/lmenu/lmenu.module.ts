import { Module } from '@nestjs/common';
import { LmenuService } from './lmenu.service';
import { LmenuController } from './lmenu.controller';

@Module({
  providers: [LmenuService],
  controllers: [LmenuController]
})
export class LmenuModule {}
