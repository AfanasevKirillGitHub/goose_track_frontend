import * as SC from './TaskFormButton.styled';

export const TaskFormButton = ({ children, ...props }) => {
  return (
    <SC.Button type={props.type} onClick={props.onClick}>
      {children}
    </SC.Button>
  );
};
