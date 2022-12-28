import { Injectable } from '@nestjs/common';
import * as twilio from 'twilio';

@Injectable()
export class AppService {
  get twilio() {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = twilio(accountSid, authToken);
    return client;
  }
}
