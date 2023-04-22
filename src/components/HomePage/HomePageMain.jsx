import * as SC from './HomePage.styled';
import { useTranslation } from 'react-i18next';
import homeRageD1 from '../../images/homePage/homePageD1.png';
import homeRageD2 from '../../images/homePage/homePageD2.png';
import homeRageD3 from '../../images/homePage/homePageD3.png';

export const HomePageMain = () => {
 const { t } = useTranslation();

  return (
    <>
      <SC.HomePageList>

        <SC.ListItem>
          <SC.ItemWrapper>
            <SC.ItemNumber>1.</SC.ItemNumber>
            <SC.ItemTitle>{t('Calendar')}</SC.ItemTitle>
            <SC.ItemSubtitle>View</SC.ItemSubtitle>
            <SC.ItemText>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</SC.ItemText>
          </SC.ItemWrapper>
          <SC.ItemImg src={homeRageD1} />
        </SC.ListItem>

        <SC.ListItem>
          <SC.ItemWrapper>
            <SC.ItemNumber>2.</SC.ItemNumber>
            <SC.ItemSubtitle>{t('Sidebar')}</SC.ItemSubtitle>
            <SC.ItemText>GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.</SC.ItemText>
          </SC.ItemWrapper>
          <SC.ItemImg src={homeRageD2}/>
        </SC.ListItem>

        <SC.ListItem>
          <SC.ItemWrapper>
            <SC.ItemNumber>3.</SC.ItemNumber>
            <SC.ItemTitle>{t('All in')}</SC.ItemTitle>
            <SC.ItemSubtitle>One</SC.ItemSubtitle>
            <SC.ItemText>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</SC.ItemText>
          </SC.ItemWrapper>
          <SC.ItemImg src={homeRageD3}/>
        </SC.ListItem>

      </SC.HomePageList>
    </>
  );
};
