import { Module } from '@nestjs/common';
import { PrinterServer } from './services/printer.service';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [PrinterServer],
})
export class AppModule { }
