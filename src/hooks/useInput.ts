import { useValidation } from './useValidation';
import { useState } from 'react';

interface ISetings {
  [key: string]: boolean | number | string | Date;
}

export const useInput = (
  initialValue: string | Date,
  validations: ISetings
) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = (e: React.FocusEvent<HTMLElement>) => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};
