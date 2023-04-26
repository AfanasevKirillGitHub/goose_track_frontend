import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';
import USA from '../../helpers/photos/usa.png';
import UA from '../../helpers/photos/ukraine.png';
import * as SC from './ChangeLngElem.styled';

export const ChangeLngElem = () => {
  const { i18n } = useTranslation();
  const { setSearchParams } = useGetSearchParams();

  const onchangeLngClick = (evt: MouseEvent<HTMLButtonElement>) => {
    const { name } = evt.currentTarget;
    setSearchParams({ lang: name });
    i18n.changeLanguage(name);
  };

  const selectedLang = localStorage.getItem('i18nextLng');

  return (
    <SC.Wrap>
      {selectedLang === 'ua' ? (
        <SC.Btn type="button" onClick={onchangeLngClick} name="en">
          <img src={USA} alt="usa flag" style={{ width: '36px' }} />
        </SC.Btn>
      ) : (
        <SC.Btn type="button" onClick={onchangeLngClick} name="ua">
          <img src={UA} alt="usa flag" style={{ width: '36px' }} />
        </SC.Btn>
      )}
    </SC.Wrap>
  );
};
