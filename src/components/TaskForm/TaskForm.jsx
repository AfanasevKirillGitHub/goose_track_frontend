import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddTasksMutation } from '../../redux/task/taskOperations';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

export const TaskForm = ({ fieldsData }) => {
  //ts
  // const lang = localStorage.getItem('i18nextLng') as string;

  //js
  const lang = localStorage.getItem('i18nextLng');

  // toast.success(lang);

  const { current } = useParams();

  const [title, setTitle] = useState(fieldsData?.title[lang] ?? '');
  const [start, setStart] = useState(fieldsData?.start ?? '');
  const [end, setEnd] = useState(fieldsData?.end ?? '');
  const [priority, setPriority] = useState(fieldsData?.priority ?? '');

  const [addTask, { isLoading: taskIsLoading }] = useAddTasksMutation();

  const buttonName = fieldsData ? 'Edit' : 'Add';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // const TEST_DATA = {
    //   title: { en: 'form to back1' },
    //   start: '2024-02-02',
    //   end: '2024-05-02',
    //   date: 'dateNow',
    //   status: 'todo',
    //   priority: 'high',
    // };

    const taskData = {
      title: { [lang]: formData.get('title') },
      start: formData.get('start'),
      end: formData.get('end'),
      priority: formData.get('priority'),
      date: current,
      status: fieldsData?.status ?? 'todo',
    };

    // console.log('taskData :>> ', { data: taskData, lang });
    console.log('taskData :>> ', taskData);
    addTask({ data: taskData, lang });
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

  // console.log('taskIsLoading :>> ', taskIsLoading);

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
      onSubmit={handleSubmit(data => console.log('hookForm data: ', data))}
    >
      <label>
        Title
        <input
          {...register('title', { required: true })}
          type="text"
          value={title}
          onInput={onInput}
        />
      </label>
      <label>
        Start
        <input
          {...register('start')}
          // name="start"
          id="start"
          type="text"
          value={start}
          onInput={onInput}
        />
      </label>
      <label>
        End
        <input
          {...register('end')}
          // name="end"
          id="end"
          type="text"
          value={end}
          onInput={onInput}
        />
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
                {...register('priority')}
                // name="priority"
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
