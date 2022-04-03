import ProjectRoomHeader from "../../Molecules/ProjectRoomHeader"
import arrow from "../../../static/images/projectRoom/chatButton.svg"
import Message from "../../Atoms/Messages/Message/Message"
import ScrollToBottom from "react-scroll-to-bottom"

const ChatBox = ( ) => {
 
  return (
    <div className="flex flex-col h-[40rem] bg-[#E5E5E5] w-[90rem]">
        <ProjectRoomHeader/> 
        
         <div className="flex w-full h-full grid-flow-row bg-red-300 justify-items-stretch">

            <div className="w-4/5 h-full bg-green-300">
                

                {/* <div className="flex flex-col w-1/4 p-5 bg-orange-400 h-1/2">
                    <div className="w-4/5 bg-yellow-300 h-1/3 mb-[-10vh]">
                        
                    </div>


                    <div className="w-4/5 h-full ml-3 bg-purple-300">

                    </div>
                </div> */}

            <div className="flex flex-row justify-center mt-10">
                <div className="flex flex-col justify-center w-[16rem] h-[12rem] bg-[#FFFFFF] border-slate-400 shadow-xl rounded-xl border-3 mt-10 ml-8">
                    <div className="flex justify-center w-full h-1/3 left-50%">
                        <div className="h-full -mt-[4.5rem] bg-black rounded-full aspect-square"></div>
                    </div>
                    <div className="flex justify-center -mt-6 text-black font-notoB"><p>공주님</p></div>
                    <div className="flex justify-center mt-2">
                        <svg width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H16.5" stroke="#121414"/>
                        </svg>
                    </div>
                    <div className="flex justify-center mt-1 text-xs text-slate-500 font-noto"><p>Frontend Developer</p></div>
                </div>

                <div className="flex flex-col justify-center w-[16rem] h-[12rem] bg-[#FFFFFF] border-slate-400 shadow-xl rounded-xl border-3 mt-10 ml-8">
                    <div className="flex justify-center w-full h-1/3 left-50%">
                        <div className="h-full -mt-[4.5rem] bg-black rounded-full aspect-square"></div>
                    </div>
                    <div className="flex justify-center -mt-6 text-black font-notoB"><p>공주님</p></div>
                    <div className="flex justify-center mt-2">
                        <svg width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H16.5" stroke="#121414"/>
                        </svg>
                    </div>
                    <div className="flex justify-center mt-1 text-xs text-slate-500 font-noto"><p>Frontend Developer</p></div>
                </div>

                <div className="flex flex-col justify-center w-[16rem] h-[12rem] bg-[#FFFFFF] border-slate-400 shadow-xl rounded-xl border-3 mt-10 ml-8">
                    <div className="flex justify-center w-full h-1/3 left-50%">
                        <div className="h-full -mt-[4.5rem] bg-black rounded-full aspect-square"></div>
                    </div>
                    <div className="flex justify-center -mt-6 text-black font-notoB"><p>공주님</p></div>
                    <div className="flex justify-center mt-2">
                        <svg width="17" height="2" viewBox="0 0 17 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1H16.5" stroke="#121414"/>
                        </svg>
                    </div>
                    <div className="flex justify-center mt-1 text-xs text-slate-500 font-noto"><p>Frontend Developer</p></div>
                </div>

                

            </div>


            </div>

            <div className="flex flex-col relative w-[25vw] h-full rounded-xl mr-8 pr-10 border-2 p-2 bg-white">
            <ScrollToBottom>
                <div className="w-full h-[80vh] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-gray-300 hover:scrollbar-track-gray-100
                overflow-y-scroll scrollbar scrollbar-thumb-transparent">
                    
                    {/* 채팅말풍선 박스 */}
                    <Message message={{text:"text!", user:"user1"}} name={"name"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"user1"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"name"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"user1"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"name"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"user1"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"name"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"user1"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"name"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"user1"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"name"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"user1"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"name"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"user1"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"name"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"user1"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"name"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"user1"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"name"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"user1"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"name"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"user1"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"name"}/>
                    <Message message={{text:"text!", user:"user1"}} name={"user1"}/>
                </div>
                </ScrollToBottom>
                <div className="relative flex h-[2.75rem] items-center">
                <input placeholder="메시지를 입력해주세요" className="border bg-[#F1F3F4] rounded-xl 
                w-full h-[2.75rem] font-noto2 text-xs pl-3 hover:border-purple-500 outline-none">
                    {/* 채팅입력부분 */}
                </input>
                <img src={arrow} alt={"전송"} className='border hover:border-white rounded-xl border-2 absolute cursor-pointer right-[2%]'>
                </img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatBox