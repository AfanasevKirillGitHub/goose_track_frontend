import * as SC from './ColumnHeadBar.styled';

interface IColumnHeadBarProps {
  name: string;
}

export const ColumnHeadBar = ({ name }: IColumnHeadBarProps) => {
  return <SC.Header>{name}</SC.Header>;
};
