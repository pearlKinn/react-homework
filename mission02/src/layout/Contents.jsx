import Spinner from '@/components/Spinner';
import useFetchData from '@/hooks/useFetchData';
import BootCamp from '@/views/BootCamp';

const PB_BOOTCAMP_ENDPOINT =
  'http://127.0.0.1:8090/api/collections/bootcamp/records';

function Contents({ filterKeyWord = '' }) {
  const { error, data, isLoading } = useFetchData(PB_BOOTCAMP_ENDPOINT);
  let dataItems = data.items;
  let filteredData = null

  const filterItemsByState = (items, status) => {
    if (!status) return items;

    return items?.filter((item) => item.state === status);
  };


  if (data) {
    if (filterKeyWord.length === 0) {
      filteredData = filterItemsByState(dataItems);
    } else {
      filteredData = filterItemsByState(dataItems, filterKeyWord);
    }
  }

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
    <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 lg:gap-x-6">
      {filteredData?.map((item) => (
        <BootCamp key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default Contents;
