import { useSearchParams } from 'react-router-dom';

export const useGetSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lang = searchParams.get('lang') ?? 'en';
  const keyword = searchParams.get('key') ?? '';
  const token = searchParams.get('token') ?? '';
  return { lang, keyword, token, setSearchParams };
};
