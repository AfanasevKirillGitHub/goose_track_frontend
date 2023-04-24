import * as SC from './HomePage.styled';
import { useTranslation } from 'react-i18next';
import homeRage1 from '../../images/homePage/homePage1.png';
import homeRageD1 from '../../images/homePage/homePageD1.png';
import homeRageM1 from '../../images/homePage/homePageM1.png';

import homeRage2 from '../../images/homePage/homePage2.png';
import homeRageD2 from '../../images/homePage/homePageD2.png';
import homeRageM2 from '../../images/homePage/homePageM2.png';

import homeRage3 from '../../images/homePage/homePage3.png';
import homeRageD3 from '../../images/homePage/homePageD3.png';
import homeRageM3 from '../../images/homePage/homePageM3.png';

export const HomePageMain = () => {
  const { t } = useTranslation();

  return (
    <>
      <SC.HomePageList>
        <SC.ListItem>
          <SC.ItemWrapper>
            <SC.ItemNumber>1.</SC.ItemNumber>
            <SC.ItemTitle>{t('Calendar')}</SC.ItemTitle>
            <SC.ItemSubtitle>{t('View')}</SC.ItemSubtitle>
            <SC.ItemText>
            {t('GooseTracks')}
            </SC.ItemText>
          </SC.ItemWrapper>
          <picture>
            <source
              srcSet={homeRage1}
              type="image/jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={homeRageD1}
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet={homeRageM1}
              type="image/jpg"
              media="(max-width: 767px)"
            />
            <SC.ItemImg src={homeRageD1} alt="preview calendar" />
          </picture>
        </SC.ListItem>

        <SC.ListItem>
          <SC.ItemWrapper>
            <SC.ItemNumber>2.</SC.ItemNumber>
            <SC.ItemSubtitle>{t('Sidebar')}</SC.ItemSubtitle>
            <SC.ItemText>
            {t('GooseTrack offers')}
            </SC.ItemText>
          </SC.ItemWrapper>
          <picture>
            <source
              srcSet={homeRage2}
              type="image/jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={homeRageD2}
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet={homeRageM2}
              type="image/jpg"
              media="(max-width: 767px)"
            />
            <SC.ItemImg src={homeRageD2} alt="preview menu" />
          </picture>
        </SC.ListItem>

        <SC.ListItem>
          <SC.ItemWrapper>
            <SC.ItemNumber>3.</SC.ItemNumber>
            <SC.ItemTitle>{t('All in')}</SC.ItemTitle>
            <SC.ItemSubtitle>{t('One')}</SC.ItemSubtitle>
            <SC.ItemText>
            {t('GooseTrack is')}
            </SC.ItemText>
          </SC.ItemWrapper>
          <picture>
            <source
              srcSet={homeRage3}
              type="image/jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={homeRageD3}
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet={homeRageM3}
              type="image/jpg"
              media="(max-width: 767px)"
            />
            <SC.ItemImg src={homeRageD3} alt="preview day" />
          </picture>
        </SC.ListItem>
      </SC.HomePageList>
    </>
  );
};
