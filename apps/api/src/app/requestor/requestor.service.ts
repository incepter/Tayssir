import { Injectable } from '@nestjs/common';
import { MessageService } from '@tayssir/api-interfaces';
import { Response } from 'libs/api-interfaces/src/lib/Response';
import { properties } from 'apps/api/properties';

@Injectable()
export class RequestorService {

    constructor(private readonly messageService: MessageService) { }

    generateOTP(phoneNumber: string): Response {
        const generatedCode = this.generatePIN();
        //TODO:save code into database
        return this.messageService.sendSms(phoneNumber, properties.messageBody + generatedCode);
    }


    generatePIN(): number {
        return Math.floor(100000 + Math.random() * 900000);
    }
}