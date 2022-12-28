import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageInstance } from 'twilio/lib/rest/api/v2010/account/message';
import { Param } from '@nestjs/common/decorators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/message/:number')
  async sendMessage(@Param('number') number: string): Promise<MessageInstance> {
    try {
      const result = await this.appService.twilio.messages.create({
        body: 'This message is delivered via Twilio',
        from: 'whatsapp:+14155238886',
        to: `whatsapp:${number}`,
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
