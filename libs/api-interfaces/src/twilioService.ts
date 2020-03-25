import { Twilio } from 'twilio';

import { Injectable } from '@nestjs/common';
import { properties } from './properties/properties';

@Injectable()
export class TwilioService {


    sendSms(phoneNumber: string, messageBody: string) {

        console.log('sending sms 2');
        const twilioNumber = '+12075693670';
        const client = new Twilio(properties.accountSid, properties.authToken);

        if (!this.validE164(phoneNumber)) {
            throw new Error('number must be E164 format!')
        }

        const textContent = {
            body: messageBody,
            to: phoneNumber,
            from: twilioNumber
        }

        client.messages.create(textContent)
            .then((message) => console.log('message sent  :', message))
            .catch((error) => console.log('error message  :', error))

    }

    // Validate E164 format
    validE164(num) {
        return /^\+?[1-9]\d{1,14}$/.test(num)
    }
}