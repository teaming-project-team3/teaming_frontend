import UrlLink from "../../Molecules/UrlLink";

function UrlBlock(props) {

    const { portfolio0, GitHubLogo } = props;

  return (
    <div className="flex justify-start">
              <div className="mt-[2.188rem] mb-[2.188rem] h-[26.438rem] w-[27rem] bg-white box-border rounded-[0.625rem]">
                <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
                  URL
                </div>

                {portfolio0 && (
                  <UrlLink logo={GitHubLogo} url={portfolio0.url}></UrlLink>
                )}

                {/* <UrlLink logo={GitHubLogo} url={"https://Behance.com/heeyeon9578"}></UrlLink>

                <UrlLink logo={GitHubLogo} url={"https://Behance.com/heeyeon9578"}></UrlLink> */}
              </div>
            </div>
  );
}

export default UrlBlock;
