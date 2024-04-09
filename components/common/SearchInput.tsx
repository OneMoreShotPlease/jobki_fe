'use client';

import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import DefaultBox from './DefaultBox';

interface SearchInputProps {}

export default function SearchInput({}: SearchInputProps) {
  const [search, setSearch] = useState<string>('');

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
    console.log(search);
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
