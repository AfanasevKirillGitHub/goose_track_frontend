import { ChangeEvent, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
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
import { t } from 'i18next';
import { ITask } from '../../helpers/interfaces/taskApiInterface/taskApiInterface';

interface IProps {
  toggleModal: () => void;

  fieldsData: Partial<ITask>;
}

export const TaskForm = ({ fieldsData, toggleModal }: IProps) => {
  const { current } = useParams();
  const taskDay = fieldsData?.date ? fieldsData.date : current;

  const dayNow = moment(Date.now()).format('YYYY-MM-DD');

  const lang = localStorage.getItem('i18nextLng');

  const modalType = (fieldsData.title as string) ? `edit` : `add`;

  const taskCreateTime = fieldsData?.start
    ? fieldsData.start
    : moment(Date.now()).format('HH:mm');

  const addMinutes = (minutes: number) => Date.now() + minutes * 60 * 1000;

  const defaultEndTime = moment(addMinutes(60)).format('HH:mm');

  const [title, setTitle] = useState(fieldsData?.title ?? '');
  const [start, setStart] = useState(fieldsData?.start ?? taskCreateTime);
  const [end, setEnd] = useState(fieldsData?.end ?? defaultEndTime);
  const [priority, setPriority] = useState(fieldsData?.priority ?? '');

  const [addTask, { isLoading: taskIsLoading }] = useAddTasksMutation();
  const [updateTask, { isLoading: isUpdatind }] = useUpdateTasksMutation();

  const { register, handleSubmit } = useForm();

  const onError: SubmitErrorHandler<any> = (errors, e) => {
    const errorFields = Object.keys(errors);
    const notifyErrors = () =>
      errorFields.forEach(errorField => {
        toast.error(
          `${t('taskModalMsg.Field')} ${t(`taskModalMsg.${errorField}`)} ${
            errors[errorField]?.message
          }`
        );
      });

    notifyErrors();
  };

  const isValidStartTime = (day: string, time: any) => {
    if (day === dayNow && time >= taskCreateTime) return true;
    if (day > dayNow) return true;
  };
  const isValidEndTime = start <= end;

  const onSubmit: SubmitHandler<any> = (data, e) => {
    switch (modalType) {
      case 'edit':
        if (!isValidStartTime(taskDay as string, start)) {
          toast.error(t('taskModalMsg.editInPast'));
          setStart(taskCreateTime);
          return;
        }
        if (!isValidEndTime) {
          toast.error(t('taskModalMsg.endTimeWrong'));
          setEnd(defaultEndTime);
          return;
        }
        updateTask({ ...fieldsData, ...data });
        toggleModal();

        break;

      default:
        if (!isValidStartTime(taskDay as string, start)) {
          toast.error(t('taskModalMsg.startTimeInPast'));
          setStart(taskCreateTime);
          return;
        }

        if (!isValidEndTime) {
          toast.error(t('taskModalMsg.endTimeWrong'));
          setEnd(defaultEndTime);
          return;
        }
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

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
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
        <SC.Label>{t('Title')}</SC.Label>
        <SC.Input
          type="text"
          placeholder={t('Enter text')!}
          {...register('title', {
            required: t('taskModalMsg.requared') as string,
            maxLength: {
              value: 250,
              message: t('taskModalMsg.maxLength'),
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
          <SC.Label>{t('Start')}</SC.Label>
          <SC.Input
            type="time"
            {...register('start', {
              required: t('taskModalMsg.requared') as string,
            })}
            value={start}
            onInput={onInput}
          />
        </SC.Field>

        <SC.Field>
          <SC.Label>{t('End')}</SC.Label>
          <SC.Input
            {...register('end', {
              required: t('taskModalMsg.requared') as string,
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
                        PRIORITY.includes(value) ||
                        (t('taskModalMsg.priorityIsNotValid') as string),
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
                {t(name)}
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
          {t(modalType)}
        </TaskFormButton>

        {modalType === 'add' && (
          <TaskFormButton type="button" onClick={toggleModal}>
            {t('Cancel')}
          </TaskFormButton>
        )}
      </SC.Buttons>
    </SC.Form>
  );
};
