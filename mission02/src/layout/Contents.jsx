import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';
import BootCamp from '@/views/BootCamp';
import { Link } from 'react-router-dom';

const PB_BOOTCAMP_ENDPOINT =
  'http://127.0.0.1:8090/api/collections/bootcamp/records';

function Contents() {
  const { error, data, isLoading } = useFetchData(PB_BOOTCAMP_ENDPOINT);

  if (isLoading) {
    return <Spinner size={160} title="데이터 가져오는 중이에요." />;
  }

  if (error) {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="mt-10 lg:mt-20 max-w-7xl px-4 lg:mx-auto lg:px-6">
      <div className='flex justify-between mb-4'>
        <div>
          <p className="mb-1 text-sm font-semibold text-orange-500 md:mb-2 md:text-base ">
            KDT 테킷 스쿨 알아보기
          </p>
          <h2 className="font-bold text-[26px]">
            전액 지원받고 기초부터 심화까지 한 큐에 성장
          </h2>
          <p className="mt-1 whitespace-pre-wrap text-sm font-normal text-gray-500 md:mt-2 md:text-base ">
            체계적인 커리큘럼을 가진 스쿨들을 만나보세요!
          </p>
        </div>
        <Link to="/" className='text-sm self-end'>자세히 보기</Link>
      </div>
      <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 lg:gap-x-6">
        {data.items?.map((item) => (
          <BootCamp key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Contents;
