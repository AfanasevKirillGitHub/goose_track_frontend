import { SVG } from '../../images';
import { AddButton } from './AddTaskBtn.styled';

export const AddTaskBtn = () => {
  return (
    <AddButton type="button">
      <SVG.AddIcon />
      Add task
    </AddButton>
  );
};
