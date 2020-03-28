import {Circle, Commune, Province, Region} from "./Region";

export interface Request {
  id: string;
  fullName: string;
  cin: string;
  cinRecto: string;
  cinVerso: string;
  phone: string;
  address: string;
  jobAddress: string;
  jobType: string;
  region: Region;
  province: Province;
  circle: Circle;
  commune: Commune;
  authorityId: string;
  status: RequestStatus;
  assignedAuthorityId: string;
  processedByAuthorityId: string;
  processedByChiefAuthorityId: string;
  rejectReason: string;
  statusUpdateDate: Date;
  creationDate: Date;
  familyStatus: string;
  childNumber: number;
  hasRamed: boolean;
  ramedCardNumber:  string;
}

export enum RequestStatus {
  RECEIVED,
  VALIDATED,
  CONFIRMED,
  REJECTED
}
