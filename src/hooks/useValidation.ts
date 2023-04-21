import { useEffect, useState } from 'react';

interface ISetings {
  [key: string]: boolean | number | string;
}

export const useValidation = (value: string, validations: ISetings) => {
  const [emailError, setEmailError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [nameError, setNameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [validForm, setValidForm] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmail':
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
        case 'isSamePassword':
          value === validations[validation]
            ? setConfirmError(false)
            : setConfirmError(true);
          break;
        case 'isName':
          const reName = /^\p{L}+$/u
          reName.test(String(value).toLowerCase())
          ? setNameError(false)
          : setNameError(true);
          break
        case 'isPassword':
          const rePassword = /^(?=.*)[^\s]{7,32}$/ 
          rePassword.test(String(value).toLowerCase())
          ? setPasswordError(false)
          : setPasswordError(true);
          break
        default:
          console.log('нет такой проверки');
      }
    }
  }, [value, validations]);

useEffect(() => {
  if(emailError || nameError || passwordError || confirmError){
    setValidForm(false)
  } else{
    setValidForm(true)
  }
},[emailError, nameError, passwordError, confirmError])

  return {
    emailError,
    confirmError,
    nameError,
    passwordError,
    validForm
  };
};
