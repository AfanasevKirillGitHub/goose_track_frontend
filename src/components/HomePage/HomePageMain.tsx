import * as SC from './HomePage.styled';
import { useTranslation } from 'react-i18next';
import { GetReviews } from '../Reviews/ReviewsSlider';

import { IMG } from '../../images';
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/theme/themeReducer';

export const HomePageMain = () => {
  const { t } = useTranslation();

  const theme = useSelector(getTheme);

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
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? IMG.homePage1
                  : IMG.greenHomePage1
              }
              type="image/jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? IMG.homePageD1
                  : IMG.greenHomePageD1
              }
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? IMG.homePageM1
                  : IMG.greenHomePageM1
              }
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
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? IMG.homePage2
                  : IMG.greenHomePage2
              }
              type="image/jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? IMG.homePageD2
                  : IMG.greenHomePageD2
              }
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? IMG.homePageM2
                  : IMG.greenHomePageM2
              }
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
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? IMG.homePage3
                  : IMG.greenHomePage3
              }
              type="image/jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? IMG.homePageD3
                  : IMG.greenHomePageD3
              }
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? IMG.homePageM3
                  : IMG.greenHomePageM3
              }
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
