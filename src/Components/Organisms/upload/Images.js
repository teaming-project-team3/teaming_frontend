import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../redux/modules/image";
import plus from "../../../static/images/createProject/plus.png"

export const Images = () => {
    const [showImages, setShowImages] = useState([]);
    const dispatch = useDispatch();
  
    // 이미지 상대경로 저장
    const handleAddImages = (event) => {
      const imageLists = event.target.files;
      let imageUrlLists = [...showImages];
  
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }
  
      if (imageUrlLists.length > 10) {
        imageUrlLists = imageUrlLists.slice(0, 10);
      }
  
      setShowImages(imageUrlLists);
      dispatch(actionCreators.setFiles(imageLists));
    };
  
    // X버튼 클릭 시 이미지 삭제
    const handleDeleteImage = (id) => {
      setShowImages(showImages.filter((_, index) => index !== id));
    };
  
    return (
      <div className="flex w-full h-[20vh] bg-white">
        <label htmlFor="input-file" className="flex items-center justify-center h-full bg-white border-2 cursor-pointer rounded-xl aspect-square" onChange={handleAddImages}>
          <input type="file" id="input-file" multiple className="hidden bg-green-300" />
          <div className="w-1/4 h-1/4 aspect-square">
          <img src={plus} alt={"+"}/>
          </div>
        </label>
  
        {showImages.map((image, id) => (
          <div className="flex items-center justify-center h-full border-2 bg-slate-400 rounded-xl aspect-square" key={id} onClick={() => handleDeleteImage(id)}>
            <img src={image} alt={`${image}-${id}`} className="h-full"/>
          </div>
        ))}
      </div>
    );
  };

export default Images;