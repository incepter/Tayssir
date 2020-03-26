import { Controller, Post, Body } from '@nestjs/common';
import { MessageService } from '@tayssir/api-interfaces';
import { properties } from 'libs/api-interfaces/src/properties/properties';
import { ResponseObject } from 'libs/api-interfaces/src/lib/responsObject';
import { RequestorService } from './requestor.service';

@Controller('requestor')
export class RequestorController {

    constructor(private readonly requestorService: RequestorService) { }

    @Post('generateOtp')
    generateOtp(@Body() contact: { phoneNumber: string }): ResponseObject {
        return this.requestorService.generateOTP(contact.phoneNumber);
    }
}