import ProficiencyBadge from "../../Molecules/ProficiencyBadge";
import RadarChart from "../../Molecules/RadarChart";

function ProfessionalBlock(props) {

    const { frontAbility, frontSkills, backAbility, backSkills, designAbility, designSkills, name } = props;

  return (
    <div className="flex justify-center w-full mb-10 h-fit">
              <div className="mt-[2.188rem] h-full w-[54.688rem] bg-white box-border rounded-[0.625rem]">
                <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
                  전문분야
                </div>

                <div className="flex mt-[1rem] ml-[1.8rem] h-fit">
                  <div className="flex flex-wrap w-3/5">
                    <ProficiencyBadge
                      key={0}
                      position={"Front-End"}
                      ability={frontAbility}
                      skills={frontSkills}
                    />

                    <ProficiencyBadge
                      key={1}
                      position={"Back-End"}
                      ability={backAbility}
                      skills={backSkills}
                    />

                    <ProficiencyBadge
                      key={2}
                      position={"Design"}
                      ability={designAbility}
                      skills={designSkills}
                    />
                  </div>

                  <div className="h-[15.938rem] w-[15.938rem]">
                    <RadarChart me={name}></RadarChart>
                  </div>
                </div>
              </div>
            </div>
  );
}

export default ProfessionalBlock;
