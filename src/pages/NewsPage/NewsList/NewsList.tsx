import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useFetchNewsQuery } from '../../../redux/news/newsOperations';
import { useGetSearchParams } from '../../../hooks/useGetSearchParams';
import { Hightlight } from '../../../components/Hightlight/Hightlight';
import { Loader } from '../../../components/Loader/Loader';
import * as SC from './NewsList.styled';

export const NewsList = () => {
  const { t } = useTranslation();
  const { lang, keyword } = useGetSearchParams();
  const { data, isFetching } = useFetchNewsQuery(
    { lang, keyword },
    {
      refetchOnMountOrArgChange: true,
      skip: keyword.length >= 1 && keyword.length < 3,
    }
  );

  const ChangeColor = useCallback(
    (str: string) => {
      return <Hightlight filter={keyword} str={str} />;
    },
    [keyword]
  );

  return (
    <>
      {isFetching && <Loader />}
      <SC.NewsList>
        {data?.map(({ title, date, description, link, _id, img }) => (
          <SC.NewsListItem key={_id}>
            <SC.Img src={img} alt={title['en'] ? title['en'] : title['ua']} />
            <h3>
              {ChangeColor((title['en'] ? title['en'] : title['ua']) as string)}
            </h3>
            <p>
              {ChangeColor(
                (description['en']
                  ? description['en']
                  : description['ua']) as string
              )}
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {t('Read more')}
            </a>
            <p>{new Date(date).toLocaleDateString('en-GB')}</p>
          </SC.NewsListItem>
        ))}
      </SC.NewsList>
    </>
  );
};
