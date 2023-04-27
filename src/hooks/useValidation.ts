import { useEffect, useState } from 'react';

interface ISetings {
  [key: string]: boolean | number | string;
}

export const useValidation = (value: string, validations: ISetings) => {
  const [emailError, setEmailError] = useState(false);
  const [confirmError, setConfirmError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [skypeError, setSkypeError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

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
          const reName = /^[\p{L}]{1,16}$/u;
          reName.test(String(value).toLowerCase())
            ? setNameError(false)
            : setNameError(true);
          break;
        case 'isPassword':
          const rePassword = /^(?=.*)[^\s]{7,32}$/;
          rePassword.test(String(value).toLowerCase())
            ? setPasswordError(false)
            : setPasswordError(true);
          break;
        case 'maxLength':
          value.length > +validations[validation]
            ? setSkypeError(true)
            : setSkypeError(false);
          break;
        case 'isPhone':
          const rePhone = /^(\+38)?[0-9]{10}$/;
          if (value === '' || rePhone.test(value)) {
            setPhoneError(false);
          } else {
            setPhoneError(true);
          }
          break;
        default:
          return;
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (
      emailError ||
      nameError ||
      passwordError ||
      confirmError ||
      skypeError ||
      phoneError
    ) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [
    emailError,
    nameError,
    passwordError,
    confirmError,
    skypeError,
    phoneError,
  ]);

  return {
    emailError,
    confirmError,
    nameError,
    passwordError,
    validForm,
    skypeError,
    phoneError,
  };
};
