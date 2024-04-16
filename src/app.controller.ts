import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from "@nestjs/microservices"
import { PrinterServer } from './services/printer.service';

@Controller()
export class AppController {
  constructor(private readonly printerService: PrinterServer) { }

  @MessagePattern('print')
  sendToPrinter(@Payload() data: string): void {
    this.printerService.sendToPrinter(data)
  }
}
