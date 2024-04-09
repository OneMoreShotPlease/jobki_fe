import SearchInput from '@/components/common/SearchInput';
import TodayRank from './_components/TodayRank';
import RecentQuestion from './_components/RecentQuestion';
import PopularTag from './_components/PopularTag';
export default function Home() {
  return (
    <div className="flex h-auto w-full flex-col gap-4">
      {/* 검색창 */}
      <SearchInput />
      {/* 오늘의 순위 */}
      <TodayRank />
      {/* 최신 등록 */}
      <RecentQuestion />
      {/* 사람들이 자주 보는 태그 */}
      <PopularTag />
    </div>
  );
}
