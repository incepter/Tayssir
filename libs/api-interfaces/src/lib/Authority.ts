export interface Authority {
  id: string;
  fullName: string;
  phone: string;
  city: string;
  province: string;
  circle: string;
  caidat: string;
  authorityChief : Authority
  role: Role;
}

export enum Role {
  MQADDEM,
  CAID
}
