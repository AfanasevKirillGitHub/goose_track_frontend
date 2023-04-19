import { ChangeEvent, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { debounce } from 'ts-debounce';
import { GrFormSearch } from 'react-icons/gr';
import { useGetSearchParams } from '../../hooks/useGetSearchParams';

export const SearchBar = () => {
  const { t } = useTranslation();
  const { lang, keyword, setSearchParams } = useGetSearchParams();
  const [query, setQuery] = useState(keyword);

  const handleSearchParamsChange = useMemo(() => {
    return debounce(
      (value: string) => setSearchParams({ lang, key: value }),
      500
    );
  }, [setSearchParams, lang]);

  const handleFilterChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target as HTMLInputElement;

    setQuery(value);
    handleSearchParamsChange(value.replace(/\\/g, '\\\\').trim());
  };

  return (
    <>
      <input
        type="text"
        placeholder={t('Search')!}
        value={query}
        onChange={handleFilterChange}
      />
      <div>{<GrFormSearch size={24} />}</div>
    </>
  );
};
