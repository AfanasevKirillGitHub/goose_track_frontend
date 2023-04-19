import { useEffect, useState } from 'react';

interface ISetings {
  [key: string]: boolean | number | string;
}

export const useValidation = (value: string, validations: ISetings) => {
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [confirmError, isConfirmError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < (validations[validation] as number)
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case 'isEmail':
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
        case 'isSamePassword':
          value === validations[validation] && value !== ''
            ? isConfirmError(true)
            : isConfirmError(false);
          break;
        default:
          console.log('нет такой проверки');
      }
    }
  }, [value, validations]);

  return {
    minLengthError,
    emailError,
    confirmError,
  };
};
