import React from "react";
import { useSetRecoilState } from "recoil";
import { preview } from "../recoil/preview";
import { profilePreview } from "../redux/modules/users";


export const Upload = (props) => {
    const fileInput = React.useRef();
    const setPreview = useSetRecoilState(preview)
    const setProfilePreview = useSetRecoilState(profilePreview)

    const selectFile = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.files[0]);

        console.log(fileInput.current.files[0]);

        const useReader = new FileReader();
        const file = fileInput.current.files[0];

        useReader.readAsDataURL(file);


        useReader.onloadend = () => {
            console.log(useReader.result);
            
            //프로필 이미지인지, 포스팅 이미지인지 구분 후, preview recoil에 set
            if(props.is_profile){

                setProfilePreview(useReader.result)
            }else{
                setPreview(useReader.result)
            }
            
        }

    }

    return (
        <React.Fragment>
            <input type="file" onChange={selectFile} ref={fileInput}/>
        </React.Fragment>
    )
}


export default Upload;