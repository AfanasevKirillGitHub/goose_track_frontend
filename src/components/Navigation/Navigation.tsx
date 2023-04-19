import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { pages, authPages, accountPage } from '../../helpers/pages';
import { ChangeLngElem } from '../ChangeLngElem/ChangeLngElem';
import { useAuth } from '../../hooks/useAuth';
import * as SC from './Navigation.styled';

export const Navigation = () => {
  const { t } = useTranslation();
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <ChangeLngElem />
      <SC.MainNav>
        <SC.NavList>
          {pages.map(({ href, name, id }) => (
            <SC.NavListItem key={id}>
              <Link to={href}> {t(`navigation.${name}`)}</Link>
            </SC.NavListItem>
          ))}
          {!isLoggedIn
            ? authPages.map(({ href, name, id }) => (
                <SC.NavListItem key={id}>
                  <Link to={href}> {t(`navigation.${name}`)}</Link>
                </SC.NavListItem>
              ))
            : accountPage.map(({ href, name, id }) => (
                <SC.NavListItem key={id}>
                  <Link to={href}> {t(`navigation.${name}`)}</Link>
                </SC.NavListItem>
              ))}
        </SC.NavList>
      </SC.MainNav>
    </div>
  );
};
