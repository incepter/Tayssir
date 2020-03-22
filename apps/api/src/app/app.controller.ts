import { Controller, Get } from '@nestjs/common';

import { Request } from '@tayssir/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('requests')
  getData(): Request[] {
    return this.appService.getData();
  }
}
