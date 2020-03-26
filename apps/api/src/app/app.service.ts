import { Injectable } from '@nestjs/common';
import { Request, RequestStatus } from '@tayssir/api-interfaces';

@Injectable()
export class AppService {
  getData(): Request[] {
    return [];
  }
}
