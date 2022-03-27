import BannerImg from "../../../static/BannerImg.png";

function JumboTron() {
  return (
    <div className="flex w-[1440px] bg-black h-[31.188em] justify-center">
      <div className="flex flex-col flex-wrap ml-[9.667rem] justify-center w-1/2">
        <div className="text-white text-[3rem] font-noto2 w-[26.25rem]">
          프로젝트에 즐거움을 모두에게 성장을
        </div>
        <div className="text-white text-[1.5rem] font-noto3 w-[19rem] mt-[1rem]">
          개발자와 디자이너라면 누구나 참여할 수 있는 티밍 !
        </div>
      </div>

      <div className="flex items-center justify-start w-1/2">
        <div className="w-[53.081rem] h-[30.603]">
          <img src={BannerImg} alt="bannerImg"></img>
        </div>
      </div>
    </div>
  );
}

export default JumboTron;
