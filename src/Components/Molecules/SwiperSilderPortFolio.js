import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'


SwiperCore.use([Navigation, Pagination, Autoplay])

function SwiperSliderPortFolio(props) {

  const { imgUrlList } = props;

  console.log("Swiper imgList", imgUrlList)

  return(
    <div>
      <Swiper
        style={{height:'10em', width:'10em'}}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><img className="w-[9.688rem] h-[9.938rem] rounded-[0.625rem]" src={imgUrlList} alt="html logo" /></SwiperSlide>
        {/* {imgUrlList.length>0 &&
        imgUrlList.map((url)=>{
          console.log("in map,", url);
          <SwiperSlide><img src={url} alt="html logo" /></SwiperSlide>
        })
        } */}
      </Swiper>
    </div>
  )
}

export default SwiperSliderPortFolio;