import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BmenuModule } from './bmenu/bmenu.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [ TypeOrmModule.forRoot(), BmenuModule],
  controllers: [AppController],
  providers: [AppService],  
})
export class AppModule {}
