'use client';

import SearchInput from '@/components/common/SearchInput';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import RecentSearch from './_components/RecentSearch';
import RelatedTag from './_components/RelatedTag';
import SearchResult from './_components/SearchResult';

const Search = () => {
  const params = useSearchParams();

  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (params) {
      setSearch(params.get('query') ?? '');
    }
  }, [params]);
  return (
    <>
      <SearchInput defaultValue={search} />
      <RecentSearch />
      <SearchResult />
      <RelatedTag />
    </>
  );
};

export default Search;
