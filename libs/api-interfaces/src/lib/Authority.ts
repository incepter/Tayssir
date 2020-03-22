export interface Authority {
  id: string;
  fullName: string;
  phone: string;
  city: string;
  province: string;
  circle: string;
  caidat: string;
  role: Role;
}

export enum Role {
  MQADDEM,
  CAID
}
