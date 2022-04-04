import PortFolioCard from "../PortFolioCard";

function PortFolioBlock(props) {

    const { portfolio1, portfolio2, portfolio3, portfolio, gitId } = props;

  return (
    <div className="h-fit w-[54.688rem] bg-white box-border rounded-[0.625rem] pb-10">
      <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
        포트폴리오
      </div>

      {/* 깃헙 잔디 */}
      <div className="flex ml-[3.6rem] mt-7 border-2 mr-[6.875rem]">
        <img src={`https://ghchart.rshah.org/${gitId}`} alt="" />
      </div>

      {portfolio < 1 && (
        <div className="w-full text-center">
          포트폴리오가 없습니다. 당신의 포트폴리오를 추가해보세요!
        </div>
      )}

      {portfolio1 !== undefined && portfolio1 && (
        <PortFolioCard
          title={portfolio1.title}
          description={portfolio1.description}
          imageUrl={portfolio1.imageUrl}
          url={portfolio1.url}
          period={portfolio1.period}
        ></PortFolioCard>
      )}

      {portfolio2 && portfolio2 !== undefined && (
        <PortFolioCard
          title={portfolio2.title}
          description={portfolio2.description}
          imageUrl={portfolio2.imageUrl}
          url={portfolio2.url}
          period={portfolio2.period}
        ></PortFolioCard>
      )}

      {portfolio3 && portfolio3 !== undefined && (
        <PortFolioCard
          title={portfolio3.title}
          description={portfolio3.description}
          imageUrl={portfolio3.imageUrl}
          url={portfolio3.url}
          period={portfolio3.period}
        ></PortFolioCard>
      )}
    </div>
  );
}

export default PortFolioBlock;
