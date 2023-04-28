import { Header } from './ColumnHeadBar.styled';

interface IColumnHeadBarProps {
  name: string;
}

export const ColumnHeadBar = ({ name }: IColumnHeadBarProps) => {
  return <Header>{name}</Header>;
};
