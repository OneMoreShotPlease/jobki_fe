'use client';

import { useState } from 'react';
import { Button } from '../ui/DefaultButton';
import { Input } from '../ui/Input';
import DefaultBox from './DefaultBox';
import { useRouter } from 'next/navigation';

interface SearchInputProps {
  defaultValue?: string;
}

export default function SearchInput({ defaultValue }: SearchInputProps) {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // if(e.keyCode === 13) 도 사용가능하다.
      handleSubmitSearch();
    }
  };

  const handleSubmitSearch = () => {
    if (search === '') return alert('검색어를 입력해주세요');
    router.push(`/search?query=${search}`);
  };

  return (
    <DefaultBox>
      <div className="flex w-full items-center space-x-2">
        <Input
          type="text"
          placeholder="text"
          onChange={(e) => {
            handleChange(e);
          }}
          defaultValue={defaultValue ? defaultValue : ''}
          onKeyDown={handleKeyDown}
        />
        <Button
          type="submit"
          className="w-auto"
          variant="green"
          onClick={() => handleSubmitSearch()}>
          Search
        </Button>
      </div>
    </DefaultBox>
  );
}
