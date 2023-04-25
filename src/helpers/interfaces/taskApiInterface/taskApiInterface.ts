export interface ITaskApi {
  massege: string;
  tasks: [];
}

export interface ITask {
  title: string;
  start: string;
  end: string;
  date: string;
  _id: string;
  status: string;
  priority: string;
}
