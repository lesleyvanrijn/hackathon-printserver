import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ThermalPrinter, PrinterTypes } from "node-thermal-printer";
import * as receiptline from "receiptline"



@Injectable()
export class PrinterServer {
    printer: ThermalPrinter;

    constructor(private readonly configService: ConfigService) {
        this.printer = new ThermalPrinter({
            type: PrinterTypes.EPSON,
            interface: this.configService.get<string>('PRINTER_LOCATION'),
        });
    }

    async sendToPrinter(blob: string) {
        const receipt = receiptline.transform(blob, { command: 'epson', cpl: 42 })
        const bin = Buffer.from(receipt, 'binary');
        if (this.printer) {
            this.printer.raw(bin);
        }
        return true;
    }
}