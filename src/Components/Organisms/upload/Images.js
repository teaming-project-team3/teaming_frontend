import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../../redux/modules/image";
import plus from "../../../static/images/createProject/plus.png"

export const Images = (props) => {
    const [showImages, setShowImages] = useState([]);
    const files = useSelector((state)=>state.image.image_files);
    const dispatch = useDispatch();

    useEffect(()=>{


      return(()=>{
        console.log("Images useEffect return,", idx);
        //dispatch(actionCreators.clearImg(idx));
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(!files||files===null||files===undefined||files.length===0){
      return;
    }

    const { idx } = props;

    console.log("files", files);

    Images.defaultProps = {
      idx:-1,
    }

    // 이미지 상대경로 저장
    const handleAddImages = (event) => {
      const imageLists = event.target.files;

      let temp = Object.values(imageLists);
      
      temp =  [...files, ...temp];

      console.log("temp!!", temp);

      let imageUrlLists = [...showImages];
  
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }
  
      if (imageUrlLists.length > 10) {
        imageUrlLists = imageUrlLists.slice(0, 10);
      }
  
      setShowImages(imageUrlLists);
      
      console.log("createProject", idx)
      dispatch(actionCreators.setFiles(temp));
      
    };
  
    // 이미지 클릭 시 이미지 삭제
    const handleDeleteImage = (id) => {
      const removedList = showImages.filter((_, index) => index !== id);
      const removedFiles = files.filter((_,index) => index !== id);
      setShowImages(removedList);

      console.log("removedList", removedFiles, files);
      
      dispatch(actionCreators.setFiles(removedFiles));
        
    };
  
    return (
      <div className="flex w-full h-[20vh] bg-white">
        <label htmlFor={`multi-input${idx}`} className="flex items-center justify-center h-full bg-white border-2 cursor-pointer rounded-xl aspect-square" onChange={handleAddImages}>
          <input key="multi" type="file" id={`multi-input${idx}`} multiple className="hidden bg-green-300" />
          <div className="w-1/4 h-1/4 aspect-square">
          <img src={plus} alt={"+"}/>
          </div>
        </label>
  
        {showImages.map((image, id) => (
          <div className="flex items-center justify-center h-full border-2 cursor-pointer rounded-xl aspect-square" key={id} onClick={() => handleDeleteImage(id)}>
            <img src={image} alt={`${image}-${id}`} className="h-full"/>
          </div>
        ))}
      </div>
    );
  };

export default Images;