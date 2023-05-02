import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import * as SC from './HomePage.styled';
import { GetReviews } from '../Reviews/ReviewsSlider';
import { IMG, IMG2x } from '../../images';
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
                  ? `${IMG.homePageD1} 1x, ${IMG2x.homePageD1x2} 2x`
                  : `${IMG.greenHomePageD1} 1x, ${IMG2x.greenHomePageD1x2} 2x`
              }
              type="image/jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? `${IMG.homePageT1} 1x, ${IMG2x.homePageT1x2} 2x`
                  : `${IMG.greenHomePageT1} 1x, ${IMG2x.greenHomePageT1x2} 2x`
              }
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? `${IMG.homePageM1} 1x, ${IMG2x.homePageM1x2} 2x`
                  : `${IMG.greenHomePageM1} 1x, ${IMG2x.greenHomePageM1x2} 2x`
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
                  ? `${IMG.homePageD2} 1x, ${IMG2x.homePageD2x2} 2x`
                  : `${IMG.greenHomePageD2} 1x, ${IMG2x.greenHomePageD2x2} 2x`
              }
              type="image/jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? `${IMG.homePageT2} 1x, ${IMG2x.homePageT2x2} 2x`
                  : `${IMG.greenHomePageT2} 1x, ${IMG2x.greenHomePageT2x2} 2x`
              }
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? `${IMG.homePageM2} 1x, ${IMG2x.homePageM2x2} 2x`
                  : `${IMG.greenHomePageM2} 1x, ${IMG2x.greenHomePageM2x2} 2x`
              }
              type="image/jpg"
              media="(max-width: 767px)"
            />
            <SC.ItemImg src={IMG.homePageD2} alt="preview calendar" />
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
                  ? `${IMG.homePageD3} 1x, ${IMG2x.homePageD3x2} 2x`
                  : `${IMG.greenHomePageD3} 1x, ${IMG2x.greenHomePageD3x2} 2x`
              }
              type="image/jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? `${IMG.homePageT3} 1x, ${IMG2x.homePageT3x2} 2x`
                  : `${IMG.greenHomePageT3} 1x, ${IMG2x.greenHomePageT3x2} 2x`
              }
              type="image/jpg"
              media="(min-width: 768px)"
            />
            <source
              srcSet={
                theme === 'lightblue' || theme === 'darkblue'
                  ? `${IMG.homePageM3} 1x, ${IMG2x.homePageM3x2} 2x`
                  : `${IMG.greenHomePageM3} 1x, ${IMG2x.greenHomePageM3x2} 2x`
              }
              type="image/jpg"
              media="(max-width: 767px)"
            />
            <SC.ItemImg src={IMG.homePageD3} alt="preview calendar" />
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
