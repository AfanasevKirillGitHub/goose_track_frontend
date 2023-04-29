import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  useAddTasksMutation,
  useUpdateTasksMutation,
} from '../../redux/task/taskOperations';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import moment from 'moment';
import 'moment/locale/uk';
import { SVG } from '../../images';
import * as SC from './TaskForm.Styled';
import { TaskFormButton } from './TaskFormButton';
import { PRIORITY } from '../../helpers/enums';

const taskCreateTime = moment(Date.now()).format('HH:mm');

export const TaskForm = ({ fieldsData, toggleModal }) => {
  const addMinutes = minutes => +Date.now() + minutes * 60 * 1000;
  //ts
  // const lang = localStorage.getItem('i18nextLng') as string;

  //js
  const modalType = fieldsData.title ? `edit` : `add`;

  const lang = localStorage.getItem('i18nextLng');

  const defaultEndTime = moment(addMinutes(30)).format('HH:mm');

  const { current } = useParams();

  const [title, setTitle] = useState(fieldsData?.title ?? '');
  const [start, setStart] = useState(fieldsData?.start ?? taskCreateTime);
  const [end, setEnd] = useState(fieldsData?.end ?? defaultEndTime);
  const [priority, setPriority] = useState(fieldsData?.priority ?? '');

  const [addTask, { isLoading: taskIsLoading }] = useAddTasksMutation();
  const [updateTask, { isLoading: isUpdatind }] = useUpdateTasksMutation();

  const { register, handleSubmit } = useForm();

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

    if (!isValidStartTime && modalType === 'add') {
      toast.error("Start time can't be in past!");
      setStart(taskCreateTime);
      return;
    }

    if (!isValidEndTime && modalType === 'add') {
      toast.error("End time can't be lower of start time!");
      setEnd(taskCreateTime);
      return;
    }

    switch (modalType) {
      case 'edit':
        updateTask({ ...fieldsData, ...data });
        toggleModal();

        break;

      default:
        const taskData = {
          ...data,
          status: fieldsData.status,
          date: current,
        };
        addTask({ data: taskData, lang });
        toggleModal();

        break;
    }
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
        {PRIORITY.map((name, idx) => {
          const sellectedByDefault = PRIORITY[idx] === PRIORITY[0];

          const isSelected = priority
            ? PRIORITY[idx].includes(priority)
            : sellectedByDefault;

          return (
            <SC.PriorityItem key={name}>
              <SC.PriorityLabel>
                <SC.RadioButton
                  {...register('priority', {
                    validate: {
                      priority: value =>
                        PRIORITY.includes(value) || 'is not valid',
                    },
                  })}
                  type="radio"
                  value={name}
                  defaultChecked={isSelected}
                  onChange={e => setPriority(e.target.value)}
                />
                <SC.CustomRadioButton name={name}>
                  {isSelected ? <SVG.RadioButtonActive /> : <SVG.RadioButton />}
                </SC.CustomRadioButton>
                {name}
              </SC.PriorityLabel>
            </SC.PriorityItem>
          );
        })}
      </SC.PriorityList>
      <SC.Buttons>
        <TaskFormButton type="submit" disabled={taskIsLoading || isUpdatind}>
          {modalType === 'add' ? (
            <SVG.AddIcon width="18px" height="18px" />
          ) : (
            <SVG.EditIcon />
          )}
          {modalType}
        </TaskFormButton>
        {modalType === 'add' && (
          <TaskFormButton type="button" onClick={toggleModal}>
            Cancel
          </TaskFormButton>
        )}
      </SC.Buttons>
    </SC.Form>
  );
};
