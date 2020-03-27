import { Twilio } from 'twilio';

import { Injectable } from '@nestjs/common';
import { properties } from '../../../apps/api/properties';
import { Response } from './lib/Response';
import { MessageListInstanceCreateOptions } from 'twilio/lib/rest/api/v2010/account/message';

@Injectable()
export class MessageService {

    sendSms(phoneNumber: string, messageBody: string): Response {

        let response: Response = {} as Response;
        // tslint:disable-next-line:prefer-const
        const client = new Twilio(properties.accountSid, properties.authToken);

        if (!this.validE164(phoneNumber)) {
            throw new Error('number must be E164 format!')
        }

        const textContent: MessageListInstanceCreateOptions = {
            body: messageBody,
            to: phoneNumber,
            from: properties.twilioNumber
        }

        client.messages.create(textContent)
            .then((message) => {
                response.status = message.status;
                response.message = "SMS Sent !";
                response.code = 200;
            })
            .catch((error) => {
                response.status = "failed";
                response.code = 500;
                response.message = error;
            })

        return response;
    }

    // Validate E164 format
    validE164(num) {
        return /^\+?[1-9]\d{1,14}$/.test(num)
    }
}