import { useTranslation } from 'react-i18next';
import * as SC from './NotFoundPage.styled';
import { SVG } from '../../images';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <SC.NotFoundPage>
      <SC.Wrapper>
        <SVG.NotFoundIcon />
      </SC.Wrapper>
      <SC.Text>{t('try home')}</SC.Text>
      <SC.Button type="button" to={'/'}>
        {t('home')}
      </SC.Button>
      <SC.PetlyLink
        href="https://afanasevkirillgithub.github.io/petly_frontend/home"
        target="_blank"
        rel="noreferrer"
      >
        {t('find')}
      </SC.PetlyLink>
    </SC.NotFoundPage>
  );
};
