import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BmenuModule } from './bmenu/bmenu.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { LmenuModule } from './lmenu/lmenu.module';
import { DmenuModule } from './dmenu/dmenu.module';
import { BtableModule } from './btable/btable.module';
import { BooktableModule } from './booktable/booktable.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [ TypeOrmModule.forRoot(), BmenuModule, LmenuModule, DmenuModule, BtableModule, BooktableModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],  
})
export class AppModule {}
