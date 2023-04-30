export enum ESTATUS {
  TODO = 'todo',
  INPROGRESS = 'inprogress',
  DONE = 'done',
}

export enum EPRIORITY {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export const STATUS = [ESTATUS.TODO, ESTATUS.INPROGRESS, ESTATUS.DONE];
export const PRIORITY = [EPRIORITY.LOW, EPRIORITY.MEDIUM, EPRIORITY.HIGH];
