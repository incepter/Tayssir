import { Injectable } from '@nestjs/common';
import { Request, RequestStatus } from '@tayssir/api-interfaces';

@Injectable()
export class AppService {
  getData(): Request[] {
    return [
      {
        id: '1',
        fullName: ' mohammed alami',
        cin: 'BH489621',
        cinRecto: '<image encoded base64 >',
        cinVerso: '<image encoded base64 >',
        phone: '0661020304',
        address: ' 15 rue zobair ben al awam, roche noir',
        jobAddress: ' 20 rue achohada, Hay mohammadi',
        jobType: 'serveur',
        city: 'Casablanca',
        province: 'ain sebaa',
        circle: 'Roche noir',
        caidat: 'caidat 19 belvedere',
        authorityId: '1',
        assignedAuthorityId: '1',
        processedByAuthorityId: '1',
        status: RequestStatus.RECEIVED,
        rejectReason: 'if the request is rejected here is the reason why',
        creationDate: new Date(22, 3, 2020),
        statusUpdateDate: new Date(22, 3, 2020)
      }
    ];
  }
}
