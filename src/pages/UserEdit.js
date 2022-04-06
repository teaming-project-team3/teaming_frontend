/* eslint-disable no-const-assign */
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import EditBlockFamily from "../Components/Organisms/userEdit/EditBlockFamily";

export default function UserEdit() {
  const stats = useSelector((state) => state.users.myStats);
  const [type_num, setType] = React.useState("1");
  const navigate = useNavigate();

  //const [isLeader, setIsLeader] = React.useState(false);
  const abilityFront = useSelector((state) => state.users.abilityFront);
  const skillsFront = useSelector((state) => state.users.skillsFront);
  const abilityBack = useSelector((state) => state.users.abilityBack);
  const skillsBack = useSelector((state) => state.users.skillsBack);
  const abilityDesigner = useSelector((state) => state.users.abilityDesigner);
  const skillsDesigner = useSelector((state) => state.users.skillsDesigner);

  const positions = React.useMemo(
    () => [
      { value: "front", label: "Dev/FrontEnd" },
      { value: "back", label: "Dev/BackEnd" },
      { value: "design", label: "Designer" },
    ],
    []
  );

  React.useEffect(() => {
    // if (isLeader === localStorage.getItem("userId")) {
    //   setIsLeader(true);
    // }

    //userStatsAPI연동할것
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkType = (e) => {
    if (e.target.value === "1") {
      setType("1");
    } else if (e.target.value === "2") {
      setType("2");
    } else if (e.target.value === "3") {
      setType("3");
    }
  };

  return (
    <div className="bg-[#E5E5E5] pb-10">

      <div className="h-[30vh] bg-[#121414]" />
      
      <div className="flex justify-center w-screen mt-[4.313rem] mb-10">
          
          <div className="bg-white h-fit w-[12.813rem] mr-7 p-4 box-border rounded-[0.625rem]">
            <div onClick={() => { navigate('/userStats'); } } className="bg-slate-200 rounded-[0.625rem] p-2.5 font-notoB text-gray-900 text-sm mb-3">
              마이페이지
            </div>
            <div onClick={() => { navigate('/userStats'); } } className="rounded-[0.625rem] p-2.5 font-noto2 text-gray-900 text-sm">
              참여프로젝트
            </div>
            <div className="cursor-pointer rounded-[0.625rem] p-2.5 font-noto2 text-gray-900 text-sm bg-slate-200">
              정보수정
            </div>
          </div>

          <EditBlockFamily stats={stats} abilityFront={abilityFront}
              abilityBack={abilityBack} abilityDesigner={abilityDesigner} skillsFront={skillsFront}
              skillsBack={skillsBack} skillsDesigner={skillsDesigner} type_num={type_num}
              checkType={checkType} positions={positions} />

        </div>
      
    </div>
  );
}
