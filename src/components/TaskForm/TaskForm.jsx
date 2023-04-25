import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddTasksMutation } from '../../redux/task/taskOperations';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import moment from 'moment';
import 'moment/locale/uk';
import { SVG } from '../../images';
import * as SC from './TaskForm.Styled';

const PRIORITY = ['low', 'medium', 'high'];
const taskCreateTime = moment(Date.now()).format('HH:mm');

// const TEMP_MODAL_DATA = {
//   title: 'Edit me',
//   start: '11:00',
//   end: '12:00',
//   date: '2023-04-25',
//   priority: 'low',
// };
// const modalData = Object.keys(TEMP_MODAL_DATA).length ? TEMP_MODAL_DATA : null;

export const TaskForm = ({ fieldsData }) => {
  const addMinutes = minutes => +Date.now() + minutes * 60 * 1000;
  //ts
  // const lang = localStorage.getItem('i18nextLng') as string;

  //js
  const lang = localStorage.getItem('i18nextLng');

  const defaultEndTime = moment(addMinutes(30)).format('HH:mm');

  const { current } = useParams();

  // const [title, setTitle] = useState(fieldsData?.title[lang] ?? '');
  const [title, setTitle] = useState(fieldsData?.title ?? '');
  const [start, setStart] = useState(fieldsData?.start ?? taskCreateTime);
  const [end, setEnd] = useState(fieldsData?.end ?? defaultEndTime);
  const [priority, setPriority] = useState(fieldsData?.priority ?? '');

  const [addTask, { isLoading: taskIsLoading }] = useAddTasksMutation();
  // const [{ isLoading: taskIsLoading }] = useAddTasksMutation();

  const modalType = fieldsData.title ? `edit` : `add`;

  // console.log('in form fieldsData :>> ', fieldsData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log('errors :>> ', errors);

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
    <SC.Form onSubmit={handleSubmit(onSubmit, onError)}>
      <SC.Field>
        <SC.Label>Title</SC.Label>
        <SC.Input
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
      </SC.Field>

      {/* Блок TIME */}
      <SC.Time>
        <SC.Field>
          <SC.Label>Start</SC.Label>
          <SC.Input
            type="time"
            {...register('start', {
              required: 'is requared!',
            })}
            value={start}
            onInput={onInput}
          />
        </SC.Field>
        <SC.Field>
          <SC.Label>End</SC.Label>
          <SC.Input
            {...register('end', {
              required: 'is requared!',
            })}
            type="time"
            value={end}
            onInput={onInput}
          />
        </SC.Field>
      </SC.Time>

      {/* Блок PRIORITY */}
      <SC.PriorityList>
        {PRIORITY.map((priorityEl, idx) => {
          const sellectedByDefault = PRIORITY[idx] === PRIORITY[0];

          const isSelected = priority
            ? PRIORITY[idx].includes(priority)
            : sellectedByDefault;

          return (
            <SC.PriorityItem key={priority}>
              <SC.PriorityLabel>
                <SC.RadioButton
                  {...register('priority', {
                    validate: {
                      priority: value =>
                        PRIORITY.includes(value) || 'is not valid',
                    },
                  })}
                  type="radio"
                  value={priority}
                  defaultChecked={isSelected}
                  onChange={e => setPriority(e.target.value)}
                />
                <span>is sell {isSelected}</span>
                {priority}
              </SC.PriorityLabel>
            </SC.PriorityItem>
          );
        })}
      </SC.PriorityList>
      <div>
        <button type="submit" disabled={taskIsLoading}>
          {modalType}
        </button>
        <button type="button">Cancel</button>
      </div>
    </SC.Form>
  );
};
