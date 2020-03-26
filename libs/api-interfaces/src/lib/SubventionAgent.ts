import {Caidat, Province} from "./Region";

export interface SubventionActor {
  id: string;
  fullName: string;
  phone: string;
  province: Province;
  username:string;
}

export enum Role {
  SUPERVISOR,
  AGENT
}
