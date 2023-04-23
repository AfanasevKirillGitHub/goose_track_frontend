import { useState } from 'react';
// import { useForm } from 'react-hook-form';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import { useAddTasksMutation } from '../../redux/task/taskOperations';

export const TaskForm = ({ fieldsData }) => {
  const { lang } = useGetSearchParams();
  console.log('lang :>> ', lang);

  const [title, setTitle] = useState(fieldsData?.title[lang] ?? '');
  const [start, setStart] = useState(fieldsData?.start ?? '');
  const [end, setEnd] = useState(fieldsData?.end ?? '');
  const [priority, setPriority] = useState(fieldsData?.priority ?? '');

  const [addTask, { isLoading: taskIsLoading }] = useAddTasksMutation();

  const buttonName = fieldsData ? 'Edit' : 'Add';

  // console.log('title :>> ', title);

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  const onSubmit = e => {
    e.preventDefault();
    // console.log('form >>> ', e.target);

    const formData = new FormData(e.target);

    const taskData = {
      title: { [lang]: formData.get('title') },
      start: formData.get('start'),
      end: formData.get('end'),
      priority: formData.get('priority'),
      date: Date.now(),
      status: fieldsData?.status ?? 'todo',
    };

    console.log('taskData :>> ', taskData);
    addTask(taskData);
  };

  const PRIORITY = ['low', 'medium', 'high'];

  const onInput = e => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        break;

      case 'start':
        setStart(e.target.value);
        break;

      case 'end':
        setEnd(e.target.value);
        break;

      default:
        break;
    }
  };

  console.log('taskIsLoading :>> ', taskIsLoading);

  return (
    <form
      style={{
        width: '303px',
        paddingTop: '48px',
        paddingBottom: '40px',
        paddingLeft: '18px',
        paddingRight: '18px',
        backgroundColor: 'white',
      }}
      onSubmit={onSubmit}
    >
      <label>
        Title
        <input name="title" type="text" value={title} onInput={onInput} />
      </label>
      <label>
        Start
        <input
          name="start"
          id="start"
          type="text"
          value={start}
          onInput={onInput}
        />
      </label>
      <label>
        End
        <input name="end" id="end" type="text" value={end} onInput={onInput} />
      </label>
      {/* Блок PRIORITY */}
      <div>
        {PRIORITY.map((el, idx) => {
          const sellectedByDefault = PRIORITY[idx] === PRIORITY[0];

          const isSelected = priority
            ? PRIORITY[idx].includes(priority)
            : sellectedByDefault;

          return (
            <label key={el}>
              <input
                name="priority"
                type="radio"
                value={el}
                defaultChecked={isSelected}
                onChange={e => setPriority(e.target.value)}
              />
              {el}
            </label>
          );
        })}
      </div>
      {!taskIsLoading && <button type="submit">{buttonName}</button>}
    </form>
  );
};
