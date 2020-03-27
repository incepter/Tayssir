import { Controller, Post, Body } from '@nestjs/common';
import { RequestorService } from './requestor.service';
import { Response } from 'libs/api-interfaces/src/lib/Response';

@Controller('requestor')
export class RequestorController {

    constructor(private readonly requestorService: RequestorService) { }

    @Post('generateOtp')
    generateOtp(@Body() contact: { phoneNumber: string }): Response {
        return this.requestorService.generateOTP(contact.phoneNumber);
    }
}