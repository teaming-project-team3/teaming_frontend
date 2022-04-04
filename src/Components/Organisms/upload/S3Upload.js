import './S3Upload.css';
import { useDispatch } from 'react-redux';
import {actionCreators as imageActions} from "../../../redux/modules/image";
import plus from "../../../static/images/createProject/plus.png"

export default function S3Upload(){
    const dispatch = useDispatch();
    

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
        if(fileExt !== 'png' && fileExt !=='jpg' ){
          alert('jpg/jpeg, png 파일만 Upload 가능합니다.');
          return;
        }

        dispatch(imageActions.setFile(file));
        setPreview(e.target.files[0])
        dispatch()
      }


      const setPreview = (file) => {

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            dispatch(imageActions.setPreview(reader.result));
        }

      }

      return (
        <div className="h-full w-fit">
        <label htmlFor="profile-input" className="flex items-center justify-center h-full bg-white border-2 cursor-pointer rounded-xl aspect-square" onChange={handleFileInput}>
          <input key="profile" type="file" id="profile-input" className="hidden bg-green-300" />
          <div className="w-1/4 h-1/4 aspect-square">
          <img src={plus} alt={"+"}/>
          </div>
        </label>
        </div>
      );

}