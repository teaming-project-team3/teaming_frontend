import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ProjectDetailModalCustom = (props) => {

  const isLogin = useSelector((state)=>state.users.is_login);

  const [show, setShow] = useState(props.checker);

  useEffect(() => {
    console.log("useEffect, setShow", props.checker);
    setShow(props.checker);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.checker]);

  return (
    <div>
      {show && (
        <div
          class="show modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModalScrollable"
          tabindex="-1"
          aria-labelledby="exampleModalScrollableLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl modal-dialog-scrollable relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col items-center justify-center content-center w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div class="modal-header p-4 border-b border-gray-200 w-[100%] flex items-center justify-center content-center text-[#593CE5]">
                <div className="grid grid-cols-9 text-[#593CE5] p-5 w-[100%]">
                  <div className="col-span-1 col-start-5">
                  Teaming
                  </div>
                    <button
                    onClick={() => {
                      setShow(false);
                      props.callback();
                    }}
                    type="button"
                    className="box-content h-4 col-span-1 col-start-9 p-1 text-black border-none rounded-none opacity-50 btn-close w-fit focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div className="relative modal-body">
                <div className="flex flex-col justify-center bg-[#E5E5E5]">
                {props.children}
                </div>
              </div>
              <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                  onClick={()=>{
                    setShow(false)
                    props.callback();
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  onClick={()=>{
                    
                    if(!isLogin){
                      window.alert("로그인이 필요한 서비스입니다!")
                      return;
                    }

                    props.confirm(()=>{setShow(false)});
                  }}
                >
                  Join Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
