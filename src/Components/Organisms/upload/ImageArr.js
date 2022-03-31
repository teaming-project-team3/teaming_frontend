import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../../redux/modules/image";
import plus from "../../../static/images/createProject/plus.png"

export const ImageArr = (props) => {
    const showImages = useSelector((state)=>state.image.filesArr[props.idx]);
    console.log("ImageArr!", showImages);

    const dispatch = useDispatch();

    const { idx } = props;

    ImageArr.defaultProps = {
      idx:-1,
    }

    useEffect(()=>{


      return(()=>{
        console.log("Images useEffect return,", idx);
        dispatch(actionCreators.clearImg(idx));
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    // 이미지 상대경로 저장
    const handleAddImages = (event) => {
      let totalList = [...showImages];
      const imageLists = event.target.files;
      let imageUrlLists = [];
        
      //[{url: asdfdasf, file: asdfasdf},{url: asdfdasf, file: asdfasdf},{url: asdfdasf, file: asdfasdf}]
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
        console.log("imageUrl", currentImageUrl);
      }
  
      if (imageUrlLists.length > 10) {
        imageUrlLists = imageUrlLists.slice(0, 10);
      }

      
      for (let i = 0; i < imageUrlLists.length; i++) {
        totalList.push({url: imageUrlLists[i], file: imageLists[i]});
      }

      
      console.log("add portfolio",idx)
      dispatch(actionCreators.setFilesArr(totalList, idx));
      
    };
  
    // 이미지 클릭 시 이미지 삭제
    const handleDeleteImage = (id) => {
      const removedList = showImages.filter((_, index) => index !== id);
      
      dispatch(actionCreators.setFilesArr(removedList, idx));
        
    };
  
    return (
      <div className="flex w-full h-[20vh] bg-white">
        <label htmlFor={`multi-input${idx}`} className="flex items-center justify-center h-full bg-white border-2 cursor-pointer rounded-xl aspect-square" onChange={handleAddImages}>
          <input key="multi" type="file" id={`multi-input${idx}`} multiple className="hidden bg-green-300" />
          <div className="w-1/4 h-1/4 aspect-square">
          <img src={plus} alt={"+"}/>
          </div>
        </label>
  
        {showImages &&
        showImages.map((image, id) => (
          <div className="flex items-center justify-center h-full border-2 cursor-pointer rounded-xl aspect-square" key={id} onClick={() => handleDeleteImage(id)}>
            <img src={image.url} alt={`${image}-${id}`} className="h-full"/>
          </div>
        ))}
      </div>
    );
  };

export default ImageArr;