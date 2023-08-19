import useDocumentTitle from '@/hooks/useDocumentTitle';

function TECHIT() {
  useDocumentTitle('TECHIT SCHOOL');
  return (
    <div>
          <p className="mb-1 text-sm font-semibold text-orange-500 md:mb-2 md:text-base ">
            테킷 스쿨 본모집 지원
          </p>
          <h2 className="font-bold text-[26px]">
            모집 중인 테킷 스쿨을 확인해 보세요
          </h2>
        </div>
  );
}

export default TECHIT;
