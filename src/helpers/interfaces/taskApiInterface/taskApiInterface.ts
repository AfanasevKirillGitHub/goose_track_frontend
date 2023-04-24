export interface ITaskApi {
  massege: string;
  tasks: [];
}

export interface ITask {
  title: ILang;
  start: string;
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

export interface ITaskToEdit {
  title: ILang;
  start: string;
  end: string;
  date: string;
  status: string;
  priority: string;
}

export interface ITaskToSend {
  taskData: ITaskToEdit;
  lang: string;
}
