import Image from "../Atoms/Image";
import urlClip from "../../static/images/userStats/urlClip.png";
import SwipeSliderPortFolio from "../Molecules/SwiperSilderPortFolio"

function PortFolioCard(props) {

  const { title, description, imageUrl, period, url } = props;
  console.log("props.Card", title, description, imageUrl, period, url);

  if(url===undefined) return null;

  return (
    <>
      {/* 포트폴리오 카드 1개 */}
      <div className="flex ml-[3.6rem] mt-7 border-2 mr-[6.875rem]">

          <SwipeSliderPortFolio imgUrlList={imageUrl}/>
        
        <div className="flex flex-col mt-[0.938rem]">
          <div className="flex">
            <div className="text-base font-bold text-gray-900">
              {title}
            </div>

            <div className="text-xs font-medium text-gray-500 mt-[0.35rem] ml-[0.625rem]">
              {period}
            </div>
          </div>

          <div className="text-sm w-full mt-[0.813rem] text-gray-700 font-noto2">
              {description}
          </div>

          <div className="bottom-0 flex">
            <div className="w-[0.781rem] h-[0.781rem] items-end">
              <Image src={urlClip} shape="rectangle"></Image>
            </div>
            <div className="text-[#593CE5] text-[0.875rem]">
              
              {url}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortFolioCard;




