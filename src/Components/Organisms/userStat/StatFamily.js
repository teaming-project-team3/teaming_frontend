import PortFolioBlock from "./PortFolioBlock";
import ProfessionalBlock from "./ProfessionalBlock";
import UrlBlock from "./UrlBlock";

function StatFamily(props) {

    const { stats, GitHubLogo } = props;
    let nickname = "";
    let profileUrl = "";
    let gitId = "";
    let portfolio = null;
    let portfolio1 = null;
    let portfolio2 = null;
    let portfolio3 = null;
    let frontAbility = null;
    let frontSkills = null;
    let backAbility = null;
    let backSkills = null;
    let designAbility = null;
    let designSkills = null;
    let gitUrl = null;
    console.log("init : ", stats);

  if (stats && stats.length !== 0) {
    nickname = stats.userId.nickname;
    profileUrl = stats.userId.profileUrl;
    gitUrl = stats.url;
    if (gitUrl) {
      const gitURLArr = gitUrl.split("/");
      gitId = gitURLArr[gitURLArr.length - 1];
      console.log("check gitId", gitId);
    }
    portfolio = stats.portfolioUrl.length;
    
    portfolio1 = stats.portfolioUrl[1];
    portfolio2 = stats.portfolioUrl[2];
    portfolio3 = stats.portfolioUrl[3];

    console.log("portfolio", portfolio);

    if (stats.front.ability) {
      frontAbility = stats.front.ability;
    }
    if (stats.front.skills) {
      frontSkills = stats.front.skills;
    }
    if (stats.back.ability) {
      backAbility = stats.back.ability;
    }
    if (stats.back.skills) {
      backSkills = stats.back.skills;
    }
    if (stats.design.ability) {
      designAbility = stats.design.ability;
    }
    if (stats.design.skills) {
      designSkills = stats.design.skills;
    }
    console.log("check");
  }

  return (
    <div className="flex flex-col justify-center w-fit">
            <PortFolioBlock
              portfolio={portfolio}
              portfolio1={portfolio1}
              portfolio2={portfolio2}
              portfolio3={portfolio3}
            />

            <ProfessionalBlock
              frontAbility={frontAbility}
              frontSkills={frontSkills}
              backAbility={backAbility}
              backSkills={backSkills}
              designAbility={designAbility}
              designSkills={designSkills}
              name={nickname}
            />

            <UrlBlock
            url={gitUrl}
            GitHubLogo={GitHubLogo}
            />

    </div>
  );
}

export default StatFamily;
