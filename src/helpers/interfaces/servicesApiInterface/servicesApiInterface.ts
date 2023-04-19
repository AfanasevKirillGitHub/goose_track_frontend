export interface IServicesApi {
  massege: string;
  services: [];
}

export interface IServices {
  // address: ILang;
  // title: ILang;
  workDays:[];
  address: string;
  title: string;
  url: string;
  email: string;
  _id: string;
  phone: string;
  imageUrl: string;
  addressUrl: string;
}

interface ILang {
  en?: string;
  ua?: string;
}
