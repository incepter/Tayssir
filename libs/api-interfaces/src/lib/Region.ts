export interface Region {
  id: string;
  code: string;
  name: string;
}

export interface Province {
  id: string;
  code: string;
  name: string;
  region: Region;
}


export interface Circle {
  id: string;
  code: string;
  name: string;
  province: Province;
}

export interface Commune {
  id: string;
  code: string;
  name: string;
  circle: Circle;
}


export interface Caidat {
  id: string;
  name: string;
  communeList: Array<Commune>;
  description:string;
}

