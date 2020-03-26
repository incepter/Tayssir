import { Injectable } from '@nestjs/common';
import { MessageService } from '@tayssir/api-interfaces';
import { ResponseObject } from 'libs/api-interfaces/src/lib/responsObject';
import { properties } from 'libs/api-interfaces/src/properties/properties';

@Injectable()
export class RequestorService {

    constructor(private readonly messageService: MessageService) { }

    generateOTP(phoneNumber: string): ResponseObject {
        const generatedCode = this.generatePIN();
        //TODO:save code into database
        return this.messageService.sendSms(phoneNumber, properties.messageBody + generatedCode);
    }


    generatePIN(): number {
        return Math.floor(100000 + Math.random() * 900000);
    }
}