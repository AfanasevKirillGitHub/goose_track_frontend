import { useTranslation } from 'react-i18next';
import { NewsList } from './NewsList/NewsList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import * as SC from './NewsPage.styled';

export const NewsPage = () => {
  const { t } = useTranslation();
  return (
    <SC.Main>
      <SC.Title>{t('News')}</SC.Title>
      <SearchBar />
      <NewsList />
    </SC.Main>
  );
};
