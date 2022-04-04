import { useState } from "react";
import { useEffect } from "react";

export const ImageUploaded = (props) => {
    const [showImages,setShowImages] = useState(props.imgList);

    ImageUploaded.defaultProps = {
      idx:-1,
    }

    useEffect(()=>{

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
      // 이미지 클릭 시 이미지 삭제
      const handleDeleteImage = (id) => {
        const removedList = showImages.filter((_, index) => index !== id);
        
        setShowImages(removedList);
        
        props.setImgList(removedList);
          
      };
  
    return (
      <div className="flex w-full h-[20vh] bg-white">
  
        {showImages &&
        showImages.map((image, id) => (
          <div className="flex items-center justify-center h-full border-2 cursor-pointer rounded-xl aspect-square" key={id} onClick={() => handleDeleteImage(id)}>
            <img src={image} alt={""} className="h-full"/>
          </div>
        ))}
      </div>
    );
  };

export default ImageUploaded;