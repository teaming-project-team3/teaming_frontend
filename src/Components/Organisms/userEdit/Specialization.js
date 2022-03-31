import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import ModalSelect from "../../../pages/ModalSelect";
import { updateUserInfoAPI } from "../../../redux/modules/users";

export const Specialization = (props) => {

    const { stats, position, positions, abilityFront, abilityBack, abilityDesigner, skillsFront, 
        skillsBack, skillsDesigner, type_num, checkType } = props;

    const [userPosition, setUserPosition] = React.useState("");
    const dispatch = useDispatch();

    function dataFactory(){

      const newData = {
        "nickname": stats.userId.nickname,
        "introduction": stats.introduction,
        "profileUrl": stats.userId.profileUrl,
        "position": userPosition,
        "front" : { ability: abilityFront, skills: skillsFront },
        "back" : { ability: abilityBack, skills: skillsBack },
        "design" :  { ability: abilityDesigner, skills: skillsDesigner },
        "portfolioUrl" : stats.portfolioUrl,
        "url": stats.url,
        }
        
  
        dispatch(updateUserInfoAPI(newData));
  
    }
  
    return (
        <div className="flex justify-center w-full mt-10 mb-10 h-fit">
        <div className="h-full w-[54.688rem] bg-white box-border rounded-[0.625rem] pb-10">
          <div className="text-xl font-bold font-noto2 mt-7 ml-[1.8rem] pl-[1.8rem] pb-6 border-b-2 border-gray-900">
            전문분야
          </div>

          <div className="flex w-full text-[1rem] justify-between text-black font-noto2 pt-8 pr-8 pb-8 ml-8 border-b-2">
            <div className="w-1/3 pl-8">포지션</div>
            <Select
              className="w-1/2 ml-3 mr-10 rounded"
              options={positions}
              placeholder={position}
              onChange={(e) => {
                setUserPosition(e.value);
              }}
            />
          </div>

          <div className="flex justify-center w-full">
            <div className="m-10">
            <input
              name="radio"
              type="radio"
              id="type1"
              value="1"
              checked={type_num === "1"}
              onChange={(e)=>checkType(e)}
            />
            <label htmlFor="1">FrontEnd</label>
            </div>

            <div className="m-10">
            <input
              name="radio"
              type="radio"
              id="type2"
              value="2"
              checked={type_num === "2"}
              onChange={(e)=>checkType(e)}
            />
            <label htmlFor="2">BackEnd</label>
            </div>
            
            <div className="m-10">
            <input
              name="radio"
              type="radio"
              id="type3"
              value="3"
              checked={type_num === "3"}
              onChange={(e)=>checkType(e)}
            />
            <label htmlFor="3">Designer</label>
            </div>
            
          </div>

          <div className="mb-10 ml-10 mr-10">
            {type_num === "1" && (
              <ModalSelect
                position={"1"}
                ability={abilityFront}
                skills={skillsFront}
              />
            )}
            {type_num === "2" && (
              <ModalSelect
                position={"2"}
                ability={abilityBack}
                skills={skillsBack}
              />
            )}
            {type_num === "3" && (
              <ModalSelect
                position={"3"}
                ability={abilityDesigner}
                skills={skillsDesigner}
              />
            )}
         </div>

          <div className="flex justify-center w-full">
            <div className="w-1/3 p-3 text-center text-white bg-purple-400 rounded font-noto2" onClick={()=>dataFactory()}>
              <button>적용 하기</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Specialization;