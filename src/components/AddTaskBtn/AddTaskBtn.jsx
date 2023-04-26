import { SVG } from '../../images';
import { AddButton } from './AddTaskBtn.styled';

export const AddTaskBtn = ({ onClick }) => {
  return (
    <AddButton type="button" onClick={onClick}>
      <SVG.AddIcon />
      Add task
    </AddButton>
  );
};
