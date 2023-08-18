import useDocumentTitle from '@/hooks/useDocumentTitle';
import Contents from '@/layout/Contents';

function Home() {
  useDocumentTitle('TECHIT BY LIKELION');
  return (
    <div>
      <Contents />
    </div>
  );
}

export default Home;
