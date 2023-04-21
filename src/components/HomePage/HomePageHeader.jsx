import * as SC from './HomePage.styled';
import goose from '../../images/goose.png';
import { useTranslation } from 'react-i18next';
import { authPages } from '../../helpers/pages';
import { MdLogin } from 'react-icons/md';

export const HomePageHeader = () => {
  const { t } = useTranslation();

  return (
    <SC.Header>
      <SC.LogoImg src={goose} alt="logo goose" />
      <SC.Title>
        G<i>oo</i>se Track
      </SC.Title>
      <SC.ButtonList>
        {authPages.map(({ href, name, id }) => (
          <SC.NavListItem key={id}>
            <SC.Button to={href}>
              {t(`navigation.${name}`)}
              <MdLogin />
            </SC.Button>
          </SC.NavListItem>
        ))}
      </SC.ButtonList>
    </SC.Header>
  );
};
