import { Module } from '@nestjs/common';
import { DmenuService } from './dmenu.service';
import { DmenuController } from './dmenu.controller';

@Module({
  providers: [DmenuService],
  controllers: [DmenuController]
})
export class DmenuModule {}
