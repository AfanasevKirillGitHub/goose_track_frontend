export interface IScroll {
  [key: string]: string | number | boolean;
}

export const scrollbars: IScroll = {
  theme: 'os-theme-dark',
  visibility: 'auto',
  autoHide: 'move',
  autoHideDelay: 700,
  dragScroll: true,
};
