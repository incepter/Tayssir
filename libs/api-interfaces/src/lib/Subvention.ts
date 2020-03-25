import {Request} from "./Request";

export interface Subvention {
  id: string;
  creationDate: Date;
  subventionCode: string;
  type: SubventionType;
  value: number;
  request: Request;
  processedBySubventionAgentId: string;
}

export enum SubventionType {
  MANDAT,
  EXPRESS_GAB
}
