import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageService } from '@tayssir/api-interfaces';
import { RequestorController } from './requestor/requestor.controller';
import { RequestorService } from './requestor/requestor.service';

@Module({
  imports: [],
  controllers: [AppController, RequestorController],
  providers: [AppService, MessageService, RequestorService]
})
export class AppModule { }
