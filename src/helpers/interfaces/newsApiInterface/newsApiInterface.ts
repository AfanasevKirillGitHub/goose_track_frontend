export interface INewsApi {
  massege: string;
  news: [];
  total: number;
}

export interface INews {
  date: string;
  description: ILang;
  title: ILang;
  link: string;
  _id: string;
  img: string;
}

interface ILang {
  en?: string;
  ua?: string;
}
