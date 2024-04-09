'use client';
import { Suspense, useState, useEffect } from "react";
import SearchInput from '@/components/common/SearchInput';
import { useSearchParams } from 'next/navigation';
import RecentSearch from './_components/RecentSearch';
import RelatedTag from './_components/RelatedTag';
import SearchResult from './_components/SearchResult';

const SearchContent = () => {
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

const Search = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
};

export default Search;