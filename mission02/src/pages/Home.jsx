import useDocumentTitle from '@/hooks/useDocumentTitle';
import Contents from '@/layout/Contents';

function Home() {
  useDocumentTitle('TECHIT BY LIKELION');
  return (
    <div>
      <img src="../../public/이듬배너.png" alt="" className='w-full h-auto'/>
      <Contents />
    </div>
  );
}

export default Home;
