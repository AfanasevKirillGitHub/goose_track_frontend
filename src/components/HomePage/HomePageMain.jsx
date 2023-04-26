import * as SC from './HomePage.styled';
import { useTranslation } from 'react-i18next';

import { IMG } from '../../images';



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
            <SC.ItemText>{t('GooseTracks')}</SC.ItemText>
          </SC.ItemWrapper>
          <picture>
            <source
              srcSet={IMG.homePage1}
              type="image/jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={IMG.homePageD1}
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet={IMG.homePageM1}
              type="image/jpg"
              media="(max-width: 767px)"
            />
            <SC.ItemImg src={IMG.homePageD1} alt="preview calendar" />
          </picture>
        </SC.ListItem>

        <SC.ListItem>
          <SC.ItemWrapper>
            <SC.ItemNumber>2.</SC.ItemNumber>
            <SC.ItemSubtitle>{t('Sidebar')}</SC.ItemSubtitle>
            <SC.ItemText>{t('GooseTrack offers')}</SC.ItemText>
          </SC.ItemWrapper>
          <picture>
            <source
              srcSet={IMG.homePage2}
              type="image/jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={IMG.homePageD2}
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet={IMG.homePageM2}
              type="image/jpg"
              media="(max-width: 767px)"
            />
            <SC.ItemImg src={IMG.homePageD2} alt="preview menu" />
          </picture>
        </SC.ListItem>

        <SC.ListItem>
          <SC.ItemWrapper>
            <SC.ItemNumber>3.</SC.ItemNumber>
            <SC.ItemTitle>{t('All in')}</SC.ItemTitle>
            <SC.ItemSubtitle>{t('One')}</SC.ItemSubtitle>
            <SC.ItemText>{t('GooseTrack is')}</SC.ItemText>
          </SC.ItemWrapper>
          <picture>
            <source
              srcSet={IMG.homePage3}
              type="image/jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={IMG.homePageD3}
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet={IMG.homePageM3}
              type="image/jpg"
              media="(max-width: 767px)"
            />
            <SC.ItemImg src={IMG.homePageD3} alt="preview day" />
          </picture>
        </SC.ListItem>

        <SC.ListItem>
          <SC.ItemWrapper>
            <SC.ItemNumber>4.</SC.ItemNumber>
            <SC.ItemTitle>{t('Our team')}</SC.ItemTitle>
            <SC.ItemSubtitle>INteam</SC.ItemSubtitle>
            <SC.ItemText>{t('Best of the best')}</SC.ItemText>
          </SC.ItemWrapper>
          <picture>
            <source
              srcSet={IMG.team}
              type="image/jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={IMG.teamD}
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet={IMG.teamM}
              type="image/jpg"
              media="(max-width: 767px)"
            />
            <SC.ItemImg src={IMG.team} alt="team" />
          </picture>
        </SC.ListItem>
      </SC.HomePageList>
      <GetReviews />
    </>
  );
};
