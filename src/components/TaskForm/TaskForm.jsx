import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddTasksMutation } from '../../redux/task/taskOperations';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import moment from 'moment';
import 'moment/locale/uk';

const PRIORITY = ['low', 'medium', 'high'];
const taskCreateTime = moment(Date.now()).format('hh:mm');

export const TaskForm = ({ fieldsData }) => {
  const addMinutes = minutes => +Date.now() + minutes * 60 * 1000;
  //ts
  // const lang = localStorage.getItem('i18nextLng') as string;

  //js
  const lang = localStorage.getItem('i18nextLng');

  const defaultEndTime = moment(addMinutes(30)).format('hh:mm');

  const { current } = useParams();

  // const [title, setTitle] = useState(fieldsData?.title[lang] ?? '');
  const [title, setTitle] = useState(fieldsData?.title ?? '');
  const [start, setStart] = useState(fieldsData?.start ?? taskCreateTime);
  const [end, setEnd] = useState(fieldsData?.end ?? defaultEndTime);
  const [priority, setPriority] = useState(fieldsData?.priority ?? '');

  const [addTask, { isLoading: taskIsLoading }] = useAddTasksMutation();
  // const [{ isLoading: taskIsLoading }] = useAddTasksMutation();

  const modalType = fieldsData.title
    ? `Edit ${fieldsData.status}`
    : `Add ${fieldsData.status}`;

  // console.log('in form fieldsData :>> ', fieldsData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log('errors :>> ', errors);
  // const onSubmit = e => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);

  //   // const TEST_DATA = {
  //   //   title: { en: 'form to back1' },
  //   //   start: '2024-02-02',
  //   //   end: '2024-05-02',
  //   //   date: 'dateNow',
  //   //   status: 'todo',
  //   //   priority: 'high',
  //   // };

  //   const taskData = {
  //     title: { [lang]: formData.get('title') },
  //     start: formData.get('start'),
  //     end: formData.get('end'),
  //     priority: formData.get('priority'),
  //     date: current,
  //     status: fieldsData?.status ?? 'todo',
  //   };

  //   // console.log('taskData :>> ', { data: taskData, lang });
  //   console.log('taskData :>> ', taskData);
  //   addTask({ data: taskData, lang });
  // };
  const onError = (errors, e) => {
    const errorFields = Object.keys(errors);
    const notifyErrors = () =>
      errorFields.forEach(errorField => {
        toast.error(`Field ${errorField} ${errors[errorField]?.message}`);
      });

    notifyErrors();
  };
  const onSubmit = (data, e) => {
    const isValidStartTime = start >= taskCreateTime;
    const isValidEndTime = start <= end;

    if (!isValidStartTime) {
      toast.error("Start time can't be in past!");
      setStart(taskCreateTime);
    }

    if (!isValidEndTime) {
      toast.error("End time can't be lower of start time!");
      setEnd(defaultEndTime);
    }

    // console.log('taskData :>> ', { data: taskData, lang });
    console.log('formData :>> ', data);

    const taskData = { ...data, status: fieldsData.status, date: current };
    console.log('formData :>> ', taskData);
    // addTask({ data: taskData, lang });

    addTask({ data: taskData, lang });
  };

  const onInput = e => {
    console.log('e.target.name :>> ', e.target.name);
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
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <label>
        Title
        <input
          type="text"
          placeholder="Enter text"
          {...register('title', {
            required: ' is requared!',
            maxLength: {
              value: 250,
              message: `must be lower then 250 chars!`,
            },
          })}
          name="title"
          value={title}
          onInput={onInput}
        />
      </label>
      <label>
        Start
        <input
          type="time"
          {...register('start', {
            required: 'is requared!',
          })}
          value={start}
          onInput={onInput}
        />
      </label>
      <label>
        End
        <input
          {...register('end', {
            required: 'is requared!',
          })}
          type="time"
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
                {...register('priority', {
                  validate: {
                    priority: value =>
                      PRIORITY.includes(value) || 'is not valid',
                  },
                })}
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
      {!taskIsLoading && <button type="submit">{modalType}</button>}
    </form>
  );
};
