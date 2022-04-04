import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import projectImg from "../../static/images/projectDetail/projectEx.jpg"


SwiperCore.use([Navigation, Pagination, Autoplay])

function SwiperSliderProjectModal(props) {


  const { imgUrlList } = props;

  return(
    <div>
      <Swiper
        //style={{height:'20em', width:'5em'}}
        centeredSlides={true}
        className="h-[20em] w-[70em]"
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 1000 }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><img className="w-full rounded-[0.625rem] object-cover" src={imgUrlList[0]} alt={projectImg} /></SwiperSlide>
        {imgUrlList.length>0 && imgUrlList[0] &&
            <SwiperSlide><img className="w-full rounded-[0.625rem] object-contain" src={imgUrlList[0]} alt={projectImg} /></SwiperSlide>
        }
        {imgUrlList.length>0 && imgUrlList[1] &&
            <SwiperSlide><img className="w-full rounded-[0.625rem] object-contain" src={imgUrlList[1]} alt={projectImg} /></SwiperSlide>
        }
        {imgUrlList.length>0 && imgUrlList[2] &&
            <SwiperSlide><img className="w-full rounded-[0.625rem] object-contain" src={imgUrlList[2]} alt={projectImg} /></SwiperSlide>
        }
      </Swiper>
    </div>
  )
}

export default SwiperSliderProjectModal;