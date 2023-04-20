export interface ITaskApi {
  massege: string;
  tasks: [];
}

export interface ITask {
  title: ILang;
  statr: string;
  end: string;
  date: string;
  _id: string;
  status: string;
  priority: string;
}

interface ILang {
  en?: string;
  ua?: string;
}
