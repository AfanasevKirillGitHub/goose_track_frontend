import * as SC from './TaskFormButton.styled';

interface IProps {
  children: React.ReactNode;
  type: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

export const TaskFormButton = ({
  children,
  type,
  onClick,
  disabled,
}: IProps) => {
  return (
    <SC.Button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </SC.Button>
  );
};
