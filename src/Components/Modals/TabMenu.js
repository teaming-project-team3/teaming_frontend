import React, { useState } from "react";
import ModalSelect from "../../pages/ModalSelect";

const TabMenu = (props) => {

    const [openTab, setOpenTab] = useState(1);

    const { abilityFront, abilityBack, abilityDesigner, skillsFront, skillsDesigner, skillsBack } = props;

    return (

        <div className="grid grid-cols-1 p-4 mt-2">
            <ul className="flex flex-row flex-wrap mb-0 list-none" role="tablist">
            
            <li className="flex-auto w-1/4 text-center">
                
                <a className={"text-xs px-2 py-2 shadow-lg rounded block leading-normal cursor-pointer" + 
                        (openTab ===1 ?
                            "text-white bg-gray-600"
                            : "text-gray-600 bg-white")}
                onClick={(e)=>{
                    e.preventDefault();
                    setOpenTab(1);
                }}            
                data-toggle="tab"
                href="#link1"
                role="tablist"          
                >
                    Dev/FrontEnd
                </a>
            </li>
            <li className="flex-auto w-1/4 text-center">
                
                <a className={"text-xs px-2 py-2 shadow-lg rounded block leading-normal cursor-pointer" + 
                        (openTab ===2 ?
                            "text-white bg-gray-600"
                            : "text-gray-600 bg-white")}
                onClick={(e)=>{
                    e.preventDefault();
                    setOpenTab(2);
                }}            
                data-toggle="tab"
                href="#link2"
                role="tablist"          
                >
                    Dev/BackEnd
                </a>
            </li>
            <li className="flex-auto w-1/4 text-center">
                
                <a className={"text-xs px-2 py-2 shadow-lg rounded block leading-normal cursor-pointer" + 
                        (openTab ===3 ?
                            "text-white bg-gray-600"
                            : "text-gray-600 bg-white")}
                onClick={(e)=>{
                    e.preventDefault();
                    setOpenTab(3);
                }}            
                data-toggle="tab"
                href="#link3"
                role="tablist"          
                >
                    Designer
                </a>
            </li>
            
            </ul>

            <div className="relative flex flex-col w-full pb-10 break-words border-4 border-gray-500 h-fit">
                <div className="flex-auto">
                    <div className="tab-content tab-space">
                        <div className={openTab===1?"block":"hidden"} id="link1">
                            <ModalSelect position={"1"} ability={abilityFront} skills={skillsFront}/>
                        </div>
                        <div className={openTab===2?"block":"hidden"} id="link2">
                            <ModalSelect position={"2"} ability={abilityBack} skills={skillsBack}/>
                        </div>
                        <div className={openTab===3?"block":"hidden"} id="link3">
                            <ModalSelect position={"3"} ability={abilityDesigner} skills={skillsDesigner}/>
                        </div>
                    </div>

                </div>
            </div>   
        </div>

    )

}

export default TabMenu;