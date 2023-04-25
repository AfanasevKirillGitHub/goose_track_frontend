import * as SC from './HomePage.styled';
import goose from '../../images/goose.png';
import { useTranslation } from 'react-i18next';
import { authPages } from '../../helpers/pages';
import { ChangeLngElem } from '../ChangeLngElem/ChangeLngElem';
import { SVG } from '../../images';

export const HomePageHeader = () => {
  const { t } = useTranslation();

  return (
    <SC.Header>
      <SC.WrapperChange className="container">
        <ChangeLngElem />
      </SC.WrapperChange>
      <SC.LogoImg src={goose} alt="logo goose" />

      <SC.Title>
        G<i>oo</i>seTrack
      </SC.Title>
      <SC.ButtonList>
        {authPages.map(({ href, name, id }) => (
          <SC.NavListItem key={id}>
            <SC.Button to={href}>
              {t(`navigation.${name}`)}
              <SVG.LogInIcon />
            </SC.Button>
          </SC.NavListItem>
        ))}
      </SC.ButtonList>
    </SC.Header>
  );
};
