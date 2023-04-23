import { AccountSidebar } from '../../components/Account/AccountSidebar';
import { TaskModal } from '../../components/TaskModal';
import { useState } from 'react';

export const CurrentDayPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const tempData = {
    title: { en: 'title' },
    start: 'start',
    end: 'end',
    priority: 'medium',
    status: 'inprogress',
  };

  return (
    <div style={{ display: 'flex' }}>
      <AccountSidebar />
      <div>
        <p>CurrentDayPage</p>
        <button type="button" onClick={toggleModal}>
          Open modal
        </button>
        {isOpen && <TaskModal data={null} closeModal={toggleModal} />}
      </div>
    </div>
  );
};
