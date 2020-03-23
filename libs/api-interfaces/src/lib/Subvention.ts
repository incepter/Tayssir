import {Request} from "./Request";

export interface Subvention {
  id: string;
  creationDate: Date;
  subventionCode: string;
  type: SubventionType;
  value: number;
}

export enum SubventionType {
  MANDAT,
  EXPRESS_GAB
}

export interface RequestSubvention {
  request: Request;
  subvention: Subvention;
}
