import Image from "../Atoms/Image";
import project1 from "../../static/images/userStats/exProject01.png"
import urlClip from "../../static/images/userStats/urlClip.png";

function FortFolioCard() {
  return (
    <>
      {/* 포트폴리오 카드 1개 */}
      <div className="flex ml-[3.6rem] mt-7 border-2 mr-[6.875rem]">
        <div className="w-[9.688rem] h-[9.938rem] rounded-[0.625rem]">
          <Image src={project1} shape="rectangle"></Image>
        </div>
        <div className="flex flex-col mt-[0.938rem]">
          <div className="flex">
            <div className="text-base font-bold text-gray-900">
              Hay Collective Inc.
            </div>

            <div className="text-xs font-medium text-gray-500 mt-[0.35rem] ml-[0.625rem]">
              2021.04 ~ 2020.12
            </div>
          </div>

          <div className="text-sm w-[34.5rem] mt-[0.813rem] text-gray-700 font-noto2">
            - 커리어 관리 서비스의 UX 리서치, 디자인 컨셉, UX Flow 설계 커리어
            관리 서비스- 커리어 관리 서비스의 UX 리서치, 디자인 컨셉, UX Flow
            설계 커리어 관리 서비스
          </div>

          <div className="bottom-0 flex">
            <div className="w-[0.781rem] h-[0.781rem] items-end">
              <Image src={urlClip} shape="rectangle"></Image>
            </div>
            <div className="text-[#593CE5] text-[0.875rem]">
              https://www.github.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FortFolioCard;
