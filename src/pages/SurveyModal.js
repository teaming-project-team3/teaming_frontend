import React, { useEffect, useState } from "react";

export const SurveyModal = (props) => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.checker);

  }, []);

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
          <div class="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col items-center justify-center content-center w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div class="modal-header p-4 border-b border-gray-200 w-[100%] flex items-center justify-center content-center text-[#593CE5]">
                <div className="grid grid-cols-9 text-[#593CE5] p-5 w-[100%]">
                  <div className="col-span-1 col-start-5">
                  Teaming
                  </div>
                    <button
                    onClick={() => {
                      setShow(false);
                    }}
                    type="button"
                    className="box-content h-4 col-span-1 col-start-9 p-1 text-black border-none rounded-none opacity-50 btn-close w-fit focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div class="modal-body relative p-4">
                {props.children}
              </div>
              <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                  onClick={()=>{
                    setShow(false)
                  }}
                >
                  Close
                </button>
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                  onClick={()=>{
                    //설문데이터 전송 api 구현부
                  }}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
