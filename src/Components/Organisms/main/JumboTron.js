import BannerImg from "../../../static/BannerImg.png";

function JumboTron() {
  return (
<div className="flex w-screen bg-black h-[50vh] justify-center">
            
            <div className="flex flex-col flex-wrap items-center justify-center w-1/2">
              <div className="text-white text-[2rem] font-noto2 w-1/2">프로젝트에 즐거움을</div>
              <div className="text-white text-[2rem] font-noto2 w-1/2">모두에게 성장을</div>
              <div className="text-white text-[1rem] font-noto3 w-1/2 mt-2">개발자와 디자이너라면 누구나 참여할 수 있는 티밍 !</div>
            </div>
            
            <div className="flex items-center justify-start w-1/2">
              <div className="w-1/2 h-1/2">
              <img src={BannerImg} alt="bannerImg"></img>
              </div>
            </div>
            
          </div>
  );
}

export default JumboTron;