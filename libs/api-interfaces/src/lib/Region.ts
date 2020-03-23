export interface Region {
  id: string;
  code: string;
  name: string;
  nameAr: string;
}

export interface Province {
  id: string;
  code: string;
  name: string;
  nameAr: string;
  region: Region;
}


export interface Circle {
  id: string;
  code: string;
  name: string;
  nameAr: string;
  province: Province;
}

export interface Commune {
  id: string;
  code: string;
  name: string;
  nameAr: string;
  province: Province;
  circle: Circle;
}


export interface Caidat {
  id: string;
  name: string;
  nameAr: string;
  communeList: Array<Commune>;
  description:string;
  descriptionAr:string;
}

