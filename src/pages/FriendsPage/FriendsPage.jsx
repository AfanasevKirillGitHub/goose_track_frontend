import { useTranslation } from 'react-i18next';
import { FriendsList } from '../../components/FriendsList/FriendsList';
import * as SC from './FriendsPage.styled';

export const FriendsPage = () => {
  const { t } = useTranslation();

  return (
    <SC.Container>
      <SC.Title>{t('Our friends')}</SC.Title>
      <FriendsList />
    </SC.Container>
  );
};
