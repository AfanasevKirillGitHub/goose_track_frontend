import * as SC from './HomePage.styled';
import { useTranslation } from 'react-i18next';
import { authPages } from '../../helpers/pages';
import { ChangeLngElem } from '../ChangeLngElem/ChangeLngElem';
import { SVG, IMG, IMG2x } from '../../images';

export const HomePageHeader = () => {
  const { t } = useTranslation();

  return (
    <SC.Header>
      <SC.WrapperChange className="container">
        <ChangeLngElem />
      </SC.WrapperChange>
      <SC.LogoImg
        srcSet={`${IMG.goose} 1x, ${IMG2x.goose2x} 2x`}
        alt="logo goose"
      />

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
