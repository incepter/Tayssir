import {Caidat} from "./Region";

export interface Authority {
  id: string;
  fullName: string;
  phone: string;
  caidat: Caidat;
  authorityChief : Authority
  role: Role;
}

export enum Role {
  MQADDEM,
  CAID
}
