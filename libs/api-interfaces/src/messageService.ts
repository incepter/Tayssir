import { Twilio } from 'twilio';

import { Injectable } from '@nestjs/common';
import { properties } from './properties/properties';
import { ResponseObject } from './lib/responsObject';

@Injectable()
export class MessageService {


    sendSms(phoneNumber: string, messageBody: string): ResponseObject {

        // tslint:disable-next-line:prefer-const
        let response: ResponseObject = new ResponseObject();
        const client = new Twilio(properties.accountSid, properties.authToken);

        if (!this.validE164(phoneNumber)) {
            response.status = 'KO';
            response.message = 'number must be E164 format!'
            throw new Error('number must be E164 format!')
        }

        const textContent = {
            body: messageBody,
            to: phoneNumber,
            from: properties.twilioNumber
        }

        client.messages.create(textContent)
            .then((message) => {
                response.status = 'OK';
            })
            .catch((error) => {
                response.status = 'KO';
                response.message = error;
                throw new Error('Error sending message : ' + error)
            })

        return response;
    }

    // Validate E164 format
    validE164(num) {
        return /^\+?[1-9]\d{1,14}$/.test(num)
    }
}