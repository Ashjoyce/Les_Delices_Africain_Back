import { Module } from '@nestjs/common';
import { BmenuService } from './bmenu.service';
import { BmenuController } from './bmenu.controller';
import { BmenusEntity } from './bmenus.entity/bmenus.entity';
import { TypeOrmModule } from '@nestjs/typeorm'
@Module({
  imports: [TypeOrmModule.forFeature([BmenusEntity])],
  providers: [BmenuService],  
  controllers: [BmenuController]
})
export class BmenuModule {}
